import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/Pagination.css";

export default function Pagination({ totalPages, pageNow, setPageNow }) {

    const IconArrowLeft = <FontAwesomeIcon icon={faAngleLeft} />
    const IconArrowRight = <FontAwesomeIcon icon={faAngleRight} />

    function handleButtonLeft() {
        if (pageNow > 0) {
            setPageNow(state => state - 1);
        }
    }

    function handleButtonRight() {
        if (pageNow < 45) {
            setPageNow(state => state + 1);
        }
    }

    return (
        <div>
            <button title="Voltar" className="btn-pagination" onClick={handleButtonLeft}>{IconArrowLeft}</button>
            <span>{pageNow + 1} de {totalPages}</span>
            <button title="Avançar" className="btn-pagination" onClick={handleButtonRight}>{IconArrowRight}</button>
        </div>

    )
}