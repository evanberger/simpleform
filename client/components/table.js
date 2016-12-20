var React = require('react');

// If Manual: create a new table of inputs, and onSubmit, have all of those
// inputs be set to an HE1 var (using this.refs?)

var Table = React.createClass({
  render: function () {
	var load = this.props.load;
  var profile = this.props.profile;
  if (profile == "Office Building") {
    var HE1 = load * 0.1;
    var HE2 = load * 0.1;
    var HE3 = load * 0.1;
    var HE4 = load * 0.1;
    var HE5 = load * 0.1;
    var HE6 = load * 0.1;
    var HE7 = load * 0.3;
    var HE8 = load * .35;
    var HE9 = load * .75;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load * .9;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load;
    var HE16 = load;
    var HE17 = load * .9;
    var HE18 = load * .7;
    var HE19 = load * .6;
    var HE20 = load * .4;
    var HE21 = load * .4;
    var HE22 = load * .2;
    var HE23 = load * .2;
    var HE24 = load * .1;
  } else if (profile=="High School") {
    var HE1 = 0;
    var HE2 = 0;
    var HE3 = 0;
    var HE4 = 0;
    var HE5 = 0;
    var HE6 = load * 0.25;
    var HE7 = load * 0.3;
    var HE8 = load * .45;
    var HE9 = load * .75;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load;
    var HE16 = load * .8;
    var HE17 = load * .8;
    var HE18 = load * .7;
    var HE19 = load * .5;
    var HE20 = load * .5;
    var HE21 = load * .3;
    var HE22 = load * .2;
    var HE23 = load * .1;
    var HE24 = load * .0;
  } else if (profile=="Middle School") {
    var HE1 = 0;
    var HE2 = 0;
    var HE3 = 0;
    var HE4 = 0;
    var HE5 = 0;
    var HE6 = 0;
    var HE7 = load * 0.25;
    var HE8 = load * .45;
    var HE9 = load * .75;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load * .8;
    var HE16 = load * .5;
    var HE17 = load * .2;
    var HE18 = load * .2;
    var HE19 = 0;
    var HE20 = 0;
    var HE21 = 0;
    var HE22 = 0;
    var HE23 = 0;
    var HE24 = 0;
  } else if (profile=="College") {
    var HE1 = load * .2;
    var HE2 = load * .2;
    var HE3 = load * .2;
    var HE4 = load * .2;
    var HE5 = load * .2;
    var HE6 = load * .3;
    var HE7 = load * .4;
    var HE8 = load * .5;
    var HE9 = load * .7;
    var HE10 = load * .9;
    var HE11 = load;
    var HE12 = load;
    var HE13 = load;
    var HE14 = load;
    var HE15 = load;
    var HE16 = load;
    var HE17 = load * .8;
    var HE18 = load * .7;
    var HE19 = load * .5;
    var HE20 = load * .5;
    var HE21 = load * .5;
    var HE22 = load * .5;
    var HE23 = load * .2;
    var HE24 = load * .2;
  }
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>Profile is {profile}</td>
            </tr>
            <tr>
             <td>Load is: {load}</td>
            </tr>
            <tr>
              <td>HE1</td>
              <td>{HE1}</td>
            </tr>
            <tr>
              <td>HE2</td>
              <td>{HE2}</td>
            </tr>
            <tr>
              <td>HE3</td>
              <td>{HE3}</td>
            </tr>
            <tr>
              <td>HE4</td>
              <td>{HE4}</td>
            </tr>
            <tr>
              <td>HE5</td>
              <td>{HE5}</td>
            </tr>
            <tr>
              <td>HE6</td>
              <td>{HE6}</td>
            </tr>
            <tr>
              <td>HE7</td>
              <td>{HE7}</td>
            </tr>
            <tr>
              <td>HE8</td>
              <td>{HE8}</td>
            </tr>
            <tr>
              <td>HE9</td>
              <td>{HE9}</td>
            </tr>
            <tr>
              <td>HE10</td>
              <td>{HE10}</td>
            </tr>
            <tr>
              <td>HE11</td>
              <td>{HE11}</td>
            </tr>
            <tr>
              <td>HE12</td>
              <td>{HE12}</td>
            </tr>
            <tr>
              <td>HE13</td>
              <td>{HE13}</td>
            </tr>
            <tr>
              <td>HE14</td>
              <td>{HE14}</td>
            </tr>
            <tr>
              <td>HE15</td>
              <td>{HE15}</td>
            </tr>
            <tr>
              <td>HE16</td>
              <td>{HE16}</td>
            </tr>
            <tr>
              <td>HE17</td>
              <td>{HE17}</td>
            </tr>
            <tr>
              <td>HE18</td>
              <td>{HE18}</td>
            </tr>
            <tr>
              <td>HE19</td>
              <td>{HE19}</td>
            </tr>
            <tr>
              <td>HE20</td>
              <td>{HE20}</td>
            </tr>
            <tr>
              <td>HE21</td>
              <td>{HE21}</td>
            </tr>
            <tr>
              <td>HE22</td>
              <td>{HE22}</td>
            </tr>
            <tr>
              <td>HE23</td>
              <td>{HE23}</td>
            </tr>
            <tr>
              <td>HE24</td>
              <td>{HE24}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = Table;
