import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    iconLight?: string;
    titleFirst?: string;
    titleLast?: string;
    text?: string;
    number?: string;
}

const SingleServiceV3Light = ({ service }: { service: DataType }) => {
    const { id, iconLight, titleFirst, titleLast, text, number } = service

    return (
        <>
            <div className="service-three-content">
                <div className="top">
                    <div className="icon">
                        <Image src={`/assets/img/icon/${iconLight}`} alt="Image Not Found" width={130} height={130} />
                    </div>
                </div>
                <div className="info">
                    <h4><Link href={`/service-details-light/${id}`}>{titleFirst} <br /> {titleLast}</Link></h4>
                    <p>{text}</p>
                </div>
                <div className="bottom">
                    {number}
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3Light;