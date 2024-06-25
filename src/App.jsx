import React, { Component } from 'react'
import { marked } from 'marked';
import './App.css'

class App extends Component {
  constructor (props) {
      super (props);
      this.state = {
          input:
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`,
          displayPreview:true,
          displayEditor:true,
      }
  }

  handleChange = (e) => {
    this.setState(({
        input: e.target.value
    }))
  }

  renderMarkdown = () => {
      return { __html: marked(this.state.input)}
  }

  toggleDisplayPreview = () => {
      this.setState({
          displayPreview:!this.state.displayPreview
      })
  }

  toggleDisplayEditor = () => {
    this.setState({
        displayEditor:!this.state.displayEditor
    })
}

  render () {

      return (
          <>
            {
              this.state.displayPreview && this.state.displayEditor ?
              <>
                <div className='main-container'>
                  <div className='title-block editor'>
                    <i className='fab fa-free-code-camp logo-icon'></i>
                    Editor
                    <i className='fas fa-arrows-alt arrow-icon' onClick={this.toggleDisplayEditor}></i>
                  </div>
                  <textarea 
                    id='editor'
                    value={this.state.input}
                    onChange={this.handleChange}
                  ></textarea>
                  <div className='title-block preview'>
                    <i className='fab fa-free-code-camp logo-icon'></i>
                    Previewer
                    <i className='fas fa-arrows-alt arrow-icon' onClick={this.toggleDisplayPreview}></i>
                  </div>
                  <div 
                  id='preview'
                  dangerouslySetInnerHTML={this.renderMarkdown()}
                  ></div>
                </div>
              </> :
              !this.state.displayPreview ?
              <>
                <div className='main-container'>
                  <div className='title-block preview'>
                    <i className='fab fa-free-code-camp logo-icon'></i>
                    Previewer
                    <i className='fas fa-compress arrow-icon' onClick={this.toggleDisplayPreview}></i>
                  </div>
                  <div 
                  id='preview'
                  dangerouslySetInnerHTML={this.renderMarkdown()}
                  ></div>
                </div>
              </> :
              !this.state.displayEditor ?
              <>
                <div className='main-container'>
                  <div className='title-block editor'>
                    <i className='fab fa-free-code-camp logo-icon'></i>
                    Editor
                    <i className='fas fa-compress arrow-icon' onClick={this.toggleDisplayEditor}></i>
                  </div>
                  <textarea 
                    id='editor'
                    style={{height:'617.88px'}}
                    value={this.state.input}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
              </> :
              null
            }
          </>
      ); 
  }
} 

export default App
