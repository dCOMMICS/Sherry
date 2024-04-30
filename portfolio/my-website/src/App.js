import './components/Profilecard'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-64 object-cover object-center" src="/portfolio/my-website/src/components/kachero dv.jpg" alt="Profile" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">Craig Dallurs</h2>
        <p className="text-gray-600">Software Engineer and Game Designer</p>
        {/* Add more details as needed */}
      </div>
    </div>
        
      </header>
    </div>
  );
}

export default App;
