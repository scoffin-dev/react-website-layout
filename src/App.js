import SiteHeader from './components/layout/SiteHeader';
import PageSplash from './components/layout/PageSplash';
import MainContent from './components/layout/MainContent';
import SiteFooter from './components/layout/SiteFooter';

import './App.css';
import './components/layout/Layout.css';

function App() {
  return (
    <div className="App">
      <PageSplash/>
      <SiteHeader/>
      <MainContent/>
      <SiteFooter/>
    </div>
  );
}

export default App;
