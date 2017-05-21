const React = require('react')
const Subsense = require('./subsense')

function Sense(props) {
  const examples = props.sense.examples.map((example, index) => {
    return <li key={index}><p className="orange-text accent-1-text"><i>{example.text}</i></p></li>
  })

  let subsenses = []
  if (props.sense.subsenses) {
    subsenses = props.sense.subsenses.map((subsense, index) => {
      return <Subsense key={index} subsense={subsense}/>
    })
  }

  return (
    <div className="card-panel">
      <h3>{props.sense.definitions[0]}</h3>
      <ul className="senses-example">
        {examples}
      </ul>
      {/*
        <ul className="subsenses">
          if(props.sense.subsenses){
            {subsenses}
          }
        </ul>
      */}
    </div>
  )
}

Sense.defaultProps = {
  sense: {
    examples: [],
    subsenses: []
  }
}

module.exports = Sense
