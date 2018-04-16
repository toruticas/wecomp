const mainStyle = {
  backgroundColor: "white",
  border: "1px solid #EDEDED",
  padding: 15,
  marginBottom: 10,
}

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={mainStyle}>
        <div className="row">
          <div className="col-4">
            <img className="img-fluid" src={this.props.info.user.avatar}/>
          </div>
          <div className="col-8">
            <h4>
              {this.props.info.user.full_name}
              <small style={{ marginLeft: 5}}>
                @{this.props.info.user.username}
              </small>
            </h4>

            <p>
              {this.props.info.description}
            </p>
          </div>
        </div>
        <div className="row" style={{ marginTop: 10 }}>
          <div className="col-4 text-center">
            {this.props.info.timestamp}
          </div>
          <div className="col-2">
            L {this.props.info.likes}
          </div>
          <div className="col-2">
            C {this.props.info.comments}
          </div>
          <div className="col-2">
            S {this.props.info.shares}
          </div>
        </div>
      </div>
    )
  }
};
