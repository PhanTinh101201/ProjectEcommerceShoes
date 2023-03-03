import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../Redux/FetchApis/postSlice";
import {useNavigate } from "react-router-dom";
import  Footer  from '../../Footer/Footer';
import { useCart } from "react-use-cart";

export default function Dep() {
  const { addItem } = useCart();
  const { posts, loading } = useSelector((state) => state.post);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  const handleDetail = (item) => {
		navigate(`/product-detail/${item.id}`, { state: { ...item } })
	}
  return (
    <div>
     <div className="new__Arrical__content__navbar">
     {posts.map((item, index) => {
          if (item.type === "depnavbar")
            return (
              <div className="product__items">
              <div onClick={() => handleDetail(item)} key={index}>
                <img src={item.img} alt="" />
                <div class="middle">
                  <div class="text">Mua</div>
                </div>
                <p className="depcription">{item.depcriptions}</p>
                <p className="price">{item.price}.000đ</p>
              </div>
              <button onClick={() => addItem(item)} className="btn-cart">
                Thêm Vào Giỏ Hàng
              </button>
            </div>
            );
          })}
        {/* {posts.map((item) => {
          if (item.type === "depnavbar")
            return (
              <div key={item.id} className="product__items__navbar">
                <img  src={item.img} />
                <div class="middle">
                  <div class="text">Mua</div>
                </div>
                <p className="depcription">{item.depcriptions}</p>
                <p className="price">{item.price}</p>
                <button className="btn-cart">Thêm Vào Giỏ Hàng</button>
              </div>
            );
        })} */}
      </div>
      <p className='details'> Click Xem tất cả Dép</p>
      <Footer/>
    </div>
  )
}
