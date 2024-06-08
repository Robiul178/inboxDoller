import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import banner1 from '../../../../assets/banner_bg.png';
import banner2 from '../../../../assets/banner2.jpeg';


const Banner = () => {
    return (
        <Swiper
            pagination={{
                type: 'progressbar',
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper max-w-7xl mx-auto my-8"
        >
            <SwiperSlide>
                <div className='flex justify-between px-8'>
                    <div className='mt-28'>
                        <h2 className="text-5xl font-bold text-green-600 mb-4">Location Of Small <br /> And Large Jobs</h2>
                        <p className='text-lg '> InboxDollars is an open online marketplace that connects employers and skilled workers.</p>
                    </div>
                    <div>
                        <img src={banner1} alt="" />
                    </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='flex justify-between'>
                    <div className='mt-28'>
                        <h2 className="text-5xl font-bold text-green-600 mb-4">WHERE
                            <br />  THE WORLD WORKS </h2>
                        <p className='text-lg pt-3'>An online marketplace that connects freelancers and business owners around the world with easy-to-do affordable tasks.</p>
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