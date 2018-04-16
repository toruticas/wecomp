import Profile from "./components/profile"
import Feed from "./components/feed"
import Friends from "./components/friends-list"
import Post from "./components/post"

import data from "./data"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = data;
  }

  follow = (friendId) => {
    this.setState({
      profile: {
        ...this.state.profile,
        following: this.state.profile.following + 1,
      },
      friends_suggestions: this.state.friends_suggestions.map(friend => {
        if (friend.id === friendId) {
          return { ...friend, following: true }
        }

        return friend
      })
    })
  }

  unfollow = (friendId) => {
    this.setState({
      profile: {
        ...this.state.profile,
        following: this.state.profile.following - 1,
      },
      friends_suggestions: this.state.friends_suggestions.map(friend => {
        if (friend.id === friendId) {
          return { ...friend, following: false }
        }

        return friend
      })
    })
  }

  onTweet = (value) => {
    this.setState({
      feed: [
        {
          id: this.state.feed[this.state.feed.length - 1].id,
          user: this.state.profile,
          likes: 0,
          comments: 0,
          shares: 0,
          description: value,
          timestamp: "17/04/2018",
        },
        ...this.state.feed
      ]
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Profile info={this.state.profile}/>
          </div>
          <div className="col-md-6">
            <Post onSubmit={this.onTweet} />
            <Feed feed={this.state.feed}/>
          </div>
          <div className="col-md-3">
            <Friends
              list={this.state.friends_suggestions}
              follow={this.follow}
              unfollow={this.unfollow}
            />
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
