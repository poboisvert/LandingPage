import { useState, Fragment } from 'react';
import Button from '../../common/Button';
import * as S from './styles';

const Header = ({ t }) => {
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={() => scrollTo('about')}>
          <S.Span>About</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('mission')}>
          <S.Span>Mission</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall
          style={{ width: '180px' }}
          onClick={() => scrollTo('intro')}
        >
          <S.Span>
            <Button>Introduction</Button>
          </S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Container>
      <MenuItem />
    </S.Container>
  );
};

export default Header;
