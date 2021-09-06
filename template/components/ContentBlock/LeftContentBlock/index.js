import { Row, Col } from 'antd';
import Slide from 'react-reveal/Slide';

import SvgIcon from '../../../common/SvgIcon';

import * as S from './styles';

const LeftContentBlock = ({ icon, title, content, section, t, id }) => {
  return (
    <S.LefttBlockContainer>
      <Row type='flex' justify='space-between' align='middle' id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <Slide left>
            <SvgIcon
              src={icon}
              className='about-block-image'
              width='100%'
              height='100%'
            />
          </Slide>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <Slide right>
            <S.ContentWrapper>
              <h6>{title}</h6>
              <S.Content>{content}</S.Content>
              <S.ServiceWrapper>
                <Row type='flex' justify='space-between'>
                  {section &&
                    typeof section === 'object' &&
                    section.map((item, id) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width='60px' height='60px' />
                          <S.MinTitle>{item.title}</S.MinTitle>
                          <S.MinPara>{item.content}</S.MinPara>
                        </Col>
                      );
                    })}
                </Row>
              </S.ServiceWrapper>
            </S.ContentWrapper>
          </Slide>
        </Col>
      </Row>
    </S.LefttBlockContainer>
  );
};

export default LeftContentBlock;
