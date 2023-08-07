// import { FaShoppingCart, FaRegBookmark, FaStar, FaFireAlt } from 'react-icons/fa';

export function Products(props) {
    return(
        <div className='ProductList'>
            <div key={props.id} className="product_card"></div>
                <img src={props.image} alt='product_image' className='produtImage'></img>
        </div>
    );
}