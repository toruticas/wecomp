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
            <img className="img-fluid" src="https://picsum.photos/300/300"/>
          </div>
          <div className="col-8">
            <h4>
              Full Name <small>@toruticas</small>
            </h4>

            <p>
              Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-center">
            dd/mm/aaaa
          </div>
          <div className="col-2">
            L 123
          </div>
          <div className="col-2">
            C 123
          </div>
          <div className="col-2">
            S 123
          </div>
        </div>
      </div>
    )
  }
};
