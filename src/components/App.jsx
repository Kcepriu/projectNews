import { Routes, Route } from 'react-router-dom';
import SharedLayout from '../layout/SharedLayout/SharedLayout';
import Page404 from 'pages/Page404';
import Home from 'pages/Home/Home';
import Favorite from 'pages/Favorite/Favorite';
import Read from 'pages/Read/Read';
import FilterLayout from '../layout/FilterLayout/FilterLayout';
import { ContextUseStorage } from './ContextUseStorage/ContextUseStorage';

export const App = () => {
  return (
    <ContextUseStorage>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route element={<FilterLayout />}>
            <Route index element={<Home />} />
            <Route path="/news" element={<Home />} />
            <Route path="/news/:categoryId" element={<Home />} />
          </Route>

          <Route path="/favorite" element={<Favorite />} />
          <Route path="/read" element={<Read />} />
        </Route>

        <Route path="*" elemet={<Page404 />} />
      </Routes>
    </ContextUseStorage>
  );
};
