import React, {Component} from "react";
import Create from "../components/Create";

export default class CreateScreen extends Component {
    render() {
        return (
            <div>
                <div className="summary">
                    <a href="/admin">BACK TO ADMIN</a>
                </div>
                <div className="create">
                    <Create/>
                </div>
            </div>
        );
    }
}