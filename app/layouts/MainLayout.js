"use client"

import TopMenu from "./includes/TopMenu";
import MainHeader from "./includes/MainHeader";
import SubMenu from "./includes/SubMenu";
import Footer from "./includes/Footer";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function MainLayout ({children}) {
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        window.addEventListener("storage", function () {
            let res = this.localStorage.getItem("isLoading");
            res === 'false' ? setIsLoading(false) : setIsLoading(true);
        })
    })
    return (
        <>
            <div id="Mainlayout" className="min-w-[1050px] max-w-[1300px] mx-auto">
                <div>
                    {isLoading ? <Loading/> :<div></div>}
                    <TopMenu/>
                    <MainHeader/>
                    <SubMenu/>

                    {children}

                    <Footer/>
                </div>
            </div>
        </>
    )
}