import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCharector, isFetchCompleted } from "../action";
import { useParams } from "react-router-dom";

const CharectorDetail = (props) => {
  const { id } = useParams();

  useEffect(() => {
    console.log(props)
    props.isFetchCompleted(false);
    props.getCharector(id);
  }, []);

  const renderDetails = () => {
    // console.log(props);
    if (!props.isFetchComplete) return <div>Loading...</div>;
    return (
      <div className="row">
        <img
          className="col-3"
          alt="Loading img"
          src={props.cherector.img}
        ></img>
        <div className="col-9">
          <table className="table table-light table-hover">
            <tbody>
              <tr>
                <th scope="row">Name</th>
                <td>:</td>
                <td>{props.cherector.name}</td>
              </tr>
              <tr>
                <th scope="row">Nick Name</th>
                <td>:</td>
                <td>{props.cherector.nickname}</td>
              </tr>
              <tr>
                <th scope="row">Occupation</th>
                <td>:</td>
                <td>{props.cherector.occupation[0]}</td>
              </tr>
              <tr>
                <th scope="row">Date of Birth</th>
                <td>:</td>
                <td>{props.cherector.birthday}</td>
              </tr>
              <tr>
                <th scope="row">portrayed</th>
                <td>:</td>
                <td>{props.cherector.portrayed}</td>
              </tr>
              <tr>
                <th scope="row">Status</th>
                <td>:</td>
                <td>{props.cherector.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return <div>{renderDetails()}</div>;
};

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    isFetchComplete: state.isFetchCompleted,
    cherector: state.charector[0]
  };
};

export default connect(mapStateToProps, { getCharector, isFetchCompleted })(
  CharectorDetail
);
