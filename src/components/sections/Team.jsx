import { ResponsiveWrapper, StyledImgGrid } from "../components";
import * as s from "../../styles/globalStyles";
export const Team = () => {
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
        id="team"
      >
        <s.TextTitle
          style={{
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          The Team
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
            Zoan Group was created by three colleagues who wanted to create a
            utility-backed NFTs. We just wanted to create, build, test and shake
            up the NFT space
            <s.SpacerMedium />
            <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
              baseW:
            </span>{" "}
            Lead developer. Former FAANG engineer who now works on different
            blockchains
            <s.SpacerMedium />
            <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
              baseG:
            </span>{" "}
            Lead artist. Created every layer of art on photoshop, with other
            reserves
            <s.SpacerMedium />
            <span style={{ color: "var(--primary)", fontWeight: "bold" }}>
              CometCrol
            </span>{" "}
            Lead Solidity developer. Started in crypto back in 2017. Main
            contributor to ONE Harmony blockchain projects
          </s.TextTitle>
          <s.SpacerSmall />
        </>
        <>
          <s.SpacerXSmall />
          <s.SpacerSmall />
        </>
        <s.SpacerMedium />
      </s.Container>
      <s.SpacerLarge />
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledImgGrid alt={"team-fox"} src={"/config/images/ellie/8.png"} />
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledImgGrid alt={"team-owl"} src={"/config/images/base/owlG.png"} />
      </s.Container>
    </ResponsiveWrapper>
  );
};
