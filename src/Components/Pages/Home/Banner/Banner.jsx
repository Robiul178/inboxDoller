import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from '../../../../assets/banner_bg.png';
import banner2 from '../../../../assets/banner2.jpeg';
import { TiVendorApple } from "react-icons/ti";
import { FaGooglePlay } from 'react-icons/fa';


const Banner = () => {
    return (
        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper max-w-7xl mx-auto mt-12"
        >
            <SwiperSlide>
                <div className='flex justify-between px-16'>
                    <div className='mt-28'>
                        <h2 className="text-6xl font-bold text-blue-900 mb-4">Make money online</h2>
                        <p className='text-xl pt-4 '> InboxDollars is an open online marketplace that connects employers
                            <br /> and skilled workers.On the phone, computer or tablet, get <br /> paid wherever you are, without investment.
                        </p>
                        <div className='mt-14'>
                            <button className='btn btn-outline btn-info border-node border-b-4 relative top-2 '>
                                <TiVendorApple className='text-3xl' />Download on the <br /> app store
                            </button>
                            <button className='btn btn-outline  border-node border-b-4 ml-2'>
                                <FaGooglePlay lassName='text-3xl' />Download on the <br /> Play store
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={banner1} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='flex justify-between px-16'>
                    <div className='mt-28'>
                        <h2 className="text-6xl font-bold text-blue-900 mb-4">WHERE
                            <br />  THE WORLD WORKS</h2>
                        <p className='text-xl pt-4 '>An online marketplace that connects freelancers and business owners around the world with easy-to-do affordable tasks.</p>
                        <div className='mt-14'>
                            <button className='btn btn-outline btn-info border-node border-b-4 relative top-2 '>
                                <TiVendorApple className='text-3xl' />Download on the <br /> app store
                            </button>
                            <button className='btn btn-outline  border-node border-b-4 ml-2'>
                                <FaGooglePlay lassName='text-3xl' />Download on the <br /> Play store
                            </button>
                        </div>
                    </div>
                    <div>
                        <img src={banner2} alt="" />
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;