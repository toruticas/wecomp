import Friend from "./friend"

const mainStyle = {
  backgroundColor: "white",
  border: "1px solid #EDEDED",
  padding: 15,
}

export default class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.list.map(friend => (
          <Friend info={friend} follow={this.props.follow} unfollow={this.props.unfollow}/>
        ))}
      </div>
    )
  }
};
