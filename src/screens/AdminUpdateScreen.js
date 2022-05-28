import React, {Component} from "react";
import Create from "../components/Create";

export default class AdminUpdateScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <div className="summary">
                    <a href="/admin">BACK TO ADMIN</a>
                </div>
                <div className="create">
                    <Create id={this.props.match.params.id}/>
                </div>
            </div>
        );
    }
}