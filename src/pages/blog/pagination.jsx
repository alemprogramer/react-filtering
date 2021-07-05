import React from 'react'

const pagination = ({blogPerPage, totalBlogs, paginate, currentPages}) => {
    let pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalBlogs / blogPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={currentPages > 1 ? "page-item" : "page-item disabled" }>
                    <button className="page-link arrows" type='button' onClick={() => paginate(currentPages-1)} tabIndex="-1" aria-disabled="true">
                        <span aria-hidden="true">
                            <i className="fas fa-long-arrow-alt-left"></i>
                        </span>Previous</button>
                </li>

                {pageNumbers.map(n => (
                    <li
                        key={n}
                        className={n === currentPages
                        ? "page-item active"
                        : "page-item"}>
                        <button type='button' className="page-link" onClick={() => paginate(n)}>{n}</button>
                    </li>
                ))}
                <li className={currentPages === pageNumbers.length ? "page-item disabled" : "page-item"}>
                    <button className="page-link arrows" type='button' onClick={() => paginate(currentPages+1)}>Next<span aria-hidden="true">
                            <i className="fas fa-long-arrow-alt-right"></i>
                        </span>
                    </button>
                </li>
            </ul>
        </nav>

    )
}

export default pagination
