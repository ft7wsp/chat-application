import { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './messages.css'

function Messages(props) {
    const [numberMsgs, setNumberMsgs] = useState(0)
    // const [msgs, setMsgs] = useState('hey')
    const [displayMsg, setDispalyMsg] = useState()




    useEffect(() => {
        axios.get('https://chat-app-73c79-default-rtdb.firebaseio.com/msg.json').then(res => {
            const data = res.data
            const newNumberMsgs = Object.keys(data).length
            setNumberMsgs(newNumberMsgs)
            const newmsgs = Object.keys(data).slice(-7).map(msg => data[msg])
            // setMsgs(newmsgs)
            // for (let i = 0; i < 1000; i++) {
            //     console.log(i);
            // }

            setDispalyMsg((Object.keys(newmsgs) ?
                Object.keys(newmsgs).map(el => (
                    <div key={el + Math.random() * 10000} className={newmsgs[el].user === props.activeAcc ? 'd-flex justify-content-start mb-4' : 'd-flex justify-content-end mb-4'}>
                        <div className={newmsgs[el].user === props.activeAcc ? 'msg_cotainer_send' : 'img_cont_msg'}>
                            <img alt='' src={newmsgs[el].user === props.activeAcc ? 'https://image.shutterstock.com/image-illustration/user-profile-sign-web-icon-260nw-1888367872.jpg' : "https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"} className="rounded-circle user_img_msg" />
                        </div>
                        <div className="msg_cotainer">

                            {newmsgs[el].text}
                            <span className="msg_time">  {newmsgs[el].user}:  {newmsgs[el].date}</span>
                        </div>
                    </div>
                )) : null))


        }).catch(err => console.log(err))


    })


    // console.log(props.numbernewmsgs);


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
                                            <img alt='' src="https://image.shutterstock.com/image-illustration/user-profile-sign-web-icon-260nw-1888367872.jpg" className="rounded-circle user_img" />
                                            <span className="online_icon"></span>
                                        </div>
                                        <div className="user_info">
                                            <span>{props.Username}</span>
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
                                        <img alt='' src="data:image/jpeg;base64,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" className="rounded-circle user_img" />
                                        {navigator.onLine ? <span className="online_icon"></span> : <span className="offline_icon"></span>}
                                    </div>
                                    <div className="user_info">
                                        <span>server--server</span>
                                        <p>{numberMsgs} Messages</p>
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

                                {displayMsg}


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
export default Messages