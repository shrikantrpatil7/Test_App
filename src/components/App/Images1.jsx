import React from 'react';
import aboutMetadata from '@data/SingleProject/about.json';
import aboutMetadataRTL from '@data/SingleProject/about-rtl.json';

const Images = ({ style = "4", rtl }) => {
  const metadata = rtl ? aboutMetadataRTL : aboutMetadata;

  const aboutCardStyle = {
    textAlign: 'center',
    padding: '15px'
  };

  const smallStyle = {
    fontSize: '11px',
    color: '#999',
    marginBottom: '10px',
    textTransform: 'uppercase'
  };

  const h6Style = {
    color: '#000',
    fontSize: '14px',
    fontWeight: 'bold',
    lineHeight: '1.6'
  };

  const imgStyle = {
    position: 'relative'
  };

  const mainImgStyle = {
    position: 'relative',
    zIndex: '5'
  };

  const circleStyle = {
    position: 'absolute',
    zIndex: '0',
    left: '0',
    top: '15%',
    height: '70%',
    objectFit: 'contain',
    objectPosition: 'center',
    WebkitAnimation: 'rotate-center 100s linear infinite both reverse',
    animation: 'rotate-center 100s linear infinite both reverse'
  };

  const bubblsStyle = {
    position: 'absolute',
    zIndex: '0',
    left: '0',
    top: '0',
    width: '100%',
    objectFit: 'contain',
    objectPosition: 'center',
    WebkitAnimation: 'rotate-center 100s linear infinite both',
    animation: 'rotate-center 100s linear infinite both'
  };

  const screenshotsAfterStyle = {
    position: 'absolute',
    content: '""',
    backgroundImage: 'url(../img/about/about_s4_wave.png)',
    backgroundRepeat: 'repeat-x',
    width: '100%',
    height: '30px',
    top: '-1px',
    left: '0',
    zIndex: '10',
    WebkitTransform: 'rotateX(180deg)',
    transform: 'rotateX(180deg)'
  };

  const socialIconStyle = {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f3f7fe',
    color: '#666',
    fontSize: '12px',
    margin: '20px 3px 0'
  };

  const hoverStyle = {
    backgroundColor: 'var(--color-blue5)',
    color: '#fff'
  };

  return (
    <section className="about-app style-5">
      <div className="container">
        <div className="content text-center">
         
          <div className="about-cards border-bottom brd-gray">
          
          </div>
          <div className="img-content pt-70 pb-70 border-bottom brd-gray overflow-hidden">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="img text-center" style={imgStyle}>
                  <img src="/assets/img/single_project/2mobs.png" alt="" className="main-img" style={mainImgStyle} />
                  <img src="/assets/img/single_project/bubbls.png" alt="" className="bubbls" style={bubblsStyle} />
                  <img src="/assets/img/single_project/circle.png" alt="" className="circle" style={circleStyle} />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
          .single-project.style-5 .screenshots::after {
            ${Object.keys(screenshotsAfterStyle).map(prop => `${prop}: ${screenshotsAfterStyle[prop]};`).join('\n')}
          }
          .single-project.style-5 .share .social-icon:hover {
            ${Object.keys(hoverStyle).map(prop => `${prop}: ${hoverStyle[prop]};`).join('\n')}
          }
          .single-project.style-5 .share .social-icon.hover-blue4:hover {
            ${Object.keys(hoverStyle).map(prop => `${prop}: ${hoverStyle[prop]};`).join('\n')}
          }
        `}
      </style>
    </section>
  );
}

export default Images;
