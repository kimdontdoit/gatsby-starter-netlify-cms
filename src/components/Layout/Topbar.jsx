import React, { useContext, useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link, useI18next } from "gatsby-plugin-react-i18next";

import classNames from "the-great-gatsby-theme/src/utils/classNames";

import ScrollProgress from "../ScrollProgress";
import SocialLinks from "../SocialLinks";
import ThemeContext from "../../context/ThemeContext";

import * as classes from "./Topbar.module.css";

const Topbar = () => {
    const [sticky, setSticky] = useState(false);
    const { topbarTransparent } = useContext(ThemeContext);
    const { t } = useI18next();

    const handleScroll = () => {
        window.scrollY > 150 ? setSticky(true) : setSticky(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", () => handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <>
            <ScrollProgress />
            <div
                className={classNames(
                    classes.topbar,
                    topbarTransparent && classes.topbarTransparent,
                    sticky && classes.sticky
                )}
            >
                <div className={`container`}>
                    <div className="max-w-screen-lg mx-auto flex flex-row py-4">
                        <div className={`flex-1 flex text-base`}>
                            <Link to="/">
                                <StaticImage
                                    src="../../images/kimdontdoit_logo_2023.svg"
                                    alt="Kimdontdoit Wavy Logo"
                                    objectFit="contain"
                                    loading="eager"
                                    placeholder="none"
                                    className={`${classes.logo}`}
                                />
                            </Link>

                            <ul className="flex ml-8 md:ml-16 items-center">
                                <li>
                                    <Link
                                        to="/articles"
                                        className={`font-medium hover:opacity-30`}
                                        activeClassName={`opacity-30`}
                                    >
                                        {t("posts")}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/snippets"
                                        className={`font-medium hover:opacity-30`}
                                        activeClassName={`opacity-30`}
                                    >
                                        Snippets
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/categories"
                                        className={`hidden md:inline font-medium hover:opacity-30`}
                                        activeClassName={`opacity-30`}
                                    >
                                        {t("categories")}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {!sticky && (
                            <div
                                className={`hidden md:flex flex-1 justify-end items-center `}
                            >
                                <SocialLinks />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Topbar;
