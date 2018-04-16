const mainStyle = {
  backgroundColor: "white",
  border: "1px solid #EDEDED",
  padding: 30,
}

export default class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={mainStyle}>
        <h1>Profile</h1>
      </div>
    )
  }
};
