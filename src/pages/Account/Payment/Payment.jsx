import React, { useState } from "react";
import axios from "axios";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import "./payment.css";
export default function Payment() {
  const navigate = useNavigate();
  const { items, cartTotal } = useCart();
  const [name, nameChange] = useState("");
  const [email, brandChange] = useState("");
  const [phone, priceChange] = useState("");
  const [address, addressChange] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { name, email, phone, address, items };

    fetch("http://localhost:9000/order", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Đặt Hàng Thành Công.");
        navigate("/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="container__payment">
      <div className="item__payment__left">
        <div className="header">
          <h1>Giày</h1> <br />
          <h3>Thông Tin Giao Hàng</h3>
          <a>Bạn Đã Có Tài Khoản Chưa?</a>
        </div>
        <form onSubmit={handlesubmit}>
          <div className="input">
            <input
              required
              name="username"
              placeholder="Họ Và Tên"
              value={name}
              onChange={(e) => nameChange(e.target.value)}
            ></input>

            <div className="dls">
              <input
                required
                name="username"
                placeholder="Email"
                value={email}
                onChange={(e) => brandChange(e.target.value)}
              ></input>
              <input
                required
                name="name"
                placeholder="Số Điện Thoại"
                value={phone}
                onChange={(e) => priceChange(e.target.value)}
              ></input>
            </div>
            <input
              required
              name="name"
              placeholder="Địa Chỉ Nhận Hàng"
              value={address}
              onChange={(e) => addressChange(e.target.value)}
            ></input>
          </div>
          <button className="b-nt">Giao</button>
        </form>
        <div className="btn-payment">
          <p>Vui Lòng Điền Đầy Đủ Thông Tin Giao Hàng</p>
        </div>
      </div>
      <div className="item__payment__right">
        {items.map((item, index) => {
          return (
            <div className="payment__cart" key={index}>
              <table>
                <tr>
                  <td>
                    <img className="img__payment" src={item.img}></img>
                  </td>
                  <td>{item.depcriptions}</td>
                  <td className="price_btn">{item.price}.000đ</td>
                </tr>
              </table>
            </div>
          );
        })}
        <input placeholder="Mã Giảm Giá" className="aaaaaa" type="text" />
        <button className="bbbbb">Sử Dụng</button>
        <p className="thanhtoan">Tổng Thanh Toán:{cartTotal}.000đ</p>
      </div>
    </div>
  );
}
