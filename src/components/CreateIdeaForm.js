import React from 'react';

class CreateIdeaForm extends React.Component {
  constructor() {
    super();
    this.state = { title: '', body: '' }
  }

  updateProperties(event) {
    event.preventDefault();
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    this.setState({ [fieldName]: fieldValue })
  }

  createIdea(event) {
    event.preventDefault();
    const idea = { title: this.state.title, body: this.state.body, id: Date.now() }
    this.props.saveIdea(idea)
    this.setState({title: '', body: ''})
  }

  render() {
    return (
      <div className='row'>
        <h3>New Idea</h3>
        <div className='input-field'>
          <input className='CreateIdea-title'
                 type='text' name='title'
                 placeholder='Title'
                 value={this.state.title}
                 onChange={ (event) => this.updateProperties(event) }/>
        </div>
          <textarea className='CreateIdea-body materialize-textarea'
                    name='body' placeholder='Body'
                    value={this.state.body}
                    onChange={ (event) => this.updateProperties(event) } />
          <button className='CreateIdea-submit btn'
                  onClick={ (event) => this.createIdea(event) }>
                  Submit
          </button>
      </div>
    );
  }
}

export default CreateIdeaForm;
