import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePageLayout from './components/Home/HomeLayout/HomeLayout.jsx';
import Footer from './components/Footer/Footer';
import Login from './components/LoginPage/login';
import Signup from './components/SignupPage/signup';
import SubmitLetterPage from './components/SideNavbar/SubmitLetter/SubmitLetterPage.jsx';

import BackToTopButton from './components/BackToTopButton/BackToTopButton';
import SubscriptionPage from './components/SubscriptionPage/SubscriptionPage';
import PaymentPage from './components/Payment/PaymentPage/PaymentPage.jsx';
import RefundPage from './components/Payment/Refund/Refund.jsx';
import AdvertisePage from './components/Accounts/AdvertisePage/AdvertisePage.jsx';
import EditorialPolicyPage from './components/Accounts/EditorialPolicy/EditorialPolicyPage.jsx';
import NewslettersPage from './components/Accounts/NewsLetters/NewsLettersPage.jsx';

import Aboutus from './components/Footer/footerlast/aboutus/Aboutus';
import Contactus from './components/Footer/footerlast/contactus/Contactus';
import PrivacyPolicy from './components/Footer/footerlast/privacypolicy/PrivacyPolicy';
import TermsOfService from './components/Footer/footerlast/termsofservice/TermsofService.jsx';
import Sitemap from './components/Footer/footerlast/Sitemap/Sitemap';
import Cookies from './components/Footer/footerlast/Cookies/Cookies';
import Careers from './components/Footer/footerlast/Careers/Careers';
import GrievanceRedressal from './components/Footer/footerlast/grievance_redressal/Grievance';
import Authors from './components/Footer/footerlast/authors/Authors';
import CategoryPage from './components/CategoryPage/CategoryPage';
import India from './components/NavSubPages/India/Sections/India/India.jsx';
import Vizag from './components/NavSubPages/News/Vizag/vizag.jsx';
import AndhraPradesh from './components/NavSubPages/News/AndhraPradesh/AndhraPradesh.jsx';
import Telangana from './components/NavSubPages/News/Telangana/Telangana.jsx';
import Hyderabad from './components/NavSubPages/News/Hyderabad/hyderabad.jsx';
import Srilanka from './components/NavSubPages/News/SriLanka/lanka.jsx';
import Us from './components/NavSubPages/News/US/us.jsx';




// Web Story Pages
import FeaturedStories from './components/WebStories/FeaturedStories.jsx';
import HealthStories from './components/WebStories/HealthStories.jsx';
import PoliticsStories from './components/WebStories/PoliticsStories.jsx';
import TechStories from './components/WebStories/TechStories.jsx';
import CelebStories from './components/WebStories/CelebStories.jsx';
import SportStories from './components/WebStories/SportStories.jsx';
import FoodRecipes from './components/WebStories/FoodRecipes.jsx';
import MovieReviews from './components/WebStories/MovieReviews.jsx';


import Amaravati from './components/NavSubPages/Amaravati/Sections/Amaravati.jsx';
import Business from './components/NavSubPages/Business/Sections/Business.jsx';
import RealEstate from './components/NavSubPages/Business/Sections/RealEstate.jsx';
import Entertainment from './components/NavSubPages/Entertainment/Sections/Entertainment.jsx';
import Health from './components/NavSubPages/Health/Sections/Health.jsx';
import Politics from './components/NavSubPages/India/Sections/Politics.jsx'; 
import LifeStyle from './components/NavSubPages/LifeStyle/Sections/LifeStyle.jsx';
import Culture from './components/NavSubPages/LifeStyle/Sections/Culture.jsx';
import Agriculture from './components/NavSubPages/LifeStyle/Sections/Agriculture.jsx';
import Editorials from './components/NavSubPages/Opinion/Sections/Editorials.jsx';
import Letters from './components/NavSubPages/Opinion/Sections/Letters.jsx';
import Oped from './components/NavSubPages/Opinion/Sections/Oped.jsx';
import Interviews from './components/NavSubPages/Opinion/Sections/Interview.jsx';
import World from './components/NavSubPages/World/Sections/World/World.jsx';
import ClimateChange from './components/NavSubPages/World/TopStories/ClimateChange.jsx';
import Outdoors from './components/NavSubPages/Sport/Sections/Outdoors.jsx';
import Sports from './components/NavSubPages/Sport/Sections/Sport.jsx';
import SciTech from './components/NavSubPages/SciTech/Sections/SciTech.jsx';
import Weather from './components/NavSubPages/SciTech/Sections/Weather.jsx';

// //Amaravati News Links

// import AmaravatiNews from './components/NavSubPages/Amaravati/Newsletters/Amaravati.jsx';
// import AmaravatiDaily from './components/NavSubPages/Amaravati/Newsletters/Daily.jsx';
// import AmaravatiWeekend from './components/NavSubPages/Amaravati/Newsletters/Weekend.jsx';

// import Amaravati from './components/NavSubPages/Amaravati/Sections/Amaravati.jsx';
// import Guntur from './components/NavSubPages/Amaravati/Sections/Guntur.jsx';
// import Vijayawada from './components/NavSubPages/Amaravati/Sections/Vijayawada.jsx';

// import Author1 from './components/NavSubPages/Amaravati/TopAuthors/Author1.jsx';
// import Author2 from './components/NavSubPages/Amaravati/TopAuthors/Author2.jsx';
// import Author3 from './components/NavSubPages/Amaravati/TopAuthors/Author3.jsx';

// import CRDA from './components/NavSubPages/Amaravati/TopStories/CRDA.jsx';
// import HighCourt from './components/NavSubPages/Amaravati/TopStories/HighCourt.jsx';
// import PlaceWorld1st from './components/NavSubPages/Amaravati/TopStories/PlaceWorld1st.jsx';
// import India2 from './components/NavSubPages/Amaravati/TopStories/India2.jsx';
// import DevelopmentProjects from './components/NavSubPages/Amaravati/TopStories/DevelopmentProjects.jsx';
// import LocalPolitics from './components/NavSubPages/Amaravati/TopStories/LocalPolitics.jsx';


// // Business News Links

// import BusinessDaily from './components/NavSubPages/Business/Newsletters/Daily.jsx';
// import BusinessWeekend from './components/NavSubPages/Business/Newsletters/Weekend.jsx';

// import Banking from './components/NavSubPages/Business/Sections/Banking.jsx';
// import Markets from './components/NavSubPages/Business/Sections/Markets.jsx';
// import Economy from './components/NavSubPages/Business/Sections/Economy.jsx';
// import Business from './components/NavSubPages/Business/Sections/Business.jsx';
// import Startups from './components/NavSubPages/Business/Sections/Startups.jsx';
// import Finance from './components/NavSubPages/Business/Sections/Finance.jsx';
// import RealEstate from './components/NavSubPages/Business/Sections/RealEstate.jsx';
// import Technology from './components/NavSubPages/Business/Sections/Technology.jsx';

// import BusinessAuthor1 from './components/NavSubPages/Business/TopAuthors/Author1.jsx';
// import BusinessAuthor2 from './components/NavSubPages/Business/TopAuthors/Author2.jsx';
// import BusinessAuthor3 from './components/NavSubPages/Business/TopAuthors/Author3.jsx';

// import CorporateEarning from './components/NavSubPages/Business/TopStories/CorporateEarning.jsx';
// import Cryptocurrency from './components/NavSubPages/Business/TopStories/Cryptocurrency.jsx';
// import EconomicIndicators from './components/NavSubPages/Business/TopStories/EconomicIndicators.jsx';
// import StartupFunding from './components/NavSubPages/Business/TopStories/StartupFunding.jsx';
// import StockMarketUpdates from './components/NavSubPages/Business/TopStories/StockMarketUpdates.jsx';
// import TradePolicy from './components/NavSubPages/Business/TopStories/TradePolicy.jsx';


// // Changes Nav Links
// import ChangeDaily from './components/NavSubPages/Changes/Newsletters/Daily.jsx';
// import ChangeWeekend from './components/NavSubPages/Changes/Newsletters/Weekend.jsx';

// import Change from './components/NavSubPages/Changes/Sections/Change.jsx';
// import EconomicReforms from './components/NavSubPages/Changes/Sections/EconomicReforms.jsx';
// import GovernmentSchemes from './components/NavSubPages/Changes/Sections/GovernmentSchemes.jsx';
// import LegalChanges from './components/NavSubPages/Changes/Sections/LegalChanges.jsx';
// import PolicyUpdates from './components/NavSubPages/Changes/Sections/PolicyUpdates.jsx';

// import ChangeAuthor1 from './components/NavSubPages/Changes/TopAuthors/Author1.jsx';
// import ChangeAuthor2 from './components/NavSubPages/Changes/TopAuthors/Author2.jsx';
// import ChangeAuthor3 from './components/NavSubPages/Changes/TopAuthors/Author3.jsx';

// import EverthingChanges from './components/NavSubPages/Changes/TopStories/EverthingChanges.jsx';
// import LegalUpdates from './components/NavSubPages/Changes/TopStories/LegalUpdates.jsx';
// import NewPolicies from './components/NavSubPages/Changes/TopStories/NewPolicies.jsx';
// import RegulatoryUpdates from './components/NavSubPages/Changes/TopStories/RegulatoryUpdates.jsx';
// import TaxChanges from './components/NavSubPages/Changes/TopStories/TaxChanges.jsx';


// // Entertainment Nav Links

// import EntertainmentDaily from './components/NavSubPages/Entertainment/Newsletters/Daily.jsx';
// import EntertainmentWeekend from './components/NavSubPages/Entertainment/Newsletters/Weekend.jsx';

// import Awards from './components/NavSubPages/Entertainment/Sections/Awards.jsx';
// import Celebrity  from './components/NavSubPages/Entertainment/Sections/Celebrity.jsx';
// import Movies from './components/NavSubPages/Entertainment/Sections/Movies.jsx';
// import Music from './components/NavSubPages/Entertainment/Sections/Music.jsx';
// import Television from './components/NavSubPages/Entertainment/Sections/Television.jsx';
// import Entertainment from './components/NavSubPages/Entertainment/Sections/Entertainment.jsx';
// import Theater from './components/NavSubPages/Entertainment/Sections/Theater.jsx';
// import Streaming from './components/NavSubPages/Entertainment/Sections/Streaming.jsx';


// import EntertainmentAuthor1 from './components/NavSubPages/Entertainment/TopAuthors/Author1.jsx';
// import EntertainmentAuthor2 from './components/NavSubPages/Entertainment/TopAuthors/Author2.jsx';
// import EntertainmentAuthor3 from './components/NavSubPages/Entertainment/TopAuthors/Author3.jsx';

// import AwardSeason from './components/NavSubPages/Entertainment/TopStories/AwardSeason.jsx';
// import BoxOffice from './components/NavSubPages/Entertainment/TopStories/BoxOffice.jsx';
// import CelebrityStories from './components/NavSubPages/Entertainment/TopStories/CelebrityStories.jsx';
// import MoviesReviews from './components/NavSubPages/Entertainment/TopStories/MovieReviews.jsx';
// import MusicCharts from './components/NavSubPages/Entertainment/TopStories/MusicCharts.jsx';
// import StreamingNews from './components/NavSubPages/Entertainment/TopStories/StreamingNews.jsx';


// // Health News Links

// import HealthDaily from './components/NavSubPages/Health/Newsletters/Daily.jsx';
// import HealthWeekend from './components/NavSubPages/Health/Newsletters/Weekend.jsx';

// import Fitness from './components/NavSubPages/Health/Sections/Fitness.jsx';
// import Health from './components/NavSubPages/Health/Sections/Health.jsx';
// import Food from './components/NavSubPages/Health/Sections/Food.jsx';
// import Medicine from './components/NavSubPages/Health/Sections/Medicine.jsx';
// import MentalHealth from './components/NavSubPages/Health/Sections/MentalHealth.jsx';
// import PublicHealth from './components/NavSubPages/Health/Sections/PublicHealth.jsx';
// import Wellness from './components/NavSubPages/Health/Sections/Wellness.jsx';

// import HealthAuthor1 from './components/NavSubPages/Health/TopAuthors/Author1.jsx';
// import HealthAuthor2 from './components/NavSubPages/Health/TopAuthors/Author2.jsx';
// import HealthAuthor3 from './components/NavSubPages/Health/TopAuthors/Author3.jsx';

// import FitnessTrends from './components/NavSubPages/Health/TopStories/FitnessTrends.jsx';
// import HealthCare from './components/NavSubPages/Health/TopStories/HealthCare.jsx';
// import HealthPolicy from './components/NavSubPages/Health/TopStories/HealthPolicy.jsx';
// import MedicalBreakthroughs from './components/NavSubPages/Health/TopStories/MedicalBreakthroughs.jsx';
// import MentalHealthUpdates from './components/NavSubPages/Health/Sections/MentalHealth.jsx';
// import NutritionScience from './components/NavSubPages/Health/TopStories/NutritionScience.jsx';


// // India News Links

// import IndiaDaily from './components/NavSubPages/India/Newsletters/Daily.jsx';
// import IndiaWeekend from './components/NavSubPages/India/Newsletters/Weekend.jsx';

// import India from './components/NavSubPages/India/Sections/India/India.jsx';
// import Bangalore from './components/NavSubPages/India/Sections/Bangalore.jsx';
// import Delhi from './components/NavSubPages/India/Sections/Delhi.jsx';
// import Mumbai from './components/NavSubPages/India/Sections/Mumbai.jsx';
// import Education from './components/NavSubPages/India/Sections/Education.jsx';
// import HealthNews from './components/NavSubPages/India/Sections/Health.jsx';
// import Infrastructure from './components/NavSubPages/India/Sections/Infrastructure.jsx';
// import Politics from './components/NavSubPages/India/Sections/Politics.jsx';    

// import IndiaAuthor1 from './components/NavSubPages/India/TopAuthors/Author1.jsx';
// import IndiaAuthor2 from './components/NavSubPages/India/TopAuthors/Author2.jsx';
// import IndiaAuthor3 from './components/NavSubPages/India/TopAuthors/Author3.jsx';

// import DigitalIndia from './components/NavSubPages/India/TopStories/DigitalIndia.jsx';
// import EconomicPolicy from './components/NavSubPages/India/TopStories/EconomicPolicy.jsx';
// import InfrastructureDevelopment from './components/NavSubPages/India/Sections/Infrastructure.jsx';
// import ParliamentSession from './components/NavSubPages/India/TopStories/ParliamentSession.jsx';
// import SupremeCourt from './components/NavSubPages/India/TopStories/SupremeCourt.jsx';
// import StateElections from './components/NavSubPages/India/TopStories/StateElections.jsx';


// // LifeStyle News Links

// import LifeStyleDaily from './components/NavSubPages/LifeStyle/Newsletters/Daily.jsx';
// import LifeStyleWeekend from './components/NavSubPages/LifeStyle/Newsletters/Weekend.jsx';

// import Agriculture from './components/NavSubPages/LifeStyle/Sections/Agriculture.jsx';
// import Beauty from './components/NavSubPages/LifeStyle/Sections/Beauty.jsx';
// import Culture from './components/NavSubPages/LifeStyle/Sections/Culture.jsx';
// import Fashion from './components/NavSubPages/LifeStyle/Sections/Fashion.jsx';
// import LifeStyle from './components/NavSubPages/LifeStyle/Sections/LifeStyle.jsx';
// import HomeGarden from './components/NavSubPages/LifeStyle/Sections/HomeGarden.jsx';
// import Travel from './components/NavSubPages/LifeStyle/Sections/Travel.jsx';
// import FoodStyle from './components/NavSubPages/LifeStyle/Sections/Food.jsx';
// import WellnessStyle from './components/NavSubPages/LifeStyle/Sections/Wellness.jsx';

// import LifeStyleAuthor1 from './components/NavSubPages/LifeStyle/TopAuthors/Author1.jsx';
// import LifeStyleAuthor2 from './components/NavSubPages/LifeStyle/TopAuthors/Author2.jsx';
// import LifeStyleAuthor3 from './components/NavSubPages/LifeStyle/TopAuthors/Author3.jsx';

// import CulturalEvents from './components/NavSubPages/LifeStyle/TopStories/CulturalEvents.jsx';
// import FashionWeeks from './components/NavSubPages/LifeStyle/TopStories/FashionWeeks.jsx';
// import TravelGuides from './components/NavSubPages/LifeStyle/TopStories/TravelGuides.jsx';
// import WellnessTips from './components/NavSubPages/LifeStyle/TopStories/WellnessTips.jsx';
// import FoodReviews from './components/NavSubPages/LifeStyle/TopStories/FoodReviews.jsx';
// import HomeDesign from './components/NavSubPages/LifeStyle/TopStories/HomeDesign.jsx';


// // Opionion News Links

// import OpionionDaily from './components/NavSubPages/Opinion/Newsletters/Daily.jsx';
// import OpionionWeekend from './components/NavSubPages/Opinion/Newsletters/Weekend.jsx';

// import Opinion from './components/NavSubPages/Opinion/Sections/Opinion.jsx';
// import BookReviews from './components/NavSubPages/Opinion/Sections/BookReviews.jsx';
// import Editorials from './components/NavSubPages/Opinion/Sections/Editorials.jsx';
// import Letters from './components/NavSubPages/Opinion/Sections/Letters.jsx';
// import Oped from './components/NavSubPages/Opinion/Sections/Oped.jsx';
// import Interviews from './components/NavSubPages/Opinion/Sections/Interview.jsx';
// import Analysis from './components/NavSubPages/Opinion/Sections/Analysis.jsx';

// import OpinionAuthor1 from './components/NavSubPages/Opinion/TopAuthors/Author1.jsx';
// import OpinionAuthor2 from './components/NavSubPages/Opinion/TopAuthors/Author2.jsx';
// import OpinionAuthor3 from './components/NavSubPages/Opinion/TopAuthors/Author3.jsx';

// import ColumnistInsights from './components/NavSubPages/Opinion/TopStories/ColumnistInsights.jsx';
// import EditorBoard from './components/NavSubPages/Opinion/TopStories/EditorBoard.jsx';
// import ExpertCommentary from './components/NavSubPages/Opinion/TopStories/ExpertCommentary.jsx';
// import PolicyDebates from './components/NavSubPages/Opinion/TopStories/PolicyDebates.jsx';
// import PoliticalAnalysis from './components/NavSubPages/Opinion/TopStories/PoliticalAnalysis.jsx';
// import ReaderResponses from './components/NavSubPages/Opinion/TopStories/ReaderResponses.jsx';


// // SciTech News Links

// import SciTechDaily from './components/NavSubPages/SciTech/Newsletters/Daily.jsx';
// import SciTechWeekend from './components/NavSubPages/SciTech/Newsletters/Weekend.jsx';

// import AritificalIntelligence from './components/NavSubPages/SciTech/Sections/ArtificialIntelligence.jsx';
// import Climate from './components/NavSubPages/SciTech/Sections/Climate.jsx';
// import HealthTech from './components/NavSubPages/SciTech/Sections/HealthTech.jsx';
// import Innovation from './components/NavSubPages/SciTech/Sections/Innovation.jsx';
// import Research from './components/NavSubPages/SciTech/Sections/Research.jsx';
// import SciTech from './components/NavSubPages/SciTech/Sections/SciTech.jsx';
// import Space from './components/NavSubPages/SciTech/Sections/Space.jsx';
// import Weather from './components/NavSubPages/SciTech/Sections/Weather.jsx';

// import SciTechAuthor1 from './components/NavSubPages/SciTech/TopAuthors/Author1.jsx';
// import SciTechAuthor2 from './components/NavSubPages/SciTech/TopAuthors/Author2.jsx';
// import SciTechAuthor3 from './components/NavSubPages/SciTech/TopAuthors/Author3.jsx';

// import AIBreakthroughs from './components/NavSubPages/SciTech/TopStories/AIBreakthroughs.jsx';
// import ClimateSolutions from './components/NavSubPages/SciTech/TopStories/ClimateSolutions.jsx';
// import SpaceExploration from './components/NavSubPages/SciTech/TopStories/SpaceExploration.jsx';
// import DigitialTransformation from './components/NavSubPages/SciTech/TopStories/DigitalTransformation.jsx';
// import ResearchUpdates from './components/NavSubPages/SciTech/TopStories/ResearchUpdates.jsx';
// import TechStartups from './components/NavSubPages/SciTech/TopStories/TechStartups.jsx';


// // Sports News Links

// import SportsDaily from './components/NavSubPages/Sport/Newsletters/Daily.jsx';
// import SportsWeekend from './components/NavSubPages/Sport/Newsletters/Weekend.jsx';

// import Football from './components/NavSubPages/Sport/Sections/Football.jsx';
// import Cricket from './components/NavSubPages/Sport/Sections/Cricket.jsx';
// import Hockey from './components/NavSubPages/Sport/Sections/Hockey.jsx';
// import Olympics from './components/NavSubPages/Sport/Sections/Olympics.jsx';
// import Outdoors from './components/NavSubPages/Sport/Sections/Outdoors.jsx';
// import Tennis from './components/NavSubPages/Sport/Sections/Tennis.jsx';
// import Basketball from './components/NavSubPages/Sport/Sections/Basketball.jsx';
// import Sports from './components/NavSubPages/Sport/Sections/Sport.jsx';
// import Athletics from './components/NavSubPages/Sport/Sections/Athletics.jsx';

// import SportAuthor1 from './components/NavSubPages/Sport/TopAuthors/Author1.jsx';
// import SportAuthor2 from './components/NavSubPages/Sport/TopAuthors/Author2.jsx';
// import SportAuthor3 from './components/NavSubPages/Sport/TopAuthors/Author3.jsx';

// import LiveScores from './components/NavSubPages/Sport/TopStories/LiveScores.jsx';
// import PlayerTransfers from './components/NavSubPages/Sport/TopStories/PlayerTransfers.jsx';
// import MatchAnalysis from './components/NavSubPages/Sport/TopStories/MatchAnalysis.jsx';
// import TournamentUpdates from './components/NavSubPages/Sport/TopStories/TournamentUpdates.jsx';
// import SportsNews from './components/NavSubPages/Sport/TopStories/SportsNews.jsx';
// import TeamRankings from './components/NavSubPages/Sport/TopStories/TeamRankings.jsx';


// // world News Links

// import WorldDaily from './components/NavSubPages/World/Newsletters/Daily.jsx';
// import WorldWeekend from './components/NavSubPages/World/Newsletters/Weekend.jsx';

// import Africa from './components/NavSubPages/World/Sections/Africa.jsx';
// import Americas from './components/NavSubPages/World/Sections/Americas.jsx';
// import AsiaPacific from './components/NavSubPages/World/Sections/AsiaPacific.jsx';
// import Australia from './components/NavSubPages/World/Sections/Australia.jsx';
// import GlobalProfile from './components/NavSubPages/World/Sections/GlobalProfile.jsx';
// import Europe from './components/NavSubPages/World/Sections/Europe.jsx';
// import MiddleEast from './components/NavSubPages/World/Sections/MiddleEast.jsx';
// import World from './components/NavSubPages/World/Sections/World/World.jsx';

// import WorldAuthor1 from './components/NavSubPages/World/TopAuthors/Author1.jsx';
// import WorldAuthor2 from './components/NavSubPages/World/TopAuthors/Author2.jsx';
// import WorldAuthor3 from './components/NavSubPages/World/TopAuthors/Author3.jsx';

// import ChinaRelations from './components/NavSubPages/World/TopStories/ChinaRelations.jsx';
// import ClimateChange from './components/NavSubPages/World/TopStories/ClimateChange.jsx';
// import GlobalHealth from './components/NavSubPages/World/TopStories/GlobalHealth.jsx';
// import InternationalTrade from './components/NavSubPages/World/TopStories/InternationalTrade.jsx';
// import MiddleEastCrisis from './components/NavSubPages/World/TopStories/MiddleEastCrisis.jsx';
// import RussiaUkraineWar from './components/NavSubPages/World/TopStories/RussiaUkraineWar.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePageLayout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/submit-letter" element={<SubmitLetterPage />} />

          <Route path="/subscribe" element={<SubscriptionPage />} />
          <Route path="/payment" element={<PaymentPage />} />


          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/grievance-redressal" element={<GrievanceRedressal />} />
          <Route path="/authors" element={<Authors />} />
          {/* Specific route for World page */}


          <Route path="/news/world" element={<World />} />
          <Route path="/news/india" element={<India />} />
          <Route path="/news/amaravati" element={<Amaravati />} />
          <Route path="/news/vizag" element={<Vizag />} />
          <Route path="/news/andhra-pradesh" element={<AndhraPradesh />} />
          <Route path="/news/telangana" element={<Telangana />} />
          <Route path="/news/hyderabad" element={<Hyderabad />} />
          <Route path="/news/sri-lanka" element={<Srilanka />} />
          <Route path="/news/us" element={<Us />} />

          <Route path="/opinion/oped" element={<Oped />} />
          <Route path="/opinion/editorials" element={<Editorials />} />
          <Route path="/opinion/letters" element={<Letters />} />
          <Route path="/opinion/interviews" element={<Interviews />} />
          <Route path="/news/:category/:articleId" element={<CategoryPage />} />
          <Route path="/opinion/:category/:articleId" element={<CategoryPage />} />  

          {/* Corrected and New Category Routes */}
          <Route path="/categories/business" element={<Business />} />
          <Route path="/categories/sci-tech" element={<SciTech />} />
          <Route path="/categories/culture" element={<Culture />} />
          <Route path="/categories/entertainment" element={<Entertainment />} />
          <Route path="/categories/sport" element={<Sports />} />
          <Route path="/categories/life-style" element={<LifeStyle />} />
          <Route path="/categories/health" element={<Health />} />
          <Route path="/categories/agriculture" element={<Agriculture />} />

          {/** New latest Routes */}
          <Route path="/latest/politics" element={<Politics />} />
          <Route path="/latest/weather" element={<Weather />} />
          <Route path="/latest/climate-change" element={<ClimateChange />} />
          <Route path="/latest/real-estate" element={<RealEstate />} />
          <Route path="/latest/outdoors" element={<Outdoors />} />


          {/** Dynamic Routes for Refund */}
          <Route path="/refund-policy" element={<RefundPage />} />
          <Route path="/advertise" element={<AdvertisePage />} />
          <Route path="/editorial-policy" element={<EditorialPolicyPage />} />
          <Route path="/newsletters" element={<NewslettersPage />} />

          {/* Web Story Routes */}
          <Route path="/web-stories/featured" element={<FeaturedStories />} />
          <Route path="/web-stories/health" element={<HealthStories />} />
          <Route path="/web-stories/politics" element={<PoliticsStories />} />
          <Route path="/web-stories/tech" element={<TechStories />} />
          <Route path="/web-stories/celebs" element={<CelebStories />} />
          <Route path="/web-stories/sport" element={<SportStories />} />
          <Route path="/web-stories/food" element={<FoodRecipes />} />
          <Route path="/web-stories/movies" element={<MovieReviews />} />


          {/* Dynamic Routes for Categories */}
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:subcategory" element={<CategoryPage />} />
          
        </Routes>
      </main>
      <Footer />
      <BackToTopButton />
    </Router>
  );
}

export default App;
