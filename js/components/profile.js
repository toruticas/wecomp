const mainStyle = {
  backgroundColor: "white",
  border: "1px solid #EDEDED",
  padding: 15,
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={mainStyle}>
        <img className="img-fluid" src={this.props.info.avatar}/>
        <h4 style={{ marginTop: 15 }}>
          {this.props.info.full_name}
          <small style={{ float: "right" }}>@{this.props.info.username}</small>
        </h4>
        <div className="row">
          <div className="col-lg-12">
            Following {this.props.info.following}
            <span style={{ float: "right" }}>
              Followers {this.props.info.followers}
            </span>
          </div>
        </div>
      </div>
    )
  }
};
