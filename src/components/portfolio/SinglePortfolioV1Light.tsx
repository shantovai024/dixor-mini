import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumbLight?: string;
    text?: string;
    textBold?: string;
}

const SinglePortfolioV1Light = ({ portfolio }: { portfolio: DataType }) => {
    const { id, thumbLight, text, textBold } = portfolio

    return (
        <>
            <div className="portfolio-style-one-item">
                <Image src={`/assets/img/portfolio/${thumbLight}`} alt="Image Not Found" width={710} height={800} />
                <div className="info">
                    <h2><Link href={`/project-details/${id}`}>{text} <strong>{textBold}</strong></Link></h2>
                    <Link className="btn-animation mt-30" href={`/project-details/${id}`}>
                        <i className="fas fa-arrow-right" /> <span>See Details</span>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV1Light;