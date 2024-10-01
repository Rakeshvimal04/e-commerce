import React from 'react';
import product1 from '../../assets/category1.jpg';
import product2 from '../../assets/category.jpg';
import product3 from '../../assets/pwood.jpg';
import product4 from '../../assets/ewood.jpg';
import product5 from '../../assets/special.jpg';
import '../style.css'
import { useNavigate } from 'react-router-dom';



const Product = () => {

    let productlist=[
        {id:1,Pname:"Wall Finish Interior",img:product1},
        {id:2,Pname:"Wall Finish Exterior",img:product2},
        {id:3,Pname:"Premium Wood Finish",img:product3},
        {id:4,Pname:"Economy Wood Finish",img:product4},
        {id:5,Pname:"special coating" ,img:product5}
    ]
    const navigate = useNavigate();  
    const handleViewProduct = () => {
        navigate('/productlist1');  // Navigates to /page route (which renders Page component)
      };
  return (
    <div className='d-flex justify-content-center mt-5'>
        {
            productlist.map((product)=>{
                return(
                    <>
                    <div className='w-50 text-center product-card p-3'>
                    <img src={product.img} alt='products' className='rounded mx-auto d-block w-75 h-75 product-image'/>
                    <p className='text-center fw-medium '>{product.Pname}</p>
                    <button className='btn btn-primary' onClick={handleViewProduct}> view Product</button>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Product
