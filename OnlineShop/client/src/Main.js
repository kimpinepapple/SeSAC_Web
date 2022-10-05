import React from 'react';
import './Main.css'

const Main = () => {
    return(
        <div>
            <header>
                <section className='leftMenuSub'>
                    <h1 className='logo'><img src="" alt="침구 관련 이미지" /></h1>
                    <ul>
                        <li>리스트1</li>
                        <li>리스트2</li>
                        <li>리스트3</li>
                    </ul>
                </section>
                <section className='rightIcon'>
                    <ul>
                        <li>마이페이지</li>
                        <li>결제창</li>
                        <li>장바구니</li>
                    </ul>
                </section>
            </header>
            <div className='products'>
                <ul>
                    <li><img src="" alt="상품1">상품1</img></li>
                    <li><img src="" alt="상품2">상품2</img></li>
                    <li><img src="" alt="상품3">상품3</img></li>
                </ul>
            </div>
        </div>
    )
}

export default Main;