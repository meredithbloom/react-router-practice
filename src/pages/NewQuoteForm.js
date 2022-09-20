import QuoteForm from '../components/quotes/QuoteForm'



const NewQuoteForm = () => {

    const addQuoteHandler = (quoteData) => {
        console.log(quoteData)
    }





    return (
            <QuoteForm onAddQuote={addQuoteHandler} />
        )

}

export default NewQuoteForm