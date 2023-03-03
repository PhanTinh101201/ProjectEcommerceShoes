import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getPosts } from "../../../Redux/FetchApis/postSlice";
import { useCart } from "react-use-cart";

export default function ManuMinima() {
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
      <div className="Arrival">Bộ Sưu Tập Dép Nanu Minimal</div>
      <div className="new__Arrical__content">
      {posts.map((item, index) => {
          if (item.type === "dep")
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
      <p className="details"> Click Xem tất cả Dép Nanu Minimal </p>
    </div>
  );
}
