import React, { Component } from 'react';
import  {createContainer} from 'meteor/react-meteor-data';
import { LoadData } from '../../imports/collections/load_data';

// Next step is to map over the Mongo data and get the peakload * hours
class Table extends Component {

  render() {
    return (
        <table className="table">
          <thead>
            <tr>
              <th>Hour Ending</th>
              <th>Load</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>HE1</td>
              <td>8000</td>
            </tr>
            <tr>
              <td>HE1</td>
              <td>2000</td>
            </tr>
            <tr>
              <td>HE1</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>HE1</td>
              <td>7550</td>
            </tr>

          </tbody>
        </table>
    );
  }
}

export default createContainer(() => {
  Meteor.subscribe('data_publication');
  return {loadData: LoadData.find({}).fetch()};
}, Table);
