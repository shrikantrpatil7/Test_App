import Link from 'next/link';


const Navbar = ({ navbarRef }) => {
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
    <nav className="navbar navbar-expand-lg navbar-light style-4" ref={navbarRef}>
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/assets/img/logo-dark.png" alt="" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Homes
              </a>
              
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1"  style={{ columnCount: 2 }}>
             
               
    <li>
        <Link href="/">
            <a className="dropdown-item extra">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-eye"></i> 
                </span>
                Landing Preview
                <span style={{ display: 'block', color: 'lightgray', fontSize: '12px', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
                
            </a>
            
        </Link>
    </li>
    <li>
        <Link href="/home-it-solutions2">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-laptop-code"></i> 
                </span>
                Creative It Solutions
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-data-analysis">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-chart-line"></i> 
                </span>
                Data Analysis
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-app-landing">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-mobile-alt"></i> 
                </span>
                App Landing
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-saas-technology">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-cloud"></i> 
                </span>
                Saas Technology
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-marketing-startup">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-bullhorn"></i> 
                </span>
                Marketing Startup
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-it-solutions">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-tools"></i> 
                </span>
                It Solution
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-software-company">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-code"></i> 
                </span>
                Software Company
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-digital-agency">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-users"></i> 
                </span>
                Digital Agency
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
               
            </span>
            </a>
        </Link>
    </li>
    <li>
        <Link href="/home-modern-shop">
            <a className="dropdown-item">
                <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
                    <i className="fas fa-shopping-cart"></i> 
                </span>
                Modern Shop
                <span style={{ display: 'block', color: 'lightgray', fontSize: '0.8rem', marginLeft: '20px' }}>
                Payments on your Website & App
            </span>
            </a>
        </Link>
    </li>
</ul>

            </li>


            <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                pages
                <small className="hot alert-danger text-danger">hot</small>
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1"  style={{ columnCount: 2 }}>
             

              <li>
    <Link href="/page-about-app">
      <a className="dropdown-item">
      <span style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}>
        <i className="fa fa-info-circle"></i></span>
        About


      </a>
    </Link>
  </li>
 
  <li>
    <Link href="/page-product-app">
      <a className="dropdown-item">
        <i className="fa fa-shopping-bag" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Product
      </a>
    </Link>
  </li>
  <li>
    <Link href="/page-services-app">
      <a className="dropdown-item">
        <i className="fa fa-cogs" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Services
      </a>
    </Link>
  </li>
  <li>
    <Link href="/page-shop-app">
      <a className="dropdown-item">
        <i className="fa fa-shopping-cart" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Shop
      </a>
    </Link>
  </li>
  <li>
    <Link href="/page-single-project-app">
      <a className="dropdown-item">
        <i className="fa fa-folder-open" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Single Project
      </a>
    </Link>
  </li>
  <li>
    <Link href="/page-single-post-app">
      <a className="dropdown-item">
        <i className="fa fa-sticky-note" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Single Post
      </a>
    </Link>

  </li>
  <li>
    <Link href="/utillies">
      <a className="dropdown-item">
        <i className="fa fa-wrench" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Utillity Service 
      </a>
    </Link>
    
  </li>
  <li>
    <Link href="/financial">
      <a className="dropdown-item">
        <i className="fa fa-dollar-sign" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Financial Service
      </a>
    </Link>
    
  </li>
  <li>
    <Link href="/page-single-post-app">
      <a className="dropdown-item">
        <i className="fa fa-tag" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> E-Commerce QR Code 
      </a>
    </Link>
    
  </li>
  <li>
    <Link href="/page-single-post-app">
      <a className="dropdown-item">
        <i className="fa fa-tshirt" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Clothing  QR Code 
      </a>
    </Link>
    
  </li>

  <li>
    <Link href="/page-single-post-app">
      <a className="dropdown-item">
        <i className="fa fa-shopping-basket" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Grocery QR Code 
      </a>
    </Link>
    
  </li>
  <li>
    <Link href="/page-single-post-app">
      <a className="dropdown-item">
        <i className="fa fa-graduation-cap" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Education Fee
      </a>
    </Link>
    
  </li>

  <li>
    <Link href="/purchase">
      <a className="dropdown-item">
        <i className="fa fa-credit-card" style={{ color: 'var(--color-blue4)', marginRight: '5px' }}></i> Purchase Service 
      </a>
    </Link>
    
  </li>
  
              </ul>
            </li>

            <li className="nav-item">
              <Link href="/page-portfolio-app">
                <a className="nav-link">
                  portfolio
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page-blog-app">
                <a className="nav-link">
                  blog
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/page-contact-app">
                <a className="nav-link">
                  <img src="/assets/img/icons/nav_icon/price.png" alt="" className="icon-15 me-2" />
                  contact
                </a>
              </Link>
            </li>
          </ul>
          <div className="nav-side">
            <div className="d-flex align-items-center">
              <a href="#" className="search-icon me-4">
                <i className="bi bi-person"></i>
              </a>
             

              <li className="nav-item dropdown" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} style={{ listStyle: 'none' }}>
    <a className="btn rounded-pill brd-gray hover-blue4 sm-butn fw-bold nav-link active dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ marginLeft: '10px', color: 'black', width: '10rem',height :'8vh' }}>
        Log In
    </a>
    <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
    <li><Link href="/"><a className="dropdown-item"><i className="fas fa-store" style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}></i> Retailer Login</a></Link></li>
    <li><Link href="/home-it-solutions2"><a className="dropdown-item"><i className="fas fa-tools" style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}></i> Partner Login</a></Link></li>
    <li><Link href="/home-data-analysis"><a className="dropdown-item"><i className="fas fa-users" style={{ color: 'var(--color-blue4)', marginRight: '0.5rem' }}></i> Customer Login</a></Link></li>
</ul>

</li>


           
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar