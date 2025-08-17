import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import TeamV1Data from "@/assets/jsonData/team/TeamV1Data.json"
import TeamDetails from '@/components/team/TeamDetails';
import AchievementAward from '@/components/awards/AchievementAward';
import TeamQualification from '@/components/team/TeamQualification';
import DarkClass from '@/components/classes/DarkClass';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeDark from '@/components/switcher/ThemeDark';

export const metadata = {
    title: "Dixor - Team Details"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const TeamDetailsPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = TeamV1Data.find(team => team.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Team Details' breadCrumb='team-details' />
                {data && <TeamDetails teamInfo={data} sectionClass='default-padding-bottom' />}
                <AchievementAward />
                <TeamQualification />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default TeamDetailsPage;