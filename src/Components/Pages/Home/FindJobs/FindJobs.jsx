import { FaCheckSquare } from 'react-icons/fa';
import findJob from '../../../../assets/find-jobs.png'
import SectionTitle from '../../SectionTitle/SectionTitle';

const FindJobs = () => {
    return (
        <div className="my-36 px-4">
            <SectionTitle
                heading={"Earn Rewards"}
            ></SectionTitle>
            <div className="md:flex justify-center gap-12 ">
                <div className="mb-6 ">
                    <div className='h-[330px] bg-green-100'>
                        <img src={findJob} alt="" className='relative top-4 p-6' />
                    </div>
                </div>
                <div className="">
                    <h1 className="text-4xl font-bold mb-4">Get more in less time</h1>
                    <ul className='text-lg'>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' /> Target is the right Job</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Read job details and submit</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Do not submit wrong proof</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />To increase the employer's business</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Take any promotion</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Blog, application, social media etc</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default FindJobs;