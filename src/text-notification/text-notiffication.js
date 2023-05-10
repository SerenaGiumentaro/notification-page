import "./text-notification.css";

export default function TextNotification(props) {
  return (
    <div className="text-notification-container">
      <div className="text-notification">
        <p>
          <strong>{props.name}</strong>{" "}
          <span dangerouslySetInnerHTML={{ __html: props.text }}></span>
        {!props.read && <span className="red-bullet"></span>}
        </p>
        {props.commentedPicSrc !== '' && <img src={require(`../assets/images/${props.commentedPicSrc}`)} alt="commented you"></img>}
      </div>
      <p className="time">{props.time} </p>
    </div>
  );
}
