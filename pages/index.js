import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {

  render () {
    return (
      <div>
        123
      </div>
    )
  }
}
const mapDispatchToProps = {};
export default connect(
  null,
  mapDispatchToProps
)(Index)
