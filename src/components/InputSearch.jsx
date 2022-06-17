import '../css/InputSearch.css';

export default function InputSearch({ valueSearch }) {
    return <input onChange={(e) => valueSearch(e.target.value)} className='field-search' type="text" placeholder="Pesquisa" />
}