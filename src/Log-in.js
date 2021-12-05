import { Link } from 'react-router-dom'


const LogIn = (props) => {

    return (
        <>
            <div className='nav'>
                <ul>
                    <li><Link to='/'>Log</Link></li>
                    <li><Link to='/msg'>messages</Link></li>
                </ul>
            </div>

            {props.active ?
                <div className='log-form'>
                    <input type="text" className='input-log' onChange={props.log} style={{ marginLeft: '100px' }} />
                    <Link to='/msg' className='btn-log'> log in</Link>
                </div>
                : <p className='error'>error in the accout; try again later ...</p>}

        </>
    )
}

export default LogIn