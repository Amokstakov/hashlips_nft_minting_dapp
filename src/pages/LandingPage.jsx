import { useEffect, useState, useRef } from "react";
import * as s from "../styles/globalStyles";

import {
  StyledButtonLanding,
  StyledImgLanding,
} from "../components/components";
import { LandingNav } from "../components/nav/LandingNav";

import { Link } from "react-router-dom";

export const LandingPage = () => {
  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{
          padding: 24,
          backgroundColor: "var(--primary)",
          justifyContent: "center",
        }}
        image={"/config/images/bg.png"}
      >
        <LandingNav />
        <s.Container flex={1} jc={"center"} ai={"center"}>
          <StyledImgLanding alt={"example"} src={"/config/images/eye2g.png"} />
        </s.Container>
        <div style={{ display: "flex" }}>
          <StyledButtonLanding
            onClick={(e) => {
              e.preventDefault();
              dispatch(connect());
              getData();
            }}
          >
            CONNECT
          </StyledButtonLanding>
          <Link to="/homepage">
            <StyledButtonLanding>ENTER</StyledButtonLanding>
          </Link>
        </div>
      </s.Container>
    </s.Screen>
  );
};
