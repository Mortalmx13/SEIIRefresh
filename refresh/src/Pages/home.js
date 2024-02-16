import HeroSection from '../Components/herosection';
import ImproveSkills from '../Components/improveskills';
import QuoteSection from '../Components/quotesection';
import TopRecipes from '../Components/toprecipes';

export default function Home(){
    return(
        <div>
            <HeroSection />
            <ImproveSkills />
            <QuoteSection />
            <TopRecipes />
        </div>
    )
}