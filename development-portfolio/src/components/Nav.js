import React from "react";
import "../styles/Nav.css";
import { NavLink } from "react-router-dom";

export default function Nav({pages, currentPage, handlePage}) { 
    return (
        <nav className="col-12 col-lg-6 p-3 align-self-center align-self-lg-end">
            <ul className="nav nav-pills nav-fill flex-row justify-content-end navbar-nav">              
                {pages.map((page) => (
                    <li key={page.id} className="nav-item col-4 col-lg-1 ms-5 me-5 ms-lg-4 me-lg-4">
                        <NavLink className={page.name === currentPage ? "btn customActive" : "btn btn-light"} to={`/Development-Portfolio/${page.link}`}>
                            {page.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};