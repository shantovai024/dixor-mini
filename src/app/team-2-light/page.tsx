import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import QuickContact from "@/components/contact/QuickContact";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeLight from "@/components/switcher/ThemeLight";
import TeamV3 from "@/components/team/TeamV3";

export const metadata = {
    title: "Dixor - Team 2 Light"
};

const Team2LightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Team Experts' breadCrumb='team-2-light' />
                <TeamV3 hasTitle={false} />
                <QuickContact sectionClass='bg-gray' />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default Team2LightPage;