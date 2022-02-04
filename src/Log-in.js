import { Link } from 'react-router-dom'
import './log-in.css'

const LogIn = (props) => {

    function handler(){
        console.log(`it's it congratulation`)
    }
    return (
        <>
            <div className='nav'>
                <ul>
                    <li><Link to='/'>Log</Link></li>
                    <li><Link to='/msg'>messages</Link></li>
                </ul>
            </div>

            {props.active ?
                // <div className='log-form'>
                //     <input type="text" className='input-log' onChange={props.log} style={{ marginLeft: '100px' }} />
                //     <Link to='/msg' className='btn-log'> log in</Link>
                // </div>

                <form className="login">

                    <fieldset>

                        <legend className="legend">Login</legend>

                        <div className="input">
                            <input type="text"  placeholder="choose your name" required onChange={props.Username} />
                            <span></span>
                        </div>

                        <div className="input">
                            <input type="password" placeholder="Password" required onChange={props.log} />
                            <span></span>
                        </div>

                        {/* <button type="submit" className="submit"><i className="fa fa-long-arrow-right"></i></button> */}
                        <Link to='/msg' className='submit' on={handler}> log in</Link>
                    </fieldset>

                    <div className="feedback">
                        login successful <br />
                        redirecting...
                    </div>

                </form>



                : <p className='error'>error in the accout; try again later ...</p>}

        </>
    )
}

export default LogIn