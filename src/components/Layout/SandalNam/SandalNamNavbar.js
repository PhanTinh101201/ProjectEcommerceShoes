import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate } from "react-router-dom";
import { getPosts } from "../../../Redux/FetchApis/postSlice";
import Sort from "../../Sort/Sort";
export default function SandalNamNavbar() {
  const { posts, loading } = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getPosts());
  }, []);
  if (loading) {
    return <h2 className="color">Loading...</h2>;
  }
  const handleDetail = (item) => {
    navigate(`/product-detail/${item.id}`, { state: { ...item } })
  }
  return (
    <div className="main1">
      <div className="container">
      <div className="sortcontainer">
       <h1 className="h1">Trang Chủ - SanDalNam</h1>
         <div className="Sort">
         </div>
       </div>
        <div>
          <div className="new__Arrical__content__navbar">
          {posts.map((item, index) => {
          if (item.type === "newarrival1")
            return (
              <div onClick={() => handleDetail(item)} key={index} className="product__items__navbar">
                <img src={item.img} />
                <div class="middle">
                  <div class="text">Mua</div>
                </div>
                <p className="depcription">{item.depcriptions}</p>
                <p className="price">{item.price}.000đ</p>
                <button className="btn-cart">Thêm Vào Giỏ Hàng</button>
              </div>
            );
          })}
          </div>
          <p className='details'> Click Xem tất cả SanDalNam</p>
        </div>
      </div>
    </div>
  )
}
