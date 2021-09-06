import styled from 'styled-components';

export const Footer = styled.footer`
  background: #f0f6f0;
  padding: 2.5rem 0;
`;

export const Title = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #222323;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Extra = styled.section`
  background: #f0f6f0;
  position: relative;
  width: 100%;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const Para = styled.div`
  color: #222323;
  max-width: 340px;
  font-size: 14px;
  width: 100%;
`;

export const Large = styled.div`
  font-size: 16px;
  color: #222323;
  text-align: ${(props) => (props.left ? 'left' : '')};
  padding: ${(props) => (props.left ? '0 10%' : '')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;

  &:hover {
    color: rgb(255, 130, 92);
  }
`;

export const FooterContainer = styled.div`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: left;

  @media screen and (max-width: 414px) {
    padding: 2rem 0;
    padding-right: 50%;
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Hidden = styled.div`
  display: contents;
  width: 100%;

  @media screen and (max-width: 414px) {
    display: none;
  }
`;

export const Language = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;
  display: block;
  margin-bottom: 2rem;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LangSelect = styled.select`
  cursor: pointer;
  border: none;
  font-size: 1rem;
  background: #f0f6f0;
`;
