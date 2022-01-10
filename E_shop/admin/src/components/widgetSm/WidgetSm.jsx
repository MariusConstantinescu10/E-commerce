import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Membrii noi</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Popescu Ion</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Afiseaza
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Popescu Ion</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Afiseaza
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Popescu Ion</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Afiseaza
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Popescu Ion</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Afiseaza
                    </button>
                </li>
                <li className="widgetSmListItem">
                     <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetSmImg"/>
                    <div className="widgetSmUser">
                        <span className="widgetSmUsername">Popescu Ion</span>
                        <span className="widgetSmUserTitle">Student</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Afiseaza
                    </button>
                </li>
            </ul>
        </div>
    )
}
