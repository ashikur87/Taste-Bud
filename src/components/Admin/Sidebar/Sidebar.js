import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Sidebar.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
// import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
// import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [isAdmin, setIsAdmin] = React.useState(true)
    console.log(isAdmin);
    const history = useHistory()

    React.useEffect(() => {
        fetch('http://localhost:9000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(res => setIsAdmin(res))
    }, [])
    // console.log(isAdmin)
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard" className="text-white">
                        <span>Dashboard</span>
                    </Link>
                </li>
                {
                    isAdmin ? <div>
                        <li>
                            <Link to="/addService" className="text-white">
                                <i class="fas fa-user-plus me-3 " /> <span>Add Service</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/manageService" className="text-white">
                                <i class="fas fa-tasks me-3 " /> <span>Manage Services</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/makeAdmin" className="text-white">
                                <i class="fas fa-tasks me-3 " /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="text-white">
                                😋 <span>Back To Home</span>
                            </Link>
                        </li>

                    </div> : <div className='text-center'><Link to="/" className="text-white">
                        😋 <span>Back To Home</span>
                    </Link></div>


                }



                {/* <li>
                    <Link to='/login'>{loggedInUser.email ? <Link to='/home' className='position' onClick={() => setLoggedInUser('')}>Sing Out</Link> : 'Sing In'}</Link>
                </li> */}
                {/* <li>
                    {loggedInUser.email ? <Link to="/" className="text-white" onClick={() => setLoggedInUser('')}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link> :
                        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>LogIn</span></Link>}
                </li> */}
            </ul>
            {/* <div>
                {loggedInUser.email ? <Link to="/" className="text-white" onClick={() => setLoggedInUser('')}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link> :
                    <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>LogIn</span></Link>}
            </div> */}
        </div>
    );
};

export default Sidebar;