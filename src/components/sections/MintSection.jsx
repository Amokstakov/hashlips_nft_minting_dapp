import {
  ResponsiveWrapper,
  StyledImgGrid,
  StyledButtonSecondary,
  StyledLink,
} from "../components";
import * as s from "../../styles/globalStyles";
export const MintSection = () => {
  return (
    <ResponsiveWrapper
      style={{ backgroundColor: "var(--primary)", padding: 24 }}
    >
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <s.TextTitle
          style={{
            fontWeight: "bold",
            color: "var(--accent)",
          }}
        >
          BUY A ZOAN
        </s.TextTitle>
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <s.TextTitle
          style={{
            color: "var(--accent)",
            fontSize: 20,
            fontWeight: 100,
          }}
        >
          We are getting everything ready for the launch and initial mint of
          Zoans. Follow our Twitter and Discord for news and contests to join
          our whitelist!
        </s.TextTitle>
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledLink href="/mint">
          <StyledButtonSecondary>
            <StyledLink href="/mint">MINT A ZOAN NOW</StyledLink>
          </StyledButtonSecondary>
        </StyledLink>
      </s.Container>
    </ResponsiveWrapper>
  );
};
