import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout/SharedLayout';
import Page404 from 'pages/Page404';
import Home from 'pages/Home';
import Favorite from 'pages/Favorite';
import Read from 'pages/Read';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index elemet={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/read" element={<Read />} />
        </Route>

        <Route path="*" elemet={<Page404 />} />
      </Routes>
    </>
  );
};
