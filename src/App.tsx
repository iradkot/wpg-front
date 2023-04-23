import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ResultPage } from './pages/ResultPage';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/result" element={<ResultPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
