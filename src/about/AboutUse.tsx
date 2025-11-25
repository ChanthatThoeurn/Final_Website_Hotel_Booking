import React from 'react';

// --- Image Placeholders ---
// REPLACE these URLs with your actual image paths (e.g., import local files or use hosted URLs).
const heroImage = 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/119871961.jpg?k=838b122e152e8a03a827bd7f11fc78f61cdca4cadc7b2a1af4c66d34bc6d2370&o=';
const accommodationImage = 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/562254874.jpg?k=790bd67b1fcbabfe305c2c71a2353d21bb45c58012ce2afc4d2e92ccb307cf37&o=';
const packagesImage = 'https://cf.bstatic.com/xdata/images/hotel/square600/446698071.webp?k=e9108756ec0962954f4b3ffb4c44fe5b0679c3a41290e2d34fb9e32cbef83202&o=';
const amenitiesImage = 'https://cf.bstatic.com/xdata/images/hotel/max500/576728488.jpg?k=a075910da9b11047f8c91f872b541fabc241ac4667a6ed77f700ec31e810c30a&o=';
const exploreDublinImage = 'https://cf.bstatic.com/xdata/images/hotel/square600/562258090.webp?k=95d60b9864834f404aece78f247cfd267173264523e31809217d42e5ae57bc64&o=';

// --- Style Variables (sampled from the picture) ---
const primaryColor = '#006666'; // Dark Teal/Green
const secondaryColor = '#00A3A3'; // Brighter Teal/Green
const darkTextColor = '#333333';
const mediumTextColor = '#666666';
const lightBackgroundColor = '#F8F8F8';
const lightGreenBackground = '#e0f2f2'; // The background color for the bottom section

const DublinPage: React.FC = () => {
  return (
    <div style={{ fontFamily: '"Roboto", Arial, sans-serif', margin: 0, padding: 0, boxSizing: 'border-box', lineHeight: 1.6 }}>

      {/* 1. Hero Section & Booking Widget (Now the top element) */}
      <section style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#ffffff',
        textAlign: 'center',
        // Increased top padding since the header is gone
        padding: '150px 0 80px', 
        position: 'relative',
        minHeight: '550px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 1
        }}></div>
        <h1 style={{ fontSize: '48px', marginBottom: '40px', zIndex: 2, position: 'relative', fontWeight: 700, textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
          Relax and leave everyday <br /> worries behind
        </h1>
      </section>

      {/* 2. Welcome Section */}
      <section style={{ textAlign: 'center', padding: '80px 15%', backgroundColor: lightBackgroundColor }}>
        <h2 style={{ fontSize: '14px', color: primaryColor, marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600 }}>WELCOME TO DUBLIN - IRELAND</h2>
        <h3 style={{ fontSize: '32px', color: darkTextColor, marginBottom: '30px', fontWeight: 600 }}>A bustling city with a cosmopolitan vibe</h3>
        <p style={{ lineHeight: '1.8', color: mediumTextColor, maxWidth: '800px', margin: '0 auto', fontSize: '16px' }}>
          The biggest draw to Phnom Penh has to be its people. They’re the reason why the city is consistently voted amongst the friendliest in Asian – and in the world. They’re also the driving force behind Phnom Penh’s distinctive nightlife, its vibrant art scene and the city’s many community initiatives.
        </p>
      </section>

      {/* 3. Why Book Direct Section */}
      <section style={{ textAlign: 'center', padding: '80px 15%', backgroundColor: '#ffffff' }}>
        <h2 style={{ fontSize: '32px', color: darkTextColor, marginBottom: '40px', fontWeight: 600 }}>Why book direct</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', flexWrap: 'wrap', marginBottom: '50px' }}>
          {['Lowest rate guarantee', 'Free late check out', 'Free welcome drink'].map((benefit) => (
            <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: primaryColor, fontSize: '18px', fontWeight: 500 }}>
              <span style={{ fontSize: '24px', lineHeight: 1 }}>✓</span> {benefit}
            </div>
          ))}
        </div>
        <button style={{
          backgroundColor: primaryColor, color: '#ffffff', padding: '15px 35px', border: 'none',
          borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold',
        }}>BOOK NOW</button>
      </section>

      {/* 4. Accommodation/Packages/Amenities Section */}
      <section style={{ padding: '80px 5%', backgroundColor: lightBackgroundColor }}>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '30px', maxWidth: '1200px', margin: '0 auto'
        }}>
          {[
            { img: accommodationImage, title: 'Our accommodations', desc: 'Take a look at our beautiful rooms & suites, designed with ultimate comfort in mind.' },
            { img: packagesImage, title: 'Our packages', desc: 'Got something to celebrate or just want to make your stay extra special? Check out our packages!' },
            { img: amenitiesImage, title: 'Our amenities', desc: 'Our hotel is well-equipped to make nothing more can be desired. We have a gym, sauna, swimming pool and more.' },
          ].map((item, index) => (
            <div key={index} style={{
              backgroundColor: '#ffffff', boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
              borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column'
            }}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '25px', flexGrow: 1 }}>
                <h4 style={{ fontSize: '20px', color: darkTextColor, marginBottom: '15px', fontWeight: 600 }}>{item.title}</h4>
                <p style={{ fontSize: '15px', color: mediumTextColor, lineHeight: '1.7', marginBottom: '20px' }}>{item.desc}</p>
                <a href="#" style={{ textDecoration: 'none', color: primaryColor, fontWeight: 'bold', fontSize: '14px' }}>READ MORE</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Explore Dublin Section (Responsive with inline CSS) */}
      <section style={{ padding: '80px 5%', backgroundColor: lightGreenBackground }}>
        <div className="explore-container" style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '50px',
          maxWidth: '1200px', margin: '0 auto', backgroundColor: '#ffffff',
          borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
        }}>
          <div style={{ flex: '1 1 50%', minWidth: '300px' }}>
            <img src={exploreDublinImage} alt="Explore Dublin" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>
          <div className="explore-content" style={{ flex: '1 1 50%', padding: '40px' }}>
            <h3 style={{ fontSize: '32px', color: darkTextColor, marginBottom: '20px', fontWeight: 600 }}>Explore the rich history of Phnom Penh</h3>
            <p style={{ lineHeight: '1.8', color: mediumTextColor, marginBottom: '30px', fontSize: '16px' }}>
              The city has a captivating history, abounding with grand architecture and internationally renowned museums. Walking around the city center, visitors can discover a wealth of historic monuments, classical National Musem facades and Toul Sleng Museum.
            </p>
            <a href="#" style={{ textDecoration: 'none', color: primaryColor, fontWeight: 'bold', fontSize: '14px' }}>READ MORE</a>
          </div>
        </div>

        {/* Note: Used for handling media queries */}
        <style>{`
          @media (max-width: 768px) {
            .explore-container {
              flex-direction: column;
              gap: 30px;
            }
            .explore-content {
              padding: 20px 40px !important; 
            }
            .booking-widget {
                justify-content: center;
            }
          }
        `}</style>
      </section>

      {/* 6. Footer */}
   
    </div>
  );
};

export default DublinPage;