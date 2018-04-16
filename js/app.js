import Profile from "./components/profile"
import Feed from "./components/feed"
import Friends from "./components/friends-list"
import data from "./data"

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = data;
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Profile info={data.profile}/>
          </div>
          <div className="col-md-6">
            <Feed feed={data.feed}/>
          </div>
          <div className="col-md-3">
            <Friends list={data.friends_suggestions}/>
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
