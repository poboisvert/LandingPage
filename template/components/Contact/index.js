import { Row, Col } from 'antd';
import { Slide, Zoom } from 'react-reveal';
import { useForm } from '../../common/Form';
import Button from '../../common/Button';

import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { ContactContainer, FormGroup, Span, ButtonContainer } from './styles';
import MiddleBlock from '../MiddleBlock';

const Contact = ({ title, content, id }) => {
  const { values, errors, handleChange, handleSubmit } = useForm();

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction='left'>
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  return (
    <ContactContainer id={id}>
      <Row justify='space-between' align='middle'>
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction='left'>
            <MiddleBlock title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction='right'>
            <FormGroup autoComplete='off' onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={values.name || ''}
                  onChange={handleChange}
                />
                <ValidationType type='name' />
              </Col>
              <Col span={24}>
                <Input
                  type='text'
                  name='email'
                  placeholder='Your Email'
                  value={values.email || ''}
                  onChange={handleChange}
                />
                <ValidationType type='email' />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder='Your Message'
                  value={values.message || ''}
                  name='message'
                  onChange={handleChange}
                />
                <ValidationType type='message' />
              </Col>
              <ButtonContainer>
                <Button name='submit'>{'Submit'}</Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default Contact;
