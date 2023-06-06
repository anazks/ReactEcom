import React from 'react'
import './Products.css'
function Products() {
  return (
    <div className='Products'>
        <div className='Item'>
            <img className='Image' src='https://img.etimg.com/thumb/msid-59424966,width-640,resizemode-4,imgsize-610633/motorola-startac.jpg'>
            </img>
            <h1 className='ItemName'> Nokia Flip2 </h1>
            <h2 className='ItemPrice'> PRICE : $ 12</h2>
            <button className='ItemBtn'>BUY NOW</button>
            <button className='ItemBtn1'>ADD TO CART</button>
       </div>
       <div className='Item'>
            <img className='Image' src='https://www.globalbrandsmagazine.com/wp-content/uploads/2023/01/Top-10-Mobile-Brands-in-World.jpg'>
            </img>
            <h1 className='ItemName'> Iphone 11 </h1>
            <h2 className='ItemPrice'> PRICE : $ 500</h2>
            <button className='ItemBtn'>BUY NOW</button>
            <button className='ItemBtn1'>ADD TO CART</button>
       </div><div className='Item'>
            <img className='Image' src='https://m.economictimes.com/thumb/msid-99124365,width-1200,height-900,resizemode-4,imgsize-13326/oneplus-will-bring-back-alert-slider-with-1200x900.jpg'>
            </img>
            <h1 className='ItemName'> OnePlus 9R </h1>
            <h2 className='ItemPrice'> PRICE : $ 450</h2>
            <button className='ItemBtn'>BUY NOW</button>
            <button className='ItemBtn1'>ADD TO CART</button>
       </div><div className='Item'>
            <img className='Image' src='https://cdn1.smartprix.com/rx-iXHmn7Msb-w1200-h1200/XHmn7Msb.jpg'>
            </img>
            <h1 className='ItemName'> Redmi 12 </h1>
            <h2 className='ItemPrice'> PRICE : $ 320</h2>
            <button className='ItemBtn'>BUY NOW</button>
            <button className='ItemBtn1'>ADD TO CART</button>
       </div><div className='Item'>
            <img className='Image' src='https://m.media-amazon.com/images/I/51f4A6Tr8zL._SX679_.jpg'>
            </img>
            <h1 className='ItemName'> Pixel 7</h1>
            <h2 className='ItemPrice'> PRICE : $ 480</h2>
            <button className='ItemBtn'>BUY NOW</button>
            <button className='ItemBtn1'>ADD TO CART</button>
       </div>
        
    </div>
  )
}

export default Products