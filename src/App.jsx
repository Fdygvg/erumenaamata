import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import EditorPage from './pages/EditorPage';
import AuthorPage from './pages/AuthorPage';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/editor" replace />} />
        <Route path="/editor" element={<EditorPage />} />
        <Route path="/author" element={<AuthorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
