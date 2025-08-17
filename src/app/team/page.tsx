import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import DarkClass from '@/components/classes/DarkClass';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeDark from '@/components/switcher/ThemeDark';
import TeamV1 from '@/components/team/TeamV1';

export const metadata = {
    title: "Dixor - Team"
};

const TeamPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Team Experts' breadCrumb='team' />
                <TeamV1 sectionClass='bg-gray' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default TeamPage;