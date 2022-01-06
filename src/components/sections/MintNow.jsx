import {
  ResponsiveWrapper,
  StyledImgGrid,
  StyledButtonSecondary,
  StyledLink,
} from "../components";
import * as s from "../../styles/globalStyles";
export const MintNow = () => {
  return (
    <ResponsiveWrapper style={{}}>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledLink href="/mint">
          <StyledButtonSecondary style={{ backgroundColor: "#e3b503" }}>
            <StyledLink href="/mint">MINT A ZOAN NOW</StyledLink>
          </StyledButtonSecondary>
        </StyledLink>
      </s.Container>
    </ResponsiveWrapper>
  );
};
