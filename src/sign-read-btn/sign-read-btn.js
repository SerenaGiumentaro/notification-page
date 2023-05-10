import "./sign-read-btn.css"

export default function SignReadBtn(props){
    
    return(
        <div>
        <button onClick={props.markAllAsRead}>Mark all as read</button>
        </div>
    )
}