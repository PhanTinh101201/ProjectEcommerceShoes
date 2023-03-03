import React, { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { useLocation, useParams, NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";
import "./style.css";
const listSize = [
  { size: "36", price: 0 },
  { size: "47", price: 10 },
  { size: "38", price: 20 },
  { size: "39", price: 30 },
  { size: "40", price: 35 },
  { size: "41", price: 40 },
];
export default function DetailsProduct() {
  const { addItem } = useCart();
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(1);

  const increase = () => {
    setCount(count + 1);
  };
  const decline = () => {
    let newCount = count - 1;

    if (newCount < 1) {
      newCount = 1;
    }
    setCount(newCount);
  };
  const location = useLocation();
  const { id } = useParams();
  const img = location.state.img;
  const price = location.state.price;
  const depcriptions = location.state.depcriptions;
  const category = location.state.category;
  const total = price * count;
  const branch = location.state.branch;
  // const { img, price, depcriptions, category, total, branch } = item;
  return (
    <div className="container__details">
      <div className="body">
        <div className="container">
          <div class="card">
            <div class="container-fliud">
              <div class="wrapper row">
                <div class="preview col-md-6">
                  <div class="preview-pic tab-content">
                    <div class="tab-pane active" id="pic-1">
                      <img src={img} />
                    </div>
                  </div>
                </div>
                <div className="details col-md-6">
                  <h3 class="product-title">{depcriptions}</h3>
                  <div class="rating">
                    {branch} | {category}
                  </div>
                  <p class="product-description">
                    Gender: Unisex <br />
                    Chiều cao đế: 2 cm <br />
                    Quai dép chắc chắn,chống bụi bẩn , dễ làm sạch và không bay
                    màu kể cả dưới ánh sáng trực tiếp.
                    <br />
                    Được sản xuất trên thiết bị và kỹ thuật công nghệ cao. Chất
                    liệu sản phẩm cao cấp không gây hôi chân. <br />
                    Sản phẩm thuộc dòng Nanu Collection 2022
                  </p>
                  <h4 class="price1">
                    <span className="price__detail">Giá:{price}.000đ</span>
                  </h4>
                  <h5 class="sizes">
                    Kích Thước:
                    <span
                      class="size"
                      data-toggle="tooltip"
                      title="small"
                      value={value}
                    >
                      {listSize.map((item) => {
                        return (
                          <button
                            key={item.size}
                            value={item}
                            type="button"
                            class="btn11"
                          >
                            {item.size}
                          </button>
                        );
                      })}
                    </span>
                  </h5>
                  <p>Số Lượng</p>
                  <Box sx={{ "& > :not(style)": { m: 1 } }}>
                    <Fab
                      onClick={decline}
                      size="small"
                      color="secondary"
                      aria-label="add"
                    >
                      <AddIcon />
                    </Fab>
                    <span className="soluong">{count}</span>
                    <Fab
                      onClick={increase}
                      size="small"
                      color="secondary"
                      aria-label="add"
                    >
                      <AddIcon />
                    </Fab>
                  </Box>
                  <p className="payment__details">Thành Tiền:{total}.000đ</p>
                  <div class="action">
                    <NavLink className={"btn-Payment"} to={'/payment'}
                      onClick={() => addItem({id,img,price,depcriptions,category,total,branch,count})}
                      class="like btn btn-default"
                      type="button"
                    >
                      Thanh Toán
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product__details__tt">
          <p className="sptt">Sản Phẩm Tương Tự</p>
          <hr className="hrrrr" />
          <div className="disss">
            <div className="containerimg">
              <img
                className="image"
                src="https://product.hstatic.net/200000104423/product/dep_nanu_tdm_2240_den__1__copy_a8bff7c1adb2485f8d7904ecacf2579b_medium.jpg"
                alt=""
              />
              <div className="overlay">
                <div className="text">Xem</div>
              </div>
            </div>
            <div className="containerimg">
              <img
                className="image"
                src="https://product.hstatic.net/200000104423/product/dep_nanu_tdm_2240_den__1__copy_a8bff7c1adb2485f8d7904ecacf2579b_medium.jpg"
                alt=""
              />
              <div className="overlay">
                <div className="text">Xem</div>
              </div>
            </div>
            <div className="containerimg">
              <img
                className="image"
                src="https://product.hstatic.net/200000104423/product/dep_nanu_tdm_2240_den__1__copy_a8bff7c1adb2485f8d7904ecacf2579b_medium.jpg"
                alt=""
              />
              <div className="overlay">
                <div className="text">Xem</div>
              </div>
            </div>
            <div className="containerimg">
              <img
                className="image"
                src="https://product.hstatic.net/200000104423/product/dep_nanu_tdm_2240_den__1__copy_a8bff7c1adb2485f8d7904ecacf2579b_medium.jpg"
                alt=""
              />
              <div className="overlay">
                <div className="text">Xem</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
