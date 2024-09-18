import React from 'react';

// Importing icons from the Images folder
import FacebookIcon from '../Images/facebook.png';
import TwitterIcon from '../Images/twitter.png';
import YouTubeIcon from '../Images/youtube.png';
import LinkedInIcon from '../Images/linkedin.png';
import InstagramIcon from '../Images/instagram.png';
import AppStoreIcon from '../Images/appstore.png';
import PlayStoreIcon from '../Images/playstore.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-10">

        {/* Top Section with Uber Logo and Help Center */}
        <div className="flex justify-start items-start mb-10">
          <div>
            <h1 className="text-2xl font-semibold">Uber</h1>
            <p className="mt-1">Visit Help Center</p>
          </div>
        </div>

        {/* Footer Main Content */}
        <div className="flex justify-between mb-10">
          {/* Footer Links */}
          <div className="flex space-x-16">
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul>
                <li className="mb-2">About us</li>
                <li className="mb-2">Our offerings</li>
                <li className="mb-2">Newsroom</li>
                <li className="mb-2">Investors</li>
                <li className="mb-2">Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Products</h3>
              <ul>
                <li className="mb-2">Ride</li>
                <li className="mb-2">Drive</li>
                <li className="mb-2">Deliver</li>
                <li className="mb-2">Eat</li>
                <li className="mb-2">Uber for Business</li>
                <li>Gift cards</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Global citizenship</h3>
              <ul>
                <li className="mb-2">Safety</li>
                <li className="mb-2">Diversity and Inclusion</li>
                <li>Sustainability</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Travel</h3>
              <ul>
                <li className="mb-2">Reserve</li>
                <li className="mb-2">Airports</li>
                <li>Cities</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media and App Store Icons */}
        <div className="flex justify-between items-center mb-8">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <img src={FacebookIcon} alt="Facebook" className="w-6 h-6" />
            <img src={TwitterIcon} alt="Twitter" className="w-6 h-6" />
            <img src={YouTubeIcon} alt="YouTube" className="w-6 h-6" />
            <img src={LinkedInIcon} alt="LinkedIn" className="w-6 h-6" />
            <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
          </div>

          {/* App Store and Play Store Icons */}
          <div className="flex space-x-4">
            <img src={AppStoreIcon} alt="Get on App Store" className="w-36" />
            <img src={PlayStoreIcon} alt="Get on Play Store" className="w-36" />
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="flex justify-between items-center">
          <p>© 2024 Uber Technologies Inc.</p>
          <div className="flex space-x-8">
            <span>Privacy</span>
            <span>Accessibility</span>
            <span>Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 