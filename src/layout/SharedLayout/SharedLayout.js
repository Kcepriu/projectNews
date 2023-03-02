import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Head,
  SectionPage,
  SectionBody,
} from './SharedLayout.styled';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const SharedLayout = () => {
  return (
    <SectionPage>
      <Head>
        <Container>
          <Header />
        </Container>
      </Head>

      <SectionBody>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </SectionBody>

      <Container>
        <Footer />
      </Container>
    </SectionPage>
  );
};

export default SharedLayout;
