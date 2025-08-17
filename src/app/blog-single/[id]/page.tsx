import BlogSingleContent from '@/components/blog/BlogSingleContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import DarkClass from '@/components/classes/DarkClass';
import BlogV3Data from "@/assets/jsonData/blog/BlogV3Data.json"
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeDark from '@/components/switcher/ThemeDark';

export const metadata = {
    title: "Dixor - Blog Single"
};

interface Params {
    id: string;
}

interface PageProps {
    params: Promise<Params>;
}

const BlogSinglePage = async ({ params }: PageProps) => {

    const { id } = await params
    const data = BlogV3Data.find(portfolio => portfolio.id === parseInt(id))

    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Single' breadCrumb='blog-single' />
                {data && <BlogSingleContent sectionClass='default-padding-bottom' blogInfo={data} totalBlogs={BlogV3Data.length} />}
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default BlogSinglePage;