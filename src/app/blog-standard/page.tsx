import BlogStandardContent from "@/components/blog/BlogStandardContent";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata = {
    title: "Dixor - Blog Standard"
};

const BlogStandardPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Standard' breadCrumb='blog-standard' />
                <BlogStandardContent sectionClass='default-padding-bottom' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default BlogStandardPage;