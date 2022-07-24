import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getCharectorList, isFetchCompleted } from "../action/index.js";

// import history from "../history.js";

class CharectorList extends React.Component {
  componentDidMount() {
    this.props.isFetchCompleted(false);
    this.props.getCharectorList();
  }

  renderList = () => {
    if(this.props.isFetchComplete) {
    return this.props.cherectorlist.map((el) => {
      return (
        <div className="list-group-item" key={el.char_id}>
          <div className="row">
            <img className="col-3 thumbnail-bg" alt="Loading" src={el.img}></img>
            <div className="col-9">
            <Link className="fw-bold text-reset text-decoration-none" to={`/Details/${el.char_id}`}>Name : {el.name}

        </Link>
              <h6>Nickname : {el.nickname}</h6>
              <h6>DOB : {el.birthday}</h6>
            </div>
          </div>
        </div>
      );
    });
}else return <div>Loading...</div>
  };

  render() {
    // console.log(this.props)
    return <div className="list-group">{this.renderList()}</div>;
  }
}


const mapStateToProps = (state) => {
  // console.log(state)
  return { cherectorlist: state.charector, isFetchComplete:state.isFetchCompleted };
};

export default connect(mapStateToProps, { getCharectorList, isFetchCompleted })(CharectorList);
