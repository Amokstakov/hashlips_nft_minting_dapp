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
          <FooterATag href="https://twitter.com/julesforrest">
            Twitter
          </FooterATag>
        </li>
        <li>
          <FooterATag href="https://codepen.io/julesforrest">
            Contract
          </FooterATag>
        </li>
        <li>
          <FooterATag href="mailto:julesforrest@gmail.com">Mint</FooterATag>
        </li>
        <li>
          <p>👋</p>
        </li>
      </FooterUL>
    </FooterDiv>
  );
};
