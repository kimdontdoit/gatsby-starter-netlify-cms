import React from "react";
import { Link } from "gatsby-plugin-react-i18next";
import Tooltip from "@mui/material/Tooltip";
import { useLocation } from "@reach/router";
import classNames from "the-great-gatsby-theme/src/utils/classNames";

import logoDark from "../../../images/kimdontdoit-logo-2011.png";
import logoLight from "../../../images/kimdontdoit-logo-2011-l.png";

import * as classes from "./Logo.module.css";

const toolTipTwitter = {
  tooltip: {
    sx: {
      fontFamily: "Mona Sans",
      fontWeight: "500",
      color: "#fff",
      bgcolor: "#0ea5e9",
      "& .MuiTooltip-arrow": {
        color: "#0ea5e9"
      }
    }
  }
};

export const Logo = ({ sticky, light }) => {
  const { pathname } = useLocation();

  const logo = (
    <img
      alt="Kimdontdoit WAVY logo"
      src={light ? logoLight : logoDark}
      height="69"
      width="151"
      className={classNames(classes.root, sticky && classes.sticky)}
    />
  );

  if (pathname === "/" || pathname === "/en/") {
    return logo;
  }

  return (
    <Tooltip
      id="logo-tooltip"
      title="Back to home"
      arrow
      componentsProps={toolTipTwitter}
    >
      <Link to="/">{logo}</Link>
    </Tooltip>
  );
};
