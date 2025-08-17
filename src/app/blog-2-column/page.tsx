import Blog2ColumnContent from "@/components/blog/Blog2ColumnContent";
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import DarkClass from "@/components/classes/DarkClass";
import LayoutV1 from "@/components/layouts/LayoutV1";
import ThemeDark from "@/components/switcher/ThemeDark";

export const metadata = {
    title: "Dixor - Blog 2 Column"
};

const Blog2ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-2-column' />
                <Blog2ColumnContent sectionClass='default-padding-bottom' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Blog2ColumnPage;