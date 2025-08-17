import BlogWithSidebarContent from '@/components/blog/BlogWithSidebarContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeLight from '@/components/switcher/ThemeLight';

export const metadata = {
    title: "Dixor - Blog With Sidebar Light"
};

const BlogWithSidebarLightPage = () => {
    return (
        <>
            <div className="smooth-scroll-container">
                <LayoutV1>
                    <Breadcrumb title='Blog Sidebar' breadCrumb='blog-with-sidebar-light' />
                    <BlogWithSidebarContent sectionClass="default-padding-bottom" />
                    <ThemeLight />
                </LayoutV1>
            </div>
        </>
    );
};

export default BlogWithSidebarLightPage;