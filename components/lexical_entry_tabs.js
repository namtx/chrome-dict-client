const React = require('react')
const LexicalEntryTab = require('./lexical_entry_tab')

function LexicalEntryTabs(props) {
  const items = props.lexicalEntries.map((lexicalEntry, index) => {
    return <LexicalEntryTab key={index} gridCols={Math.floor(12/props.lexicalEntries.length)} index={index} lexicalCategory={lexicalEntry.lexicalCategory} />
  })

  return (
    <div className="row">
      <div className="col s12">
        <ul className="tabs">
          {items}
        </ul>
      </div>
    </div>
  )
}

module.exports = LexicalEntryTabs
