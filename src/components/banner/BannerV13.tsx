"use client"
import shape6 from "@/assets/img/shape/6.png"
import arrowDown from "@/assets/img/icon/arrow-down.png"
import Image from "next/image";
import { useEffect, useState } from "react";

const BannerV13 = () => {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <>
            <div className="banner-style-thirteen-area">

                {/* Background Video */}
                {isClient && (
                    <video className="regular-video" muted loop autoPlay >
                        <source src="/assets/video/waves-2.mp4" type="video/mp4" />
                    </video>
                )}

                {/* Background Video */}
                {isClient && (
                    <video className="light-video" muted loop autoPlay>
                        <source src="/assets/video/waves-3.mp4" type="video/mp4" />
                    </video>
                )}

                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="banner-style-thriteen-content">
                                <div className="top-info">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <h2>Selected <strong>Work</strong></h2>
                                            <div className="scroll-down">
                                                <span>Scroll Down</span>
                                                <Image src={arrowDown} alt="Image Not Found" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 offset-lg-2">
                                            <p>
                                                Providing innovative solutions in branding area marketing, design, and advertising. These collaborate with clients to develop unique campaigns identities, and digital strategies that resonate with target audiences. Services may include graphic design.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-info">
                                    <div className="card-style-three">
                                        <div className="fun-fact">
                                            <div className="counter">
                                                <div className="timer">56</div>
                                                <div className="operator">K</div>
                                            </div>
                                            <div className="right">
                                                <div className="icon">
                                                    <Image src={shape6} alt="Image Not Found" />
                                                </div>
                                                <p>
                                                    Total number of clients we have handled so far
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerV13;