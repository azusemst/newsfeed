import React from "react";
import './feed.css'

function Feed() {
    return <div className="w-100" style={{ display: 'flex' }}>
        <div className="leftbar">
            <div className="left-card d-flex rounded shadow-sm">
                <h5 className="m-auto">All</h5>
            </div>
            <div className="left-card d-flex rounded shadow-sm">
                <h5 className="m-auto">News</h5>
            </div>
            <div className="left-card d-flex rounded shadow-sm">
                <h5 className="m-auto">Posts</h5>
            </div>
        </div>
        <div>
            <div className="card m-4 p-4 border-0 border-bottom">
                <div style={{ display: 'flex' }}>
                    <img src="logo192.png" alt="profile pic" className="profile-pic"></img>
                    <div className="card-name w-100 my-auto ms-1">
                        <p className="m-0">Name</p>
                        <p className="m-0 text-secondary">Date</p>
                    </div>
                </div>
                <h5 className="card-title mt-2">Title</h5>
                <p className="card-text">Lorem ipsum dolor 测试测试测试 sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    </div>
}

export default Feed;