import AboutV2 from '@/components/about/AboutV2';
import CursorEffect from '@/components/animation/CursorEffect';
import BannerV2 from '@/components/banner/BannerV2';
import BlogV1 from '@/components/blog/BlogV1';
import DarkClass from '@/components/classes/DarkClass';
import FooterV2 from '@/components/footer/FooterV2';
import HeaderV2 from '@/components/header/HeaderV2';
import PortfolioV5 from '@/components/portfolio/PortfolioV5';
import ServicesV6 from '@/components/services/ServicesV6';
import ThemeDark from '@/components/switcher/ThemeDark';
import TeamV3 from '@/components/team/TeamV3';
import TestimonialV2 from '@/components/testimonial/TestimonialV2';
import WhyChooseV3 from '@/components/whyChoose/WhyChooseV3';

export const metadata = {
    title: "Dixor - Home 2"
};

const Home2 = () => {
    return (
        <>
            <div className="smooth-scroll-container">
                <HeaderV2 />
                <BannerV2 />
                <AboutV2 />
                <ServicesV6 />
                <PortfolioV5 hasShape={true} />
                <WhyChooseV3 />
                <TeamV3 hasTitle={true} />
                <TestimonialV2 sectionClass='bg-gray' />
                <BlogV1 />
                <CursorEffect />
                <FooterV2 />
                <DarkClass />
                <ThemeDark />
            </div>
        </>
    );
};

export default Home2;