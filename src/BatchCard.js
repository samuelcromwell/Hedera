import React, { useState } from 'react';
import LotCard from './LotCard'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTags, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function BatchCard({ batchData, fileId }) {
  // State to toggle the batch's expand/collapse state
  const [isBatchExpanded, setIsBatchExpanded] = useState(false);

  // Toggle expand state
  const handleToggleExpand = () => {
    setIsBatchExpanded(prevState => !prevState);
  };

  return (
    <section className="batch-card">
      <header className="header">
        <div className="batch-info">
          <FontAwesomeIcon icon={faBox} aria-hidden="true" />
          <span className="batch-header-text">Batch Number: {batchData.batch_number}</span><br />
          <FontAwesomeIcon icon={faTags} aria-hidden="true" />
          <span className="product-name">Product Name: {batchData.product_name}</span>
        </div>
        {/* Toggle batch expand/collapse */}
        <button 
          className="expand-btn" 
          onClick={handleToggleExpand} 
          aria-expanded={isBatchExpanded}
        >
          {isBatchExpanded ? 'Collapse Batch' : 'Expand Batch'}
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={isBatchExpanded ? 'rotated' : ''} 
          /> 
          
        </button>
      </header>
      
      {/* Show the details only if the batch is expanded */}
      {isBatchExpanded && (
        <article className="details">
          {batchData.lots.map((lot, index) => (
            <LotCard key={lot.id || index} lot={lot} /> 
          ))}
          <a 
            href={`https://app.dragonglass.me/hedera/search?q=${fileId}`} 
            className="external-link" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            File ID: {fileId}
          </a>
        </article>
      )}
    </section>
  );
}

export default BatchCard;
