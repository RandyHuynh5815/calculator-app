import React from "react";
import { connect } from "react-redux";

function Screen(props) {
    return (
        <div><h1>{props.isFirst ? props.firstVal : props.secondVal}</h1></div>
    )
}

function mapStateToProps(state) {
    return {
        firstVal: state.firstVal, 
        secondVal: state.secondVal, 
        isFirst: state.isFirst
    }
}

export default connect(mapStateToProps)(Screen);