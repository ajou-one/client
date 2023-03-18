import S from './Pagination.module.css';
const Pagination = ({ handleSetPrevPage, handleSetNextPage, page }) => {
    return (
        <div className={S['common-pagination']}>
            <p onClick={handleSetPrevPage}>&lt; </p>
            <span>{page}</span>
            <p onClick={handleSetNextPage}> &gt;</p>
        </div>);
};

export default Pagination;
