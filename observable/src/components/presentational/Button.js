import React from 'react';

export default ({ didClick, title, isEnabled }) => (
  <button onClick={e => didClick(e)} disabled={!isEnabled}>{title}</button>
);
