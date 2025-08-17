"use client"
import { useEffect } from 'react';

const DarkClassV6 = () => {

    useEffect(() => {
        document.body.classList.add("fixed-cursor");

        return () => {
            document.body.classList.remove("fixed-cursor");
        };
    }, []);

    return (
        <>

        </>
    );
};

export default DarkClassV6;