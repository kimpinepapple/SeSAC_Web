
고객 정보: 아이디, 이름, 패스워드, 이메일, 생년월일, 집주소, 핸드폰번호
create table customer_info(
	id varchar(10) not null PRIMARY KEY,
    name varchar(255) not null,
	pw varchar(20) not null,
	email varchar(30) not null PRIMARY KEY,
	birthday date not null,
	address varchar(255) not null,
	phone_number varchar(255) not null PRIMARY KEY,
);

상품정보: 상품이름, 가격, 색상, 사이즈
create table product_info(
	name varchar(255) not null PRIMARY KEY,
    price varchar(255) not null,
    color varchar(255) not null,
    size varchar(255) not null
)

결제정보: 카드번호, 고객아이디, 가격, 구매날짜
create table payment(
	card_number varchar(255) not null PRIMARY KEY,
    customer_id varchar(255) not null,
    price varchar(255) not null,
    payment_date date not null,
    FOREIGN KEY('customer_id') REFERENCE 'customer_info'('id')
    FOREIGN KEY('price') REFERENCE 'product_info'('price')
)