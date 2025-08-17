import Image from 'next/image';
import Link from 'next/link';

interface DataType {
    id?: number;
    iconLight?: string;
    title?: string;
    text?: string;
    activeClass?: string;
}

const SingleServiceV1Light = ({ service }: { service: DataType }) => {
    const { title, iconLight, text, activeClass, id } = service

    return (
        <>
            <div className="col-xl-3 col-lg-6 col-md-6 single-item">
                <div className={`services-style-one-item ${activeClass}`}>
                    <div className="icon">
                        <Image src={`/assets/img/icon/${iconLight}`} alt="Image Not Found" width={75} height={60} />
                    </div>
                    <h4><Link href={`/service-details-light/${id}`}>{title}</Link></h4>
                    <p>{text}</p>
                    <Link className="btn-full" href={`/service-details-light/${id}`}>Read More <i className="fas fa-arrow-right" /></Link>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV1Light;