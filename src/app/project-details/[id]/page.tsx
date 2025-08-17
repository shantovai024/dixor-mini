import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import PortfolioV4Data from "@/assets/jsonData/portfolio/PortfolioV4Data.json";
import ProjectDetailsContent from "@/components/project/ProjectDetailsContent";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata = {
    title: "Dixor - Project Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const ProjectDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = PortfolioV4Data.find(portfolio => portfolio.id === parseInt(id))

    return ( 
        <>
            <LayoutV1>
                <Breadcrumb title='Case Studies' breadCrumb='project-details' />
                {data && <ProjectDetailsContent projectInfo={data} totalProjects={PortfolioV4Data.length} />}
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default ProjectDetailsPage;