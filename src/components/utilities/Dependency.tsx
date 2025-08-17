"use client";
import { useEffect } from 'react';
import { animationCreate } from '@/utils/utils';
import { ScrollToTop } from 'react-simple-scroll-up';
import { ToastContainer } from 'react-toastify';

const Dependency = () => {

    useEffect(() => {

        // Dynamically import Bootstrap JS to avoid SSR issues
        import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
            console.log('Project loaded successfully.');
        }).catch((err) => {
            console.error('Project loading ...:', err);
        });

        // WOW JS animation
        const timer = setTimeout(() => {
            animationCreate();
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <ScrollToTop symbol={<i className="fas fa-long-arrow-up"></i>} />
            <ToastContainer />
        </>
    );
};

export default Dependency;