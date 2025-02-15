"use client"
import dynamic from "next/dynamic"
import { MapData } from "@/types/MapData"
import { useState, useEffect } from "react"
import { fetchResources } from "@/api/resources"
// import Map from "@/components/map"
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
        setError("Failed to load resources")
      } finally {
        setLoading(false)
      }
    }
    loadResources()
  }, [])

  if (loading) return <p>Loading map...</p>
  if (error) return <p>{error}</p>
  if (!mapData) return <p>No map data available</p> 

  return (
    <div>
      <Map mapData={mapData} />
    </div>
  ) 

//   return <div>blehhh</div>

}


export default MapWrapper;