import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json"
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata = {
    title: "Dixor - Service Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ServicesV1Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Our Services' breadCrumb='service-details' />
                {data && <ServiceDetailsContent serviceInfo={data} sectionClass='default-padding-bottom' />}
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsPage;