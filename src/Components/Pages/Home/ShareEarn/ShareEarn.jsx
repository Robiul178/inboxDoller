
import imagess from '../../../../assets/shareEarn.jpg'
import { FaRegCheckSquare } from "react-icons/fa";


const ShareEarn = () => {
    return (
        // <div className="max-w-6xl mx-auto my-36 px-4">
        //     <div className="md:flex gap-12 ">

        //         <div className="">
        //             <p className="text-lg">Invite your friend to  InboxDollars platform
        //                 and get special bonus. Every deposit and job also has a special task bonus.</p>
        //             <h2 className="text-3xl mt-4 font-bold">What are you getting in each <br /> invitation?</h2>
        //             <ul className="mt-4">
        //                 <li className="flex text-lg gap-3">
        //                     <FaRegCheckSquare className="mt-2 text-xl text-green-600" />If your friend accepts the invitation, you will get 3% of his work bonus
        //                 </li>
        //                 <li className="flex text-lg gap-3">
        //                     <FaRegCheckSquare className="mt-2 text-xl text-green-600" />
        //                     You will get an instant 5% bonus on the deposit of the friend who accepts the invitation
        //                 </li>
        //             </ul>
        //         </div>
        //         <div className="mb-6 ">
        //             <div className='h-[330px] w-[600px] bg-green-100'>
        //                 <img src={imagess} alt="" className='relative top-4 p-6' />
        //             </div>
        //         </div>
        //     </div>
        // </div>

        <div className="max-w-6xl mx-auto my-24 px-4 " >
            <div className="md:flex justify-center gap-12 ">
                <div className="mb-6 ">
                    <img src='https://zrcdn.net/static/img/index/collect-profits-paidwork.webp?v=648' alt=""
                        className='max-w-lg ' />
                </div>
                <div className="mt-16">
                    <h2 className="text-[46px] ">Collect profits</h2>
                    <h2 className="text-xl font-bold text-blue-700">Resources</h2>
                    <br />
                    <p className="text-xl">
                        By completing simple tasks, in just a month you can earn up to $700 without any additional taxes or charges. However, there is no limit of your earnings – you decide how much you earn.</p>
                </div>
            </div>
        </div>
    );
};

export default ShareEarn;