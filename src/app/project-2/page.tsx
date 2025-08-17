import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import LayoutV1 from "@/components/layouts/LayoutV1";
import PortfolioV3 from "@/components/portfolio/PortfolioV3";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata = {
    title: "Dixor - Project 2"
};

const Project2Page = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='Project-2' />
                <PortfolioV3 sectionClass='default-padding-bottom' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Project2Page;