import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Items } from "../../constants/Items";
import { cartActions } from "../../store/cart";

function CartItems() {
  const { selectedItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  const handleCart = (item)=>{
    dispatch(cartActions.addToCart(item))
  }
  const removeFromCart = (item)=>{
    dispatch(cartActions.removeFromCart(item))
  }
  return (
    <div className="m-[30px] shadow">
      <div className="card-header border-b-2 p-[20px]">
        <h1>Selected Cart Items:</h1>
      </div>
      <div className="card-body p-[15px] ">
        {selectedItems.map((el) => {
          return (
            <div
              key={el}
              className="grid grid-cols-[200px_1fr_200px] mt-[20px] border-b pb-[20px] items-center gap-[30px]"
            >
              <div className="image">
                <img
                  src={el.images[0]}
                  className="w-[200px] h-[100px] object-cover"
                />
                <p className="mt-[20px] text-[12px] text-[#545454]">Quantity: <span className="font-semibold">{el.quantity}</span></p>
              </div>
              <div>
                <h1 className="text-[#6a6a6a] ">Title:</h1>
                <h1 className="font-semibold">{el.title}</h1>
                <h1 className="text-[#6a6a6a] mt-[15px] ">Item Description</h1>
                <h1 className="font-semibold">{el.description}</h1>
                <h1 className="text-[#6a6a6a] mt-[15px]">Item Total Price:</h1>
                <h1 className="font-semibold">{el.totalPrice}</h1>
              </div>
              <div className="flex gap-[20px]">
                <button onClick={()=>removeFromCart(el)} className="border border-[#c14040] p-[5px] w-[50px] rounded-[10px] bg-red-200">
                  -
                </button>
                <button onClick={()=>handleCart(el)} className="border border-[#4dc140]  p-[5px]   w-[50px]  rounded-[10px] bg-green-200">
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CartItems;
