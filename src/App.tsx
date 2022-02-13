import React from 'react';
import '@iconify/iconify';
import '@purge-icons/generated';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { InputWithIconError } from './InputWithIconError';

export function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li className="inline mx-2">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="inline mx-2">
                            <Link to="/input-with-icon-error">InputWithIconError</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/about"></Route>
                    <Route
                        path="/input-with-icon-error"
                        element={<InputWithIconError />}
                    ></Route>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return <h3>Home</h3>;
}
