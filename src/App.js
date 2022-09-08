import Header from './components/views/Header/Header';
import Home from './components/pages/HomePage';
import EditTable from './components/features/EditTable/EditTable';
import NotFound from './components/pages/NotFound';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesReducer';
import { fetchStatus } from './redux/statusReducer';

import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router';
function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);
  useEffect(() => dispatch(fetchStatus()), [dispatch]);

  return (
    <main>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/table/:tableId" element={<EditTable />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
