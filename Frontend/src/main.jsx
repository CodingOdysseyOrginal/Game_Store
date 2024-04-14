import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// TO DO LIST
// 1. get all images/videos for each download page(ask sam about converting each page) add more games/ update ones(look at shelf for ideas) maybe change some of the gamees.
// 2. 
// 3. look in to useEffect on the link to the download page so it starts at the top
// 4. Look inot making a filter bar for your games such as genre or maybe name. 
// 5. Host it all 