import DarkClass from '@/components/classes/DarkClass';
import LayoutV1 from '@/components/layouts/LayoutV1';
import NotFoundContent from '@/components/notFound/Error404Content';
import ThemeDark from '@/components/switcher/ThemeDark';

export const metadata = {
    title: "Dixor - 404 Not Found"
};

const NotFoundPage = () => {
    return (
        <>
            <LayoutV1>
                <NotFoundContent />
                <DarkClass />
                <ThemeDark />
            </LayoutV1>
        </>
    );
};

export default NotFoundPage;