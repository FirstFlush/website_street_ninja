'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { keywords } from '@/data/keywords'
import { fetchMapPinSingle } from '@/api/resources'
import { Loader } from 'lucide-react'

interface PopoverContentProps {
  id: number
  resourceType: string
}

interface PopoverState {
  data: string | null;
  status: "loading" | "success" | "error" | "idle";
}

const PopoverContent = ({ id, resourceType }: PopoverContentProps) => {

  const [popoverData, setPopoverData] = useState<PopoverState>({data: null, status: "idle" })
  
  useEffect(() => {
    async function loadMapData() {
      setPopoverData(prev => ({...prev, status: "loading"}))
      try {
        const res = await fetchMapPinSingle(resourceType, id);
        if (res.data){
          setPopoverData({
            status: "success",
            data: res.data,
          })
        }
      }
      catch (err) {
        if (process.env.NODE_ENV == "development") 
          console.log(err);
        setPopoverData(prev => ({...prev, status: "error"}))
      }
    }
    loadMapData()
  }, []);

  const renderFormattedText = (text: string) => {
    return text
      .split("\n\n")
      .map((segment, i) => {
        const lines = segment.split("\n");
        return (
          <p key={i}>
            {lines.map((line, j) => (
              <React.Fragment key={j}>
                {line}
                {j < lines.length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      });
  };

  const keywordData = keywords.find(
    (keyword) => keyword.title.toLowerCase() === resourceType.toLowerCase()
  )

  if (popoverData.status == "error") return <p className="text-sm text-gray-500">No details available</p>
  else if (popoverData.status == "loading") return <p className="text-sm text-gray-500 w-[100%]"><Loader className="mx-auto animate-spin" size={22} /></p>
  return (
    <div className="text-xs">

      <h6 
        className="mt-4 mb-1 font-semibold tracking-wide text-white px-2 py-1 rounded-lg max-w-fit capitalize"
        style={{
          backgroundColor: keywordData?.color ?? "#999"
        }}  
      >
        { keywordData ? <keywordData.icon className="inline-block align-text-bottom" size={18} /> : "" } 
        <span className="ml-1">{resourceType}</span>
      </h6>
      <div className="mt-[-1.25rem]">
        {renderFormattedText(popoverData.data ?? "No details available")}
      </div>
    </div>
  )
}

export default PopoverContent
