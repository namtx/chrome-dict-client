const React = require('react')

function WordPronunciation(props) {
  return (
    <div className="row">
      <h1 className="orange-text">
        <span> {props.word}</span>
        <span> {props.pronunciation}</span>
        <span className="orange-text lighten-5-text">
          <i className="material-icons hearing-icons">hearing</i>
        </span>
      </h1>
    </div>
  )
}

module.exports = WordPronunciation
