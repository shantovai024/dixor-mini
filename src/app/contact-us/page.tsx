import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import DarkClass from '@/components/classes/DarkClass';
import ContactV1 from '@/components/contact/ContactV1';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ContactMap from '@/components/map/ContactMap';
import ThemeDark from '@/components/switcher/ThemeDark';

export const metadata = {
    title: "Dixor - Contact Us"
};

const ContactUsPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Get In Touch' breadCrumb='contact-us' />
                <ContactV1 />
                <ContactMap />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default ContactUsPage;