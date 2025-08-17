import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    thumb?: string;
    date?: string;
    titleFirst?: string;
    titleLast?: string;
}

const SinglePortfolioV3 = ({ portfolio }: { portfolio: DataType }) => {
    const { id, thumb, date, titleFirst, titleLast } = portfolio

    return (
        <>
            <div className="portfolio-style-three-item">
                <div className="row align-center">
                    <div className="col-lg-7">
                        <Image src={`/assets/img/portfolio/${thumb}`} alt="Image Not Found" width={800} height={600} />
                    </div>
                    <div className="col-lg-5">
                        <div className="date">{date}</div>
                        <h2><Link href={`/project-details/${id}`}>{titleFirst} <strong>{titleLast}</strong></Link></h2>
                        <Link className="btn-animation mt-10" href={`/project-details/${id}`}>
                            <i className="fas fa-arrow-right" />
                            <span>See Details</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV3;