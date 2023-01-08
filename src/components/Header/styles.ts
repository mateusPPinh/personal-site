import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.background}; */
  padding: 40px;
`;

const LeftCenterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightCenterContainer = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin-right: 20px;
  }
`;

const Tile = styled.div`

`;

const Button = styled.button`
  border: 0;
  background-color: transparent;
`;

export { 
  Header,
  LeftCenterContainer,
  RightCenterContainer,
  Tile,
  Button,
 };