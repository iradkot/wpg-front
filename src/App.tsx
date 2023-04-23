import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ResultPage } from './pages/ResultPage';

const App: React.FC = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/result" component={ResultPage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
