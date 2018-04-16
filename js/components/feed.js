import Tweet from "./tweet"

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    )
  }
};
