import * as s from "../styles/globalStyles";

import {
  StyledButton,
  StyledButtonLanding,
  StyledRoundButton,
  ResponsiveWrapper,
  StyledLogo,
  StyledImg,
  StyledLink,
} from "../components/components";

import { About } from "../components/sections/About";
import { MintSection } from "../components/sections/MintSection";
import { Collection } from "../components/sections/Collection";
import { Ecosystem } from "../components/sections/Ecosystem";
import { Roadmap } from "../components/sections/Roadmap";
import { Team } from "../components/sections/Team";
import { Footer } from "../components/sections/Footer";

import { FooterNav } from "../components/nav/FooterNav";
import { HomeNav } from "../components/nav/HomeNav";
import { Banner } from "../components/sections/Banner";
import { Welcome } from "../components/sections/Welcome";

export const HomePage = () => {
  return (
    <s.Screen>
      <HomeNav />
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 24, backgroundColor: "var(--primary)" }}
        image={"/config/images/bg.png"}
      >
        <s.SpacerSmall />
        <Banner />
        <About />
        <s.SpacerMedium />
        <MintSection />
        <s.SpacerLarge />
        <Welcome />
        <Collection />
        <s.SpacerMedium />
        <Ecosystem />
        <s.SpacerMedium />
        <Roadmap />
        <s.SpacerMedium />
        <Team />
        <s.SpacerMedium />
        <Footer />
        <s.SpacerMedium />
        <FooterNav />
      </s.Container>
    </s.Screen>
  );
};
