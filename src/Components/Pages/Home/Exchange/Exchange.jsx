import { FaCheckSquare } from "react-icons/fa";
import imggg from '../../../../assets/newww.png'

const Exchange = () => {
    return (
        <div className=" bg-[#FDF2ED] py-36">
            <div className="max-w-6xl mx-auto flex">
                <div>
                    <h2 className="text-4xl font-bold">Exchange online service at InboxDollers</h2>
                    <ul className='text-lg mt-4'>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' /> Target is the right Job</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Read job details and submit</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Do not submit wrong proof</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />To increase the employer's business</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Take any promotion</li>
                        <li className='flex gap-1'><FaCheckSquare className='text-green-600 mt-1' />Blog, application, social media etc</li>
                    </ul>
                    <button className="btn btn-outline  btn-success border border-b-4 mt-3">Get Start</button>
                </div>
                <div>
                    <img src={imggg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Exchange;