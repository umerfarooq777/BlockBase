import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box } from "@pankod/refine-mui";

import {BlockBaseLogo2} from "../assets/index";

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
    const { mutate: login } = useLogin<CredentialResponse>();

    const GoogleButton = (): JSX.Element => {
        const divRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            if (
                typeof window === "undefined" ||
                !window.google ||
                !divRef.current
            ) {
                return;
            }

            try {
                window.google.accounts.id.initialize({
                    ux_mode: "popup",
                    client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
                    callback: async (res: CredentialResponse) => {
                        if (res.credential) {
                            login(res);
                        }
                    },
                });
                window.google.accounts.id.renderButton(divRef.current, {
                    theme: "filled_blue",
                    size: "large",
                    type: "standard",
                });
            } catch (error) {
                console.log(error);
            }
        }, []); // you can also add your client id as dependency here

        return <div ref={divRef} />;
    };

    return (
        // <Box component="div" className="bgGrad" sx={{ backgroundColor: "#475ae8b5" }}>
        <Box component="div" className="bgGrad" >
            <Container
                component="main"
                maxWidth="xs"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    height: "100vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div>
                    <img src={BlockBaseLogo2} alt="BlockBase" width="700px" />
                    </div>
                    <Box mt={4}>
                        <GoogleButton />
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};
