import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import PortfolioV4Data from "@/assets/jsonData/portfolio/PortfolioV4Data.json";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeLight from "@/components/switcher/ThemeLight";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";

export const metadata = {
    title: "Dixor - Project Details Light"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsLightPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = PortfolioV4Data.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='project-details-light' />
                {data && <ProjectDetailsContent projectInfo={data} totalProjects={PortfolioV4Data.length} />}
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsLightPage;