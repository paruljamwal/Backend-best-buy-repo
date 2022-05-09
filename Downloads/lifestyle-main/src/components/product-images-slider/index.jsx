import './product-image-slider.scss'
import PropTypes from 'prop-types'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Thumbs } from 'swiper'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom';

const ProductImagesSlider = (props) => {
    const [activeThumb, setActiveThumb] = useState()
    var [product,setProduct]=useState({});
    
    useEffect(()=>{
      getData()
    },[]);
    
    
    
    const {id}=useParams()
    
    const getData=()=>{
      fetch(`https://lifestyle-back.herokuapp.com/products/62738194d74f0aa8ad76689d`)
      .then((response)=>response.json())
      .then((pro)=>setProduct(pro))
      
    }
    
    useEffect(()=>{
      getData()
    },[]);
    var ans=[product.image1,product.image2,product.image3,product.image4,product.image5,product.image6]
    console.log("PRODUCT",ans)
    return <>
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            thumbs={{ swiper: activeThumb }}
            className='product-images-slider'
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={product.image1} alt="product images" />
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[Navigation, Thumbs]}
            className='product-images-slider-thumbs'
        >
            {
                props.images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="product-images-slider-thumbs-wrapper">
                            <img src={product.image1} alt="product images" />
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </>
}

ProductImagesSlider.propTypes = {
    images: PropTypes.array.isRequired
}

export default ProductImagesSlider