import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { ArrowUp } from "lucide-react"
import Link from "next/link"

const IndexCard = () => {
    


    return (
        <div className="w-full my-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
                {/* card1 */}
                <Card className="max-w-sm h-full hover:shadow-md transition-shadow rounded-lg">

                    <CardHeader className="p-4 space-y-2">
                        <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                            {/* {item.title} */}Total Sales
                        </CardTitle>
                        <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span>

                        <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                            <p className="text-[32px] font-bold">N10,000</p>
                            <p className='text-[16px]'>sales</p>
                            <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 10.4%</p>
                        </div>
                        <div className="flex flex-col justify-end items-end ">  <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link></div>

                    </CardHeader>
                </Card>
                {/* card 2 */}
                <Card className="max-w-sm h-full hover:shadow-md transition-shadow rounded-lg">

                    <CardHeader className="p-4 space-y-2">
                        <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                            {/* {item.title} */}Total Orders
                        </CardTitle>
                        <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span>

                        <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                            <p className="text-[32px] font-bold">N10.7K</p>
                            <p className='text-[16px]'>order</p>
                            <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 14.4%</p>
                        </div>
                        <div className="flex flex-col justify-end items-end ">  <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link></div>

                    </CardHeader>
                </Card>
                {/* card 3 */}
                <Card className="max-w-sm h-full hover:shadow-md transition-shadow rounded-lg">

                    <CardHeader className="p-4 space-y-2">
                        <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                            {/* {item.title} */}Customer
                        </CardTitle>
                        <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span>

                        <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                            <p className="text-[32px] font-bold">N100K</p>
                            <p className='text-[16px]'>visit</p>
                            <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 30.5%</p>
                        </div>
                        <div className="flex flex-col justify-end items-end ">  <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link></div>

                    </CardHeader>
                </Card>

                {/* card 3 */}
                <Card className="max-w-sm h-full hover:shadow-md transition-shadow rounded-lg">

                    <CardHeader className="p-4 space-y-2">
                        <CardTitle className="text-[18px] font-extrabold text-gray-900 leading-tight line-clamp-1">
                            {/* {item.title} */}Products
                        </CardTitle>
                        <span className="text-14px font-normal text-[#ededed ]" >last 7 days</span>

                        <div className="text-sm font-semibold text-amber-500 flex items-center gap-1">
                            <p className="text-[32px] font-bold">20.0</p>
                            <p className='text-[16px]'>variety</p>
                            <p className='flex items-center  text-[14px] text-[#1EB564]'><ArrowUp className='h-4' /> 25.1%</p>
                        </div>
                        <div className="flex flex-col justify-end items-end ">  <Link href="/#" className='text-[16px] border items-end border-[#ededed] rounded-full px-6 py-1' >Detaill
                        </Link></div>

                    </CardHeader>
                </Card>
            </div>

        </div>
    )
}

export default IndexCard