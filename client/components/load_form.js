import React, { Component } from 'react';

// Create our component
// Open question (Nov19): how do we now use refs, or props??
class LoadForm extends Component {
  onFormClick() {
    event.preventDefault();

    Meteor.call('loadData.insert');
    PeakLoadVal = LoadData.find({_id: "TwSEfmZEbLjDcL7Ab"});
    console.log(PeakLoadVal);
  }

  render() {
  return (
    <div>
      <div className="col-xs-6 col-xs-6-pull">
          <h2>General Project Info</h2>
          <div className="form-group">
            <label>Design Day Template: </label>
            <select>
              <option>- Select Load -</option>
              <option>High School</option>
              <option>Middle School</option>
            </select>
            <div className="form-inline">
              <label>Peak Load: </label>
              <input ref="peakload" className="form-control" type="number" step="10" placeholder="0" />
              <input className="btn btn-primary btn-block" type="submit" onClick={this.onFormClick.bind(this)} value="Submit Data" />
            </div>
          </div>
        </div>
    </div>
  );
}
}

// Export our component
export default LoadForm;
