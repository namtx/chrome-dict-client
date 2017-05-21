const React = require('react')

class WordInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    const newValue = e.target.value
    this.setState({inputValue: newValue})
  }

  render() {
    return (
      <div className="row">
        <div className="input-field col s6 push-s3">
          <input type="text" className="validate" onChange={this.handleChange} value={this.state.inputValue}/>
          <label htmlFor="icon_telephone">Search</label>
        </div>
      </div>
    )
  }
}

module.exports = WordInput
