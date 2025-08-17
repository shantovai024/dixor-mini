import AboutV6 from '@/components/about/AboutV6';
import BannerV8 from '@/components/banner/BannerV8';
import BlogV2 from '@/components/blog/BlogV2';
import ClientsV1 from '@/components/clients/ClientsV1';
import FooterV1 from '@/components/footer/FooterV1';
import HeaderV1 from '@/components/header/HeaderV1';
import MultiSection from '@/components/multi/MultiSection';
import ProjectV1Light from '@/components/project/ProjectV1Light';
import ServicesV1 from '@/components/services/ServicesV1';
import ThemeLight from '@/components/switcher/ThemeLight';
import TeamV1 from '@/components/team/TeamV1';
import TestimonialV3 from '@/components/testimonial/TestimonialV3';

export const metadata = {
    title: "Dixor - Creative Digital Agency Light"
};

const Home1Light = () => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV1 />
                <BannerV8 />
                <AboutV6 sectionClass="default-padding" />
                <ServicesV1 sectionClass='bg-gray default-padding' hasTitle={true} />
                <ProjectV1Light />
                <TeamV1 hasTitle={true} />
                <ClientsV1 sectionClass='bg-dark' />
                <TestimonialV3 sectionClass='bg-gray' />
                <MultiSection />
                <BlogV2 sectionClass='bg-gray' />
                <FooterV1 />
                <ThemeLight />
            </div>
        </>
    );
};

export default Home1Light;