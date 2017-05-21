const React = require('react')
const Sense = require('./sense')

function Entry(props) {
  const senses = props.entry.senses.map((sense, index) => {
    return <Sense key={index} sense={sense}/>
  })

  return (
    <div id={"test-swipe-" + props.index} className="col s12 white">
      {senses}
    </div>
  )
}

Entry.defaultProps = {
  entry: {
    senses: []
  }
}

module.exports = Entry
