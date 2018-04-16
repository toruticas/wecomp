const mainStyle = {
  backgroundColor: "white",
  border: "1px solid #EDEDED",
  padding: 15,
  marginBottom: 10,
}

export default class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" style={mainStyle}>
        <div className="col-5">
          <img className="img-fluid" src="https://picsum.photos/300/300"/>
        </div>
        <div className="col-7">
          <h5>
            @toruticas
          </h5>
        </div>
      </div>
    )
  }
};
