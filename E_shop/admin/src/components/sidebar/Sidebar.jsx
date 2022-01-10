import "./sidebar.css"
import {Home, BarChart, TrendingUp, Person, Shop, Payment, MailOutline, Feedback, Message} from "@material-ui/icons"
import { Link } from "react-router-dom"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                            <li className="sidebarListItem" >
                                <Home className="sidebarIcon"/>
                                Acasa
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <BarChart className="sidebarIcon"/>
                            Statistici
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Vanzari
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Meniu</h3>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                            <li className="sidebarListItem ">
                                <Person className="sidebarIcon"/>
                                Utilizatori
                            </li>
                        </Link>
                        <Link to="/products" className="link">
                            <li className="sidebarListItem">
                                <Shop className="sidebarIcon"/>
                                Produse
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Payment className="sidebarIcon"/>
                            Tranzactii
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notificari</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <Feedback className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <Message className="sidebarIcon"/>
                            Mesaje
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
