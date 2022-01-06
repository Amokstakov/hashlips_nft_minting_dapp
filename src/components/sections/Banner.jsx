import * as s from "../../styles/globalStyles";
import { StyledImg, ResponsiveWrapper } from "../components";
import { MintNow } from "../sections/MintNow";
export const Banner = () => {
  return (
    <ResponsiveWrapper>
      <s.Container flex={1} ai={"center"} style={{}}>
        <StyledImg alt={"banner-bear"} src={"/config/images/base/bearG.png"} />
        <StyledImg alt={"banner-fox"} src={"/config/images/base/foxG.png"} />
      </s.Container>

      <MintNow />
      <s.Container flex={1} ai={"center"} style={{}}>
        <StyledImg
          alt={"banner-butterfly"}
          src={"/config/images/base/butterG.png"}
        />
        <StyledImg
          alt={"banner-elephant"}
          src={"/config/images/base/ellieG.png"}
        />
      </s.Container>
    </ResponsiveWrapper>
  );
};
