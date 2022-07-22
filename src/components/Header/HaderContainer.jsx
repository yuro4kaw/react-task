import React from "react";
import { getCourseValues } from "../../Redux/HeaderReducer";
import Header from "./Header";
import { compose } from "redux";
import { connect } from "react-redux";

class HaderContainer extends React.Component {

    componentDidMount() {
        this.props.getCourseValues()
    }

    onPageChanged = () => {
        this.props.getCourseValues()
    }

    render() {
        return <>
            < Header
                values={this.props.values}

            />
        </>

    }
}


let mapStateToProps = (state) => {

    return {
        values: state.header.values,

    }
}

export default compose(
    connect(mapStateToProps,
        {
            getCourseValues
        })
)(HaderContainer)