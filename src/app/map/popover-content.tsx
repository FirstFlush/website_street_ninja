import React from 'react'
import clsx from 'clsx'
import { keywords } from '@/data/keywords'

interface PopoverContentProps {
  data: Record<string, any>
  resourceType: string
}

const PopoverContent = ({ data, resourceType }: PopoverContentProps) => {

  const keywordData = keywords.find(
    (keyword) => keyword.title.toLowerCase() === resourceType.toLowerCase()
  )

  if (!data || Object.keys(data).length === 0)
    return <p className="text-sm text-gray-500">No details available</p>

  return (
    <div>
      <h6 className="text-sm mb-1 font-semibold tracking-wide text-primary capitalize">
        { keywordData ? <keywordData.icon className="inline-block align-text-bottom" size={18} /> : "" } 
        <span className="ml-1">{resourceType}</span>
      </h6>
        <table className="w-full text-xs">
            <tbody>
            {Object.entries(data).map(([key, value], index) => (
                <tr key={key} className={clsx(
                    "border-gray-200",
                    index !== 0 && "border-t",
                )}>
                <td className=" py-1 font-semibold capitalize text-gray-700">{key.replace(/_/g, " ")}</td>
                <td className=" py-1 text-gray-600">{String(value)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default PopoverContent
