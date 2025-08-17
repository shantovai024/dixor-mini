import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import DarkClass from '@/components/classes/DarkClass';
import QuickContact from '@/components/contact/QuickContact';
import FaqV1 from '@/components/faq/FaqV1';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeDark from '@/components/switcher/ThemeDark';

export const metadata = {
    title: "Dixor - Faq"
};

const FaqPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Frequently asked question' breadCrumb='faq' />
                <FaqV1 sectionClass='bg-gray' />
                <QuickContact title='Need' titleBold='Help?' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default FaqPage;