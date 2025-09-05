import { Routes, Route } from 'react-router-dom';

// Web Story Page Components
import FeaturedStories from '../components/WebStories/FeaturedStories.jsx';
import HealthStories from '../components/WebStories/HealthStories.jsx';
import PoliticsStories from '../components/WebStories/PoliticsStories.jsx';
import TechStories from '../components/WebStories/TechStories.jsx';
import CelebStories from '../components/WebStories/CelebStories.jsx';
import SportStories from '../components/WebStories/SportStories.jsx';
import FoodRecipes from '../components/WebStories/FoodRecipes.jsx';
import MovieReviews from '../components/WebStories/MovieReviews.jsx';

const WebStoryRoutes = () => (
    <Routes>
        <Route path="/featured" element={<FeaturedStories />} />
        <Route path="/health" element={<HealthStories />} />
        <Route path="/politics" element={<PoliticsStories />} />
        <Route path="/tech" element={<TechStories />} />
        <Route path="/celebs" element={<CelebStories />} />
        <Route path="/sport" element={<SportStories />} />
        <Route path="/food" element={<FoodRecipes />} />
        <Route path="/movies" element={<MovieReviews />} />
    </Routes>
);

export default WebStoryRoutes;

