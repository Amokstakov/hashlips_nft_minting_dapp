import React, { useState } from "react";
import * as s from "../../styles/globalStyles";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <s.TextTitle
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {title}
        </s.TextTitle>
        <s.TextTitle>{isActive ? "-" : "+"}</s.TextTitle>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};
