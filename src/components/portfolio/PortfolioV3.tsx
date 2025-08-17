import PortfolioV3Data from '@/assets/jsonData/portfolio/PortfolioV3Data.json';
import SinglePortfolioV3 from './SinglePortfolioV3';
import SplitAnimation from '../animation/SplitAnimation';

interface DataType {
    hasTitle?: boolean;
    sectionClass?: string;
}

const PortfolioV3 = ({ hasTitle, sectionClass }: DataType) => {
    return (
        <>
            <div className={`portfolio-style-three-area ${sectionClass ? sectionClass : ""}`}>

                {/* Portfolio Title  */}
                {hasTitle &&
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 offset-lg-3">
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

                <div className="container">
                    <div className="portfolio-style-three-items">
                        {PortfolioV3Data.map(portfolio =>
                            <SinglePortfolioV3 portfolio={portfolio} key={portfolio.id} />
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default PortfolioV3;