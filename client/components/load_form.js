import React from 'react';

// Create our component
const LoadForm = (props) => {
  return (
    <div>
      <div>Hello There!</div>
      <div className="col-xs-6 col-xs-6-pull">
          <h2>General Project Info</h2>
          <div className="form-group">
            <label>Peak Load: </label>
            <input ref="peakload" className="form-control" type="number" />
          </div>
        </div>
    </div>
  );
};


// Export our component
export default LoadForm;
