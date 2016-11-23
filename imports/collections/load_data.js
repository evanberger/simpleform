import {Mongo} from 'meteor/mongo';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create seeds collection

Meteor.methods({
//Method one
'loadData.insert': function(peakload) {
  console.log("Peak Load is: ", peakload);
  LoadData.insert({
    hours: {
      hour1: 0.25 * peakload,
      hour2: 0.75 * peakload,
      hour3: 1 * peakload,
      hour4: 0.75 * peakload
    }
  });
  // console.log("Hour 1 is", hour1.value);
  return (
    <div>
      <table>
        <thead>
          <td>Hour Ending</td>
          <td>Load</td>
        </thead>
        <tr>
          <td>HE1</td>
          <td>hour1.value</td>
        </tr>
        <tr>
          <td>HE1</td>
          <td>hour2.value</td>
        </tr>
        <tr>
          <td>HE1</td>
          <td>hour3.value</td>
        </tr>
        <tr>
          <td>HE1</td>
          <td>hour4.value</td>
        </tr>
      </table>
    </div>
  );


// LoadData.insert({
//   "peakload": 0,
//   "presets": {
//     "name": "College",
//     "hours": {
//       "hour1": 0.2,
//       "hour2": 0.2,
//       "hour3": 0.2,
//       "hour4": 0.2,
//       "hour5": 0.2,
//       "hour6": 0.2,
//       "hour7": 0.3,
//       "hour8": 0.4,
//       "hour9": 0.5,
//       "hour10": 0.7,
//       "hour11": 0.9,
//       "hour12": 1,
//       "hour13": 1,
//       "hour14": 1,
//       "hour15": 1,
//       "hour16": 1,
//       "hour17": 0.8,
//       "hour18": 0.7,
//       "hour19": 0.5,
//       "hour20": 0.5,
//       "hour21": 0.5,
//       "hour22": 0.5,
//       "hour23": 0.2,
//       "hour24": 0.2
//     }
//   },
//   "presets": {
//     "name": "High School",
//     "hours": {
//       "hour1": 0,
//       "hour2": 0,
//       "hour3": 0,
//       "hour4": 0,
//       "hour5": 0,
//       "hour6": 0.25,
//       "hour7": 0.3,
//       "hour8": 0.45,
//       "hour9": 0.75,
//       "hour10": 0.9,
//       "hour11": 1,
//       "hour12": 1,
//       "hour13": 1,
//       "hour14": 1,
//       "hour15": 1,
//       "hour16": 0.8,
//       "hour17": 0.8,
//       "hour18": 0.7,
//       "hour19": 0.5,
//       "hour20": 0.5,
//       "hour21": 0.3,
//       "hour22": 0.2,
//       "hour23": 0.1,
//       "hour24": 0
//     }
//   }
// });
}
});

export const LoadData = new Mongo.Collection('loadData');
