import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

export default function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Editare utilizator</h1>
                <Link to="/newUser">
                    <button className="userAddButton">Creare</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="userShowImg"/>
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Jon Snow</span>
                            <span className="userShowUserTitle">Student</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Detalii cont</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">jonsnow01</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday  className="userShowIcon"/>
                            <span className="userShowInfoTitle">08.05.2000</span>
                        </div>
                        <span className="userShowTitle">Contact</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">+40 744 696 100</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">jonsnow@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Targu Jiu | Romania</span>
                        </div>
                    </div>
                 </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input
                                    type="text"
                                    placeholder="jonsnow01"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label>Nume complet</label>
                                <input
                                    type="text"
                                    placeholder="Jon Snow"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input
                                    type="text"
                                    placeholder="jonsnow@gmail.com"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label>Telefon</label>
                                <input
                                    type="text"
                                    placeholder="+40 744 696 100"
                                    className="userUpdateInput"
                                    />
                            </div>
                            <div className="userUpdateItem">
                                <label>Adresa</label>
                                <input
                                    type="text"
                                    placeholder="Targu Jiu | Romani"
                                    className="userUpdateInput"
                                    />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg"
                                src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt=""/>
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                    <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>  
                </div>
            </div>
        </div>
    )
}
