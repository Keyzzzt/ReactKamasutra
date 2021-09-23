import React, {useState} from "react";
import styles from "./Pagination.module.css";



const Pagination = ({totalUsersCount, pageSize, currentPage, setCurrentPageHandler, portionSize = 10}) => {
    let totalUserPages = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for(let i = 1; i <= totalUserPages; i++){
        pages.push(i)
    }

    let portionCount = Math.ceil(totalUserPages / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (

            <div>
                {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>prev</button> }
                {pages
                    .filter(p => p >= leftPortionPageNumber && p<= rightPortionPageNumber)
                    .map(page => <span key={page} onClick={(e) => {setCurrentPageHandler(page)}} className={currentPage === page && styles.selected}> {page}</span>)}
                {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
            </div>

    )
}

export default Pagination