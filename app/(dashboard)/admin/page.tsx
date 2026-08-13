import ProductTable from './component/products/ProductTable'
import { IoNotificationsCircleOutline } from "react-icons/io5";
import ProtectedRoute from '@/app/(authentication)/components/ProtectedRoute';
import IndexCard from './component/IndexCard';
import PagesSearch from './component/pagesSearch';

const HomePage = () => {
  return (
    <>
    <ProtectedRoute>
      <div className="min-h-screen w-full">
        <div className="sticky top-0 z-20 w-full border-b border-[#d5d5d5] backdrop-blur-xl px-5 flex items-center justify-between">
          <h2 className="text-[22px] font-bold py-6">Dashboard</h2>
          <div className="flex items-center gap-3">
            <PagesSearch />

            <IoNotificationsCircleOutline className="w-10 h-10" />
          </div>
        </div>

        <div className="flex flex-col px-5">
          <IndexCard />
          <ProductTable title='Latest Products' limit={10} />
        </div>
      </div>
    </ProtectedRoute>
    </>
  )
}

export default HomePage