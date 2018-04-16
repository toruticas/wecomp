const mainStyle = {
  backgroundColor: "white",
  border: "1px solid #EDEDED",
  padding: 30,
  marginBottom: 10,
}

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={mainStyle}>
        <h1>Feed</h1>
      </div>
    )
  }
};
