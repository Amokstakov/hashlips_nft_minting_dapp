import { ResponsiveWrapper, StyledImgGrid } from "../components";
import * as s from "../../styles/globalStyles";

export const Welcome = () => {
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
            color: "var(--accent-text)",
          }}
        >
          The Group
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
            When you purchase a Zoan, you are doing a lot more than buying an
            avatar, or just joining the NFT craze. The Zoan Group are
            development focused, with an artist who compliments the efforts of
            the engineering team with rewardable digital art. You're supporting
            our team, innovating the ERC721 space, and empowering future goals
            and utilities. Zoan Group can serve as your digital identity and
            help grow your domain!
          </s.TextTitle>
          <s.SpacerMedium />
        </>
      </s.Container>
      <s.SpacerLarge />
    </ResponsiveWrapper>
  );
};
