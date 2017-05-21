$(document).ready(function(){
  $.ajax({
    url: 'https://mighty-hollows-25837.herokuapp.com/notes/chat',
    method: 'GET',
    success: function(data) {
      $('#word').html(data.results[0].word)
      $('#pronunciations').html(`/${data.results[0].lexicalEntries[0].pronunciations[0].phoneticSpelling}/`)
      renderTabs('#lexical-entry-tabs', data.results[0].lexicalEntries)
      $('ul.tabs').tabs()
      renderSwipes('#test-swipes', data.results[0].lexicalEntries)
    }
  })

  function renderDefinitionsTemplate(definitions) {
    let result = ''
    definitions.forEach((definition) => {
      result += `<div class="card-panel hoverable orange-text">${definition}</div>`
    })
    return result
  }


  function renderTabs(element, lexicalEntries) {
    const length = lexicalEntries.length
    const gridCols = Math.floor(12/length)
    $(element).empty()
    lexicalEntries.forEach((lexicalEntry, index) => {
      $(element).append(renderLexicalEntryTab(lexicalEntry, index, gridCols))
    })
  }

  function renderLexicalEntryTab(lexicalEntry, index, gridCols) {
    return `<li class="tab col s${gridCols}"><a href="#test-swipe-${index}">${lexicalEntry.lexicalCategory}</a></li>`
  }

  function renderSwipes(element, lexicalEntries) {
    $(element).empty()
    lexicalEntries.forEach((lexicalEntry, index) => {
      $(element).append(`<div id="test-swipe-${index}" class="col s12 white">${renderLexicalEntry(lexicalEntry)}</div>`)
    })
  }

  function renderLexicalEntry(lexicalEntry) {
    return renderEntries(lexicalEntry)
  }

  function renderEntries(lexicalEntry) {
    let result = ''
    if(lexicalEntry.entries) {
      lexicalEntry.entries.forEach((entry) => {
        result += renderSenses(entry)
      })
    }
    return result
  }

  function renderSenses(entry){
    let result = ''
    if(entry.senses) {
      entry.senses.forEach((sense) => {
        result += renderSense(sense)
      })
    }
    return result
  }

  function renderSense(sense){
    let result = ''
    let examples = ''

    result += `<h3>${sense.definitions[0]}</h3>`
    if(sense.examples){
      sense.examples.forEach((example) => {
        examples += `<li><p class="orange-text accent-1-text"><i>${example.text}</i></p></li>`
      })
    }
    result += `<ul class="senses-example">${examples}</ul>`
    result += renderSubsenses(sense)
    return `<div class="card-panel">${result}</div>`
  }

  function renderSubsenses(sense) {
    let result = ''
    if(sense.subsenses){
      sense.subsenses.forEach((subsen) => {
        result += renderSubsense(subsen)
      })
    }
    return `<ul class="subsenses">${result}</ul>`
  }

  function renderSubsense(subsen){
    let result = ''
    result += `<h5>- ${subsen.definitions[0]}</h5>`

    if(subsen.examples){
      subsen.examples.forEach((example) => {
        result += `<p class="orange-text accent-1-text"><i>${example.text}</i></p>`
      })
    }
    return `<li>${result}</li>`
  }
})
