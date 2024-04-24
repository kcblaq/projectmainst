import { IoInformationCircleOutline } from "react-icons/io5";

interface Props {
    title: string;
    amount: number;
}
export default function HistoryCard({title, amount}: Props) {
    return (
        <div className="flex justify-between w-full">
            <div className="flex flex-col gap-4 justify-start">
                <p className=" text-[#56616B] font-semibold">{title} </p>
                <p className=" text-[#131316] font-bold text-3xl">{amount} </p>
            </div>
            <div className="mt-1"><IoInformationCircleOutline /> </div>
        </div>
    )
}
