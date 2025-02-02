
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <div>
       {/* <Navbar title="TextUtils" about="about"/> */}
       <Navbar />
       <div className="container my-3">
       <TextForm heading ="Type below"/>

       </div>
    </div>
 
  );
}

export default App;
