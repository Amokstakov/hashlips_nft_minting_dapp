import { ResponsiveWrapper, StyledImgGrid } from "../components";
import * as s from "../../styles/globalStyles";

export const About = () => {
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
        id="about"
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
            color: "var(--accent-text)",
          }}
        >
          Welcome To The Zoan Group
        </s.TextTitle>
        <s.SpacerSmall />
        <s.TextTitle
          style={{
            textAlign: "center",
            color: "var(--accent-text)",
            fontSize: 20,
            fontWeight: 100,
          }}
        >
          Zoan Group is a collection of 5,000 uniquely hand-drawn utility backed
          collectible NFT's. There are 4 different base Zoans: The Bear, The
          Fox, The Butterfly and The Elephant. Owning a Zoan acts a personal
          membership token, however individual Zoan's provide unique access to
          the holders. Each Zoan curates to a domain topic, where fellow
          community members can provide and vote on resources. Read below on
          what what domain each Zoan owns.
        </s.TextTitle>
        <s.SpacerSmall />
        <s.SpacerXSmall />
        <s.SpacerSmall />
        <s.SpacerLarge />
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledImgGrid alt={"about-fox"} src={"/config/images/fox/4.png"} />
        <StyledImgGrid
          alt={"about-elephant"}
          src={"/config/images/ellie/10.png"}
        />
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledImgGrid
          alt={"about-butterfly"}
          src={"/config/images/butter/10.png"}
        />
        <StyledImgGrid alt={"about-bear"} src={"/config/images/bear/4.png"} />
      </s.Container>
    </ResponsiveWrapper>
  );
};
