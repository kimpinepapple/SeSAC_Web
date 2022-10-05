import React from 'react';
import './Main.css'

const Main = () => {
    return(
        <div>
            <div>
                <div className='leftMenuSub'>
                    <h1 className='logo'><img src="./img/banner1" alt="침구 관련 이미지" /></h1>
                    <ul>
                        <li>리스트1</li>
                        <li>리스트2</li>
                        <li>리스트3</li>
                    </ul>
                </div>
                <div className='rightIcon'>
                    <ul>
                        <li>마이페이지</li>
                        <li>결제창</li>
                        <li>장바구니</li>
                    </ul>
                </div>
            </div>
            <div className='banner'>
                <li></li>
            </div>
            <div className='products'>
                <ul>
                    <li><img src="./img/banner1" alt="상품1">상품1</img></li>
                    <li><img src="./img/banner2" alt="상품2">상품2</img></li>
                    <li><img src="./img/banner" alt="상품3">상품3</img></li>
                </ul>
            </div>
        </div>
    )
}

export default Main;