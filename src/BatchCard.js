import React, { useState } from 'react';
import LotCard from './LotCard'; 

function BatchCard({ batchData, fileId }) {
  // State to toggle the batch's expand/collapse state
  const [isBatchExpanded, setIsBatchExpanded] = useState(false);

  return (
    <div className="batch-card">
      <div className="header">
        <div>
          <span className="batch-header-text">Batch Number: {batchData.batch_number}</span><br />
          <span className="product-name">Product Name: {batchData.product_name}</span>
        </div>
        {/* Toggle batch expand/collapse */}
        <button className="expand-btn" onClick={() => setIsBatchExpanded(!isBatchExpanded)}>
          {isBatchExpanded ? 'Collapse Batch' : 'Expand Batch'}
        </button>
      </div>
      
      {/* Show the details only if the batch is expanded */}
      {isBatchExpanded && (
        <div className="details">
          {batchData.lots.map((lot, index) => (
            <LotCard key={index} lot={lot} /> 
          ))}
          <a href={`https://app.dragonglass.me/hedera/search?q=${fileId}`} className="external-link" target="_blank" rel="noopener noreferrer">
            File ID: {fileId}
          </a>
        </div>
      )}
    </div>
  );
}

export default BatchCard;
