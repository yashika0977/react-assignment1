import React from 'react';
import './Card.css';
import backimg from './assets/backnavimage.png';
import logo from './assets/Logo.png';
import img1 from './assets/tax.png';
import img2 from './assets/taxs.jpg';

function RealEstatePortal() {
  return (
    <div>
      {/* Navigation */}
      <nav id="Navigation">
        <div id="Navigation_div1">
          <img src={backimg} alt="Back Image of the nav bar" id="backimage" />
        </div>

        <div id="Navigation_div2">
          <div className="navbar_div1">
            <img id="Logo_SS" src={logo} alt="" />
            <a href="#">
              <h1>99 Acres</h1>
            </a>
          </div>
          <div className="navbar_div2">
            <a href="#" className="for_buyers">For Buyers</a>
            <a href="#">For Tenants</a>
            <a href="#">For Owners</a>
            <a href="#">For Dealers/Builders</a>
            <a href="#">Insights</a>
          </div>
        </div>
      </nav>

      {/* Start of Hover on For Buyers */}
      <div className="for_buyers_hover">
        <ul className="buyers_1" id="buyers_1_id" type="none">
          <li>Buy a Home</li>
          <li>Land/Plot</li>
          <li>Commercial</li>
          <li>Popular Areas</li>
          <li>Insights</li>
          <li>Articles and News</li>
        </ul>

        <ul className="buyers_1" type="none">
          <li className="buyers_1_heading">PROPERTIES IN CHANDIGARH</li>
          <li>Flats</li>
          <li>Builder Floors</li>
          <li>Independent House</li>
          <li>Plots in Chandigarh</li>
          <li>Serviced Apartments</li>
          <li>Studio Apartments /1RK Flats</li>
          <li>Farm Houses</li>
        </ul>

        <ul className="buyers_1" type="none">
          <li className="buyers_1_heading">POPULAR SEARCHES</li>
          <li>Property in Chandigarh</li>
          <li>Verified Property in Chandigarh</li>
          <li>New Projects in Chandigarh</li>
        </ul>
        <img id="insight_image" src="images/insight.jpg" alt="image" />
      </div>
      {/* End of Hover on For Buyers */}

      {/* Search Bar */}
      <div id="searchbar">
        <div className="searchbar_1">
          <a href="#" id="buy_searchbar_1">
            <p>Buy</p>
          </a>
          <a href="#" id="rent_searchbar_1">
            <p>Rent</p>
          </a>
          <a href="#" id="new_launch_searchbar_1">
            <p>New Launch</p>
          </a>
          <a href="#" id="pg_searchbar_1">
            <p>PG/Co-living</p>
          </a>
          <a href="#" id="commercial_searchbar_1"> 
            <p>Commercial</p>
          </a>
          <a href="#" id="plots_searchbar_1">
            <p>Plots/Lands</p>
          </a>
          <a href="#" id="projects_searchbar_1">
            <p>Projects</p>
          </a>
        </div>
        <hr />
        <div className="searchbar_2">
          <div id="searchbar_2_div_change">
            <h5 id="searchbar_2_div_change_h5">All Residential</h5>
          </div>
          <div className="vertical-hr"></div>
          <input type="search" name="searching" id="searching" placeholder='"Search For Flats"' />
          <a href="#"><button className="searchbutton">Search</button></a>
        </div>
      </div>

      <main className="mainarticle">
        <div id="article_div1">
          <h2>Top articles on home buying</h2>
          <a href="#" id="article_head">
            <h4>Read realty news, guides ........</h4>
          </a>
        </div>
        <div id="article_div2">
          <a href="#" className="div2-head">Tax & Legal</a>
          <a href="#" className="div2-head">Help Guides</a>
          <a href="#" className="div2-head">Investments</a>
        </div>
        <hr />
        <div id="mainarticle_images">
          <div className="article-div3">
            <img className="article_image" src={img1} alt="tax and legal image" />
            <p className="tax_subtitle">Property Tax Chandigarh: Complete Guide</p>
            <p className="tax_para">Jan 04 , 2024</p>
          </div>
          <div className="article-div3">
            <img className="article_image" src={img2} alt="tax and legal image" />
            <p className="tax_subtitle">
              SC bars Floorwise regsitration in Chandigarh
            </p>
            <p className="tax_para">Jan 17 , 2023</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default RealEstatePortal;


       
