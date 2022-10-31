import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

import "./product.css";
import ReactPaginate from "react-paginate";
import { motion } from "framer-motion";

const ProductList = ({ data, itemsPerPage }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(data.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, data]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    return (
        <>
            {currentItems && currentItems.map((item, i) => <ProductCard item={item} key={i} />)}
            <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="Next"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="Previous"
                    renderOnZeroPageCount={null}
                    containerClassName={"paginate"}
                    pageLinkClassName={"page-num"}
                    previousLinkClassName={"page-pre page-num"}
                    nextLinkClassName={"page-next page-num"}
                    activeLinkClassName={"paginate-active"}
                />
            </motion.div>
        </>
    );
};

export default ProductList;
