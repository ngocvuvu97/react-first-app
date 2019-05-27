import React from "react";
import { Table } from "react-bootstrap";
import mess from "../messages.json";

class Person extends React.Component {
  state = {
    data: mess
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <Table className="striped bordered hover ">

          <thead>
            <tr className="row">
              <th className="col-md-1">#</th>
              <th className="col-md-2">Sender Name</th>
              <th className="col-md-3">Date</th>
              <th className="col-md-6">Body</th>
            </tr>
          </thead>
          <tbody>
            {data.slice(0, 10).map((item, i) => {
              return (
                <tr key={i} className="row">
                  <td className="col-md-1">{i}</td>
                  <td className="col-md-2">
                    {item.senderName.first} {item.senderName.last}
                  </td>
                  <td className="col-md-3">{item.date}</td>
                  <td className="col-md-6">{item.body.slice(0, 100)}...</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        {mess.map((item, index) => {
          if (index % 10 === 0) {
            return (
              <button
                onClick={() => {
                  this.setState({
                    data: mess.slice(index, parseInt(index + 10))
                  });
                }}
                className="btn btn-primary"
              >
                {index / 10}
              </button>
            );
          }
        })}
        {/* <button
          onClick={() => {
            this.setState({
              data: data.slice(1, 3)
            });
          }}
        >
          Click to tét
        </button> */}
      </>
    );
  }
}
export default Person;
