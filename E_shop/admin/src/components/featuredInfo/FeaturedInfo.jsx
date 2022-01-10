import "./featuredInfo.css"
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Venituri</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">10.53 LEI</span>
                    <span className="featuredMoneyRate">-49.32 LEI<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Comparat cu luna trecuta</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Vanzari</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">46.53 LEI</span>
                    <span className="featuredMoneyRate">-4.32 LEI<ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSub">Comparat cu luna trecuta</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costuri</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">10.53 LEI</span>
                    <span className="featuredMoneyRate">+9.32 LEI<ArrowUpward className="featuredIcon"/></span>
                </div>
                <span className="featuredSub">Comparat cu luna trecuta</span>
            </div>
        </div>
    )
}
