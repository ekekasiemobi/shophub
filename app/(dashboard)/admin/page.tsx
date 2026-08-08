import React from 'react'
import { Newspaper, CircleX, SquareCheckBig, ChartSpline } from "lucide-react"
import DashboardCard from './component/DashboardCard'
import ProductTable from './component/products/ProductTable'

const HomePage = () => {
  return (
    <>
      <div className='bg-[#f9fafb] flex flex-col md:flex-row justify-between gap-5 mt-5'>
        <DashboardCard title='Total Orders' count={100} icon={<ChartSpline className="text-slate-500" size={32} />}/>
        <DashboardCard title='New Orders' count={100} icon={<Newspaper className="text-slate-500" size={32} />}/>
        <DashboardCard title='Completed Orders' count={100} icon={<SquareCheckBig className="text-slate-500" size={32} />}/>
        <DashboardCard title='Canceled Orders' count={100} icon={<CircleX className="text-slate-500" size={32} />}/>
      </div>
      <ProductTable title='Latest Products' limit={5} />
    </>
  )
}

export default HomePage
