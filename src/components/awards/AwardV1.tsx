import AwardV1Data from '@/assets/jsonData/award/AwardV1Data.json'
import SingleAwardV1 from './SingleAwardV1';
import SplitAnimation from '../animation/SplitAnimation';

interface DataType {
    sectionClass?: string
}

const AwardV1 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`award-area ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: 'url(/assets/img/shape/7.png)' }}>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-6">
                            <h4 className="sub-title">Our Award</h4>
                            <SplitAnimation>
                                <h2 className="title split-text">Award we achieve</h2>
                            </SplitAnimation>
                        </div>
                        {AwardV1Data.map(item =>
                            <div className="col-lg-6" key={item.id}>
                                <SingleAwardV1 item={item} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default AwardV1;