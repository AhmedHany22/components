import Comment from "./comment";

function Card(props) {
  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <Comment author={props.author} post={props.post} />
        </div>
        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button">Approve</div>
            <div className="ui basic red button">Decline</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
