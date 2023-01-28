import './styles.css'

function Header(props){
    return (
        <div className="Header">
            {props.children}
        </div>
    )
}

export default Header