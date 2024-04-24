import { MdOutlineReceiptLong } from "react-icons/md";
import ButtonGray from "./ButtonGray";

export default function PlaceholderCard() {
    return (
        <div className="w-full min-h-[406px] flex items-center justify-center my-10">
            <div className="flex flex-col gap-5 justify-start max-w-[369px]">
                <span className="p-3 rounded-lg bg-[#F6F7F9] text-base text-black w-10"><MdOutlineReceiptLong  />
                </span>
                <span className="">
                    <p className="text-[#131316] text-2xl font-black text-left"> No matching transaction found for the selected filter </p>
                </span>
                <span>

                <p className="text-base text-[#56616B] font-medium"> Change your filters to see more results, or add a new product.</p>
                </span>

<span className="w-40">

                <ButtonGray title={"Clear Filter"} />
</span>
            </div>
        </div>
    )
}
