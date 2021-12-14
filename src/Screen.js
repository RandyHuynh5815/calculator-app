import React from "react";
import { connect } from "react-redux";

function Screen(props) {
    return (
        <div><h1>{!props.isFirst && props.lastPressed === "NUM" ? props.secondVal : props.firstVal}</h1></div>
    )
}

function mapStateToProps(state) {
    return {
        firstVal: state.firstVal, 
        secondVal: state.secondVal, 
        isFirst: state.isFirst,
        lastPressed: state.lastPressed
    }
}

export default connect(mapStateToProps)(Screen);