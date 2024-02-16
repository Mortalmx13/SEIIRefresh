import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons"

export default function QuoteSection(){
    return(
        <div className="section quote">
            <p className="quote-text">
                <FontAwesomeIcon icon={faQuoteLeft}/>
                quote
            </p>
            <p className="quote-author">author</p>
        </div>

    )
}