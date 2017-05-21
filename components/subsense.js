const React = require('react')

function Subsense(props) {
  const examples = props.subsense.examples.map((example, index) => {
    return <p key={index} className="orange-text accent-1-text"><i>${example.text}</i></p>
  })

  return (
    <li>
      <h5>{props.subsense.definition}</h5>
      {examples}
    </li>
  )
}

Subsense.defaultProps = {
  subsense: {
    examples: []
  }
}

module.exports = Subsense
