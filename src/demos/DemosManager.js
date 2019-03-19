import React, { Component } from 'react';

export default class DemosManager extends Component {

  constructor() {
    super();

    this.label='Class method';
    this.otherHandleClick = this.otherHandleClick.bind(this);
  }

  otherHandleClick(event) {
    console.log(`Clicked on the button ${this.label}`);
  }  

  handleClick = (event) => {
    console.log(`Clicked on the button ${this.label}`);
  }

  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Uncontrolled Text Field</label>:
            <input type="text" name="utf-demo" className="form-control" />
          </div>

          <div>
            <button
              onClick={() => this.otherHandleClick('custom argument')}
              className="btn btn-primary"
              type="button"
            >
              Click Me
            </button>
          </div>
        </form>
      </div>
    );
  }
}
