// From components/table.js
// Insert a Meteor helper function here to populate the database - taking props from LoadData
    // renderRows() {
    //   const hour = [this.props.hours.hour1.value, this.props.hours.hour2.value,
    //           this.props.hours.hour3.value, this.props.hours.hour4.value]
    //    return (
    //     //  console.log(hour);
    //     );
    //   }
    //   );
    // }
    // this idea here is to do a renderRows function
    // RenderRows takes the props data from LoadData
    // it then creates an hours array, or just a bunch of variables
    // const Hours1 = this.props.hour1.value;
    // const Hours2 = this.props.hour2.value;
    // const Hours3 = this.props.hour3.value;
    // const Hours4 = this.props.hour4.value;
    // console.log(Hours1);
    // console.log(Hours2);
    // console.log(Hours3);
    // console.log(Hours4);


// from client/components/app.js
//  11/20: This is accomplishing everything except getting the data on the damn screen. Promise maybe.
Template.simplestform.events({
  'submit form': function(event) {
    event.preventDefault();
    var PeakLoadVar = event.target.peak.value;
    console.log("Peak Load is: " + PeakLoadVar);
    SimplePeak.insert({
      "peakload": PeakLoadVar
    });
    event.target.peak.value = 0;
  }
});

// Meteor templates - a test
SimplePeak = new Mongo.Collection('SimplePeak');
if (Meteor.isClient) {
  Template.simplestform.helpers({
    'demo': function(){
      return peak.value;
    }
  });
}

// From main.html
<div>-------------------------------------</div>
  <div class="meteortemplate">
  {{> simplestform}}
  <div>Peak Load is: {{SimplePeak.peakload}}</div>
</div>
This is the Meteor template. We may abandon this.
<template name="simplestform">
    <form>
      <div>Peak Load:
        <input type="number" name="peak" step="10" value="0">
        <input type="submit" value="Set Peak">
      </div>
    </form>
</template>
