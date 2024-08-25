import {Component} from "react";

class DemoState extends Component {
    constructor() {
        super();
        this.state = {
            num : 0,
            name: "HaiTT"
        }
    }

    increment() {
        this.setState((prevState) =>{
            return {
                num : prevState.num + 1
            }
        })
        this.setState((prevState) =>{
            return {
                num : prevState.num + 1
            }
        })
        this.setState((prevState) =>{
            return {
                num : prevState.num + 1
            }
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.num}</h1>
                <button onClick={this.increment.bind(this)}>Increment</button>
                <h1>{this.state.name}</h1>
            </>
        )
    }
}

export default DemoState;