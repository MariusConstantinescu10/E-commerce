import "./widgetLg.css"

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Cele mai recente tranzactii</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Client</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Suma</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vasilescu Mihai</span>
                    </td>
                    <td className="widgetLgDate">10 Ianuarie 2022</td>
                    <td className="widgetLgAmount">100 LEI</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vasilescu Mihai</span>
                    </td>
                    <td className="widgetLgDate">10 Ianuarie 2022</td>
                    <td className="widgetLgAmount">100 LEI</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr><tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vasilescu Mihai</span>
                    </td>
                    <td className="widgetLgDate">10 Ianuarie 2022</td>
                    <td className="widgetLgAmount">100 LEI</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr><tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vasilescu Mihai</span>
                    </td>
                    <td className="widgetLgDate">10 Ianuarie 2022</td>
                    <td className="widgetLgAmount">100 LEI</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr><tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png" alt="" className="widgetLgImg" />
                        <span className="widgetLgName">Vasilescu Mihai</span>
                    </td>
                    <td className="widgetLgDate">10 Ianuarie 2022</td>
                    <td className="widgetLgAmount">100 LEI</td>
                    <td className="widgetLgStatus"><Button type="Pending"/></td>
                </tr>
            </table>
        </div>
    )
}
