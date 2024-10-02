import React, { useState } from 'react';

function LotCard({ lot }) {
  // State to control each lot's expand/collapse
  const [isLotExpanded, setIsLotExpanded] = useState(false);

  return (
    <div className="lot-card">
      <div className="header">
        <div>Lot Number: {lot.lot_number}</div>
        {/* Toggle lot expand/collapse */}
        <button className="expand-btn" onClick={() => setIsLotExpanded(!isLotExpanded)}>
          {isLotExpanded ? 'Collapse Lot' : 'Expand Lot'}
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
