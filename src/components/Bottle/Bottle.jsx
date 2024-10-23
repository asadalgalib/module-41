import './Bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
    const {name,price,ratings,img} = bottle;
    // console.log(bottle);
    return (
        <div className='bottle-container'>
            <h4>Name : {name}</h4>
            <p>Price : ${price}</p>
            <p>Ratings : {ratings}</p>
            <img src={img} alt="" />
            <button onClick={ () => handleAddToCart(bottle) }>Add to Cart</button>
        </div>
    );
};

export default Bottle;