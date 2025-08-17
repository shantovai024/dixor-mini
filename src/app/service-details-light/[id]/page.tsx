import ServicesV1Data from "@/assets/jsonData/services/ServicesV1Data.json"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ServiceDetailsContent from "@/components/services/ServiceDetailsContent";
import ThemeLight from "@/components/switcher/ThemeLight";

export const metadata = {
    title: "Dixor - Service Details Light"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ServiceDetailsLightPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = ServicesV1Data.find(service => service.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Our Services' breadCrumb='service-details-light' />
                {data && <ServiceDetailsContent serviceInfo={data} sectionClass='default-padding-bottom' />}
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default ServiceDetailsLightPage;