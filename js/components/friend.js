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

  follow = () => {
    this.props.follow(this.props.info.id)
  }

  unfollow = () => {
    this.props.unfollow(this.props.info.id)
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

          {this.props.info.following ?
            <button
              className="btn btn-primary"
              style={{ marginTop: 10 }}
              onClick={this.unfollow}
            >
              - Unfollow
            </button>
          :
            <button
              className="btn btn-outline-primary"
              style={{ marginTop: 10 }}
              onClick={this.follow}
            >
              + Follow
            </button>
          }
        </div>
      </div>
    )
  }
};
