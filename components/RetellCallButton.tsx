"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, X } from "lucide-react"
import { RetellWebClient } from "retell-client-js-sdk"

type CallStatus = "idle" | "connecting" | "active" | "error"

export function RetellCallButton() {
  const [status, setStatus] = useState<CallStatus>("idle")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const retellClientRef = useRef<RetellWebClient | null>(null)

  useEffect(() => {
    retellClientRef.current = new RetellWebClient()

    const client = retellClientRef.current

    client.on("call_started", () => {
      setStatus("active")
    })

    client.on("call_ended", () => {
      setStatus("idle")
      setErrorMessage("")
    })

    client.on("error", (error) => {
      console.error("Retell error:", error)
      setStatus("error")
      setErrorMessage("Bağlantı hatası oluştu")
      setTimeout(() => {
        setStatus("idle")
        setErrorMessage("")
      }, 3000)
    })

    return () => {
      if (client) {
        client.stopCall()
      }
    }
  }, [])

  const startCall = async () => {
    try {
      setStatus("connecting")
      setErrorMessage("")

      console.log("Starting call with Retell API...")

      const response = await fetch("/api/retell/create-web-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          agent_id: "agent_45d0bef6eaa5040fb7163d6927",
          hotel_id: "123",
          hotel_name: "Serena Vista Hotel",
        }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        console.error("API error response:", errorText)
        throw new Error(`Failed to create call: ${response.status}`)
      }

      const data = await response.json()
      console.log("Received response:", data)
      
      const { access_token } = data

      if (!access_token) {
        throw new Error("No access token received")
      }

      console.log("Starting Retell call with access token...")
      await retellClientRef.current?.startCall({
        accessToken: access_token,
      })
    } catch (error) {
      console.error("Error starting call:", error)
      setStatus("error")
      
      if (error instanceof TypeError && error.message === "Failed to fetch") {
        setErrorMessage("Bağlantı hatası (CORS)")
      } else {
        setErrorMessage("Bağlantı başlatılamadı")
      }
      
      setTimeout(() => {
        setStatus("idle")
        setErrorMessage("")
      }, 3000)
    }
  }

  const stopCall = () => {
    retellClientRef.current?.stopCall()
    setStatus("idle")
    setErrorMessage("")
  }

  const handleClick = () => {
    if (status === "idle") {
      startCall()
    } else if (status === "active" || status === "connecting") {
      stopCall()
    }
  }

  const getStatusText = () => {
    switch (status) {
      case "idle":
        return "Rezervasyon Asistanı"
      case "connecting":
        return "Bağlanıyor..."
      case "active":
        return "Görüşme devam ediyor"
      case "error":
        return errorMessage
      default:
        return "Rezervasyon Asistanı"
    }
  }

  const getStatusColor = () => {
    switch (status) {
      case "error":
        return "bg-red-600 text-white"
      case "active":
        return "bg-green-600 text-white"
      case "connecting":
        return "bg-blue-600 text-white"
      default:
        return "bg-white text-gray-800"
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Status Tooltip */}
      <div
        className={`transform transition-all duration-300 ${
          status !== "idle" ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`rounded-lg px-4 py-2 shadow-lg ${getStatusColor()} text-sm font-medium whitespace-nowrap`}
        >
          {getStatusText()}
        </div>
      </div>

      {/* Call Button */}
      <button
        onClick={handleClick}
        disabled={status === "connecting" || status === "error"}
        className={`group relative flex h-16 w-16 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          status === "active"
            ? "bg-red-600 hover:bg-red-700"
            : "bg-amber-600 hover:bg-amber-700"
        } ${
          status === "connecting" || status === "error" ? "opacity-50 cursor-not-allowed" : ""
        } ${status === "active" ? "animate-pulse" : ""}`}
        aria-label={status === "idle" ? "Aramayı başlat" : "Aramayı sonlandır"}
      >
        {status === "idle" || status === "connecting" ? (
          <Phone className="h-7 w-7 text-white" />
        ) : (
          <X className="h-7 w-7 text-white" />
        )}

        {/* Idle state tooltip */}
        {status === "idle" && (
          <div className="absolute bottom-full right-0 mb-2 hidden group-hover:block">
            <div className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-gray-800 shadow-lg whitespace-nowrap">
              {getStatusText()}
            </div>
          </div>
        )}
      </button>
    </div>
  )
}
