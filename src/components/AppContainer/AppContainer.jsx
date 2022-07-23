import React from "react";
import { getCourseValues } from "../../Redux/HeaderReducer";
import Header from "./../Header/Header";
import Main from "../Main Section/Main";
import { compose } from "redux";
import { connect } from "react-redux";

class AppContainer extends React.Component {

    componentDidMount() {
        this.props.getCourseValues()
    }

    render() {
        return <div>
            < Header values={this.props.values} />
            <Main values={this.props.values} />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        values: state.header.values,
    }
}

export default compose(
    connect(mapStateToProps, { getCourseValues })
)(AppContainer)