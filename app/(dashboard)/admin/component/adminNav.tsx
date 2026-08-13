import { IoNotificationsCircleOutline } from "react-icons/io5"
import PagesSearch from "./pagesSearch"


const AdminNav = (title: string) => {
  return (
    <div>
        <div className="sticky top-0 z-20 w-full border-b border-[#d5d5d5] backdrop-blur-xl px-5 flex items-center justify-between">
          <h2 className="text-[22px] font-bold py-6">{title}</h2>
          <div className="flex items-center gap-3">
            <PagesSearch />

            <IoNotificationsCircleOutline className="w-10 h-10" />
          </div>
        </div>

    </div>
  )
}

export default AdminNav