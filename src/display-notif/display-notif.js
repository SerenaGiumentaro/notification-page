import "./display-notif.css"

export default function DisplayNotification(props){
    return (
        <div className="display-notif">
            Notifications <span className="notif-number"> {props.notification} </span>
        </div>
    )
}