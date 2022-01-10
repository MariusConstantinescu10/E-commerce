import "./product.css"
import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart"
import {productData} from "../../data"
import { Publish } from "@material-ui/icons";

export default function Product() {
    return (
        <div className="product">
           <div className="productTitleContainer">
                <h1 className="productTitle">Detalii produs</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Produse vandute" title="Performanta in vanzari"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyA72.jpg" alt="" className="productInfoImg" />
                        <span className="productName">Samsung Galaxy A72</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">vanzari:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">produs activ:</span>
                            <span className="productInfoValue">da</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">nu</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Nume produs</label>
                        <input type="text" placeholder="nume produs" />
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="yes">Da</option>
                            <option value="no">Nu</option>
                        </select>
                        <label>Produs activ</label>
                        <select name="active" id="active">
                            <option value="yes">Da</option>
                            <option value="no">Nu</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://www.notebookcheck.net/uploads/tx_nbc2/SamsungGalaxyA72.jpg" alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
