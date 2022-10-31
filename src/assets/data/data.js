// import axios from "axios";

// const getAllProducts = async () => {
//     try {
//         const { data } = await axios.get("http://localhost:5000/api/products/getproducts");
//             localStorage.setItem("data", JSON.stringify(data));
//     } catch (error) {
//         console.log(error);
//     }
// };
// getAllProducts();
// const product = JSON.parse(localStorage.getItem("data")) || [];

// export default product;

const product = [
    {
        _id: "01",
        title: "Chicken Burger",
        priceLong: 23,
        price: 41,
        rating: 3.4,
        numOfReviews: 120,
        image01: "/images/1.jpg",
        image02: "/images/2.jpg",
        image03: "/images/3.jpg",
        category: "Burger",
        stock: 4,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "02",
        title: "Royal Cheese Burger",
        price: 22,
        rating: 4.9,
        numOfReviews: 8,
        image01: "/images/2.jpg",
        image02: "/images/3.jpg",
        image03: "/images/1.jpg",
        category: "Burger",
        stock: 12,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "03",
        title: "Seafood Pizza",
        priceLong: 25,
        price: 24,
        rating: 4.6,
        numOfReviews: 10,
        image01: "/images/4.jpg",
        image02: "/images/5.jpg",
        image03: "/images/6.jpg",
        category: "Pizza",
        stock: 5,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "04",
        title: "Thin Cheese Pizza",
        priceLong: 25,
        price: 24,
        rating: 4.2,
        numOfReviews: 12,
        image01: "/images/7.jpg",
        image02: "/images/8.jpg",
        image03: "/images/9.jpg",
        category: "Pizza",
        stock: 20,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "05",
        title: "Pizza With Mushroom",
        priceLong: 28,
        price: 25,
        rating: 4.4,
        numOfReviews: 22,
        image01: "/images/5.jpg",
        image02: "/images/7.jpg",
        image03: "/images/9.jpg",
        category: "Pizza",
        stock: 12,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "06",
        title: "Classic Hamburger",
        priceLong: 28,
        price: 23,
        rating: 4.6,
        numOfReviews: 32,
        image01: "/images/14.jpg",
        image02: "/images/15.jpg",
        image03: "/images/1.jpg",
        category: "Burger",
        stock: 22,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "07",
        title: "Crunchy Bread",
        priceLong: 28,
        price: 23,
        rating: 4.6,
        numOfReviews: 32,
        image01: "/images/15.jpg",
        image02: "/images/14.jpg",
        image03: "/images/2.jpg",
        category: "Bread",
        stock: 14,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "08",
        title: "Delicious Bread",
        priceLong: 30,
        price: 25,
        rating: 4.6,
        numOfReviews: 32,
        image01: "/images/3.jpg",
        image02: "/images/14.jpg",
        image03: "/images/2.jpg",
        category: "Bread",
        stock: 4,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "09",
        title: "Delicious Pizza's",
        price: 25,
        rating: 4.6,
        numOfReviews: 32,
        image01: "/images/10.jpg",
        image02: "/images/13.jpg",
        image03: "/images/12.jpg",
        category: "Pizza",
        stock: 4,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "10",
        title: "Vegetarian Pizza",
        price: 25,
        rating: 4.6,
        numOfReviews: 32,
        image01: "/images/12.jpg",
        image02: "/images/10.jpg",
        image03: "/images/11.jpg",
        category: "Pizza",
        stock: 4,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
    {
        _id: "11",
        title: "Vegetarian Pizza",
        price: 22,
        rating: 4.6,
        numOfReviews: 22,
        image01: "/images/11.jpg",
        image02: "/images/10.jpg",
        image03: "/images/13.jpg",
        category: "Pizza",
        stock: 4,
        description:
            "Things You Need To Know There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injectedhumour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to...",
    },
];

export default product;
