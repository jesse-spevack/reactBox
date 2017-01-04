import React from 'react';

class Idea extends React.Component {
  render() {
    return (
      <div className="col s12 m6 l4">
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title"
                  contentEditable
                  name="title"
                  onBlur={ (event) => this.props.updateTitle(event, this.props.id) }>
                  { this.props.title }
            </span>
            <p contentEditable
               onBlur={ (event) => this.props.updateBody(event, this.props.id) }
               name="body">
              { this.props.body }
            </p>
          </div>
          <div className="card-action">
            <button onClick={ () => this.props.destroy(this.props.id) }
               className='btn'><i className="material-icons left">delete</i>
               Delete
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Idea;
