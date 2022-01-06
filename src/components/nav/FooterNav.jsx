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
          <FooterATag href="#">Twitter</FooterATag>
        </li>
        <li>
          <FooterATag href="#">Contract</FooterATag>
        </li>
        <li>
          <FooterATag href="#">Mint</FooterATag>
        </li>
        <li>
          <p>👋</p>
        </li>
      </FooterUL>
    </FooterDiv>
  );
};
