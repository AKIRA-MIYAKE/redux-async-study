import { connect } from 'react-redux';

import Label from '../presentational/Label';

export default connect(
  state => ({
    text: (state.task1Result) ? (!state.task1Result.error) ? state.task1Result : state.task1Result.payload.message : 'none'
  })
)(Label);
