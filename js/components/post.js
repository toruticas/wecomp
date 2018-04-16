const mainStyle = {
  backgroundColor: "white",
  border: "1px solid #EDEDED",
  padding: 15,
  marginBottom: 10,
}

export default class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = { input: "" }
  }

  onChange = (event) => {
    this.setState({ input: event.target.value })
  }

  onSubmit = () => {
    this.props.onSubmit(this.state.input)
    this.setState({ input: "" })
  }

  render() {
    return (
      <div style={mainStyle}>
        <input
          className="form-control"
          placeholder="No que você está pensando agora?"
          onChange={this.onChange}
          value={this.state.input}
        />

        <div style={{ minHeight: 40, paddingTop: 10 }}>
          <button className="btn btn-primary" style={{ float: "right" }} onClick={this.onSubmit}>
            Tweet
          </button>
        </div>
      </div>
    )
  }
};
