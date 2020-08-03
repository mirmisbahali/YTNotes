import React, { Component } from 'react'

export class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: "",
            submit: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({
            submit: this.state.input
        })

    }

    render() {

        return (
            <>
                {this.state.submit === ""
                    ? <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Enter YT Video url" onChange={this.handleChange} />
                        <button class="btn btn-primary">Submit</button>
                    </form>
                    : <iframe src={this.state.submit} title="video"></iframe>
                }


            </>
        )
    }
}

export default Video
