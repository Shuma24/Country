import './App.css';
import { ContextProvider } from '../Props/context';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '../../pages/layout/Layout';
import { Countries } from '../../pages/countries/Countries';
import { NotFound } from '../NotFound/NotFound'
import { Details } from '../../pages/Details/Details'

function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Countries />} />
          <Route path="/country/:name" element={<Details />} />
        </Route>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </ContextProvider>
  );
}

export default App;
