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
          <img className="img-fluid" src={this.props.info.avatar}/>
        </div>
        <div className="col-7">
          <h5>
            @{this.props.info.username}
          </h5>
        </div>
      </div>
    )
  }
};
