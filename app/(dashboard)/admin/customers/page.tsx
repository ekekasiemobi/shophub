// import Image from "next/image";
import { SearchIcon } from "lucide-react"
import {
  Field
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IoNotificationsCircleOutline } from "react-icons/io5";
import CustomerTable from "./components/CustomerTable";

const Customer = () => {

  return (
    <div className="min-h-screen w-full">
      <div className="sticky top-0 z-20 w-full bg-[#d5d5d5] border-b border-[#d5d5d5] px-5 flex items-center justify-between">
        <h2 className="text-[22px] font-bold py-6">Customer</h2>
        <div className="flex items-center gap-3">
          <Field className="max-w-sm">
            <InputGroup>
              <InputGroupInput id="inline-start-input" placeholder="Search..." />
              <InputGroupAddon align="inline-end">
                <SearchIcon className="text-muted-foreground" />
              </InputGroupAddon>
            </InputGroup>
          </Field>

          <IoNotificationsCircleOutline className="w-10 h-10"/>
        </div>
      </div>

      <div className="px-5 py-4">
        <CustomerTable />
      </div>
   
    </div>
  );
};

export default Customer;
