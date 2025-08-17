interface DataType {
    id?: number;
    title?: string;
    icon?: string;
    year?: number;
    delay?: string;
}

const SingleAwardV1 = ({ item }: { item: DataType }) => {
    const { title, icon, year, delay } = item;

    return (
        <>
            <div className="award-style-two-item wow fadeInUp" data-wow-delay={delay}>
                <div className="award">
                    <i className={icon} />
                    <h4>{title}</h4>
                </div>
                <div className="date">{year}</div>
            </div>
        </>
    );
};

export default SingleAwardV1;