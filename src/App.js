import React from "react";
import store from "./store";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Link} from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";
import CreateScreen from "./screens/CreateScreen";
import AdminUpdateScreen from "./screens/AdminUpdateScreen";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="grid-container">
                        <header>
                            <Link to="/">Adidasss</Link>
                            <Link to="/admin">Admin</Link>
                        </header>
                        <main>
                            <Route path="/create" component={CreateScreen}/>
                            <Route path="/admin" component={AdminScreen}/>
                            <Route path="/update/:id" component={AdminUpdateScreen}/>
                            <Route path="/" component={HomeScreen} exact/>
                        </main>
                        <footer>All right is reserved.</footer>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
