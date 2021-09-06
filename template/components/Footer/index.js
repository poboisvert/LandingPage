import { Fragment } from 'react';
import { Row, Col } from 'antd';

import * as S from './styles';

// Common
import Container from '../../common/Container';
import SvgIcon from '../../common/SvgIcon';

const Footer = ({ t }) => {
  const SocialLink = ({ href, src }) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
        style={{ padding: 2 }}
      >
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    );
  };

  return (
    <Fragment>
      <S.Footer>
        <Container>
          <Row type='flex' justify='space-between'>
            <Col lg={10} md={10} sm={12} xs={24}>
              <S.Language>Contact</S.Language>
              <S.Para>
                Do you have any question regarding the project? Feel free to
                reach out.
              </S.Para>
            </Col>
            <Col lg={8} md={8} sm={12} xs={24}>
              <S.Title>Policy</S.Title>
              <S.Large to='/' left='true'>
                Application Security
              </S.Large>
              <S.Large left='true' to='/'>
                Software Principles
              </S.Large>
            </Col>
          </Row>
        </Container>
      </S.Footer>
      <S.Extra>
        <Container border='true'>
          <Row
            type='flex'
            justify='space-between'
            align='left'
            style={{ paddingTop: '3rem' }}
          >
            <S.FooterContainer>
              <SocialLink
                href='https://github.com/poboisvert/'
                src='github.svg'
              />
            </S.FooterContainer>
          </Row>
        </Container>
      </S.Extra>
    </Fragment>
  );
};

export default Footer;
