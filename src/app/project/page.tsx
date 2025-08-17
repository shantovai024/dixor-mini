import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import DarkClass from '@/components/classes/DarkClass';
import LayoutV1 from '@/components/layouts/LayoutV1';
import PortfolioV2 from '@/components/portfolio/PortfolioV2';
import ThemeDark from '@/components/switcher/ThemeDark';

export const metadata = {
    title: "Dixor - Project"
};

const ProjectPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='Project' />
                <PortfolioV2 moreBtn={true} sectionClass='default-padding-bottom' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default ProjectPage;