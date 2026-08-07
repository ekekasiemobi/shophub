import React from 'react'
import { Newspaper } from "lucide-react"
import DashboardCard from './component/DashboardCard'
import ProductTable from './component/products/ProductTable'

const HomePage = () => {
  return (
    <>
      <div className='bg-[#f9fafb] flex flex-cor md:flex-row justify-between gap-5 mt-5'>
        <DashboardCard title='Total Orders' count={100} icon={<Newspaper className="text-slate-500" size={72} />}/>
        <DashboardCard title='New Orders' count={100} icon={<Newspaper className="text-slate-500" size={72} />}/>
        <DashboardCard title='Completed Orders' count={100} icon={<Newspaper className="text-slate-500" size={72} />}/>
        <DashboardCard title='Canceled Orders' count={100} icon={<Newspaper className="text-slate-500" size={72} />}/>
      </div>
      <ProductTable />
    </>
  )
}

export default HomePage
