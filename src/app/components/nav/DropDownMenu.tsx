import { Menu, Transition } from "@headlessui/react"
import React, { Fragment } from "react"
import { IoIosMenu } from "react-icons/io"
import { IoChevronDownOutline } from "react-icons/io5";


interface ItemProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
}
interface Props {
    items: ItemProps[],
    mainButton: React.ReactNode;
    handleClick?: ()=> void;
    showCaret?: boolean;

}
export default function DropDownMenu({items, mainButton, handleClick, showCaret = false}: Props) {
  return (
    <Menu as="div" className="  relative inline-block text-left w-full" onClick={handleClick}>

                    <Menu.Button className="inline-flex w-full justify-between rounded-lg text-black p-3 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        { mainButton}

                       {  showCaret &&  <IoChevronDownOutline
                            className="-mr-1 hidden ml-2 h-5 w-5 text-black"
                            aria-hidden="true"
                        />}
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
                        <Menu.Items className="absolute z-50 right-0 text-left mt-2 min-w-[250px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div className="px-1 py-1 w-full ">
                                
                                {
                                    items.map((prop) => {
                                        return <Menu.Item key={prop.title}>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                                        } group flex w-full gap-2 hover:bg-black hover:text-white items-center rounded-md px-2 py-2 text-sm`}
                                                    onClick={() => console.log('Hello')}
                                                >

                                                    {prop.icon} 
                                                    <span className="flex flex-col justify-start items-start">

                                                    <p className="font-semibold text-start">{prop.title}</p>
                                                    <p className="font-thin text-xs text-start">{ prop.description}</p>
                                                    </span>
                                                </button>
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

