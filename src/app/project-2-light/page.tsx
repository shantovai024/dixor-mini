import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PortfolioV3 from '@/components/portfolio/PortfolioV3';
import ThemeLight from '@/components/switcher/ThemeLight';

export const metadata = {
    title: "Dixor - Project 2 Light"
};

const Project2LightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='Project-2-light' />
                <PortfolioV3 sectionClass='default-padding-bottom' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default Project2LightPage;