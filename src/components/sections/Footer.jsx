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
        <StyledLink href="https://discord.gg/F6fnRMDpkk">
          <StyledButtonSecondary>
            <StyledLink href="https://discord.gg/F6fnRMDpkk">
              Join the Zoans Discord
            </StyledLink>
          </StyledButtonSecondary>
        </StyledLink>
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledImgGrid alt={"team-fox"} src={"/config/images/fox/8.png"} />
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledImgGrid alt={"team-owl"} src={"/config/images/bear/6.png"} />
      </s.Container>
    </ResponsiveWrapper>
  );
};
