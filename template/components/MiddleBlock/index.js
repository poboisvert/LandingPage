import { Row, Col } from 'antd';
import * as S from './styles';

const MiddleBlock = ({ title, content }) => {
  return (
    <S.MiddleBlock>
      <Row type='flex' justify='center' align='middle'>
        <S.ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            <S.Title>{title}</S.Title>
            <S.Content>{content}</S.Content>
          </Col>
        </S.ContentWrapper>
      </Row>
    </S.MiddleBlock>
  );
};

export default MiddleBlock;
