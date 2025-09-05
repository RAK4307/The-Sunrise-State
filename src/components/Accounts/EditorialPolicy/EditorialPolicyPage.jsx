import React from 'react';
import './EditorialPolicyPage.css';

const EditorialPolicyPage = () => {
  return (
    <div className="static-page-wrapper">
      <div className="static-content-card">
        <header className="static-page-header">
          <h1>Editorial Policy</h1>
          <p>Our commitment to quality, integrity, and transparent journalism.</p>
        </header>

        <section className="content-section">
          <h2>Our Mission</h2>
          <p>
            The Sunrise State is dedicated to providing accurate, fair, and insightful news and analysis. Our primary goal is to inform our readers with journalism that is both independent and accountable. We believe in the power of information to foster understanding and contribute to a healthy public discourse.
          </p>
        </section>

        <section className="content-section">
          <h2>Accuracy and Fact-Checking</h2>
          <p>
            We are committed to accuracy in all our content. Our journalists are expected to verify information from multiple sources before publication. We have a multi-level fact-checking process for investigative and in-depth stories to ensure the highest degree of precision.
          </p>
        </section>

        <section className="content-section">
          <h2>Corrections Policy</h2>
          <p>
            When we make an error, we acknowledge it and correct it promptly and clearly. Corrections will be noted at the top or bottom of the article where the error occurred. For significant errors, we may issue a separate editor's note. To report an error, please contact our editorial team.
          </p>
        </section>

        <section className="content-section">
          <h2>Sources and Attribution</h2>
          <p>
            We believe in transparency and will attribute information to its source whenever possible. We grant anonymity to sources only when they may face danger or retribution for providing information, and only when the information is of high public interest. The decision to use an anonymous source is made at a senior editorial level.
          </p>
        </section>

        <section className="content-section">
          <h2>Impartiality and Fairness</h2>
          <p>
            Our reporting aims to be fair and impartial, presenting all relevant sides of a story. Our journalists and editors are prohibited from allowing their personal biases to influence their reporting.
          </p>
        </section>

        <section className="content-section">
          <h2>Opinion and Commentary</h2>
          <p>
            We distinguish clearly between news reporting and opinion. Opinion pieces, editorials, and commentary represent the views of their authors and do not necessarily reflect the institutional opinion of The Sunrise State. Such content is always clearly labeled as "Opinion," "Editorial," or "Letter to the Editor."
          </p>
        </section>
      </div>
    </div>
  );
};

export default EditorialPolicyPage;