"use client"
import dynamic from "next/dynamic"
import { MapData } from "@/types/MapData"
import { useState, useEffect } from "react"
import { fetchResources } from "@/api/resources"
import { Loader, AlertCircle } from "lucide-react"

const Map = dynamic(() => import("@/app/map/map"), { ssr: false })

const MapWrapper = () => {
  const [mapData, setMapData] = useState<MapData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadResources() {
      try {
        const data = await fetchResources()
        console.log(data)
        setMapData(data)
      } catch (err) {
        setError("Failed to load map data. Please try again later.")
      } finally {
        setLoading(false)
      }
    }
    loadResources()
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-600 pt-24">
        <Loader className="animate-spin" size={32} />
        <p className="mt-2 text-lg">Loading map...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-64 bg-red-100 text-red-600 p-8 pt-24 rounded-lg ">
        <AlertCircle size={32} />
        <p className="mt-2 text-lg">{error}</p>
      </div>
    )
  }

  if (!mapData) {
    return (
      <div className="flex flex-col items-center justify-center h-64 text-gray-500">
        <p className="text-lg">No map data available.</p>
      </div>
    )
  }

  return <Map mapData={mapData} />
}

export default MapWrapper
