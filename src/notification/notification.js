import Avatar from "../avatar/avatar";
import TextNotification from "../text-notification/text-notiffication";
import "./notification.css";
import Message from "../message/message";

export default function Notification(props) {
    
  return (
    <div className={props.read ? "notification" : "notification read"} onClick={props.onClick}>
        <div>
            <Avatar src={require(`../assets/images/${props.src}`)}></Avatar>

            <TextNotification
                name={props.name}
                read={props.read}
                text={props.text}
                time={props.time}
                commentedPicSrc={props.commentedPicSrc}
            ></TextNotification>
        </div>
        <div>
      {props.message !== "" && <Message message={props.message}></Message>}

        </div>
    </div>
  );
}
