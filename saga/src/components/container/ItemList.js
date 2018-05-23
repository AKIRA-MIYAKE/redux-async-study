import { connect } from 'react-redux';

import ItemList from '../presentational/ItemList';

export default connect(
  state => ({
    items: state.items
  })
)(ItemList);
