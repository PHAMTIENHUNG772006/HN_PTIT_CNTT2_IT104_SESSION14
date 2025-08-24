import React, { Component } from "react";

interface StateTypes {
  jobs: string[];
}
interface PropTypes {
  jobs: string[];
}

export default class ListJob extends Component<PropTypes, StateTypes> {
  constructor(props: PropTypes) {
    super(props);
    this.state = {
      jobs: this.props.jobs,
    };
  }

  render() {
    return (
      <div>
        {this.props.jobs.map((element, index) => (
          <div key={index}>
            <i className="bi bi-check-circle"></i> {element}
          </div>
        ))}
      </div>
    );
  }
}
