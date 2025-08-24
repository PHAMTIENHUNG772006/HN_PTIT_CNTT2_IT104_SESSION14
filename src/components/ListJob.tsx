import React, { Component } from "react";

interface StateTypes {
  jobs: string[];
}
interface PropTypes {
  jobs: string[];
  onDelete: (index:number) => void;
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
            <div style={{ display: "flex", justifyContent:"space-between" }}>
              <div>
                <input type="checkBox" />
                {element}
              </div>
              <div>
                <button>Sửa</button>
                <button onClick={() =>
                  this.props.onDelete(index)
                  }>Xoá</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
