import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

export function Products(props) {
    return(
        <div className='ProductList'>
            <div key={props.id} className="productCard"></div>
                <img src={props.image} alt='product-imagess' className='produtImage'></img>

                <FaShoppingCart className={"productCard__cart"}/>
                <FaRegBookmark className={"productCard__wishlist"}/>
                <FaFireAlt className={"productCard__fastSelling"}/>

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='displayStack__1'>
                        <div className='productPrice'>${props.price}</div>
                        <div className='productSales'>{props.totalSales} unit solds</div>
                    </div>
                    <div className='displayStack__2'>
                        <div className='productRating'>
                            {[...Array(props.rating)].map((index)=>(
                                <FaStar id={index + 1} key={index} />
                            ))} 
                        </div>
                        <div className='productTime'>{props.timeLeft} days left</div>
                    </div>
                </div>
        </div>
    );
}