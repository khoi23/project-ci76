import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";

import "../styles/blog.css";

import ReactPaginate from "react-paginate";
const tags = [
    { tag: "Accessories" },
    { tag: "Technology" },
    { tag: "Collection" },
    { tag: "Color" },
    { tag: "Office" },
    { tag: "Summer" },
    { tag: "Vintage" },
];
const Blog = () => {
    const [dataBlog, setDataBlog] = useState([]);

    const [currentItems, setCurrentItems] = useState(dataBlog);
    const [recentPost, setRecentPost] = useState(dataBlog);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    const [itemsPerPage, setItemsPerPage] = useState(6);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % dataBlog.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + 6;
        setCurrentItems(dataBlog.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(dataBlog.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, dataBlog]);

    useEffect(() => {
        axios
            .get(
                "https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=9e787d2ca7704fea8d6f1b967f0e850e"
            )
            .then(({ data }) => {
                setDataBlog(data.articles);
                const recentpost = data.articles.slice(0, 3);
                setRecentPost(recentpost);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Helmet title="Blog">
            <CommonSection title="Blog"></CommonSection>
            <section>
                <Container>
                    <Row>
                        <Col lg="8">
                            <div className="blog__list mb-3">
                                {currentItems.map((val, index) => (
                                    <Row key={index}>
                                        <Col lg="6">
                                            <div className="blog__image">
                                                <img src={val.urlToImage} alt="" />
                                            </div>
                                        </Col>
                                        <Col lg="6">
                                            <div className="blog__content">
                                                <h6>{val.source.name}</h6>
                                                <h4>{val.title}</h4>
                                                <div className="blog__admin">
                                                    <div className="blog__admin-account">
                                                        <i class="ri-user-line"></i>
                                                        <span>{val.author}</span>
                                                    </div>
                                                    <div className="blog__content-hr"></div>
                                                    <div className="blog__admin-time">
                                                        <i class="ri-history-line"></i>
                                                        <span>{val.publishedAt.slice(0, 10)}</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <Link className="btn" to={`/blog/${val.title}`}>
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                ))}
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel="Next"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={4}
                                    pageCount={pageCount}
                                    previousLabel="Previous"
                                    renderOnZeroPageCount={null}
                                    containerClassName={"paginate"}
                                    pageLinkClassName={"page-num"}
                                    previousLinkClassName={"page-pre page-num"}
                                    nextLinkClassName={"page-next page-num"}
                                    activeLinkClassName={"paginate-active"}
                                />
                            </div>
                        </Col>
                        <Col lg="4" className="blog__sidebar">
                            <div>
                                <h5>Categories</h5>
                                <ul>
                                    <li onClick={() => setItemOffset(3)}>All products</li>
                                    <li onClick={() => setItemOffset(4)}>Best sellers</li>
                                    <li onClick={() => setItemOffset(5)}>New arrivals</li>
                                    <li onClick={() => setItemOffset(6)}>Accessories</li>
                                </ul>
                            </div>
                            <div>
                                <h5>Recent Post</h5>
                                <div className="blog__recent">
                                    {recentPost.map((val, index) => (
                                        <div className="blog__recent-item" key={index}>
                                            <div className="blog__recent-img">
                                                <img src={val.urlToImage} alt="" />
                                            </div>
                                            <h6>{val.title}</h6>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h5>Tags</h5>
                                <div className="blog__tag">
                                    {tags.map((val, index) => (
                                        <span key={index}>{val.tag}</span>
                                    ))}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Blog;
