import React from 'react';
import image from '../../assets/AboutUs.jpg';

const AboutUs = () => {
  return (
   
      <div className="container mx-auto px-10 bg-drak rounded-lg">
        
        <div className="flex flex-col md:flex-row gap-2">
          
          <div className="md:w-1/2 p-6 text-slate-400">
          <h1 className="text-2xl mb-4 font-serif font-bold uppercase text-center text-white">About Us</h1>
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
          <div className="md:w-1/2 p-4">
            <img src={image} alt="Mynews"  className="rounded-lg w-full h-full"/>
          </div>
        </div>
      </div>
    
  );
};

export default AboutUs;
