import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  align-items: center;
  /* background-color: ${({ theme }) => theme.colors.background}; */
  padding: 35px 190px;
`;

const LeftCenterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  ul {
    display: flex;

    li {
      margin-right: 30px;
    }
  }
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
const MediumButton = styled.div`

`;
const ToggleThemeButton = styled.div`

`;

export { 
  Header,
  LeftCenterContainer,
  RightCenterContainer,
  Tile,
  MediumButton,
  ToggleThemeButton
 };