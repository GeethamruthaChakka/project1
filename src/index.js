import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css";
import ProfileGrid from './ProfileGrid';

const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(<div className="App"><ProfileGrid /></div>);
