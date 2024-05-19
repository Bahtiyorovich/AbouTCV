// src/App.js
import PDFExport from './components/PDFExport';
import CreatePage from './pages/createPage';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage';

function App() {
  return (
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/create-resume' element={<CreatePage/>}/>
          <Route path='/save-page' element={<PDFExport/>}/>
        </Routes>
  );
}

export default App;
