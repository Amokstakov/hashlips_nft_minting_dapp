import {
  ResponsiveWrapper,
  StyledImgGrid,
  StyledButton,
  FooterDiv,
  FooterUL,
  FooterATag,
  FooterLI,
  StyledButtonSecondary,
  StyledLink,
} from "../components";
import * as s from "../../styles/globalStyles";
export const Footer = () => {
  return (
    <ResponsiveWrapper>
      <s.Container
        flex={2}
        jc={"center"}
        ai={"center"}
        style={{
          padding: 24,
          borderRadius: 24,
        }}
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            color: "var(--accent-text)",
          }}
        >
          Join the Community
        </s.TextTitle>
        <s.TextTitle
          style={{
            fontSize: 20,
            color: "var(--accent-text)",
          }}
        >
          Have any questions about the project? <br></br> Join the discord for
          more information.
        </s.TextTitle>
        <s.SpacerLarge />
        <StyledButtonSecondary>
          <StyledLink>Join the Zoans Discord</StyledLink>
        </StyledButtonSecondary>
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}></s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}></s.Container>
    </ResponsiveWrapper>
  );
};
