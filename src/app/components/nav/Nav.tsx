"use client"
import Link from 'next/link';
import {  Filing, Invoicing, Links, Messages, Notification } from '../svgs/SvgImages';
import { usePathname, useRouter } from 'next/navigation';
import { HiOutlineCash } from 'react-icons/hi';
import Logo from '../svgs/Logo';
import { AiOutlineAppstore } from 'react-icons/ai';
import { IoIosMenu, IoMdGift } from 'react-icons/io';
import { MdAnalytics, MdOutlineKeyboardArrowDown, MdOutlinePermMedia, MdOutlineReceiptLong, MdOutlineSwitchAccount } from 'react-icons/md';
import {  IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { FaHandshakeSimple, FaUserGroup } from 'react-icons/fa6';
import { Menu, Transition } from '@headlessui/react';
import { Fragment, useEffect, useState } from 'react';
import { GoSignOut } from 'react-icons/go';
import { LiaBugSolid, LiaFileInvoiceSolid } from 'react-icons/lia';
import { TbApps, TbBrandBooking } from 'react-icons/tb';
import DropDownMenu from './DropDownMenu';
import { GiLinkedRings } from 'react-icons/gi';
import { GetData } from '@/app/utils/ApiCalls';
import { UserType } from '@/app/types/UserType';
import { capitalizeInitials, capitalizeName } from '@/app/utils/Capitalize';

const Nav = () => {
    const [toggle, setToggle] = useState(false)
    const [user, setUser] = useState<UserType | null>(null);


    const pathname = usePathname();
    const route = useRouter()

    const isActive = (link: string) => {
        if (link === '/dashboard') {
            return pathname === '/dashboard';
        }
        return pathname.startsWith(link);
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await GetData('user');
            setUser(response);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, []);

    const items = [
        {name: 'Settings',icon: <IoSettingsOutline /> , function: ''},
        {name: 'Purchase History',icon: <MdOutlineReceiptLong />        , function: ''},
        {name: 'Refer and Earn',icon: <IoMdGift /> , function: ''},
        {name: 'Integrations',icon: <TbApps /> , function: ''},
        {name: 'Report Bugs',icon: <LiaBugSolid /> , function: ''},
        {name: 'Switch Account',icon: <MdOutlineSwitchAccount /> , function: ''},
        {name: 'Sign Out',icon: <GoSignOut /> , function: ''}
    ]
    const appItems = [
        {title: 'Link in Bio',icon: <Links />       , description:'Manage your Link in Bio', function: ''},
        {title: 'Store',icon: <Invoicing />,description:'Manage your store Activities'        , function: ''},
        {title: 'Media Kit',icon: <Filing /> , description:'Manage your Media Kit', function: ''},
        {title: 'Invoicing',icon: <Invoicing /> , description:'Manage your Invoices', function: ''},
        {title: 'Bookings',icon: <Filing /> , description:'Manage your Bookings', function: ''},
    ]

    const initialState = <div className={`px-[18px] rounded-full py-2 flex gap-1 items-center hover:bg-gray-200 hover:rounded-full`}> <AiOutlineAppstore /> Apps</div>
    const onDropdown = <div className={`px-[18px] rounded-full py-2 flex gap-1 items-center hover:bg-gray-200 hover:rounded-full`}> 
    <span className=' border-r'> <AiOutlineAppstore /> Apps </span>
    <span className=' flex items-center gap-2'>  Link in Bio <MdOutlineKeyboardArrowDown /> </span>
    </div>

    return (
        <nav className='h-[64px] bg-white w-full p-5 px-7 rounded-full shadow-md flex justify-between items-center'>
            <Link href={'/'}><Logo /></Link>
            <div className='flex items-center gap-[10px] 2xl:gap-[20px] justify-center list-none'>
                <Link href={`/`} className={`px-[18px] transition-all duration-700 ease-in-out py-2 flex gap-1 items-center hover:bg-gray-200 hover:rounded-full`}> <IoHomeOutline />  Home</Link>
                <Link href={`/analytics`} className={`px-[18px] rounded-full py-2 flex gap-1 items-center hover:bg-gray-200 hover:rounded-full ${isActive('/analytics') ? 'bg-black text-white' : ''}`}> <MdAnalytics /> Analytics</Link>
                <Link href={`/revenue`} className={`px-[18px] rounded-full py-2 flex gap-1 items-center hover:bg-gray-200 hover:rounded-full ${isActive('/revenue') ? 'bg-black text-white' : ''}`}> <HiOutlineCash /> Revenue</Link>
                <Link href={`/crm`} className={`px-[18px] rounded-full py-2 flex gap-1 items-center hover:bg-gray-200 hover:rounded-full ${isActive('/crm') ? 'bg-black text-white' : ''}`}> <FaUserGroup /> CRM</Link>
                <DropDownMenu items={appItems} 
                handleClick={()=> {
                    route.push(`/`)
                    setToggle(!toggle);
                    
                }}
                mainButton={<div className={`px-[18px] rounded-full py-2 flex gap-1 items-center hover:bg-gray-200 hover:rounded-full`}>
                     { initialState}
                     
                     </div>
} />
            </div>
            <div className='flex items-center gap-[8px] justify-center list-none'>
                <li className='p-[10px] flex gap-1 items-center'><Notification /> </li>
                <li className='p-[10px] flex gap-1 items-center'> <Messages /> </li>

                <Menu as="div" className="  relative inline-block text-left w-full">

                    <Menu.Button className="inline-flex w-full justify-between rounded-lg text-black p-3 text-sm font-medium  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                        <button className='p-[10px] flex gap-1 w-[81px] h-[40px] cursor-pointer bg-[#EFF1F6] rounded-full items-center justify-between'>
                            <span className="bg-gradient-to-br from-[#5C6670] to-[#131316] text-white rounded-full p-2">
                                {capitalizeInitials(user?.first_name ? user?.first_name : '', user?.last_name? user?.last_name: '')}
                            </span> <IoIosMenu className='h-[24px] w-[24px]' /> 
                        </button>
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
                        <Menu.Items className="absolute z-50 right-0 mt-2 min-w-[150px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                            <div className="px-1 py-1 w-full ">
                                <div className='p-2 flex items-start gap-2'>
                                    <span className="bg-gradient-to-br from-[#5C6670] to-[#131316] text-white rounded-full p-2">
                                    {capitalizeInitials(user?.first_name ? user?.first_name : '', user?.last_name? user?.last_name: '')}

                                    </span>
                                    <span className='flex flex-col'>
                                        <span className="flex items-center gap-2"> 
                                            <span> {user?.first_name ? user?.first_name : ''  } </span>
                                            <span>{user?.last_name ? user?.first_name : ''} </span>
                                         </span>
                                        <p className="text-xs font-thin">{user ? user.email : ''} </p>
                                    </span>
                                </div>
                                {
                                    items.map((prop) => {
                                        return <Menu.Item key={prop.name}>
                                            {({ active }) => (
                                                <button
                                                    className={`${active ? 'bg-primary text-white' : 'text-gray-900'
                                                        } group flex w-full gap-2 hover:bg-black hover:text-white items-center rounded-md px-2 py-2 text-sm`}
                                                    onClick={() => console.log('Hello')}
                                                >

                                                    {prop.icon} {prop.name}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    })
                                }

                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </nav>
    );
};

export default Nav;
