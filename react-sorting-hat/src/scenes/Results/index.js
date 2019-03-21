import React from "react";
import { Link } from "react-router-dom";

const mergeWith = (fn, ...objs) => {
    let acc = {};
    objs.forEach(obj => {
        Object.keys(obj).forEach(key => {
            acc[key] ? acc[key] = fn(acc[key], obj[key]) : acc[key] = obj[key];
        });
    });
    return acc;
};

const maxKey = (obj) => Object.keys(obj).reduce((a, b) => obj[a] >= obj[b] ? a : b);

const Results = (props) => {
    const houses = props.location.state
          && props.location.state.choices
          && Object.getOwnPropertyNames(props.location.state.choices).length > 0
          && Object.entries(mergeWith((a, b) => a+b,
                                      ...Object.values(props.location.state.choices)
                                      .map(c => c.points)))
          .sort(([_, a], [__, b]) => a <= b);
    return (
        <div>
          {houses
           ? houses[0][0] + (houses.length >= 2 && Math.abs(houses[0][1] / houses[1][1] - 1) <= 0.05 ? `, but almost a ${houses[1][0]}.` : "!")
           : <div> First years should note that the forest on the grounds is forbidden to all pupils. Procede to the Great Hall to be sorted into your house.
               <Link to="/quiz">Take the Quiz!</Link>
             </div>}
        </div>
    );
};

export default Results;
