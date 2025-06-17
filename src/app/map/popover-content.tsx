'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { keywords } from '@/data/keywords'
import { fetchMapPinSingle } from '@/api/resources'

interface PopoverContentProps {
  id: number
  resourceType: string
}

const PopoverContent = ({ id, resourceType }: PopoverContentProps) => {

  const [popoverData, setPopoverData] = useState<string | null>(null)
  
  useEffect(() => {
    async function loadMapData() {
      try {
        const res = await fetchMapPinSingle(resourceType, id);
        
        if (res.data){
          setPopoverData(res.data)
        }
      }
      catch (err) {
        if (process.env.NODE_ENV == "development") console.log(err);
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

  if (!popoverData || popoverData.length === 0)
    return <p className="text-sm text-gray-500">No details available</p>

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
        {renderFormattedText(popoverData)}
      </div>
      {/* <p>
        {
          popoverData.split("\n\n").map((line, i) => (
            <p key={i}>
              {line}
            </p>
          ))
        }
      </p> */}
    </div>
  )
}

export default PopoverContent















// 'use client'
// import React from 'react'
// import clsx from 'clsx'
// import { keywords } from '@/data/keywords'

// interface PopoverContentProps {
//   data: Record<string, any>
//   resourceType: string
// }

// const PopoverContent = ({ data, resourceType }: PopoverContentProps) => {

//   const keywordData = keywords.find(
//     (keyword) => keyword.title.toLowerCase() === resourceType.toLowerCase()
//   )

//   if (!data || Object.keys(data).length === 0)
//     return <p className="text-sm text-gray-500">No details available</p>

//   return (
//     <div className="text-xs">
//       <h6 className="mt-4 mb-1 font-semibold tracking-wide text-white bg-primary shadow-md px-2 py-1 rounded-lg max-w-fit capitalize">
//         { keywordData ? <keywordData.icon className="inline-block align-text-bottom" size={18} /> : "" } 
//         <span className="ml-1">{resourceType}</span>
//       </h6>
//       <table className="w-full">
//           <tbody>
//           {Object.entries(data).map(([key, value], index) => (
//               <tr key={key} className={clsx(
//                   "border-gray-200",
//                   index !== 0 && "border-t",
//               )}>
//               <td className="py-1 font-semibold capitalize text-gray-700">{key.replace(/_/g, " ")}</td>
//               <td className="pl-2 py-1 text-gray-600">{String(value)}</td>
//               </tr>
//           ))}
//           </tbody>
//       </table>
//     </div>
//   )
// }

// export default PopoverContent
