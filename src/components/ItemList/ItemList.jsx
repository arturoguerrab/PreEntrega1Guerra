

const ItemList = ({ productos }) => {


    return (
        <>
            {
                productos.map((element)=>{
                    return(
                        <div key={element.id}>
                            {element.nombre}
                        </div>
                    )
                })
                
            }
        </>
    )
}

export default ItemList