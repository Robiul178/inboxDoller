import SectionTitle from "../../SectionTitle/SectionTitle";
import imagess from '../../../../assets/shareEarn.jpg'
import { FaRegCheckSquare } from "react-icons/fa";


const ShareEarn = () => {
    return (
        <div className="max-w-6xl mx-auto my-36 px-4">
            <SectionTitle
                heading={"Share & Earn Rewards"}
            ></SectionTitle>
            <div className="md:flex gap-12 ">

                <div className="">
                    <p className="text-lg">Invite your friend to  InboxDollars platform
                        and get special bonus. Every deposit and job also has a special task bonus.</p>
                    <h2 className="text-3xl mt-4 font-bold">What are you getting in each <br /> invitation?</h2>
                    <ul className="mt-4">
                        <li className="flex text-lg gap-3">
                            <FaRegCheckSquare className="mt-2 text-xl text-green-600" />If your friend accepts the invitation, you will get 3% of his work bonus
                        </li>
                        <li className="flex text-lg gap-3">
                            <FaRegCheckSquare className="mt-2 text-xl text-green-600" />
                            You will get an instant 5% bonus on the deposit of the friend who accepts the invitation
                        </li>
                    </ul>
                </div>
                <div className="mb-6 ">
                    <div className='h-[330px] w-[600px] bg-green-100'>
                        <img src={imagess} alt="" className='relative top-4 p-6' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareEarn;