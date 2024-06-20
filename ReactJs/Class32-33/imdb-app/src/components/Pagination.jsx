import { useEffect } from "react";
import { useState } from "react";

const Pagination = ({ loadMovieByPage }) => {
    const totalPages = 20;
    const maxVisiblePages = 10;
    const [pages, setPages] = useState([]);
    const [activePage, setActivePage] = useState(1);

    const setVisiblePages = (pageNo = 1) => {
        if (pageNo === pages[0] || pageNo === pages[pages.length - 1] || !pages.length) {
            // write a logic to generate currentPages dynamically based on totalPages, maxVisiblePages & activePage
            const maxResultSize = totalPages > maxVisiblePages ? maxVisiblePages : totalPages;

            let startingPage;

            if (pageNo === pages[0]) {
                startingPage = pageNo - 2 > 1 ? pageNo - 2  : 1;
            } else if (pageNo === pages[pages.length - 1]) {
                startingPage = pageNo + 2 < totalPages ? (pageNo + 2) - maxResultSize + 1 :  totalPages - maxResultSize + 1;
            } else {
                startingPage = 1;
            }
    
            const currentPages = [...Array(maxResultSize)].map((item, idx) => {
                return startingPage + idx;
            });

            setPages(currentPages);
        }
        
    }

    useEffect(() => {
        setVisiblePages();
    }, []);

    const handleClick = (pageNo) => () => {
        loadMovieByPage(pageNo);
        setActivePage(pageNo);
        setVisiblePages(pageNo);
    }

    const handlePrev = () => {
        handleClick(activePage - 1)();
    }

    const handleNext = () => {
        handleClick(activePage + 1)();
    }

    const getButtons = () => {
        return pages.map((item) => (
            <button className={`page-button ${item === activePage ? 'active' : ''}`} onClick={handleClick(item)}>{item}</button>
        ));
    } 

    return (
        <div className="pagination">
            <button className="page-button" onClick={handlePrev} disabled={activePage === 1}>&lt;</button>
            {getButtons()}
            <button className="page-button" onClick={handleNext} disabled={activePage === totalPages}>&gt;</button>
        </div>
    )
}

export default Pagination;