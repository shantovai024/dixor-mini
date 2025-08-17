"use client"
import thumb2 from "@/assets/img/thumb/2.jpg";
import arrowIcon from "@/assets/img/icon/arrow.png";
import Image from "next/image";
import ServiceListData from "@/assets/jsonData/services/ServiceListData.json";
import ServiceList from "../services/ServiceList";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { useState } from "react";

interface DataType {
    sectionClass?: string;
}

const AboutV6 = ({ sectionClass }: DataType) => {
    const containerRef = useScrollAnimation();

    const [activeServiceId, setActiveServiceId] = useState(ServiceListData[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`about-style-six-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-5 col-lg-5">
                            <div className="thumb-style-four">
                                <Image src={thumb2} alt="Image Not Found" />
                            </div>
                        </div>
                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div className="about-style-six-info text-scroll-animation" ref={containerRef}>
                                <div className="info">
                                    <div className="d-flex">
                                        <Link href="/about-us"><Image src={arrowIcon} alt="Image Not Found" /></Link>
                                        <h2 className="title text">Best creative & digital agency</h2>
                                    </div>
                                    <p className="text">
                                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably
                                    </p>
                                </div>
                                <ul className="service-list">
                                    {ServiceListData.map(service =>
                                        <li
                                            key={service.id}
                                            onMouseEnter={() => handleMouseEnter(service.id)}
                                            onMouseLeave={handleMouseLeave}
                                        >
                                            <Link href="/services" className={`${activeServiceId === service.id ? 'active' : ''}`}>
                                                <ServiceList service={service} />
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV6;