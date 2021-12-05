import { Link } from 'react-router-dom'

const messages = (props) => {
    return (
        <>
            <div className='nav'>
                <ul>
                    <li><Link to='/'>Log</Link></li>
                    <li><Link to='/msg'>messages</Link></li>
                </ul>
            </div>
            <div className='msg-container'>{Object.keys(props.msgs) ?
                Object.keys(props.msgs).map(el => <span className={props.msgs[el].user}
                    key={el + Math.random()}><span className='user'>{props.msgs[el].user}</span>: {props.msgs[el].text} </span>) : null}</div>
            <div className='input-container'>
                <input className='input' placeholder='send message' type="text" onChange={props.save} />
                <button className='btn' onClick={props.submit}><ion-icon name="send-outline"></ion-icon></button>
            </div>
        </>
    )
}
export default messages