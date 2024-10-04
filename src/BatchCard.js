import React from 'react';
import LotCard from './LotCard'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faTags, faChevronDown } from '@fortawesome/free-solid-svg-icons';

function BatchCard({ batchData, fileId, isExpanded, onToggleExpand }) {
  const batchId = batchData.batch_number;

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
          onClick={() => onToggleExpand(batchId)} 
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'Collapse Batch' : 'Expand Batch'}
          <FontAwesomeIcon 
            icon={faChevronDown} 
            className={isExpanded ? 'rotated' : ''} 
          /> 
        </button>
      </header>
      
      {/* Show the details only if the batch is expanded */}
      {isExpanded && (
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
