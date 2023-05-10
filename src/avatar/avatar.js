import "./avatar.css"

export default function Avatar(props){
    return (
        <div className="avatar">
            <img alt="avatar" src={props.src}></img>
        </div>
    )
}