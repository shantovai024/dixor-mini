import Blog3ColumnContent from '@/components/blog/Blog3ColumnContent';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import DarkClass from '@/components/classes/DarkClass';
import LayoutV1 from '@/components/layouts/LayoutV1';
import ThemeDark from '@/components/switcher/ThemeDark';

export const metadata = {
    title: "Dixor - Blog 3 Column"
};

const Blog3ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <Breadcrumb title='Blog Grid' breadCrumb='blog-3-column' />
                <Blog3ColumnContent sectionClass='default-padding-bottom' />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default Blog3ColumnPage;