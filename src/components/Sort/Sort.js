import React from 'react'
import './sort.css'
export default function Sort() {
    return (
        <div>
            <label className='sapxep' for="cars">Sắp Xếp </label>
            <select id="cars">
                <option value="volvo">Giá Từ Thấp Đến Cao</option>
                <option value="saab">Giá Từ Cao Đến Thấp Cao</option>
                <option value="vw">Theo Bảng Chữ Cái A-Z</option>
                <option value="audi" selected>Theo Bảng Chữ Cái Z-A</option>
            </select>
        </div>
    )
}
