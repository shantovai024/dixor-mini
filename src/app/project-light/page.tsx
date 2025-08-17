import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PortfolioV2 from '@/components/portfolio/PortfolioV2';
import ThemeLight from '@/components/switcher/ThemeLight';

export const metadata = {
    title: "Dixor - Project Light"
};

const ProjectLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='Project-light' />
                <PortfolioV2 moreBtn={true} sectionClass='default-padding-bottom' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default ProjectLightPage;