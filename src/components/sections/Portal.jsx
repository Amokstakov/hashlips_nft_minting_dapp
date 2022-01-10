import { ResponsiveWrapper, StyledImgGrid, StyledImg } from "../components";
import * as s from "../../styles/globalStyles";

export const Portal = () => {
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
          The Portal
        </s.TextTitle>
        <s.SpacerSmall />
        <>
          <s.TextTitle
            style={{
              color: "var(--accent-text)",
              fontSize: 20,
              fontWeight: 100,
            }}
          >
            The portal is the crux of the Zoan Group NFT collection. It is the
            utility functionality that is accessed when someone gets a Zoan. It
            works by reading the specific metadata of your token. Currently in
            development, the portal a portin of the web application where you
            will get access to posted links and resources. Fellow community
            members can vote, anonymously on the quality of these links.
          </s.TextTitle>
          <s.SpacerMedium />
          <StyledImg alt={"bear-gif"} src={"/config/images/portal.png"} />
        </>
      </s.Container>
      <s.SpacerLarge />
    </ResponsiveWrapper>
  );
};
