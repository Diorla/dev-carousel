import styled from "styled-components";
import Position from "./Position";
import getZIndex from "./getZIndex";
import getOpacity from "./getOpacity";
import getTransform from "./getTransform";

export default styled.div<{ position: Position }>`
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
  border: 1px solid silver;
  background-color: white;
  box-shadow: ${({ position }) =>
    position === "current" ? "0 0 4px silver" : "none"};
  transform: ${({ position }) => getTransform(position)};
  opacity: ${({ position }) => getOpacity(position)};
  z-index: ${({ position }) => getZIndex(position)};
  display: flex;
  align-items: center;
  padding: 8px;
  flex-direction: column;
  justify-content: space-evenly;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;
