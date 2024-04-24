import Link from 'next/link';
import aboutData from '@data/App/about.json';

const About = () => {
  
  return (
    <section className="about section-padding style-4">
      <div className="integration">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-head text-center style-4">
              <small className="title_small">About Our Company</small>
              <h2 className="mb-20"> Revolutionizing Indian <br /> Economy Through Digital  <span> Financial Inclusion </span> </h2>
              <p>AeronPay: Empowering Indian Retailers and Customers with Comprehensive Financial Solutions</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="content mb-100 pb-100 border-1 border-bottom brd-gray">
            {
              aboutData.integrations.map((item, index) => (
                <div className="img" key={index}>
                  <img src={item} alt="" className="mt-30" />
                </div>
              ))
            }
          </div>
        </div>
        <img src="/assets/img/about/intg_back.png" alt="" className="intg-back" />
      </div>
      <div className="content frs-content">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="img mb-30 mb-lg-0">
                <img src="/assets/img/about/ipad.png" alt="" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="info">
                <div className="section-head style-4">
                  <small className="title_small">Aeronpay - Easy Payment App</small>
                  <h2 className="mb-30">The Financial Hub  <span>for Digital India</span> </h2>
                </div>
                <p className="text mb-40">
                AeronPay: Revolutionizing Indian commerce with comprehensive digital financial services, integrating millions into the economy.<br /> 
                Through innovative tech and strategic alliances, AeronPay offers enhanced flexibility in payments, redefining financial transactions for users.
                </p>
                <ul>
                  {
                    aboutData.features.map((feature, index) => (
                      <li className={`d-flex align-items-center ${index !== aboutData.features.length - 1 ? 'mb-3':''}`} key={index}>
                        <small className="icon-30 bg-gray rounded-circle color-blue4 d-inline-flex align-items-center justify-content-center me-3">
                          <i className={feature.icon}></i>
                        </small>
                        <h6 className="fw-bold">{ feature.title }</h6>
                      </li>
                    ))
                  }
                </ul>
                <Link href="/page-contact-5">
                  <a className="btn rounded-pill bg-blue4 fw-bold text-white mt-50">
                    <small>Free Register</small>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img src="/assets/img/about/about_s4_lines.png" alt="" className="lines" />
        <img src="/assets/img/about/about_s4_bubble.png" alt="" className="bubble" />
      </div>
    </section>
  )
}

export default About