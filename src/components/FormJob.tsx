import React, { Component, type ChangeEvent } from "react";
import ListJob from "./ListJob";

interface StateTypes {
  task: string;
  listJob: string[];
  error: string;
}
export default class FormJob extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      task: "",
      listJob: [],
      error: "",
    };
  }

  render() {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      this.setState({
        task: e.target.value,
      });
    };
    const handleSubmit = () => {
      const newJob = this.state.task;
      if (newJob.trim() === "") {
        this.setState({ error: "Tên công việc không được để trống" });
        return;
      }
      this.setState((prev) => ({
          listJob: [...prev.listJob, newJob],
          task: "",
          error: "",
        }),
        () => {
          console.log(this.state.listJob);
        }
      );
    };

    const { listJob } = this.state;
    return (
      <div className="todo-container">
        <div>
          <h2>Danh sách công việc</h2>

          <div className="input-group">
            <input
              onChange={handleChange}
              value={this.state.task}
              type="text"
            />
            <button type="submit" onClick={handleSubmit}>
              Thêm nhiệm vụ
            </button>
          </div>

          <ListJob jobs={this.state.listJob}></ListJob>

          <div className="footer">
            Công việc đã hoàn thành: <span>0</span>
            <span id="totalCount">/{listJob.length}</span>
          </div>
        </div>
      </div>
    );
  }
}
