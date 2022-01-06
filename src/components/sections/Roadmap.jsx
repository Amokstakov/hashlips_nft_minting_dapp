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
          }}
        >
          Development Roadmap
        </s.TextTitle>
        <s.Container
          flex={1}
          jc={"start"}
          style={{
            padding: 12,
            borderRadius: 24,
            borderColor: "red",
            border: "4px dashed var(--accent-text)",
          }}
          id="roadmap"
        >
          <div style={{ display: "flex" }}>
            <s.TextTitle
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              2021 - Q4
            </s.TextTitle>
            <div style={{ paddingLeft: "15px" }}>
              <s.TextListItem>
                Finalize hand-drawn base images and traits
              </s.TextListItem>
              <s.TextListItem>
                Launch ERC721 contract on main-net
              </s.TextListItem>
              <s.TextListItem>
                Finalize development on website and minting mechanics
              </s.TextListItem>
            </div>
          </div>
        </s.Container>
        <s.SpacerMedium />
        <s.Container
          flex={2}
          jc={"start"}
          style={{
            padding: 12,
            borderRadius: 24,
            borderColor: "red",
            border: "4px dashed var(--accent-text)",
          }}
        >
          <div style={{ display: "flex" }}>
            <s.TextTitle
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              2022 - Q1
            </s.TextTitle>
            <div style={{ paddingLeft: "15px" }}>
              <s.TextListItem>
                Launch giveaways to gather members for whitelist
              </s.TextListItem>
              <s.TextListItem>
                Generate 5000 NFTs based on drawn traits and base layers
              </s.TextListItem>
              <s.TextListItem>
                Hold first Discord meeting for community engagement and feedback
              </s.TextListItem>
              <s.TextListItem>Launch - Open Minting Presale</s.TextListItem>
              <s.TextListItem>Launch - Open General sale</s.TextListItem>
            </div>
          </div>
        </s.Container>
        <s.SpacerMedium />
        <s.Container
          flex={2}
          jc={"start"}
          style={{
            padding: 12,
            borderRadius: 24,
            borderColor: "red",
            border: "4px dashed var(--accent-text)",
          }}
        >
          <div style={{ display: "flex" }}>
            <s.TextTitle
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "var(--accent-text)",
              }}
            >
              2022 - Q2
            </s.TextTitle>
            <div style={{ paddingLeft: "15px" }}>
              <s.TextListItem>
                Development and further testing of Zoan portal
              </s.TextListItem>
              <s.TextListItem>
                Development and release of ZoanGroup DAO with $ZOAN token.
              </s.TextListItem>
              <s.TextListItem>
                Hold second Discord meeting for community engagement and
                feedback
              </s.TextListItem>
              <s.TextListItem>Launch - Giveaway rare Zoan</s.TextListItem>
              <s.TextListItem>Release new base Zoan</s.TextListItem>
            </div>
          </div>
        </s.Container>
      </s.Container>
    </ResponsiveWrapper>
  );
};
