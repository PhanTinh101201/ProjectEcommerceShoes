import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../../Redux/FetchApis/postSlice";
import {useNavigate } from "react-router-dom";
import  Footer  from '../../Footer/Footer';
import { useCart } from "react-use-cart";
export default function SandalNu() {
  const { addItem } = useCart();
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
          if (item.type === "giaynu")
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
      </div>
      <p className='details'> Click Xem tất cả Giày Nữ</p>
      <Footer/>
    </div>
  )
}
