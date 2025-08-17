"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import banner1 from "@/assets/img/banner/1.jpg";
import ModalVideo from "react-modal-video";

interface DataType {
    navbarPlacement?: string;
    toggleSubMenu?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MainMenu = ({ navbarPlacement, toggleSubMenu }: DataType) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Homes</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/">Home Main</Link></li>
                        <li><Link href="/home-4">Modern Agency</Link></li>
                        <li><Link href="/home-2">Creative Agency</Link></li>
                        <li><Link href="/home-3">Startup Agency</Link></li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Homes Light
                                Version</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/home-1-light">Home Main</Link></li>
                                <li><Link href="/home-4-light">Modern Agency</Link></li>
                                <li><Link href="/home-2-light">Creative Agency</Link></li>
                                <li><Link href="/home-3-light">Startup Agency</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/about-us">About Us</Link></li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}> Team Members</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/team">Team Style One</Link></li>
                                <li><Link href="/team-2">Team Style Two</Link></li>
                                <li><Link href="/team-details/1">Team Details</Link></li>
                            </ul>
                        </li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}> Projects</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/project">Project Showcase</Link></li>
                                <li><Link href="/project-2">Interactive Portfolio</Link></li>
                                <li><Link href="/project-details/1">Project Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/contact-us">Contact Us</Link></li>
                        <li><Link href="/faq">Faq</Link></li>
                        <li><Link href="/not-found">Error Page</Link></li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Pages Light Version</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/about-us-light">About Us</Link></li>
                                <li><Link href="/team-light">Team Style One</Link></li>
                                <li><Link href="/team-2-light">Team Style Two</Link></li>
                                <li><Link href="/team-details-light/1">Team Details</Link></li>
                                <li><Link href="/project-light">Project Showcase</Link></li>
                                <li><Link href="/project-2-light">Interactive Portfolio</Link></li>
                                <li><Link href="/project-details-light/1">Project Details</Link></li>
                                <li><Link href="/contact-us-light">Contact Us</Link></li>
                                <li><Link href="/faq-light">Faq</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/services">Service Version One</Link></li>
                        <li><Link href="/services-2">Service Version Two</Link></li>
                        <li><Link href="/services-3">Service Version Three</Link></li>
                        <li><Link href="/service-details/1">Marketing Strategy</Link></li>
                        <li><Link href="/service-details/1">Enterprise Consulting</Link></li>
                        <li><Link href="/service-details/1">Growth Tracking</Link></li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Services Light
                                Version</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/services-light">Service Version One</Link></li>
                                <li><Link href="/services-2-light">Service Version Two</Link></li>
                                <li><Link href="/services-3-light">Service Version Three</Link></li>
                                <li><Link href="/service-details-light/1">Marketing Strategy</Link></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/blog-standard">Blog Standard</Link></li>
                        <li><Link href="/blog-with-sidebar">Blog With Sidebar</Link></li>
                        <li><Link href="/blog-2-column">Blog Grid Two column</Link></li>
                        <li><Link href="/blog-3-column">Blog Grid Three column</Link></li>
                        <li><Link href="/blog-single/1">Blog Single</Link></li>
                        <li><Link href="/blog-single-with-sidebar/1">Blog Single With Sidebar</Link></li>
                        <li className="dropdown">
                            <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={toggleSubMenu}>Blog Light Version</Link>
                            <ul className="dropdown-menu">
                                <li><Link href="/blog-standard-light">Blog Standard</Link></li>
                                <li><Link href="/blog-with-sidebar-light">Blog With Sidebar</Link></li>
                                <li><Link href="/blog-2-column-light">Blog Grid Two column</Link></li>
                                <li><Link href="/blog-3-column-light">Blog Grid Three column</Link></li>
                                <li><Link href="/blog-single-light/1">Blog Single</Link></li>
                                <li><Link href="/blog-single-with-sidebar-light/1">Blog Single With Sidebar</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><Link href="/contact-us">contact</Link></li>
            </ul>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="35mvh-2oII8" onClose={() => setOpen(false)} />
        </>
    );
};

export default MainMenu;