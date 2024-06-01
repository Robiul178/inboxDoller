import SectionTitle from "../../SectionTitle/SectionTitle";
import imagess from '../../../../assets/shareEarn.jpg'


const ShareEarn = () => {
    return (
        <div className="my-36 px-4">
            <SectionTitle
                heading={"Share & Earn Rewards"}
            ></SectionTitle>
            <div className="md:flex gap-12 ">

                <div className="">
                    <p className="text-lg">Invite your friend to  GigClickers platform
                        and get special bonus. Every deposit and job also has a special task bonus.</p>
                    <h2 className="text-4xl font-bold">What are you getting in each <br /> invitation?</h2>
                </div>
                <div className="mb-6 ">
                    <div className='h-[330px] w-[550px] bg-green-100'>
                        <img src={imagess} alt="" className='relative top-4 p-6' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShareEarn;