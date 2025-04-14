import React from 'react';
import '../styles/Home.css'; // Corrigir o caminho para "styles"

    const Home = () => {
      return (
        <div className="screen-feature-list">
          <div className="heading">
            <div className="heading-wrapper">
              <div className="text-wrapper">Plan Your Dream Trip</div>
            </div>
    
            <p className="paragraph">
              Explore our platform for personalized trip planning based on your
              budget, preferences, and available time.
            </p>
          </div>
    
          <div className="wrapper">
            <div className="feature-list">
              <div className="div">Preference Registration</div>
    
              <p className="p">
                Tailor your trip by registering your preferences for accommodation,
                activities, and more.
              </p>
            </div>
    
            <div className="feature-list">
              <div className="div">Personalized Destination Suggestions</div>
    
              <p className="p">
                Receive customized recommendations for destinations and activities
                based on your interests.
              </p>
            </div>
    
            <div className="feature-list">
              <div className="div">Approximate Cost Calculation</div>
    
              <p className="p">
                Get an estimate of the total cost of your trip based on your budget
                and preferences.
              </p>
            </div>
    
            <div className="feature-list">
              <div className="div">Personalized Itinerary Creation</div>
    
              <p className="p">
                Create a detailed itinerary that suits your preferences, budget, and
                available time.
              </p>
            </div>
          </div>
        </div>
      );
    };
    
    export default Home;