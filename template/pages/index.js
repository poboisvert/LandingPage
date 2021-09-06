import GlobalStyles from '../components/GlobalStyles';

// Page components
import Header from '../components/Header';
import Footer from '../components/Footer';

// Block Components
import ContentBlock from '../components/ContentBlock';
import MiddleBlock from '../components/MiddleBlock';

// Common
import Container from '../common/Container';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <GlobalStyles />

      <Container>
        <Header />
        <ContentBlock
          type='right'
          first='true'
          title='Page Title'
          content='A project built using light technologies in order to offer an interactive experience.'
          button='button'
          icon='logo.png'
          id='intro'
        />

        <MiddleBlock
          title='Cardboard'
          content='The application was design to offer the fastest user experience'
          button='button'
        />

        <ContentBlock
          type='left'
          title='Light, Fast & Responsive'
          content='The minimalistic approache give us the opportunity to adapt the application.'
          section='Excited to see all the change!'
          icon='cube.gif'
          id='about'
        />

        <ContentBlock
          type='right'
          title='Ready made sections'
          icon='seesaw.gif'
          content='See trending, popular topics and the upcoming events.'
          id='mission'
        />
        <Contact />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
