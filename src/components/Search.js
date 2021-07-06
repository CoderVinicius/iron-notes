import React from "react";

class Search extends React.Component {
  state = {
    input: "",
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.input, '- input' );
    if (this.state.input !== prevState.input) {
       this.props.filterNotes(this.state.input);
    }
  }

  handleSearch = (event) => {
    const { value } = event.target;
    this.setState({
      input: value,
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          className="input"
          onChange={this.handleSearch}
          placeholder="search..."
          value={this.state.input}
        />
      </div>
    );
  }
}

export default Search;