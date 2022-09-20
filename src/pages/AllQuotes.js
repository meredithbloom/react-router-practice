import QuoteList from "../components/quotes/QuoteList"



const DUMMY_QUOTES = [
    {
        id: 'q1',
        text: 'first quote',
        author: 'me'
    },
    {
        id: 'q2', 
        text: 'learning react is fun',
        author: 'not me'
    }
]

const AllQuotes = () => {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )

}

export default AllQuotes