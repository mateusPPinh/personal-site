import styled from 'styled-components';

const Container = styled.div`
  padding: 95px 190px;

 h1 {
  color: ${({theme}) => theme.colors.text}
 }
`;

const AboutContainer = styled.div`
  max-width: 600px;
  
  p {
    margin-top: 2rem;
    line-height: 24px;
  }
`;

const TechSkillsContainer = styled.div`
  max-width: 600px;
  margin-left: auto;

  p {
    margin-top: 2rem;
    line-height: 24px;
  }
`;

export {Container, AboutContainer, TechSkillsContainer};