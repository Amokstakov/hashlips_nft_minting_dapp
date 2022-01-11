import {
  ResponsiveWrapper,
  StyledImgGrid,
  StyledButton,
  FooterDiv,
  FooterUL,
  FooterATag,
  FooterLI,
} from "../components";
import * as s from "../../styles/globalStyles";
export const FooterNav = () => {
  return (
    <FooterDiv>
      <FooterUL>
        <li>
          <FooterATag href="https://twitter.com/ZoanGroup" target="_blank">
            Twitter
          </FooterATag>
        </li>
        <li>
          <FooterATag href="#">Contract</FooterATag>
        </li>
        {/*
        <li>
          <FooterATag href="#">OpenSea</FooterATag>
        </li>
        */}
        <li>
          <FooterATag href="/mint">Mint</FooterATag>
        </li>
        <li>
          <p>👋</p>
        </li>
      </FooterUL>
    </FooterDiv>
  );
};
