export const CartApp = () => {
    return(
        <>
        
            <div className="container">
                <h3>CartApp</h3>
                <div className="row">
                    <div className="col-4 my-2">
                        <div className="card">                        
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico RGB</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB Switch Blue</p>
                                <p className="card-text">$ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>     
                        </div>     
                    </div>
                    <div className="col-4 my-2">
                        <div className="card">                        
                            <div className="card-body">
                                <h5 className="card-title">Mouse Gamer</h5>
                                <p className="card-text">Mouse Gamer Negro</p>
                                <p className="card-text">$ 2000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>     
                        </div>     
                    </div>     
                    <div className="col-4 my-2">
                        <div className="card">                        
                            <div className="card-body">
                                <h5 className="card-title">Monitor Negro</h5>
                                <p className="card-text">Monitor Negro 2K</p>
                                <p className="card-text">$ 3000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>     
                        </div>     
                    </div>     
                    <div className="col-4 my-2">
                        <div className="card">                        
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico RGB</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB Switch Blue</p>
                                <p className="card-text">$ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>     
                        </div>     
                    </div>     
                    <div className="col-4 my-2">
                        <div className="card">                        
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico RGB</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB Switch Blue</p>
                                <p className="card-text">$ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>     
                        </div>     
                    </div>     
                    <div className="col-4 my-2">
                        <div className="card">                        
                            <div className="card-body">
                                <h5 className="card-title">Teclado Mecanico ldd</h5>
                                <p className="card-text">Teclado Mecanico con luces RGB Switch Blue</p>
                                <p className="card-text">$ 1000</p>
                                <button className="btn btn-primary">Agregar</button>
                            </div>     
                        </div>     
                    </div>          
                </div>
                <div className="my-4 w-50">
                    <table>
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>nombre</td>
                                <td>precio</td>
                                <td>cantidad</td>
                                <td>total</td>
                                <td>eliminar</td>
                            </tr>
                        </tbody>
                            
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    )
}