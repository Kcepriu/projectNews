import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Head } from './SharedLayout.styled';
import Header from 'components/Header';

const SharedLayout = () => {
  return (
    <>
      <Head>
        <Container>
          <Header />
        </Container>
      </Head>

      <Container>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
