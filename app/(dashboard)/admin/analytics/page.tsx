import React from 'react'
import AnalyticsDashboard from './component/AnalyticsDashboard'
import { IoNotificationsCircleOutline } from "react-icons/io5";
import PagesSearch from '../component/pagesSearch'


const Analytics = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="sticky top-0 z-20 w-full border-b border-[#d5d5d5] backdrop-blur-xl px-5 flex items-center justify-between">
        <h2 className="text-[22px] font-bold py-6">Analytics</h2>
         <div className="flex items-center gap-3">
          <PagesSearch />

          <IoNotificationsCircleOutline className="w-10 h-10"/>
          
        </div>
      </div>
      <div className="px-5 py-4">
        <AnalyticsDashboard />
      </div>
    </div>
  )
}

export default Analytics