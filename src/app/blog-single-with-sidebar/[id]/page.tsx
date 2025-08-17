import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import BlogV3Data from "@/assets/jsonData/blog/BlogV3Data.json"
import BlogSingleWithSidebarContent from "@/components/blog/BlogSingleWithSidebarContent";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata = {
    title: "Dixor - Blog Single With Sidebar"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleWithSidebarPage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = BlogV3Data.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-single-with-sidebar' />
                {data && <BlogSingleWithSidebarContent sectionClass='default-padding-bottom' blogInfo={data} totalBlogs={BlogV3Data.length} />}
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default BlogSingleWithSidebarPage;