import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode, faChevronDown } from '@fortawesome/free-solid-svg-icons'; // Corrected import

function LotCard({ lot }) {
  // State to control each lot's expand/collapse
  const [isLotExpanded, setIsLotExpanded] = useState(false);

  // Toggle expand state
  const handleToggleExpand = () => {
    setIsLotExpanded(prevState => !prevState);
  };

  return (
    <div className="lot-card">
      <div className="header">
        <FontAwesomeIcon icon={faBarcode} aria-hidden="true" />
        <div>Lot Number: {lot.lot_number}</div>      
        {/* Toggle lot expand/collapse */}
        <button 
          className="expand-btn"
          onClick={handleToggleExpand}
          aria-expanded={isLotExpanded}
        >
          {isLotExpanded ? 'Collapse Lot' : 'Expand Lot'}
          <FontAwesomeIcon
            icon={faChevronDown}
            className={isLotExpanded ? 'rotated' : ''}
            />

        </button>
      </div>

      {/* Show the details only if the lot is expanded */}
      {isLotExpanded && (
        <div className="details">
          {lot.collections.map((collection, index) => (
            <p key={index}>
              Collection Number: {collection.collection_number}, Quantity: {collection.collection_quantity}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default LotCard;
