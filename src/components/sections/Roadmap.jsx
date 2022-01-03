import { ResponsiveWrapper, StyledImgGrid } from "../components";
import * as s from "../../styles/globalStyles";
export const Roadmap = () => {
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
          Development Roadmap
        </s.TextTitle>
        <s.Container
          flex={1}
          jc={"start"}
          style={{
            padding: 24,
            borderRadius: 24,
            borderColor: "red",
            border: "4px dashed var(--accent-text)",
          }}
          id="roadmap"
        >
          <div style={{ display: "flex" }}>
            <s.TextTitle
              style={{
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              2021 - Q4
            </s.TextTitle>
            <div style={{ padding: "30px" }}>
              <s.TextListItem>
                Finalize hand-drawn base images and traits
              </s.TextListItem>
              <s.TextListItem>
                Launch ERC721 contract on test-net
              </s.TextListItem>
              <s.TextListItem>Finalize development on website</s.TextListItem>
            </div>
          </div>
        </s.Container>
        <s.SpacerMedium />
        <s.Container
          flex={2}
          jc={"start"}
          style={{
            padding: 24,
            borderRadius: 24,
            borderColor: "red",
            border: "4px dashed var(--accent-text)",
          }}
        >
          <div style={{ display: "flex" }}>
            <s.TextTitle
              style={{
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              2022 - Q1
            </s.TextTitle>
            <div style={{ padding: "30px" }}>
              <s.TextListItem>
                Launch giveaways to gather members for whitelist
              </s.TextListItem>
              <s.TextListItem>
                Release all source code on GitHub/OpenSea
              </s.TextListItem>
              <s.TextListItem>
                Hold first Discord meeting for community engagement and feedback
              </s.TextListItem>
              <s.TextListItem>Launch - Open Minting</s.TextListItem>
              <s.TextListItem>Launch - Giveaway rare Zoan</s.TextListItem>
            </div>
          </div>
        </s.Container>
        <s.SpacerMedium />
        <s.Container
          flex={2}
          jc={"start"}
          style={{
            padding: 24,
            borderRadius: 24,
            borderColor: "red",
            border: "4px dashed var(--accent-text)",
          }}
        >
          <div style={{ display: "flex" }}>
            <s.TextTitle
              style={{
                fontSize: 50,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              2022 - Q2
            </s.TextTitle>
            <div style={{ padding: "30px" }}>
              <s.TextListItem>
                Development and release of ZoanGroup DAO with $ZOAN token.
              </s.TextListItem>
              <s.TextListItem>
                Hold second Discord meeting for community engagement and
                feedback
              </s.TextListItem>
              <s.TextListItem>
                Launch - If initial 5,000 mint sold out - release another Zoan
              </s.TextListItem>
              <s.TextListItem>
                Launch - Collaborate with NFT influencers
              </s.TextListItem>
            </div>
          </div>
        </s.Container>
      </s.Container>
    </ResponsiveWrapper>
  );
};
