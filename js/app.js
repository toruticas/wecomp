import Profile from "./components/profile"
import Feed from "./components/feed"
import Friends from "./components/friends"

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Profile/>
          </div>
          <div className="col-md-6">
            <Feed/>
          </div>
          <div className="col-md-3">
            <Friends/>
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
