import React from 'react';
import { Container, AboutContainer, TechSkillsContainer } from './styles';

const Home = () => {
  return (
    <Container>
      <AboutContainer>
        <h1>about me</h1>

        <p>
          I've been a developer for over 9 years, I've always worked with web technologies, at first with PHP, Ruby on Rails and Angular, I also went on the mobile development path, mainly with Swift and then Ionic, a short period but with a lot of learning, at the moment I work a lot with Javascript and some libs and frameworks, React, React Native, NodeJS, NextJS has been the stack that I work the most at the moment. Recently I started studying Elixir.
        </p>
      </AboutContainer>

      <TechSkillsContainer>
        <h1>techonologies</h1>

        <p>
          I've been a developer for over 9 years, I've always worked with web technologies, at first with PHP, Ruby on Rails and Angular, I also went on the mobile development path, mainly with Swift and then Ionic, a short period but with a lot of learning, at the moment I work a lot with Javascript and some libs and frameworks, React, React Native, NodeJS, NextJS has been the stack that I work the most at the moment. Recently I started studying Elixir.
        </p>
      </TechSkillsContainer>
    </Container>
  )
}

export default Home;