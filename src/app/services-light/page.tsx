import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import ClientsV1 from '@/components/clients/ClientsV1';
import FunFactV1 from '@/components/fact/FunFactV1';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PriceV1 from '@/components/price/PriceV1';
import ServicesV1 from '@/components/services/ServicesV1';
import ThemeLight from '@/components/switcher/ThemeLight';
import TestimonialV2 from '@/components/testimonial/TestimonialV2';

export const metadata = {
    title: "Dixor - Services Light"
};

const ServicesLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Our Services' breadCrumb='services' />
                <ServicesV1 sectionClass='default-padding-bottom' />
                <FunFactV1 sectionClass='default-padding-bottom' />
                <ClientsV1 sectionClass='bg-gray' />
                <TestimonialV2 />
                <PriceV1 sectionClass='bg-gray' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default ServicesLightPage;