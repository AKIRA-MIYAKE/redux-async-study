import React from 'react';

export default ({ items }) => (
  <div>
    <ul>{items.map(item => (<li key={item.timestamp}>{item.value}</li>))}</ul>
  </div>
);
