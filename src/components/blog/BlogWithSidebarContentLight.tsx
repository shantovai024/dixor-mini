"use client";
import BlogData from '@/assets/jsonData/blog/BlogData.json';
import ArchiveWidget from '../widgets/ArchiveWidget';
import CategoryWidget from '../widgets/CategoryWidget';
import FollowWidget from '../widgets/FollowWidget';
import GalleryWidget from '../widgets/GalleryWidget';
import RecentPostsWidgetLight from '../widgets/RecentPostsWidgetLight';
import SearchWidget from '../widgets/SearchWidget';
import TagsWidget from '../widgets/TagsWidget';
import SingleBlogStandardLight from './SingleBlogStandardLight';
import { useEffect, useState } from 'react';
import Pagination from 'react-paginate';
import { useRouter, useSearchParams } from 'next/navigation';

interface DataType {
    sectionClass?: string;
}

const BlogWithSidebarContentLight = ({ sectionClass }: DataType) => {

    // Pagination 
    const router = useRouter();
    const searchParams = useSearchParams();

    // Set initial page from URL
    const currentPageNumber = Number(searchParams.get('page')) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(3);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = BlogData.slice(startIndex, endIndex);

    const handlePageClick = (data: any) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);

        // Update the URL dynamically
        router.push(`/blog-with-sidebar-light?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(BlogData.length / itemsPerPage);

    return (
        <>
            <div className={`blog-area full-blog ${sectionClass}`}>
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-xl-8 col-lg-7 col-md-12 pr-35 pr-md-15 pl-md-15 pr-xs-15 pl-xs-15">
                                <div className="blog-item-box">
                                    {currentBlogData.map(blog =>
                                        <SingleBlogStandardLight blog={blog} key={blog.id} />
                                    )}
                                </div>

                                {/* Pagination */}
                                <div className="row">
                                    <div className="col-md-12 pagi-area text-center">
                                        <Pagination
                                            previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-left'></i>}
                                            nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fas fa-angle-double-right'></i>}
                                            breakLabel={'...'}
                                            pageCount={Math.ceil(BlogData.length / itemsPerPage)}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={handlePageClick}
                                            containerClassName={'pagination text-center'}
                                            activeClassName={'active'}
                                            pageClassName={'page-item'}
                                            pageLinkClassName={'page-link'}
                                            previousLinkClassName={'page-link'}
                                            nextLinkClassName={'page-link'}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="sidebar col-xl-4 col-lg-5 col-md-12 mt-md-50 mt-xs-50">
                                <aside>
                                    <SearchWidget />
                                    <RecentPostsWidgetLight />
                                    <CategoryWidget />
                                    <GalleryWidget />
                                    <ArchiveWidget />
                                    <FollowWidget />
                                    <TagsWidget />
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogWithSidebarContentLight;