import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";

import {BlockBaseLogo1} from "../../../assets/index";
import {BlockBaseLogo2} from "../../../assets/index";

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
    const { Link } = useRouterContext();

    return (
        <Button fullWidth variant="text" disableRipple>
            <Link to="/">
                {collapsed ? (
                    <img src={BlockBaseLogo1} alt="BlockBase" width="50px" />
                ) : (
                    <img src={BlockBaseLogo2} alt="BlockBase" width="200px" />
                )}
            </Link>
        </Button>
    );
};
