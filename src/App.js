import React from 'react';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';

import Page404 from './pages/Page404';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    // <div className="app-container">
    <Provider store={store}>
      <header>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/*" element={<Page404 />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/todos/new" element={<AddPage />} />
          <Route path="/todos/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </Provider>
  );
}

export default App;
