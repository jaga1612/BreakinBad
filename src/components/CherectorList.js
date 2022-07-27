import React from "react";
import { connect } from "react-redux";
import { getCharectorList, isFetchCompleted } from "../action/index.js";
import Listitem from "./listItem";
import Dropdown from "./dropDown";

// import history from "../history.js";

class CharectorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1, perPage: 5, dropDownValue: [5, 10, 20] };
  }

  componentDidMount() {
    this.props.isFetchCompleted(false);
    this.props.getCharectorList();
  }

  setPerPage = (perPage) => {
    this.setState({ perPage: perPage });
  };
  renderList() {
    return (
      <Listitem
        cherectorlist={this.props.cherectorlist.slice(
          this.state.perPage * this.state.currentPage - this.state.perPage,
          this.state.currentPage * this.state.perPage
        )}
      />
    );
  }

  pageNoChange(e, action, noOfPage) {
    e.preventDefault();
    if (action === "P") {
      if (this.state.currentPage === 1) {
        return;
      } else {
        this.setState({ currentPage: this.state.currentPage - 1 });
      }
    }
    if (action === "N") {
      if (this.state.currentPage === noOfPage) {
        return;
      } else {
        this.setState({ currentPage: this.state.currentPage + 1 });
      }
    }
  }

  renderPageNo = () => {
    const noOfPage = Math.ceil(
      this.props.cherectorlist.length / this.state.perPage
    );
    const pageNo = [];
    for (let i = 0; i < noOfPage; i++) {
      pageNo.push(
        <li
          key={i}
          onClick={(e) => {
            e.preventDefault();
            this.setState({ currentPage: i + 1 });
          }}
          className={`page-item ${
            this.state.currentPage === i + 1 ? "active" : null
          }`}
        >
          <button className="page-link">{i + 1}</button>
        </li>
      );
    }

    return (
      <div>
        <ul className="pagination justify-content-end">
          <li
            onClick={(e) => {
              this.pageNoChange(e, "P", noOfPage);
            }}
            className="page-item"
          >
            <button className="page-link">Previous</button>
          </li>
          {pageNo}
          <li
            onClick={(e) => {
              this.pageNoChange(e, "N", noOfPage);
            }}
            className="page-item"
          >
            <button className="page-link">Next</button>
          </li>
        </ul>
      </div>
    );
  };

  render() {
    // console.log(this.state)
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">
            {Math.ceil(this.props.cherectorlist.length / this.state.perPage) >=
              1 && this.props.isFetchComplete
              ? this.renderPageNo()
              : null}
          </div>
          <div className="col">
            {Math.ceil(this.props.cherectorlist.length / this.state.perPage) >=
              1 && this.props.isFetchComplete ? (
              <Dropdown
                perPage={this.state.perPage}
                setPerPage={this.setPerPage}
                dropDownValue={this.state.dropDownValue}
              />
            ) : null}
          </div>
        </div>
        <div className="list-group">
          {this.props.isFetchComplete ? this.renderList() : "Loading..."}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cherectorlist: state.charector,
    isFetchComplete: state.isFetchCompleted,
  };
};

export default connect(mapStateToProps, { getCharectorList, isFetchCompleted })(
  CharectorList
);
