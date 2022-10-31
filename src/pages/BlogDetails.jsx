import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection/CommonSection";

const BlogDetails = () => {
    const [dataBlog, setDataBlog] = useState([]);

    const { title } = useParams();
    const blogItem = dataBlog.find((product) => product.title === title);
    console.log(blogItem);
    useEffect(() => {
        axios
            .get(
                "https://newsapi.org/v2/everything?q=tesla&from=2022-09-30&sortBy=publishedAt&apiKey=9e787d2ca7704fea8d6f1b967f0e850e"
            )
            .then(({ data }) => {
                setDataBlog(data.articles);
            })
            .catch((error) => console.log(error));
    }, []);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <Helmet title={`${title}`}>
            <CommonSection title={`Blog : ${title} `} />
            <section>
                <Container>
                    <Row>
                        <Col lg="12">
                            <h5>The next generation of leather alternatives</h5>
                            <div>
                                by <h6>Shopify API</h6> on <h6>Jul 31, 2022</h6>
                            </div>
                            <div>
                                <img
                                    src={
                                        "https://cdn.shopify.com/s/files/1/0591/1350/4958/articles/1.png?v=1628336177&width=1066"
                                    }
                                    alt=""
                                />
                            </div>
                            <p>
                                In 1928, a New York City designer named Irving Schott created the world's first leather
                                motorcycle jacket. Naming it the "Perfecto" (after his favorite cigar), Schott crafted
                                the coat out of horsehide, a rigid, durable material that soon after became fashion's
                                leather of choice. The first Perfectos sold for just $5.50. By the 1950s, the leather
                                jacket was a bona fide clothing mainstay. Today, leather is one of the most ubiquitous
                                materials in the footwear and fashion industries. But the actual term "leather" hasn't
                                always had the same definition that Schott would have used back in his 1920s heyday. In
                                the last half a century, "leather" has expanded to include synthetic "pleather"
                                variations, like polyurethane (PU) and polyvinyl chloride (PVC), which are not only made
                                with fossil fuels, but also don't biodegrade. And while these alternatives are
                                theoretically more animal-friendly, in that they don't actually require animal hides,
                                they also aren't the eco-friendly substitute consumers may have been led to believe.
                            </p>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default BlogDetails;
