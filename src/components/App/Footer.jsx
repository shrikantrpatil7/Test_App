import Link from 'next/link';


const Footer = ({ noWave, rtl }) => {
  const handleMouseMove = (event) => {
    const dropDownToggler = event.target.classList.contains('dropdown-toggle') ? event.target : event.target.querySelector('.dropdown-toggle');
    const dropDownMenu = dropDownToggler?.nextElementSibling;

    dropDownToggler?.classList?.add('show');
    dropDownMenu?.classList?.add('show');
  }

  const handleMouseLeave = (event) => {
    const dropdown = event.target.classList.contains('dropdown') ? event.target : event.target.closest('.dropdown');
    const dropDownToggler = dropdown.querySelector('.dropdown-toggle');
    const dropDownMenu = dropdown.querySelector('.dropdown-menu');

    dropDownToggler?.classList?.remove('show');
    dropDownMenu?.classList?.remove('show');
  }

  return (
    <footer className={`style-4 ${noWave ? 'mt-0 pt-100':''}`} data-scroll-index="8">
      <div className="container">

      <div className="inner">

<div className="content text-left">

    <div className="logo">

        <h4 className="theme-gradient" id="heading-table">Disclaimer:</h4>

    </div>

    <p className="sal-animate history-text" data-sal="slide-up" data-sal-duration="400"

        data-sal-delay="150">Please do not share your AeronPay Wallet password,

        Credit/Debit card pin, other confidential information with anyone even

        if he/she claims to be from AeronPay. We advise our customers to

        completely ignore such communications & report to us at<strong>

            <a href="mailto:disputes@aeronpay.in"> disputes@aeronpay.in

            </a></strong>

    </p>

            <p>Note: AeronPay is not a Payment Gateway but a technology platform for Utility Payments in partnership with NPCI-licensed Partners.</p>

</div>

</div>

<div className="footer-top">



<div className="container">


    <div className="row center-footer">

        <div className="col-12  fo-cc-re"> 

            <div className="rn-footer-widget">

                <div className="logo footer-imre">

                       
                </div>

               

            </div>

        </div>

        <div  className='pikachu'>
        <div className="inner">
        <a href="index">


<img className="logo-dark" src="/assets/img/logo-dark.png" alt="Corporate Logo" />

  
</a>

<h6 className="subtitle fo-co-rd">AeronPay Provides Utility Bill Payments and Secure Financial Services to the Indian Retailers and Customers.</h6>



</div>

        <div className="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div className="rn-footer-widget">

                <h4 className="title">Company</h4>

                <div className="inner">

                    <ul className="footer-link link-hover">

                    <li>
        <Link href="/home-app-landing">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/page-about-app">
          <a>About</a>
        </Link>
      </li>
      <li>
        <Link href="/career">
          <a>Careers</a>
        </Link>
      </li>
<li>
<Link href="/pricing">
                  <a>Pricing</a>
                </Link>

</li>
                        
                        
                    </ul>

                </div>

            </div>

        </div>

        <div className="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div className="rn-footer-widget">

                <div className="widget-menu-top">

                    <h4 className="title">Solutions</h4>

                    <div className="inner">

                        <ul className="footer-link link-hover">

                        <li><Link href="/page-contact-app">Contact</Link></li>
                       
                       



                        <li>
        <Link href="blog.php">
          <a>Blogs</a>
        </Link>
      </li>
      <li>
        <Link href="https://support.aeronpay.in/portal/en/home">
          <a>Support</a>
        </Link>
      </li>
      <li>
        <Link href="/faq">
          <a>Faqs</a>
        </Link>
      </li>
      <li>
        <Link href="/testimonials">
          <a>Testimonials</a>
        </Link>
      </li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

        <div className="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div className="rn-footer-widget">

                <div className="widget-menu-top">

                    <h4 className="title">Services</h4>

                    <div className="inner">

                        <ul className="footer-link link-hover">

                            <li><Link href="retailer">Retailer</Link></li>

                            <li><Link href="distributor">Distributor</Link></li>

                            <li><Link href="franchise">Franchise</Link></li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>

        <div className="col-lg-2 col-md-6 col-sm-6 col-12 fo-op-re">

            <div className="rn-footer-widget">

                <div className="widget-menu-top">

                    <h4 className="title">Policies</h4>

                    <div className="inner">

                        <ul className="footer-link link-hover">

                            <li><Link href="privacy-policy">Privacy Policy</Link></li>

                            <li><Link href="terms&conditions">Terms & conditions</Link></li>

                            <li><Link href="grievance-policy.php">Grievance Policy</Link></li>

                            <li><Link href="Cancellation&RefundPolicies.html">Cancellation & Refund Policies</Link></li>

                        </ul>

                    </div>

                </div>

            </div>

        </div>



        </div>

 

    </div>

</div>

</div>












 {/* <div className="section-head text-center style-4">
          <h2 className="mb-10">{ rtl ? 'جاهز' : 'Ready To' } <span>{ rtl ? 'للتنزيل' : 'Download' }</span> </h2>
          <p>{ rtl ? 'اكتشف مساحاتك المفضلة الجديدة ، من ساو باولو إلى سيول. قم بالتنزيل من App Store أو Google Play.' : 'Discover your new favorite spaces, from Sao Paulo to Seoul. Download from App Store or Google Play.' }</p>
          <div className="d-flex align-items-center justify-content-center mt-50">
            <a href="https://www.apple.com/app-store" rel="noreferrer" className="btn rounded-pill bg-blue4 fw-bold text-white me-4" target="_blank">
              <small> <i className="fab fa-apple me-2 pe-2 border-end"></i> { rtl ? 'تنزيل من متجر التطبيقات' : 'Download On App Store' }</small>
            </a>
            <a href="https://play.google.com/store/apps" rel="noreferrer" className="btn rounded-pill hover-blue4 fw-bold border-blue4" target="_blank">
              <small> <i className="fab fa-google-play me-2 pe-2 border-end"></i> { rtl ? 'تنزيل من متجر ابل' : 'Download On Google Play' }</small>
            </a>
          </div>
        </div> */}



        <div className="foot mt-80">
          <div className="row align-items-center">
           
         
            <div className="col-lg-2">
             
              
            </div>
          </div>
        </div>
  



        <div className="copyright-area copyright-style-one">


<div className="container">

    <div className="row align-items-center fot-co-mr">

        <div className="col-lg-5 col-md-4 col-sm-12 col-12 tab-re">

            <div className="copyright-right">

                <p className="copyright-text fo-co-re">Copyright © 2018-2023 | AeronFly<br/> International Private Limited.

                    All Right Reserved</p>

            </div>

        </div>

        

        <div className="col-lg-3 col-md-4 col-sm-12 col-12 tab-re">

            <div className="copyright-right">

                <p className="copyright-text fo-co-re r-f-r">Made in <b>     <img
  src="https://flagcdn.com/in.svg"
  width="20"
  alt="India"/>
                
                </b> with <i className="fas fa-heart" style={{ color: '#b50f0f' }}></i></p>

            

            </div> 
           



        </div>

        

        <div className="col-lg-4">

            <ul className="social-icons">

                <li><a href="https://www.facebook.com/aeronpay"><i className="fab fa-facebook fa-2x me-2 pe-2 border-end"></i>
</a></li>

                <li><a href="https://twitter.com/aeronpay"><i className="fab fa-twitter  fa-2x me-2 pe-2 border-end"></i></a></li>

                <li><a href="https://in.linkedin.com/company/aeronpay"><i className="fab fa-linkedin  fa-2x me-2 pe-2 border-end"></i>
</a></li>

                <li><a href="https://www.instagram.com/aeronpay"><i className="fab fa-instagram  fa-2x me-2 pe-2 border-end"></i>
</a></li>

                <li><a href="https://www.youtube.com/channel/UCmJUvfu-ImvkE58MtBhHJBQ"> 
</a></li>

            </ul>

           

        

    </div>

</div>

</div>



</div>

       

       
      </div>


      { !noWave && <img src="/assets/img/footer/footer_4_wave.png" alt="" className="wave" /> }
    </footer>
  )
}

export default Footer