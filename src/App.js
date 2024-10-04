import React, { useEffect, useState } from 'react';
import './App.css';
import BatchCard from './BatchCard';

function App() {
  const [data, setData] = useState(null);
  const [expandedBatch, setExpandedBatch] = useState(null); // State to track the currently expanded batch

  useEffect(() => {
    fetch('/blockdata/blockdata.json')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  if (!data) return <div>Loading...</div>;

  // Function to handle expanding/collapsing a batch
  const handleToggleExpand = (batchId) => {
    // If the clicked batch is already expanded, collapse it
    if (expandedBatch === batchId) {
      setExpandedBatch(null);
    } else {
      // Otherwise, set the clicked batch as the expanded one
      setExpandedBatch(batchId);
    }
  };

  return (
    <div className="App">
      <h1>Shamba Traceability</h1>
      {/* Pass handleToggleExpand and expandedBatch to each BatchCard */}
      <BatchCard
        batchData={data.data}
        fileId={data.file_id}
        isExpanded={expandedBatch === data.data.batch_number} // Check if this batch is expanded
        onToggleExpand={handleToggleExpand} // Pass the toggle function
      />
      {Object.keys(data).filter(key => !isNaN(key)).map(key => (
        <BatchCard
          key={key}
          batchData={data[key].data}
          fileId={data[key].file_id}
          isExpanded={expandedBatch === data[key].data.batch_number} // Check if this batch is expanded
          onToggleExpand={handleToggleExpand} // Pass the toggle function
        />
      ))}
    </div>
  );
}

export default App;
