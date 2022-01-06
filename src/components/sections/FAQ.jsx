import { ResponsiveWrapper, StyledImgGrid } from "../components";
import * as s from "../../styles/globalStyles";
import { Accordion } from "../utils/Accordion";

export const Faq = () => {
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
        id="faq"
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 50,
            fontWeight: "bold",
          }}
        >
          Frequently Asked Questions
        </s.TextTitle>
        <s.SpacerSmall />
        <s.SpacerSmall />
        <s.SpacerLarge />
        <div className="accordion">
          <Accordion
            title={"IS THERE A PRESALE?"}
            content={
              "Due to our current early development plan, we are planning to have a presale near the end of January (29th or 30th) at 5PM PST. Whitelisted members will be able to mint a maximum of 5 NFTs per registered address at a reduced price of 0.05 Eth + gas fees per NFT."
            }
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WHEN IS THE SALE"}
            content={
              "The general sale will take place the next day - after the presale. Either January 29th or 30th at 5PM PST. General public will be able to mint up to 10 NFTs per address at a price of 0.065 Eth +gas fees per NFT."
            }
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WHAT IS THE ZOAN GROUP?"}
            content={
              "Zoan Group is a community of individuals who believe in the power of crypto and NFT memberships. The Zoan Group is developer driven project with the focus on contract security and utility."
            }
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WHY SHOULD I BUY A ZOAN?"}
            content={
              "Buying a Zoan supports the artist and developers who worked on this project. Also, you get access to the utility-backed NFT."
            }
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WHAT DO THE ZOANS DO?"}
            content={
              "There are four base Zoans: The Bear, The Fox, The Butterfly and The Elephant. Each one respectively owns a domain. The NFT acts an access token to the domain portal of the base Zoan. The portal is where fellow community members can post and share useful links that belong within that domain."
            }
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WHAT IS THE TOTAL NUMBER OF NFTS?"}
            content={"5,000"}
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WHEN WILL THE NFTS BE REVEALED AFTER THE SALE?"}
            content={
              "The NFTs will be revealed 24 - 48hrs after the end of the sale."
            }
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"HOW MUCH DOES IT COST TO MINT?"}
            content={"0.065 ETH + gas"}
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WHERE CAN I VIEW MY NFTS?"}
            content={
              "Once minted, simply connect to your OpenSea account to view your NFTs."
            }
          />
        </div>
        <div className="accordion">
          <Accordion
            title={"WILL THERE BE ANY GIVEAWAYS?"}
            content={
              "Yes, we plan to periodically reward active and verified members of our community."
            }
          />
        </div>
      </s.Container>
    </ResponsiveWrapper>
  );
};
