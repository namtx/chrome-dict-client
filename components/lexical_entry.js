const React = require('react')
const Entry = require('./entry')

function LexicalEntry(props) {
  const entries = props.lexicalEntry.entries.map((entry, index) => {
    return <Entry key={index} entry={entry}/>
  })

  return (
    <div>
      {entries}
    </div>
  )
}

LexicalEntry.defaultProps = {
  lexicalEntry: {
    entries: []
  }
}
module.exports = LexicalEntry
