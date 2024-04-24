import Link from 'next/link';
import aboutData from '@data/Software/about.json';


const PurchaseCont2 = () => {
  return (
    <section className="about section-padding style-3" data-scroll-index="3">
      <div className="top-content">
        <div className="img img-left">
          <img src="/assets/img/about/style_3_1.png" alt="" />
          {
            aboutData.numbers.map((number, index) => (
              <div className="info-circle" key={index}>
                <div className="cont">
                  <h2>{ number.value }</h2>
                  <small>{ number.title }</small>
                </div>
              </div>
            ))
          }
        </div>
        <div className="container">
          <div className="row gx-0 justify-content-end">
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head long-shape mb-40 style-3">
                  <h3>Aeronpay's <span>Purchase Services</span></h3>
                </div>
                <h5 className="h5">
                  “Our Indian payment gateway app's true power shines when transactions encounter challenges.”
                </h5>
                <div className="text mb-20">
                AeronPay simplifies financial services across PAN India, offering a variety of convenient options. Easily purchase gift cards for yourself or loved ones with just a few clicks. Skip the hassle of paying traffic challans traditionally with AeronPay's integrated Traffic Challan feature. 
                </div>
                <div className="text mb-70">
                Enjoy endless entertainment with Google Play Vouchers, redeemable for various digital content. Access our comprehensive services anytime, anywhere, simplifying your financial experience."
                </div>
                <Link href="/page-about-5">
                  <a className="btn rounded-pill bg-blue2 sm-butn text-white">
                    <span>More About Us</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="btm-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="info pe-lg-5">
                <div className="section-head mb-40 style-3">
                  <h3>Iteck’s <span>Technology</span></h3>
                </div>
                <div className="text mb-30">
                  Our team can assist you in transforming your business through latest tech
                  capabilities to stay ahead of the curve.
                </div>
                <ul>
                  {
                    aboutData.features.map((feature, index) => (<li key={index}> <i className="bi bi-star-fill me-3"></i> { feature }</li>))
                  }
                </ul>
                <Link href="/page-about-5">
                  <a className="btn rounded-pill border-blue2 hover-blue2 mt-60 sm-butn">
                    <span>How We Works</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="img img-right">
          <img src="/assets/img/about/style_3_2.png" alt="" />
        </div>
      </div> */}
    </section>
  )
}

export default PurchaseCont2