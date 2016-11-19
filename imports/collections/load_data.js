import {Mongo} from 'meteor/mongo';

// Create seeds collection
const LoadData = new Mongo.Collection('loadData');

LoadData.insert({
  "presets": {
    "name": "College",
    "hours": {
      "hour1": 0.2,
      "hour2": 0.2,
      "hour3": 0.2,
      "hour4": 0.2,
      "hour5": 0.2,
      "hour6": 0.2,
      "hour7": 0.3,
      "hour8": 0.4,
      "hour9": 0.5,
      "hour10": 0.7,
      "hour11": 0.9,
      "hour12": 1,
      "hour13": 1,
      "hour14": 1,
      "hour15": 1,
      "hour16": 1,
      "hour17": 0.8,
      "hour18": 0.7,
      "hour19": 0.5,
      "hour20": 0.5,
      "hour21": 0.5,
      "hour22": 0.5,
      "hour23": 0.2,
      "hour24": 0.2
    }
  },
  "presets": {
    "name": "High School",
    "hours": {
      "hour1": 0,
      "hour2": 0,
      "hour3": 0,
      "hour4": 0,
      "hour5": 0,
      "hour6": 0.25,
      "hour7": 0.3,
      "hour8": 0.45,
      "hour9": 0.75,
      "hour10": 0.9,
      "hour11": 1,
      "hour12": 1,
      "hour13": 1,
      "hour14": 1,
      "hour15": 1,
      "hour16": 0.8,
      "hour17": 0.8,
      "hour18": 0.7,
      "hour19": 0.5,
      "hour20": 0.5,
      "hour21": 0.3,
      "hour22": 0.2,
      "hour23": 0.1,
      "hour24": 0
    }
  }
});

export {LoadData};
