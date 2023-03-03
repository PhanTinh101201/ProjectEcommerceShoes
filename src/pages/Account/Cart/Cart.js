import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import { NavLink } from "react-router-dom";
import './cart.css';
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    } = useCart();
    if (isEmpty) return <h5 className='text-center'>Giỏ Hàng Trống <p className='shoping-aa'><br /><NavLink to={"/"}>Mua Hàng</NavLink></p></h5>
    return (
        <div>
            <div className="row justify-content-center">
                <h4 className="text-center py-3 text-decoration-underline">Giỏ Hàng</h4>
                <div className="col-sm-12 col-md-12  col-xl-8 col-xxl-8 py-4">
                    <div className="d-flex justify-content-center py-3">
                        {/* <p className='position-relative fw-bolder text-title'>Cart <span className="postition-absolute translate-middle rounded-pill badge bg-danger mx-1">{totalUniqueItems}</span></p>
                <p className='fw-bolder text-title'>Total Items <span className="postition-absolute translate-middle rounded-pill badge bg-success mx-1">{totalItems}</span></p> */}
                    </div>
                    <div className="bang-cart">
                        <table className="table">
                            <tr>
                                <th>Ảnh</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Size</th>
                                <th>Màu Sắc</th>
                                <th>Số Lượng</th>
                                <th>Actions</th>
                            </tr>
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index} className='align-middle'>
                                            <td><img src={item.img} className='img-cart' /></td>
                                            <td >{item.depcriptions}</td>
                                            <td>{item.price}.000đ</td>
                                            <td>{item.Size}</td>
                                            <td>{item.color}</td>
                                            <td className='aa'>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity - 1)} className='btn1 btn-outline-dark ms-111'>-</button>
                                                <p>{item.quantity}</p>
                                                <button onClick={() => updateItemQuantity(item.id, item.quantity + 1)} className='btn1 btn-outline-dark ms-111'>+</button>
                                            </td>
                                            <td><button onClick={() => removeItem(item.id)} className='btn1 btn-outline-danger ms-5'>Xóa</button></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="d-flex justify-content-between py-5">
                        <button onClick={() => emptyCart()} className="btn btn-outline-danger">Xóa Tất Cả</button>
                        <h3>Thành Tiền:{cartTotal}.000đ</h3>
                    </div>
                    <div className="payment">
                        <NavLink to={'/payment'}>Thanh Toán</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Cart