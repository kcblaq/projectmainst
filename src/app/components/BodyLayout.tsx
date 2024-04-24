import Nav from "./nav/Nav";

interface Props {
    children: React.ReactNode;
}
export default function BodyLayout({ children }: Props) {
    return (
        <main className="flex flex-col px-[70px] 2xl:py-[100px] py-[20px] bg-[#EDE5FE] min-h-screen  rounded-[16px] h-full w-full">
            <section className="bg-white p-16 overflow-clip ">
                <div className=" h-20 fixed bg-white z-10"><Nav /> </div>
                <div className="py-16 grid overflow-auto h-[calc(100vh-100px)] mt-16">
                    {children}
                </div>
            </section>
        </main>
    )
}
