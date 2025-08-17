import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeLight from '@/components/switcher/ThemeLight';
import TeamV1 from '@/components/team/TeamV1';

export const metadata = {
    title: "Dixor - Team Light"
};

const TeamLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Team Experts' breadCrumb='team-light' />
                <TeamV1 sectionClass='bg-gray' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default TeamLightPage;