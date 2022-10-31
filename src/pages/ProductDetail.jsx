import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Form, Col, Container, FormGroup, Input, Label, Row } from "reactstrap";
import product from "../assets/data/data";
import Helmet from "../components/Helmet/Helmet";
import ModalSizeG from "../components/Modal/ModalSizeG";
import Delivery from "../components/Modal/Delivery";
import ModalQuestion from "../components/Modal/ModalQuestion";
import CommonSection from "../components/UI/CommonSection/CommonSection";

import "../styles/productdetails.css";
import SectionTitle from "../components/UI/SectionTitle/SectionTitle";
import ProductList from "../components/Product/ProductList";

const categoryData = [
    {
        title: "FREE SHIPPING",
        imgUrl: <i className="ri-send-plane-fill"></i>,
        subTitle: "For all order over $99 free",
    },
    {
        title: "Easy & Fast Returns",
        imgUrl: <i className="ri-24-hours-line"></i>,
        subTitle: "1 days money back",
    },

    {
        title: "100% Secure Checkout",
        imgUrl: <i className="ri-thumb-up-line"></i>,
        subTitle: "Paypal / Visa / ...",
    },

    {
        title: "24/7 customer help",
        imgUrl: <i className="ri-customer-service-2-line"></i>,
        subTitle: "online customer support",
    },
];

const ProductDetail = () => {
    const [allProducts, setAllProducts] = useState(product);

    const [ratingVote, setRatingVote] = useState(5);
    const [formCustomer, setformCustomer] = useState(false);

    const { id } = useParams();
    const productItem = product.find((product) => product._id === id);
    const {
        _id,
        title,
        priceLong,
        price,
        rating,
        numOfReviews,
        image01,
        image02,
        image03,
        category,
        stock,
        description,
    } = productItem;

    const [previewImg, setPreviewImg] = useState(image01);
    const [totalqty, setTotalty] = useState(1);
    const [numberStock, setNumberStock] = useState(0);

    const handleSubQty = () => {
        if (totalqty > 1) {
            setTotalty(totalqty - 1);
        }
    };
    const handPlusQty = () => {
        setTotalty(totalqty + 1);
    };
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
    const [modalDelivey, setModalDelivey] = useState(false);
    const toggleDelivey = () => setModalDelivey(!modalDelivey);
    const [modalQuestion, setModalQuestion] = useState(false);
    const toggleQuestion = () => setModalQuestion(!modalQuestion);

    // get date
    const todayComment = new Date().toJSON().slice(0, 10);

    useEffect(() => {
        setNumberStock(Math.floor(Math.random() * 20));
    }, []);
    useEffect(() => {
        const filteredProducts = product.filter((item) => item.category === category).slice(0, 4);

        setAllProducts(filteredProducts);
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [productItem]);
    return (
        <Helmet title={`${title}`}>
            <CommonSection title={`${category} : ${title} `} />

            <section>
                <Container>
                    <Row>
                        <Col lg="6">
                            <Row>
                                <Col sm="2">
                                    <div className="img__choose">
                                        <div className="img__item mb-3" onClick={() => setPreviewImg(image01)}>
                                            <img
                                                src={image01}
                                                alt=""
                                                className={`${previewImg === image01 && "active-img"}`}
                                            />
                                        </div>
                                        <div className="img__item mb-3" onClick={() => setPreviewImg(image02)}>
                                            <img
                                                src={image02}
                                                alt=""
                                                className={`${previewImg === image02 && "active-img"}`}
                                            />
                                        </div>
                                        <div className="img__item mb-3" onClick={() => setPreviewImg(image03)}>
                                            <img
                                                src={image03}
                                                alt=""
                                                className={`${previewImg === image03 && "active-img"}`}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col sm="10">
                                    <img src={previewImg} alt="" className="img__preview" />
                                </Col>
                            </Row>
                        </Col>
                        <Col lg="6">
                            <div className="product__details">
                                <h2 className="product__name">{title}</h2>
                                <h6>
                                    Double Topping Of Seafood (Shrimp, Squids) With Sliced Mushrooms, Our Signature
                                    Pesto Sauce, Perfectly Melted Mozzarella Cheese From New Zealand, Topped With Fresh
                                    Basil.
                                </h6>
                                <div className="product__rating">
                                    <div className="product__rating-star">
                                        <span>
                                            {rating > 0.6 ? (
                                                <i className="ri-star-s-fill"></i>
                                            ) : (
                                                <i className="ri-star-half-s-fill"></i>
                                            )}
                                        </span>
                                        <span>
                                            {rating > 1.6 ? (
                                                <i className="ri-star-s-fill"></i>
                                            ) : (
                                                <i className="ri-star-half-s-fill"></i>
                                            )}
                                        </span>
                                        <span>
                                            {rating > 2.6 ? (
                                                <i className="ri-star-s-fill"></i>
                                            ) : (
                                                <i className="ri-star-half-s-fill"></i>
                                            )}
                                        </span>
                                        <span>
                                            {rating > 3.6 ? (
                                                <i className="ri-star-s-fill"></i>
                                            ) : (
                                                <i className="ri-star-half-s-fill"></i>
                                            )}
                                        </span>
                                        <span>
                                            {rating > 4.6 ? (
                                                <i className="ri-star-s-fill"></i>
                                            ) : (
                                                <i className="ri-star-half-s-fill"></i>
                                            )}
                                        </span>
                                    </div>
                                    {rating === 0 ? (
                                        ""
                                    ) : (
                                        <p className="product__rating-text">({numOfReviews} reviewer)</p>
                                    )}
                                </div>
                                <div className="product__price">
                                    {priceLong && (
                                        <del>
                                            $
                                            {priceLong.toLocaleString(undefined, {
                                                minimumFractionDigits: 2,
                                                maximumFractionDigits: 2,
                                            })}{" "}
                                            USD
                                        </del>
                                    )}
                                    <span>
                                        $
                                        {price.toLocaleString(undefined, {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}{" "}
                                        USD
                                    </span>
                                </div>
                                <hr />
                                <p className="product__desc">{description}</p>

                                <div className="product__stock">
                                    <span>{stock} </span>sold in last <span>{numberStock}</span> Hour
                                </div>

                                <Row>
                                    <Col lg="6">
                                        {" "}
                                        <FormGroup>
                                            <Label for="Crust">Crust</Label>
                                            <Input id="Crust" name="select" type="select">
                                                <option>Thin Crust</option>
                                                <option>Handtossed</option>
                                                <option>Sausage Cheesy Crust</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="6">
                                        {" "}
                                        <FormGroup>
                                            <Label for="Extras">Extras</Label>
                                            <Input id="Extras" name="select" type="select">
                                                <option>M Cheese</option>
                                                <option>S Cheese</option>
                                                <option>XL Cheese</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                </Row>

                                <div className="product__qty">
                                    <span>
                                        <i className="ri-subtract-line ri-xl" onClick={handleSubQty}></i>
                                    </span>
                                    <h3>{totalqty}</h3>
                                    <span>
                                        <i className="ri-add-line ri-xl" onClick={handPlusQty}></i>
                                    </span>
                                </div>

                                <button className="btn pd__btn">
                                    Add To Cart <i className="ri-shopping-cart-line"></i>
                                </button>
                                <button className="btn pd__btn-wish">
                                    Add To Wishlist <i className="ri-heart-line"></i>
                                </button>

                                <div className="product__tutor">
                                    <div className="product__tutor-size">
                                        <h5 onClick={toggle}>Size Guide</h5>
                                        <ModalSizeG modal={modal} setModal={setModal} toggle={toggle} />
                                    </div>
                                    <div className="tutor__hr"></div>

                                    <div className="product__tutor-delivery">
                                        <h5 onClick={toggleDelivey}>Delivery & Return</h5>
                                        <Delivery
                                            modalDelivey={modalDelivey}
                                            setModalDelivey={setModalDelivey}
                                            toggleDelivey={toggleDelivey}
                                        />
                                    </div>
                                    <div className="tutor__hr"></div>
                                    <div className="product__tutor-question">
                                        <h5 onClick={toggleQuestion}>Ask a Question</h5>
                                        <ModalQuestion
                                            modalQuestion={modalQuestion}
                                            setModalQuestion={setModalQuestion}
                                            toggleQuestion={toggleQuestion}
                                        />
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <hr className="mb-5" />
                </Container>
                <Container className="mt-5">
                    <Row className="mt-5">
                        {categoryData.map((item, index) => (
                            <Col xl="3" md="6" sm="6" xs="12" className="mb-1" key={index}>
                                <div className="tl__content gap-3">
                                    <div className="tl__icon">{item.imgUrl}</div>
                                    <div className="tl__text">
                                        <h4>{item.title}</h4>
                                        <h6>{item.subTitle}</h6>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <div className="review__box">
                                <div className="review__box-header">
                                    <h4>Customer Reviews</h4>
                                    <h6 onClick={() => setformCustomer(!formCustomer)}>Write a review</h6>
                                </div>
                                <hr />
                                {formCustomer && (
                                    <div className="review__box-form">
                                        <Form>
                                            <FormGroup>
                                                <Label for="Name">Name</Label>
                                                <Input
                                                    id="Name"
                                                    name="Name"
                                                    placeholder="with a placeholder"
                                                    type="text"
                                                />
                                            </FormGroup>
                                            <div className="form__group-star d-flex align-item-center gap-5 my-3">
                                                <span
                                                    onClick={() => setRatingVote(1)}
                                                    className={`${ratingVote < 1 && "vote__rating"}`}
                                                >
                                                    1<i className="ri-star-s-fill ri-xl"></i>
                                                </span>
                                                <span
                                                    onClick={() => setRatingVote(2)}
                                                    className={`${ratingVote < 2 && "vote__rating"}`}
                                                >
                                                    2<i className="ri-star-s-fill ri-xl"></i>
                                                </span>
                                                <span
                                                    onClick={() => setRatingVote(3)}
                                                    className={`${ratingVote < 3 && "vote__rating"}`}
                                                >
                                                    3<i className="ri-star-s-fill ri-xl"></i>
                                                </span>
                                                <span
                                                    onClick={() => setRatingVote(4)}
                                                    className={`${ratingVote < 4 && "vote__rating"}`}
                                                >
                                                    4<i className="ri-star-s-fill ri-xl"></i>
                                                </span>
                                                <span
                                                    onClick={() => setRatingVote(5)}
                                                    className={`${ratingVote < 5 && "vote__rating"}`}
                                                >
                                                    5<i className="ri-star-s-fill ri-xl"></i>
                                                </span>
                                            </div>
                                            <FormGroup>
                                                <Label for="exampleText">Text Area</Label>
                                                <Input id="exampleText" name="text" type="textarea" rows="5" />
                                            </FormGroup>
                                        </Form>
                                        <button className="btn">Submit</button>
                                    </div>
                                )}

                                <div className="review__list">
                                    <div className="c">
                                        <div className="review__per">
                                            <h4 className="review__name">ABC</h4>

                                            <p className="review__date">({todayComment})</p>
                                        </div>
                                        <div className="review__rating">
                                            <i className="ri-star-s-fill "></i>
                                            <i className="ri-star-s-fill "></i>
                                            <i className="ri-star-s-fill "></i>
                                            <i className="ri-star-s-fill "></i>
                                            <i className="ri-star-s-fill "></i>
                                        </div>
                                        <div className="review__comment">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown printer took a galley of type and scrambled it to
                                            make a type specimen book.
                                        </div>
                                        <div className="review__hr"></div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <SectionTitle title="RELATED PRODUCTS" />

                <Container>
                    <Row>
                        <ProductList data={allProducts} />
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default ProductDetail;
