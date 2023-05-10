import "./message.css"

export default function Message(props){
    return(
        <div className="message">
            {props.message}
        </div>
    )
}