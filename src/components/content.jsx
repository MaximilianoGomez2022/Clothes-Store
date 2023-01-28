import './bootstrap.min.css'
import './styles.css'

function Content(props){
    return (
        <div className="Content">
                {props.children}
         </div>
    )
}

export default Content