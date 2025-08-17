import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import ContactV1 from "@/components/contact/ContactV1";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ContactMap from "@/components/map/ContactMap";
import ThemeLight from "@/components/switcher/ThemeLight";

export const metadata = {
    title: "Dixor - Contact Us Light"
};

const ContactUsLightPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Get In Touch' breadCrumb='contact-us-light' />
                <ContactV1 />
                <ContactMap />
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default ContactUsLightPage;