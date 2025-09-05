import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { navMenuData } from '../Navbar/navMenuData';
import './CategoryPage.css'; 

// Helper to convert text to a URL-friendly slug
const toUrlSlug = (text) => text.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');

const CategoryPage = () => {
    const { category: categorySlug } = useParams();

    // Find the category key from the slug (e.g., "sci-tech" -> "Sci-Tech")
    const categoryKey = Object.keys(navMenuData).find(
        key => toUrlSlug(key) === categorySlug
    );

    const categoryData = categoryKey ? navMenuData[categoryKey] : null;

    if (!categoryData) {
        return (
            <div className="category-page-container not-found">
                <h2>Category Not Found</h2>
                <p>The category "{categorySlug}" does not exist.</p>
                <Link to="/">← Back to Homepage</Link>
            </div>
        );
    }

    return (
        <div className="category-page-container">
            <div className="category-content-grid">
                {/* Main content area for articles */}
                <main className="main-content">
                    <h1 className="category-page-title">{categoryKey}</h1>
                    <p className="category-placeholder">
                        Articles for the {categoryKey} category would be displayed here.
                    </p>
                </main>

                {/* Sidebar with related information */}
                <aside className="sidebar-content">
                    {/* Sections List */}
                    <section className="sidebar-section">
                        <h3 className="sidebar-title">Sections</h3>
                        <ul className="sidebar-list">
                            {categoryData.sections.map((section) => (
                                <li key={section}>
                                    <Link to={`/${toUrlSlug(categoryKey)}/${toUrlSlug(section)}`}>
                                        {section}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Top Stories List */}
                    <section className="sidebar-section">
                        <h3 className="sidebar-title">Top Stories</h3>
                        <ul className="sidebar-list">
                            {categoryData.topStories.map((story) => (
                                <li key={story}><Link to="#">{story}</Link></li>
                            ))}
                        </ul>
                    </section>

                    {/* Newsletters */}
                    <section className="sidebar-section">
                        <h3 className="sidebar-title">Newsletters</h3>
                        {categoryData.newsletters.map((newsletter) => (
                            <div key={newsletter.title} className="newsletter-item">
                                <span className="newsletter-dot" style={{ backgroundColor: newsletter.bgColor }}></span>
                                <div>
                                    <p className="newsletter-item-title">{newsletter.title}</p>
                                    <p className="newsletter-item-desc">{newsletter.description}</p>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* Top Authors */}
                    <section className="sidebar-section">
                        <h3 className="sidebar-title">Top Authors</h3>
                        {categoryData.authors.map((author) => (
                            <div key={author.name} className="author-item-sidebar">
                                <div className="author-avatar-sidebar" style={{ backgroundColor: author.bgColor, color: author.textColor }}>
                                    {author.initials}
                                </div>
                                <div>
                                    <p className="author-name-sidebar">{author.name}</p>
                                    <p className="author-desc-sidebar">{author.description}</p>
                                </div>
                            </div>
                        ))}
                        <Link to="/authors" className="see-all-link">See all authors ›</Link>
                    </section>
                </aside>
            </div>
        </div>
    );
};

export default CategoryPage;

