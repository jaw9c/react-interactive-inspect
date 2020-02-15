import * as React from "react";
import getPathTo from "./getPathTo";
import styled from "styled-components";
import parse from "html-react-parser";
import styles from "./styles.css";

interface DemProps {
  html: string;
  css: string;
  onSelect: (xPath?: string) => void;
}
const CSSWrapper = styled.html<{ css: string }>`
  ${props => props.css}
`;

const options = (setElement: any) => ({
  library: {
    cloneElement: React.cloneElement,
    isValidElement: React.isValidElement,
    createElement: (Name: any, props: any, children: any) => (
      <Name
        {...props}
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();
          e.stopPropagation();
          setElement(e.target);
        }}
      >
        {children}
      </Name>
    )
  }
});

const InteractiveXPathSelector: React.FC<DemProps> = props => {
  const [element, setElement] = React.useState<HTMLElement>();

  const newElementSet = (elementNew: HTMLElement) => {
    element && element.removeAttribute("ixpathisselected");
    setElement(elementNew);
    elementNew.setAttribute("ixpathisselected", "true");
    props.onSelect(getPathTo(elementNew));
  };

  return (
    <CSSWrapper css={props.css} className={styles.cssWrapContainer}>
      {parse(props.html, options(newElementSet))}
    </CSSWrapper>
  );
};

export default InteractiveXPathSelector;
