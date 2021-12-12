import { Link } from 'react-router-dom'
import './messages.css'

const messages = (props) => {

    console.log(props.numberMsgs);
    const displayMsg = () => {
        return (

            Object.keys(props.msgs) ?
                Object.keys(props.msgs).map(el => (
                    <div className={props.msgs[el].user === props.activeAcc ? 'd-flex justify-content-start mb-4' : 'd-flex justify-content-end mb-4'}>
                        <div className={props.msgs[el].user === props.activeAcc ? 'msg_cotainer_send' : 'img_cont_msg'}>
                            <img src={props.msgs[el].user === props.activeAcc ? 'https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256' : "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"} className="rounded-circle user_img_msg" />
                        </div>
                        <div className="msg_cotainer">
                            {props.msgs[el].text}
                            <span className="msg_time"> {props.msgs[el].date}</span>
                        </div>
                    </div>
                )) : null

        )
    }

    return (
        <>
            <div className='nav'>
                <ul>
                    <li><Link to='/'>Log</Link></li>
                    <li><Link to='/msg'>messages</Link></li>
                </ul>
            </div>





            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-md-4 col-xl-3 chat"><div className="card mb-sm-3 mb-md-0 contacts_card">
                        <div className="card-header">
                            <div className="input-group">
                                <input type="text" placeholder="Search..." name="" className="form-control search" />
                                <div className="input-group-prepend">
                                    <span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="card-body contacts_body">
                            <ui className="contacts">
                                <li className="active">
                                    <div className="d-flex bd-highlight">
                                        <div className="img_cont">
                                            <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
                                            <span className="online_icon"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>best fr</span>
                                            <p>{navigator.onLine ? 'Online' : 'Offline'}</p>
                                        </div>
                                    </div>
                                </li>

                            </ui>
                        </div>
                        <div className="card-footer"></div>
                    </div></div>
                    <div className="col-md-8 col-xl-6 chat">
                        <div className="card">
                            <div className="card-header msg_head">
                                <div className="d-flex bd-highlight">
                                    <div className="img_cont">
                                        <img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" className="rounded-circle user_img" />
                                        {navigator.onLine ? <span className="online_icon"></span> : <span className="offline_icon"></span>}
                                    </div>
                                    <div className="user_info">
                                        <span>best fr</span>
                                        <p>{props.numberMsgs} Messages</p>
                                    </div>
                                    <div className="video_cam">
                                        <span><i className="fas fa-video"></i></span>
                                        <span><i className="fas fa-phone"></i></span>
                                    </div>
                                </div>
                                <span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
                                <div className="action_menu">
                                    <ul>
                                        <li><i className="fas fa-user-circle"></i> View profile</li>
                                        <li><i className="fas fa-users"></i> Add to close friends</li>
                                        <li><i className="fas fa-plus"></i> Add to group</li>
                                        <li><i className="fas fa-ban"></i> Block</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-body msg_card_body">

                                {displayMsg()}


                            </div>
                            <div className="card-footer">
                                <div className="input-group">
                                    <div className="input-group-append">
                                        <span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
                                    </div>
                                    <textarea name="" className="form-control type_msg" placeholder="Type your message..." onChange={props.save}></textarea>
                                    <div className="input-group-append">
                                        <span className="input-group-text send_btn" onClick={props.submit}><i className="fas fa-location-arrow" ></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default messages