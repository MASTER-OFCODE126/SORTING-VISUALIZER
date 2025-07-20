import React,{useEffect} from 'react';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

function App() {
  useEffect(() => {
    document.title = "Sorting Visualizer"; 
  }, []);
  return (
    <div className="App">
      <SortingVisualizer></SortingVisualizer>
    </div>
  );
}

export default App;
