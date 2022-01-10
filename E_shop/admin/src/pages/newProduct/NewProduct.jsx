import "./newProduct.css"

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addProductTitle">Creare produs nou</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Imagine</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProductItem">
                    <label>Nume</label>
                    <input type="text" placeholder="Samsung Galaxy A7" />
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="addProductItem">
                    <label>Activ</label>
                    <select name="active" id="active">
                        <option value="yes">Da</option>
                        <option value="no">Nu</option>
                    </select>
                </div>
                <button className="addProductButton">Create</button>
            </form>
        </div>
    )
}
