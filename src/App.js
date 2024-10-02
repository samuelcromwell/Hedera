import React, { useEffect, useState } from 'react';
import './App.css';
import BatchCard from './BatchCard';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/blockdata/blockdata.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  if (!data) return <div>Loading...</div>;

  return (
    <div className="App">
      <h1>Product Dashboard</h1>
      <BatchCard batchData={data.data} fileId={data.file_id} />
      {Object.keys(data).filter(key => !isNaN(key)).map(key => (
        <BatchCard key={key} batchData={data[key].data} fileId={data[key].file_id} />
      ))}
    </div>
  );
}

export default App;
