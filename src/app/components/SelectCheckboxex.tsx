
import { Menu, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { IoChevronDown } from "react-icons/io5";


interface ItemProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
}
interface Props {
    items: ItemProps[],
    handleClick?: () => void;
    showCaret?: boolean;
    label: string;

}
export default function SelectCheckboxes({ items, handleClick, label }: Props) {
    const [selected, setSelected] = useState<string[]>([]) // Explicitly define the type of selected

    function toggleAddItem(title: string) {
        setSelected(prevSelected => {
            const index = prevSelected.indexOf(title);
            if (index === -1) {
                return [...prevSelected, title]; // Add title if not already present
            } else {
                return prevSelected.filter(item => item !== title); // Remove title if already present
            }
        });
    }

   

    return (
        <Menu as="div" className="  relative inline-block text-left w-full" onClick={handleClick}>

            <Menu.Button className="inline-flex w-full justify-between items-center border rounded-lg text-black p-3 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
               <span className=" w-[350px] truncate p-2  rounded-lg text-left text-[#131316] "> {label} </span>

                <span > <IoChevronDown /> </span>
            </Menu.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute z-50 right-0 text-left mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 w-full ">

                        {
                            items.map((prop) => {
                                return <Menu.Item key={prop.title}>
                                    {({ active }) => (
                                        <span
                                            className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                                } group flex w-full gap-2 hover:bg-black hover:text-white items-center rounded-md px-2 py-2 text-sm`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                            }}
                                        >
                                            <input type="checkbox" className=" cursor-pointer" value={prop.title} checked={selected.includes(prop.title)} onChange={()=>toggleAddItem(prop.title)} />
                                            {prop.title}
                                            
                                        </span>
                                    )}
                                </Menu.Item>
                            })
                        }

                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
