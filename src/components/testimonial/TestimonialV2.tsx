"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Controller, FreeMode } from 'swiper/modules';
import shape3 from '@/assets/img/shape/3.png';
import Image from 'next/image';
import SplitAnimation from '../animation/SplitAnimation';
import TestimonialV2Data from "@/assets/jsonData/testimonial/TestimonialV2Data.json"
import SingleTestimonialV2 from './SingleTestimonialV2';
import { useState } from 'react';

interface DataType {
    sectionClass?: string
}

const TestimonialV2 = ({ sectionClass }: DataType) => {

    const [mainSwiper, setMainSwiper] = useState<SwiperType | null>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <>
            <div className={`testimonial-style-two-area text-center default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 text-center">
                            <div className="site-heading">
                                <h4 className="sub-title">Testimonials</h4>
                                <SplitAnimation>
                                    <h2 className="title split-text">What People Say</h2>
                                </SplitAnimation>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="testimonials-quote">
                                <div className="icon">
                                    <Image src={shape3} alt="Image Not Found" />
                                </div>
                            </div>
                            <Swiper className="testimonial-style-two-carousel"
                                modules={[Navigation, Controller]}
                                initialSlide={2}
                                spaceBetween={10}
                                navigation={{
                                    nextEl: '.swiper-button-next',
                                    prevEl: '.swiper-button-prev',
                                }}
                                loop={true}
                                loopAdditionalSlides={4}
                                onSwiper={setMainSwiper}
                                controller={{ control: thumbsSwiper }}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV2Data.quoteData.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV2 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>

                            {/* testimonial-bullet */}
                            <Swiper className="testimonial-bullet"
                                spaceBetween={10}
                                slidesPerView={'auto'}
                                touchRatio={0.2}
                                slideToClickedSlide={true}
                                loop={true}
                                loopAdditionalSlides={3}
                                centeredSlides={true}
                                onSwiper={setThumbsSwiper}
                                controller={{ control: mainSwiper }}
                                modules={[Controller, FreeMode]}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV2Data.navigationData.map(data =>
                                        <SwiperSlide className="swiper-slide" key={data.id}>
                                            <div className="swiper-bullet-item">
                                                <Image src={`/assets/img/team/${data.thumb}`} alt="Image Not Found" width={200} height={200} />
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV2;