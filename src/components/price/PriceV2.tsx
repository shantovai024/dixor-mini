import PriceV2Data from "@/assets/jsonData/price/PriceV2Data.json"
import SinglePriceV2 from "./SinglePriceV2";

const PriceV2 = () => {
    return (
        <>
            <div id="pricing" className="pricing-style-two-area default-padding bottom-less bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h5 className="sub-title">Best Pricing</h5>
                                <h2 className="title">Affordable pricing checkout Now</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="pricing-style-two-items">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <div className="nav nav-tabs pricing-tab-navs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab1" aria-selected="true">
                                        <span>Monthly</span>
                                    </button>
                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        <span>Yearly</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="tab-content pricing-tab-content" id="nav-tabContent">

                            {/* Monthly Tab */}
                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="nav-id-1">
                                <div className="row">
                                    {PriceV2Data.monthlyPlans.map(plan =>
                                        <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={plan.id}>
                                            <SinglePriceV2 plan={plan} />
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Yearly Tab */}
                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="nav-id-2">
                                <div className="row">
                                    {PriceV2Data.yearlyPlans.map(plan =>
                                        <div className="col-xl-4 col-lg-6 col-md-6 mb-30" key={plan.id}>
                                            <SinglePriceV2 plan={plan} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PriceV2;