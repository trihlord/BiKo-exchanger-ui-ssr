import styled from "styled-components";

const Button = styled.div<{ title: string }>`
  border-radius: 12px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3);
  height: 24px;
  width: 24px;

  &:hover {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.3), 0px 0px 6px rgba(0, 0, 0, 0.15);
  }
`

export default Button