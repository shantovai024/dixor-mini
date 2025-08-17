import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json"
import AchievementAward from "@/components/awards/AchievementAward";
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeLight from "@/components/switcher/ThemeLight";
import TeamDetails from "@/components/team/TeamDetails";
import TeamQualification from "@/components/team/TeamQualification";

export const metadata = {
    title: "Dixor - Team Details Light"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const TeamDetailsLightPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamV1Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Team Experts' breadCrumb='team-details-light' />
                {data && <TeamDetails teamInfo={data} sectionClass='default-padding-bottom' />}
                <AchievementAward />
                <TeamQualification />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default TeamDetailsLightPage;