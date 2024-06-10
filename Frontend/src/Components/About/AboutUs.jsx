import React from 'react';
import image from '../../assets/react.svg';

const AboutUs = () => {
  return (
   
      <div className="container mx-auto p-6 bg-light rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-center">About Mynews</h1>
        <div className="flex flex-col md:flex-row h-3/6">
          <div className="md:w-1/2 p-2">
            <img src={image} alt="Mynews"  className="rounded-lg w-full h-4/6" />
          </div>
          <div className="md:w-1/2 p-2">
            <p className="mb-4">
              Welcome to Mynews, your go-to source for the latest and most reliable news. Our mission is to deliver
              accurate, timely, and engaging news content to our readers. We cover a wide range of topics including
              politics, business, technology, sports, entertainment, and more.
            </p>
            <p className="mb-4">
              At Mynews, we believe in the power of information and its ability to shape our world. We are committed to
              providing our audience with the facts they need to stay informed and make educated decisions.
            </p>
            <p className="mb-4 font-semibold">Achievements:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Recognized as the most trusted news source by XYZ Association in 2023.</li>
              <li>Recipient of the ABC Award for Excellence in Journalism.</li>
              <li>Reached 1 million active readers within the first year of launch.</li>
            </ul>
            <p className="mb-4 font-semibold">Government Approved:</p>
            <p>
              We are proud to announce that Mynews is officially approved by the government for our commitment to truthful
              and ethical journalism. Our team adheres to the highest standards of reporting to ensure the credibility and
              integrity of our content.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default AboutUs;
