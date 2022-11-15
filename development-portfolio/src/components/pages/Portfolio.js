import React from "react";
import AbsoluteWrapper from "../AbsoluteWrapper";
import Footer from "../Footer";
import { AiFillGithub } from "react-icons/ai";

import portfolioItems from "../../data/portfolioItems";
import "../../styles/Portfolio.css";

export default function Portfolio() {

    return (
        <AbsoluteWrapper>
             <div className="m-5 mt-0 mb-0 d-flex flex-column align-items-center align-items-lg-start">
                <h2>Portfolio</h2>
                <div className="d-flex flex-row flex-wrap justify-content-center">
                    {portfolioItems.slice(0).reverse().map((item) => (
                        <div key={item.id} className="card text-black col-10 col-lg-5 m-4">
                            <div className="d-flex justify-content-center align-items-start overflow-hidden">
                                <img className="flex-shrink-0 portfolio-img" src={item.imgSrc} alt={item.name}></img>
                            </div>
                            <div className="card-img-overlay overlay d-flex flex-column justify-content-center align-items-center">
                                <h5 className="card-title w-100 h-20 text-center">
                                    <a className="m-2 portfolio-link" href={item.deploymentUrl} target="_blank" rel="noreferrer">{item.name}</a>
                                    <a className="m-2 portfolio-link icon-link" href={item.githubRepo} target="_blank" rel="noreferrer"><AiFillGithub /></a>
                                </h5>
                                <p className="card-text text-center w-100 h-80 m-2 portfolio-desc">{item.skills}</p>
                                <p className="card-text text-center w-100 h-80 m-2 portfolio-desc">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </AbsoluteWrapper> 
    );
};