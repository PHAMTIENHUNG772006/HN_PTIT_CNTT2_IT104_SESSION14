import React, { Component, type ChangeEvent } from "react";
import ListJob from "./ListJob";

interface StateTypes {
  task: string;
  listJob: string[];
  selectedIndex: number | null;
  showModal: boolean;
  error: string;
}
export default class FormJob extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      task: "",
      listJob: [],
      error: "",
      selectedIndex: null,
      showModal: false,
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
      this.setState(
        (prev) => ({
          listJob: [...prev.listJob, newJob],
          task: "",
          error: "",
        }),
        () => {
          console.log(this.state.listJob);
        }
      );
    };

    const handleDelete = (indexFind: number) => {
      this.setState({
        selectedIndex: indexFind,
        showModal: true,
      });
    };

    const confirmDelete = () => {
      if (this.state.selectedIndex !== null) {
      this.setState((prev) => ({
        listJob: prev.listJob.filter((_, index) => index !== prev.selectedIndex),
        selectedIndex: null,
        showModal: false,
      }));
    }

    };

    const { listJob } = this.state;
    return (
      <div>
        <div className="todo-container">
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
          <div style={{color:"red"}}>{this.state.error}</div>

          <ListJob jobs={this.state.listJob} onDelete={handleDelete}></ListJob>

          <div className="footer">
            Công việc đã hoàn thành: <span>0</span>
            <span id="totalCount">/{listJob.length}</span>
          </div>
        </div>

       {this.state.showModal && this.state.selectedIndex !== null && (
          <div className="modal">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Xác nhận</h3>
              <p  style={{ cursor: "pointer" }}>x</p>
            </div>
            <p>
              Bạn có chắc chắn muốn xoá công việc <b>{this.state.listJob[this.state.selectedIndex]}</b> không?
            </p>
            <div className="actions">
              <button className="cancel">Hủy</button>
              <button className="ok" onClick={confirmDelete}>Đồng ý</button>
            </div>
          </div>
        )}

      </div>
    );
  }
}
