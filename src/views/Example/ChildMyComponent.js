import React from "react";

/**
 * 
 * 
 */

class ChildMyComponent extends React.Component {

    /**
     * JSX : cho phep chung ta su dung HTML trong JavaScript
     * 
     * 
     * 
    */
    state = {
        name: "Minh Quang",
        fname: "Minh",
        lname: "Quang",
        age: 21
    }

    handleOnChangeName = (event) => {
        console.log(event.target.value, "event.target", event.target, "event object", event);
        this.setState({
            name: event.target.value
        });
    }
    handleOnButton = () => {
        console.log("click me button");
        alert("Hello");
    }
    handleOnChangeFirstName = (event) => {
        console.log(">>> handleOnChangefirstName", event.target.value);
        this.setState({
            fname: event.target.value
        });
    }
    handleOnChangeLastName = (event) => {
        console.log(">>> handleOnChangeLastName", event.target.value);
        this.setState({
            lname: event.target.value
        });
    }
    handleSubmit = (event) => {

        event.preventDefault();
        console.log(">>> handleSubmit", this.state.fname, this.state.lname);
        alert("Hello " + this.state.fname + " " + this.state.lname);

    }


    render() {

        // return (
        //     <div className="my-component">

        //         <div className="container">
        //             <input type="text" value={this.state.name}
        //                 onChange={(event) => this.handleOnChangeName(event)} />
        //             <div className="fisrt">My name is {this.state.name}</div>
        //             <div className="second">My age is {this.state.age}</div>
        //         </div>


        //         <div className="second">
        //             <button onClick={() => this.setState({ age: this.state.age + 1 })}>Increase age</button>
        //         </div>


        //         <div className="third">
        //             <button onClick={() => this.handleOnButton()}>click me</button>
        //         </div>


        //     </div >
        // );
        return (
            <>
                <form>
                    <a>Xin Chao</a>
                </form>
            </>
        )
        // console.log(">>> call render : ", this.state);
        // return (
        //     <>
        //         <form>
        //             <lable htmlFor="fname">First Name :</lable><br />
        //             <input type="text" value={this.state.fname} onChange={(event) => this.handleOnChangeFirstName(event)}></input><br />
        //             <label htmlFor="lname">Last Name :</label><br />
        //             <input type="text" value={this.state.lname} onChange={(event) => this.handleOnChangeLastName(event)}></input><br />
        //             <input type="button" value="submit" onClick={(event) => this.handleSubmit(event)}></input>

        //         </form>
        //     </>
        // )
    }
}


export default ChildMyComponent;