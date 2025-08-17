import arrowThree from "@/assets/img/icon/arrow-three.png"
import Image from "next/image";
import Link from "next/link";

interface DataType {
    id?: number;
    thumb?: string;
    date?: string;
    title?: string;
    thumbFull?: string;
    tag?: string;
}

const SinglePortfolioV7 = ({ portfolio }: { portfolio: DataType }) => {
    const { thumb, tag, date, title, id } = portfolio;

    return (
        <>
            <div className="portfolio-style-six wow fadeInUp">
                <div className="thumb">
                    <Link href={`/project-details/${id}`}>
                        <Image src={`/assets/img/portfolio/${thumb}`} alt="Image Not Found" width={1600} height={850} />
                    </Link>
                    <div className="bottom">
                        <div className="tags">{tag}</div>
                        <div className="marker" />
                        <div className="date">{date}</div>
                    </div>
                </div>
                <div className="info">
                    <Link className="arrow-circle-btn" href="#">
                        <Image src={arrowThree} alt="Image Not Found" />
                    </Link>
                    <div className="overlay">
                        <h2><Link href={`/project-details/${id}`}>{title}</Link></h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SinglePortfolioV7;