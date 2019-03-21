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
    return (
        <div>
          {props.location.state
           && props.location.state.choices
           && Object.getOwnPropertyNames(props.location.state.choices).length > 0
           ? maxKey(mergeWith((a, b) => a+b,
                              ...Object.values(props.location.state.choices).map(c => c.points)))
           : <div> Oops. You haven't been sorted yet.
               <Link to="/quiz">Take the Quiz!</Link>
             </div>}
        </div>
    );
};

export default Results;
