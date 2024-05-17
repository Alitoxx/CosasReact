import { CartView } from "./components/CartView"
import { CatalogVIew } from "./components/CatalogView"

export const CartApp = () => {

    return(
        <>        
            <div className="container">
                <h3>CartApp</h3>
                <CatalogVIew/>
                
                <div className="my-4 w-50">
                    <CartView/>
                </div>
            </div>
        </>
    )
}