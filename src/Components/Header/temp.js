import React from "react";

class Header extends React.Component {

    constructor() {
        super()
        this.state = {
          inputValue : ""
        }
      }
    

      inputHandler = (event) => {
        this.setState({inputValue: event.target.value })
        console.log(this.state.inputValue)
      }

      buttonHandler = () => {
        alert(this.state.inputValue)
      }

    render () {
        return (
            <nav className={this.props.isSidebarOpen ? "navbar bg-transparent NaviBar-Closed" : "navbar bg-transparent NaviBar"}>
                <div className="container-fluid">
                    <div className="navbar-brand">Welcome <strong>User</strong>
                     </div>
                    <div className = "d-flex justify-content-end">
                        <a className = "nav-link" onClick = {this.props.modalOpened}>Sign In</a>
                        <form className="d-flex">
                        <input className="form-control me-2"
                               type="search" 
                               placeholder="Search"
                               onChange = {this.inputHandler}
                        />
                        <button className="btn btn-outline-success" type="submit" onClick = {this.buttonHandler}>Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        )
    }
};

export default Header;
