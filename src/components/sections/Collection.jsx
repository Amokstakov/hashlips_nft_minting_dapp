import { ResponsiveWrapper, StyledImg } from "../components";
import * as s from "../../styles/globalStyles";
export const Collection = () => {
  return (
    <ResponsiveWrapper>
      <s.Container
        flex={1}
        jc={"center"}
        ai={"center"}
        id="collection"
        style={{ marginLeft: 6 }}
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          The Butterfly
        </s.TextTitle>
        <StyledImg alt={"butterfly-gif"} src={"/config/images/_butter.gif"} />
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--accent-text)",
          }}
        >
          New Beginner
        </s.TextDescription>
      </s.Container>
      <s.Container
        flex={1}
        jc={"center"}
        ai={"center"}
        style={{ marginLeft: 6 }}
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "var(--accent-text)",
          }}
        >
          The Bear
        </s.TextTitle>
        <StyledImg alt={"bear-gif"} src={"/config/images/_bear.gif"} />
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--accent-text)",
          }}
        >
          Athlete
        </s.TextDescription>
      </s.Container>
      <s.Container
        flex={1}
        jc={"center"}
        ai={"center"}
        style={{ marginLeft: 6 }}
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "var(--accent-text)",
          }}
        >
          The Fox
        </s.TextTitle>
        <StyledImg alt={"fox-gif"} src={"/config/images/_fox.gif"} />
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--accent-text)",
          }}
        >
          Programmer
        </s.TextDescription>
      </s.Container>
      <s.Container
        flex={1}
        jc={"center"}
        ai={"center"}
        style={{ marginLeft: 6 }}
      >
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            color: "var(--accent-text)",
          }}
        >
          The Elephant
        </s.TextTitle>
        <StyledImg alt={"elephant-gif"} src={"/config/images/_ellie.gif"} />
        <s.TextDescription
          style={{
            textAlign: "center",
            color: "var(--accent-text)",
          }}
        >
          Yogi
        </s.TextDescription>
      </s.Container>
    </ResponsiveWrapper>
  );
};
