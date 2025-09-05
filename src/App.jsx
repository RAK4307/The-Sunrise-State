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
import World from './components/NavSubPages/World/Sections/World/World.jsx';
import India from './components/NavSubPages/India/Sections/India/India.jsx';
import Amaravati from './components/NavSubPages/Amaravati/Sections/Amaravati.jsx';
import Vizag from './components/NavSubPages/News/Vizag/vizag.jsx';
import AndhraPradesh from './components/NavSubPages/News/AndhraPradesh/AndhraPradesh.jsx';
import Telangana from './components/NavSubPages/News/Telangana/Telangana.jsx';
import Hyderabad from './components/NavSubPages/News/Hyderabad/hyderabad.jsx';
import Srilanka from './components/NavSubPages/News/SriLanka/lanka.jsx';
import Us from './components/NavSubPages/News/US/us.jsx';

import SciTech from './components/NavSubPages/SciTech/Sections/SciTech.jsx';
import Business from './components/NavSubPages/Business/Sections/Business.jsx';
import Culture from './components/NavSubPages/LifeStyle/Sections/Culture.jsx';
import Entertainment from './components/NavSubPages/Entertainment/Sections/Entertainment.jsx';
import Sports from './components/NavSubPages/Sport/Sections/Sport.jsx';
import LifeStyle from './components/NavSubPages/LifeStyle/Sections/LifeStyle.jsx';
import Health from './components/NavSubPages/Health/Sections/Health.jsx';
import Agriculture from './components/NavSubPages/LifeStyle/Sections/Agriculture.jsx';


import Politics from './components/NavSubPages/India/Sections/Politics.jsx';
import Weather from './components/NavSubPages/SciTech/Sections/Weather.jsx';
import ClimateChange from './components/NavSubPages/World/TopStories/ClimateChange.jsx';
import RealEstate from './components/NavSubPages/Business/Sections/RealEstate.jsx';
import Outdoors from './components/NavSubPages/Sport/Sections/Outdoors.jsx';



import Oped from './components/NavSubPages/Opinion/Sections/Oped.jsx';
import Editorials from './components/NavSubPages/Opinion/Sections/Editorials.jsx'
import Letters from './components/NavSubPages/Opinion/Sections/Letters.jsx'
import Interviews from './components/NavSubPages/Opinion/Sections/Interview.jsx'



// Web Story Pages
import FeaturedStories from './components/WebStories/FeaturedStories.jsx';
import HealthStories from './components/WebStories/HealthStories.jsx';
import PoliticsStories from './components/WebStories/PoliticsStories.jsx';
import TechStories from './components/WebStories/TechStories.jsx';
import CelebStories from './components/WebStories/CelebStories.jsx';
import SportStories from './components/WebStories/SportStories.jsx';
import FoodRecipes from './components/WebStories/FoodRecipes.jsx';
import MovieReviews from './components/WebStories/MovieReviews.jsx';




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
