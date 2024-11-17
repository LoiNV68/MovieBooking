import Banner from "../components/Banner";
import MovieSection from "./MovieSection";
import SearchTicket from "../search/TicketSearch"
import About from "../components/About";
function Home() {
    return ( 
        <>
            <Banner/>
            <SearchTicket/>
            <MovieSection/>
            <About/>
        </>
     );
}

export default Home;