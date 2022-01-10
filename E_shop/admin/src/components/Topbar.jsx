import React from 'react'
import "./topbar.css"
import {NotificationsNone, Settings }from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft">
                    <span className="logo">E-commerce</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    <span className="topIconBadge">2</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
