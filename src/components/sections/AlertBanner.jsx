import {
  ResponsiveWrapper,
  StyledImgGrid,
  StyledButtonSecondary,
  StyledLink,
} from "../components";
import * as s from "../../styles/globalStyles";
export const AlertBanner = () => {
  return (
    <ResponsiveWrapper style={{ backgroundColor: "#EE2625", padding: 24 }}>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <s.TextTitle
          style={{
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          DUE TO COMMUNITY FEEDBACK - WE ARE LAUNCHING ON THE POLYGON PROTOCOL -
          GET YOUR MATIC!
        </s.TextTitle>
      </s.Container>
    </ResponsiveWrapper>
  );
};
