
import { GoArrowDownLeft } from "react-icons/go";
import { capitalizeFirstLetter } from "../utils/Capitalize";

interface Props {
    type: string;
    amount: number;
    date: string;
    product: string;
    name?: string;
    status?: string | undefined;
    
}
export default function TransactionCard({type, amount, date, product='', name, status}: Props) {
  return (
   <div className={`flex justify-between w-full items-center`}>
        <div className={`flex items-center gap-2`}>
            <span className={` rounded-full p-4 ${type == 'deposit'? 'bg-[#E3FCF2] text[#075132]':'bg-[#F9E3E0] text-[#961100]'}`}>
            <GoArrowDownLeft className={`${type == 'withdrawal' && 'rotate-180'}`}/>
            </span>
            <div className={`flex flex-col gap-2`}>
                <p className="text-[#131316] text-base font-medium ">{product} </p>
                <p className={`text-[#56616B] text-sm font-medium ${type == 'withdrawal' && status == 'successful' ? 'text-[#0EA163]' : type == 'withdrawal' && status == 'pending' ? 'text-[#A77A07]' : ''  } `}>{ type == 'withdrawal' ? (status ? capitalizeFirstLetter(status) : '') : (name ? name : '') } </p>
            </div>
        </div>
        <div className={`flex flex-col gap-2`}>
            <h4 className={`text-end text-[#131316] font-black text-base `}>USD {amount} </h4>
            <p className="text-end text-[#56616B] text-sm font-medium ">{date} </p>
        </div>
   </div>

  )
}
