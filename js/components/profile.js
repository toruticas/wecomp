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
        <img className="img-fluid" src="https://picsum.photos/300/300"/>
        <h4 style={{ marginTop: 15 }}>
          Rafael <small style={{ float: "right" }}>@toruticas</small>
        </h4>
        <div className="row">
          <div className="col-lg-6">
            Following 23
          </div>
          <div className="col-lg-6">
            Followers 23
          </div>
        </div>
      </div>
    )
  }
};
