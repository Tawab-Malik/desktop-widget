// import logo from './logo.svg';
import './App.css';
import './section.css';
import Section from './Section';
import Sidebar from './sidebar';
import Meta from './component/meta';
function App() {
  return (
    <div>
      <Meta
                title="Desktop-Widget"
                description="Site Consist of  side Bar and main section containing Grid columns"
                keywords="React, desktop, keywords, Grid"
            />
<div className="App">
       <div className='flexbox'>
       <Sidebar/>
       <Section/>
       </div>
       
    </div>
    </div>
    
  );
}

export default App;
