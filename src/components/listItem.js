import React from "react";
import { Link } from "react-router-dom";


class Listitem extends React.Component {

    renderList = () => {
        return this.props.cherectorlist.map((el) => {
          return (
            <Link to={`/Details/${el.char_id}`} className="list-group-item" key={el.char_id}>
              <div className="row">
                <img className="col-3 thumbnail-bg" alt="Loading" src={el.img}></img>
                <div className="col-9">
                <div className="fw-bold text-reset text-decoration-none">Name : {el.name}</div>
                  <h6>Nickname : {el.nickname}</h6>
                  <h6>DOB : {el.birthday}</h6>
                </div>
              </div>
            </Link>
          );
        });
    
      };

    render(){
        return(<div>{this.renderList()}</div>)
    }
}

export default Listitem;