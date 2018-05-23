import { connect } from 'react-redux';

import Label from '../presentational/Label';

export default connect(
  state => ({
    text: (state.task2Result) ? (!state.task2Result.error) ? JSON.stringify(state.task2Result) : state.task2Result.payload.message : 'none'
  })
)(Label);
