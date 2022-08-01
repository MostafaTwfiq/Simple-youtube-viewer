import React from 'react';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''}
    }

    componentDidMount() {
        const input = document.getElementById("search-bar");
        input.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                this.props.onVideoSearch(this.state.term);
            }
        });
    }

    render() {
        return (
            <div className="search-bar" id="search-bar">
                <input value={this.state.term} onChange={({target}) => {this.setState({term: target.value})}}/>
            </div>
        );
    }
}