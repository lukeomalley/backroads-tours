import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

const StyledHero = ({ img, className, children, home, backgroundposition }) => {
  return (
    <BackgroundImage
      className={className}
      fluid={img}
      home={home}
      backgroundposition={backgroundposition}
    >
      {children}
    </BackgroundImage>
  );
};

export default styled(StyledHero)`
  min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
  background: ${props =>
    props.home
      ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
      : 'none'};
  background-position: ${props => props.backgroundposition};
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
