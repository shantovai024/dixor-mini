import PortfolioV2Data from "@/assets/jsonData/portfolio/PortfolioV2Data.json"
import SinglePortfolioV2 from "./SinglePortfolioV2";
import SplitAnimation from "../animation/SplitAnimation";
import Link from "next/link";

interface DataType {
    hasTitle?: boolean
    moreBtn?: boolean
    sectionClass?: string
}

const PortfolioV2 = ({ hasTitle, moreBtn, sectionClass }: DataType) => {
    return (
        <>
            <div className={`portfolio-style-two-area overflow-hidden ${sectionClass ? sectionClass : ""}`}>

                {/* Portfolio Title */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                                <div className="site-heading text-center">
                                    <h4 className="sub-title">Popular Projects</h4>
                                    <SplitAnimation>
                                        <h2 className="title split-text">Featured Works</h2>
                                    </SplitAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                }

                <div className="container mt--100 mt-xs--50">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row gutter-xl">
                                {PortfolioV2Data.map(portfolio =>
                                    <div className="col-lg-6 item-center" key={portfolio.id} >
                                        <SinglePortfolioV2 portfolio={portfolio} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Load More Btn */}
                    {moreBtn &&
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="text-center">
                                    <Link className="btn-round-animation dark mt-80" href="/contact-us">Load More</Link>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default PortfolioV2;