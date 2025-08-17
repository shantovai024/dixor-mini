import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import QuickContact from '@/components/contact/QuickContact';
import FaqV1 from '@/components/faq/FaqV1';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeLight from '@/components/switcher/ThemeLight';

export const metadata = {
    title: "Dixor - Faq Light"
};

const FaqLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Frequently asked question' breadCrumb='faq-light' />
                <FaqV1 sectionClass='bg-gray' />
                <QuickContact title='Need' titleBold='Help?' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default FaqLightPage;