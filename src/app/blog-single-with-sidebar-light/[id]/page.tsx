import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import BlogV3Data from "@/assets/jsonData/blog/BlogV3Data.json"
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeLight from "@/components/switcher/ThemeLight";
import BlogSingleWithSidebarContent from "@/components/blog/BlogSingleWithSidebarContent";

export const metadata = {
    title: "Dixor - Blog Single With Sidebar Light"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleWithSidebarLightPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = BlogV3Data.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Single' breadCrumb='blog-single-with-sidebar-light' />
                {data && <BlogSingleWithSidebarContent sectionClass='default-padding-bottom' blogInfo={data} totalBlogs={BlogV3Data.length} />}
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default BlogSingleWithSidebarLightPage;