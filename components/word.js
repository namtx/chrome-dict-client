const React = require('react')
const ReactDOM = require('react-dom')
const axios = require('axios')
const WordInput = require('./word_input')
const WordPronunciation = require('./word_pronunciation')
const LexicalEntryTabs = require('./lexical_entry_tabs')
const LexicalEntry = require('./lexical_entry')

class Word extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      word: '',
      pronunciation: '',
      lexicalEntries: []
    }
  }

  componentDidMount() {
    axios.get('https://mighty-hollows-25837.herokuapp.com/notes/handle')
      .then(res => {
        const word = res.data.results[0].word
        const pronunciation = `/${res.data.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}/`
        const lexicalEntries = res.data.results[0].lexicalEntries
        this.setState({
          word: word,
          pronunciation: pronunciation,
          lexicalEntries: lexicalEntries
        })
      })
  }

  render() {
    const entries = this.state.lexicalEntries.map((lexicalEntry, index) => {
      return <LexicalEntry lexicalEntry={lexicalEntry} index={index} key={index}/>
    })

    return (
      <div>
        <WordInput/>
        <WordPronunciation word={this.state.word} pronunciation={this.state.pronunciation}/>
        <LexicalEntryTabs lexicalEntries={this.state.lexicalEntries}/>
        {entries}
      </div>
    )
  }
}

ReactDOM.render(<Word/>, document.getElementById('container'))
