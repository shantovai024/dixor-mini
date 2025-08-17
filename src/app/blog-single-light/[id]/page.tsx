import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import BlogV3Data from "@/assets/jsonData/blog/BlogV3Data.json"
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeLight from "@/components/switcher/ThemeLight";
import BlogSingleContent from "@/components/blog/BlogSingleContent";

export const metadata = {
    title: "Dixor - Blog Single Light"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSingleLightPage = async ({ params }: PageProps) => {

    const { id } = await params;
    const data = BlogV3Data.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Single' breadCrumb='blog-single-light' />
                {data && <BlogSingleContent sectionClass='default-padding-bottom' blogInfo={data} totalBlogs={BlogV3Data.length} />}
                <ThemeLight />
            </LayoutV1>
        </>
    );
};

export default BlogSingleLightPage;