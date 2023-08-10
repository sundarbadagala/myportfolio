import React, { useContext } from "react";
import { styled } from "styled-components";
import { AppContext } from "../../context/contextApi";
import { Container, Wrapper, Flex } from "../../theme/globalBlocks";

const StyledWrapper = styled(Wrapper)`
  margin: 0 auto;
`;

const StyledContainer = styled(Container)`
  border: 1px solid red;
`;

const Button = styled.button`
  background-color: red;
`;

function Navbar() {
  const { theme, handleTheme } = useContext(AppContext);
  return (
    <StyledWrapper>
      <StyledContainer>
        <Flex $justify="space-between">
          <div>Navbar</div>
          <button onClick={handleTheme}>toggle theme {theme}</button>
          <Button>hello</Button>
        </Flex>
      </StyledContainer>
    </StyledWrapper>
  );
}

export default Navbar;
