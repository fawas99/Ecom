import React,{useEffect, useState} from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { FaEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa6";
import { BsCart } from "react-icons/bs";



const Home = () => {

    const [newProduct,setNewProduct] = useState([])
    const [featuredProduct,setFeaturedProduct] = useState([])
    const [topProduct,setTopProduct] = useState([])


    const [trendingProduct, setTrendingProduct] = useState(Homeproduct)

    const filtercate = (x) => 
    {
        const filterproduct = Homeproduct.filter((curElm) =>
        {
            return curElm.type === x
            
        })
        setTrendingProduct(filterproduct)
    }
    const AllTrendingProduct = () =>
    {
        setTrendingProduct(Homeproduct)
    }
    //product type

    useEffect(() => 
    {
        productcategory()
    })
    const productcategory = () =>
    {
        //new product

        const newcategory = Homeproduct.filter((x) =>
        {
            return x.type === 'new'
        })
        setNewProduct(newcategory)

        //featured product
        const featuredcategory = Homeproduct.filter((x) =>
        {
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)
        
        //top category
        const topcategory = Homeproduct.filter((x) =>
        {
            return x.type === 'top'
        })
        setTopProduct(topcategory)

    }
  return (
    <>
    <div className="home">
        <div className="top_banner">
            <div className="content">
                <h3>silver aluminium</h3>
                <h2>Apple Watch</h2>
                <p>30% off at your first order</p>
                <Link to='/shop' className='link'>Shop Now</Link>
            </div>
        </div>
        <div className="trending">
            <div className="container">
                <div className="left_box">
                    <div className="header">
                        <div className="heading">
                        <h2 onClick={() => AllTrendingProduct()} >Trending product</h2>

                        </div>
                        <div className="cate">
                            <h3 onClick={() => filtercate('new')}>New</h3>
                            <h3 onClick={() => filtercate('featured')}>Featured</h3>
                            <h3 onClick={() => filtercate('top')}>Top selling</h3>
                        </div>
                    </div>
                    <div className="products">
                        <div className="container">
                            {
                                trendingProduct.map((curElm) =>
                                {
                                    return(
                                        <>
                                        <div className="box">
                                            <div className="img_box">
                                                <img src={curElm.image} alt="img" />
                                                <div className="icon">
                                                    <div className="icon_box">
                                                    <FaEye />
                                                    </div>
                                                    <div className="icon_box">
                                                    <FaHeart />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="info">
                                                <h3>{curElm.Name}</h3>
                                                <p>${curElm.price}</p>
                                                <button  className='btn'>Add to cart</button>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <button>Show more</button>
                    </div>

                </div>
                <div className="right_box">
                    <div className="right_container">
                        <div className="testimonial">
                            <div className="head">
                                <h3>our testimonial</h3>

                            </div>
                            <div className="detail">
                                <div className="img_box">
                                <img src="image/T1.jpg" alt="logo" />

                                </div>
                                <div className="info">
                                    <h3>stephan robot</h3>
                                    <h4>web designer</h4>
                                    <p>duis facuibas enim nunv ,molestie,nec facilitis arcu pulivid</p>
                                </div>
                            </div>
                        </div>
                        <div className="newsletter">
                        <div className="head">
                                <h3>newsletter</h3>

                            </div>
                            <div className="form">
                                <p>join our mailing </p>
                                <input type="email" placeholder='email' autoComplete='off'/>
                                <button>subscribe</button>
                                <div className="icon_box">
                                    <div className="icon">
                                    <FaFacebookF />

                                    </div>
                                    <div className="icon">
                                    <FaTwitter />

                                    </div>
                                    <div className="icon">
                                    <IoLogoInstagram />
                                    
                                    </div>
                                    <div className="icon">
                                    <FaYoutube />

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='image/Multi-Banner-1.jpg' alt='banner'></img>
              </div>
              <div className='box'>
                <img src='image/Multi-Banner-2.jpg' alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt=''></img>
                <img src='image/Multi-Banner-4.jpg' alt=''></img>
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        <div className="product_type">
            <div className="container">
                
                    <div className="box">
                        <div className="header">
                            <h2>new product</h2>
                        </div>
                        {
                            newProduct.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={curElm.image} alt="img" />
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className="icon">
                                                <button><FaEye/></button>
                                                <button><FaHeart /></button>
                                                <button><BsCart /></button>

                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                        
                    </div>

                    <div className="box">
                        <div className="header">
                            <h2>featured product</h2>
                        </div>
                        {
                            featuredProduct.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={curElm.image} alt="" />
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className="icon">
                                                <button><FaEye/></button>
                                                <button><FaHeart /></button>
                                                <button><BsCart /></button>

                                            </div>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }
                        
                    </div>
                    <div className="box">
                        <div className="header">
                            <h2>top product</h2>
                        </div>
                        {
                            topProduct.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div className="productbox">
                                        <div className="img-box">
                                            <img src={curElm.image} alt="" />
                                        </div>
                                        <div className="detail">
                                            <h3>{curElm.Name}</h3>
                                            <p>$ {curElm.price}</p>
                                            <div className="icon">
                                                <button><FaEye/></button>
                                                <button><FaHeart /></button>
                                                <button><BsCart /></button>

                                            </div>
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
    </>
  )
}

export default Home;