import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "../../Component/Dashboard/CartItems";
import Layout from "../../Layout/index";
import {cartActions} from "../../store/cart";
function Index() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addToCart = (item) => {
    // console.log(item)
    const { id, title, price ,description,images} = item;
    dispatch(cartActions.addToCart({ id, title,images, price,description }));
    // console.log([
    //   {key:1,title:'a'},
    //   {key:2,title:'b'},
    //   {key:3,title:'c'},
    //   {key:4,title:'d'},
    // ].find(el=>el.key==2))
  };
  return (
    <Layout>
      <div className="body-section">
        <div className="grid grid-cols-3 gap-[30px] m-[30px]">
          {items.map((el) => {
            return (
              <div
                key={el.id}
                className="card border relative border-[#dbdbdb] shadow rounded rounded-[20px] overflow-hidden  h-[420px]"
              >
                <img
                  // src="https://img.freepik.com/premium-vector/online-shopping-depicts-trolley-very-fast-shipping-item_435359-14.jpg?w=2000"
                  src={el.images[1]}
                  className="w-[100%] h-[200px] object-cover"
                  alt=""
                />
                <div className="p-[20px]">
                  <h4 className="text-[12px]">Title:</h4>
                  <h1 className="text-[24px]">{el.title}</h1>
                  <p className="mt-[5px] text-gray-500">Description</p>
                  <p className="">{el.description.slice(0, 50)}</p>

                  <button
                    className="absolute right-[20px] border border-[#797979] p-[5px] flex justify-end mt-[10px]"
                    onClick={() => addToCart(el)}
                  >
                    + Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <CartItems />
    </Layout>
  );
}

export default Index;

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then(console.log);
