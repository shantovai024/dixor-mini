"use client"
import PriceV1Data from "@/assets/jsonData/price/PriceV1Data.json"
import SplitAnimation from '../animation/SplitAnimation';
import { useState } from "react";
import SinglePriceV1 from "./SinglePriceV1";

interface DataType {
    sectionClass?: string
}

const PriceV1 = ({ sectionClass }: DataType) => {

    const [activeServiceId, setActiveServiceId] = useState(PriceV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveServiceId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <div className={`pricing-style-one-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Best Pricing</h4>
                                <SplitAnimation>
                                    <h2 className="title split-text">The best pricing plans to get your best rate</h2>
                                </SplitAnimation>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-items">
                        <div className="row">
                            {PriceV1Data.map(plan =>
                                <div
                                    className="col-xl-6"
                                    key={plan.id}
                                    onMouseEnter={() => handleMouseEnter(plan.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SinglePriceV1 plan={plan} activeServiceId={activeServiceId} />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV1;