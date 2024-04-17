import {useEffect, useState} from 'react'
import *as ProductosServices from '../services/products.services'
import *as CategoriesServices from '../services/generos.services'


function NewProduct() {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState([])

    useEffect(() => {
        CategoriesServices.find()
        .then((data)=>{
            setCategory(data)
            console.log(data)
        })
    }, [])

    function changeTitle(e){
        setTitle(e.target.value)
    }
    function changePrice(e){
        setPrice(e.target.value)
    }
    function changeDescription(e){
        setDescription(e.target.value)
    }
    function changeImage(e){
        setImage(e.target.value)
    }
    function changeCategory(e){
        setCategory(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefalut()
        ProductosServices.crear({title, description, price, image, category})
        .then(()=>{
         navigate("/")
        })
    }

    return  (
            <div>
            <form className='form-nuevo' onSubmit={onSubmit}>
            <h1>Agregá un nuevo producto</h1>
            <label className="form-label">Title</label>
            <input className="form-control" type="text" name="title" onChange={changeTitle} value={title}/>
            <label className="form-label">Price</label>
            <input className="form-control" type="text" name="price" onChange={changePrice} value={price}/>
            <label className="form-label">Description</label>
            <input className="form-control" type="text" name="description" onChange={changeDescription} value={description}/>
            <label className="form-label">Image</label>
            <input className="form-control" type="text" name="image" onChange={changeImage} value={image}/>
            <label className="form-label">Category</label>
            <select className="form-select" onChange={changeCategory} value={category}>
                    {category.map((category)=>{
                        return <option key={category.id} value={category.id}>{category}</option>
                    })}
            </select>
            <button>Hola</button>
            </form>
            </div>
    )
}

export default NewProduct