"use client"
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import ProjectIdeaV1 from "../project/ProjectIdeaV1";
import WhyChooseV1 from "../whyChoose/WhyChooseV1";
import ExpertiseV1Light from "../expertise/ExpertiseV1Light";

const MultiSectionLight = () => {
    useHorizontalScroll();

    return (
        <>
            <div className="multi-section overflow-hidden">
                <div className="thecontainer">
                    <div className="panel overflow-hidden">
                        <WhyChooseV1 />
                    </div>
                    <div className="panel overflow-hidden bg-gray">
                        <ExpertiseV1Light />
                    </div>
                    <div className="panel contact-panel overflow-hidden">
                        <ProjectIdeaV1 />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MultiSectionLight;