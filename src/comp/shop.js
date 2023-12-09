import React from 'react'
import './shop.css'
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Shop = ({shop,Filter,allcatefilter,addtocart}) => { 
  return (
    <>
        <div className="shop">
            <h2># shop</h2>
            <p>home . shop</p>
            <div className="container">
                <div className="left_box">
                    <div className="category">
                        <div className="header">
                            <h2>all categories</h2>
                        </div>
                        <div className="box">
                            <ul>
                                <li onClick={() => allcatefilter()}>#all</li>
                                <li onClick={() => Filter("tv")}># tv</li>
                                <li onClick={() => Filter("laptop")}># laptop</li>
                                <li onClick={() => Filter("watch")}># watch</li>
                                <li onClick={() => Filter("speaker")}># speaker</li>
                                <li onClick={() => Filter("electronics")}> # electronics</li>
                                <li onClick={() => Filter("headphone")}># headphone</li>
                                <li onClick={() => Filter("phone")}># phone</li>
                                

                            </ul>
                        </div>
                    </div>
                    <div className="banner">
                        <div className="img_box">
                            <img src="image/shop_left.jpg" alt="img" />
                        </div>
                    </div>
                </div>
                <div className="right_box">
                    <div className="banner">
                        <div className="img_box">
                            <img src="image/shop_top.webp" alt="" />
                        </div>
                    </div>
                    <div className="product_box">
                        <h2>shop product</h2>
                        <div className="product_container">
                        {
                            shop.map((curElm) => 
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                               <li><FaHeart /></li> 
                                               <li ><FaEye /></li> 
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <button onClick={() => addtocart (curElm)}>Add To Cart</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop