const React = require('react')

function LexicalEntryTab(props) {
  return (
    <li className={"tab col s"+ props.gridCols}>
      <a href={"#test-swipe-" + props.index}>
        {props.lexicalCategory}
      </a>
    </li>
  )
}

module.exports = LexicalEntryTab
