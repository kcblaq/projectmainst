"use client"
import BodyLayout from "./components/BodyLayout";
import { Filing, Invoicing, Links, More } from "./components/svgs/SvgImages";
import MainChart from "./components/MainChart";
import { IoCloseOutline, IoInformationCircleOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { Fragment, useEffect, useState } from "react";
import SelectCheckboxes from "./components/SelectCheckboxex";
import ButtonGray from "./components/ButtonGray";
import { Transition } from "@headlessui/react";
import { GetData } from "../utils/ApiCalls";
import { TransactionType } from "./types/TransactionType";
import TransactionCard from "./components/TransactionCard";


export default function Home() {
  const [show, setShow] = useState(false);
  const [transactions, setTransactions] = useState<TransactionType[]>([]);

  const [filter, setFilter] = useState({
    date: '',
    range: '',
    type: '',
    status: ''
  })

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await GetData('transactions');
          setTransactions(response);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, []);

    console.log(transactions)
    
  const dates = ['Today', 'Last 7 days', 'This month', 'Last 3 months']
  return (
    <BodyLayout>
      <section className="flex  w-full h-full pt-[85px] gap-[76px]">
        <div className="flex gap-2 flex-col justify-end rounded-full shadow-md">
          <span className=" p-[16px]">
            <Links />
          </span>
          <span className=" p-[16px]">
            <Invoicing />
          </span>
          <span className=" p-[16px]">
            <Filing />
          </span>
          <span className=" p-[16px]">
            <More />
          </span>
        </div>
        <div className='grid gap-10'>
          <div className="flex gap-16 items-end">
            <div className='flex flex-col w-full'>
              <span className=" text-[#56616B]">Available Balance</span>
              <span className=" text-[#131316] text-4xl font-black w-full ">

                USD 120,500.00
              </span>
            </div>
            <button className='rounded-full bg-black text-white py-3.5 px-12'>
              Withdraw
            </button>
          </div>
          <MainChart pageData={[120, 35, 200]} />

        </div>
        <div className="flex flex-col gap-8 w-full">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-4 justify-start">
              <p className=" text-[#56616B] font-semibold">Ledger Balane</p>
              <p className=" text-[#131316] font-bold text-3xl">12,000</p>
            </div>
            <div className="mt-1"><IoInformationCircleOutline /> </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-4 justify-start">
              <p className=" text-[#56616B] font-semibold">Ledger Balane</p>
              <p className=" text-[#131316] font-bold text-3xl">12,000</p>
            </div>
            <div className="mt-1"><IoInformationCircleOutline /> </div>
          </div>
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-4 justify-start">
              <p className=" text-[#56616B] font-semibold">Ledger Balane</p>
              <p className=" text-[#131316] font-bold text-3xl">12,000</p>
            </div>
            <div className="mt-1"><IoInformationCircleOutline /> </div>
          </div>
        </div>

      </section>
      <section className="w-full flex items-center justify-between mt-[82px]" >

        <div className="grid">

          <p className="text-[#131316] font-black "> {transactions.length} Transactions</p>
          <p className="text-sm text-[#56616B "> Your transactions for the last 7 days</p>
        </div>
        <div className="flex items-center gap-3">

          <button onClick={() => setShow(true)} className="flex  items-center gap-2 rounded-full py-[12px] px-[30px] bg-[#EFF1F6]"> Filter <FaAngleDown /></button>
          {
            show &&
            <Transition
              show={show}
              as={Fragment}
              enter="transition ease-out duration-700"
              enterFrom="transform opacity-0 translate-x-full"
              enterTo="transform opacity-100 translate-x-0"
              leave="transition ease-in duration-700"
              leaveFrom="transform opacity-100 translate-x-0"
              leaveTo="transform opacity-0 translate-x-full"
            >

              <div className="w-[500px]  h-[95vh] absolute bg-white shadow-md rounded-[20px] right-1 mt-10 transform -translate-y-1/2 z-20">
                <div className="flex flex-col justify-between h-full">
                  <div className="grid p-4 gap-7">

                    <div className="flex justify-between w-full h-full">
                      <p className="text-[#131316] font-black text-2xl"> Filter</p>
                      <span className="text-2xl h-10 rounded-full cursor-pointer hover:bg-gray-100 p-2">
                        <IoCloseOutline onClick={() => setShow(false)} />
                      </span>
                    </div>
                    <div className="flex items-center justify-center w-full gap-1">
                      {
                        dates.map((date) => {
                          return (
                            <button className={`rounded-full px-1 text-sm border hover:bg-gray-300 py-2 w-full font-bold text-[#131316] ${filter.date == date ? 'bg-gray-300' : 'bg-[#EFF1F6]'}`}
                              onClick={() => setFilter({ ...filter, date })}>
                              {date}
                            </button>
                          )
                        })
                      }

                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="range"> Date Range</label>
                      <div className="flex items-center gap-4 w-full justify-between">
                        <input type="date" className="rounded-lg bg-gray-300 p-2 w-full h-[48px] relative" />

                        <input type="date" className="rounded-lg bg-gray-300 p-2 w-full h-[48px] relative" />

                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label htmlFor="type" className="text-[#131316] text-base font-semibold "> Transaction Type</label>
                      <div className="flex items-center gap-4 w-full justify-between">

                        <SelectCheckboxes items={
                          [{ title: 'Store Transactions' },
                          { title: 'Get Tipped' },
                          { title: 'Withdrawals' },
                          { title: 'Chargebacks' },
                          { title: 'Cashbacks' },
                          { title: 'Refer and Earn' },

                          ]} label="Store Transactions, Get Tipped, Withdrawals, Chargebacks, Cashbacks" />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="rstatusange" className="text-[#131316] text-base font-semibold "> Transaction Status</label>
                      <div className="flex items-center gap-4 w-full justify-between">

                        <SelectCheckboxes items={
                          [{ title: 'Successful' },
                          { title: 'Pending' },
                          { title: 'Failed' }

                          ]} label="Successful, Pending, Failed" />
                      </div>
                    </div>


                  </div>
                  <div className="flex items-center justify-between w-full p-4 gap-3">
                    <ButtonGray title="Clear" type="reset" />
                    <button className="w-full rounded-full bg-[#131316] text-white py-3 px-6 font-semibold " onClick={() => {
                      setShow(false)
                    }}>
                      Apply
                    </button>

                  </div>
                </div>
              </div>
            </Transition>




          }
          <button className="flex items-center gap-2 rounded-full py-[12px] px-[30px] bg-[#EFF1F6]"> Export list <GoDownload /></button>
        </div>
      </section>
      <hr className="w-full my-4 2xl:mt-6" />
      <section className="grid w-full gap-6">
          {
            transactions.map((trans) => {
              return <div className='' key={trans.payment_reference}>
<TransactionCard type={trans.type} amount={trans.amount} date={trans.date} product={trans.metadata?.product_name} name={ trans.metadata?.name } status={trans.status}  />
              </div>
            })
          }
      </section>

    </BodyLayout>
  );
}
