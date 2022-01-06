import { ResponsiveWrapper, StyledImgGrid } from "../components";
import * as s from "../../styles/globalStyles";

export const Ecosystem = () => {
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
        id="ecosystem"
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          Ecosystem
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
            Each Zoan is uniquely generated from over 100 possile traits. Each
            base zoan has their own specific traits, and some are rarer than the
            others.
            <s.SpacerMedium />
            The Zoans are stored as ERC-721 tokens on the Ethereum blockchain
            and hosted on IPFS. Purchasing a single Zoan costs 0.08 ETH.
            <s.SpacerMedium />
            Zoan is about building communities. Zoan owners will have access to
            their Zoan specific portal which will hold links and resources
            specific to their domain. Future development will replicate a DAO
            voting system for what links are better than others.
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
        <StyledImgGrid
          alt={"ecosystem-butterfly"}
          src={"/config/images/butter/8.png"}
        />
        <StyledImgGrid
          alt={"ecosystem-elephant"}
          src={"/config/images/ellie/1.png"}
        />
      </s.Container>
      <s.Container flex={1} jc={"center"} ai={"center"}>
        <StyledImgGrid alt={"ecosystem-fox"} src={"/config/images/fox/7.png"} />
        <StyledImgGrid
          alt={"ecosystem-bear"}
          src={"/config/images/bear/1.png"}
        />
      </s.Container>
    </ResponsiveWrapper>
  );
};
