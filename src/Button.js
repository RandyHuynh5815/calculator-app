import React from "react";
import { pressButton } from "./app/action-creators/pressButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Button } from "react-bootstrap";

function Key(props) {
    return (
        <Button variant="light" key={props.value} onClick={() => props.pressButton(props.value)}>{props.value}</Button>
    )
}

function mapStateToProps(state) {
    return {
        firstVal: state.firstVal, 
        op: state.op, 
        secondVal: state.secondVal, 
        isFirst: state.isFirst
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({pressButton: pressButton}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Key);