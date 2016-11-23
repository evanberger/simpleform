import { Meteor } from 'meteor/meteor';
import { LoadData } from '../imports/collections/load_data';

Meteor.startup(() => {
  // 11/20: I guess this is where we're going to publish the inputs?
  Meteor.publish('data_publication', function() {
    return LoadData.find({});
  });
});
