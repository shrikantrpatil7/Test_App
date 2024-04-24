import teamMembers from '@data/Saas/team.json';
import teamMembersRTL from '@data/Saas/team-rtl.json';

const Team = ({ rtl }) => {
  const teamData = rtl ? teamMembersRTL : teamMembers;

  return (
    <><section className="team section-padding style-6">
      <div className="content">
        <div className="container">
          <div className="section-head text-center mb-70 style-5">
            <h2 className="mb-20">{rtl ? 'افضل' : 'Our'} <span>{rtl ? 'المديرين' : 'Leaders'}</span> </h2>
            <p>{rtl ? 'المهنية والودية شعارنا. تعرف على قادتنا' : 'Profressional & Friendly is our slogan. Meet our leaders'}</p>
          </div>
          <div className="row">
            {teamData.map((member, index) => (
              <div className="col-lg-3 col-sm-6" key={index}>
                <div className={`team-card ${index !== teamMembers.length - 1 ? 'mb-30 mb-lg-0' : ''} style-6`}>
                  <div className="img img-cover">
                    <img src={member.picture} alt="" />
                    <div className="social-icons">
                      <a href="#" className="me-1">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#" className="me-1">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#" className="me-1">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <div className="info">
                    <a className="d-block" href="#"><h6>{member.name}</h6></a>
                    <small>{member.position}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section><div className="img-content pt-70 pb-70 border-bottom brd-gray overflow-hidden">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="img text-center">
              <img src="/assets/img/single_project/2mobs.png" alt="" className="main-img" />
              <img src="/assets/img/single_project/bubbls.png" alt="" className="bubbls" />
              <img src="/assets/img/single_project/circle.png" alt="" className="circle" />
            </div>
            <div className="info mt-30">
              <h5 className="lh-4">
                {rtl ? 'حافظ على تركيزك وإنتاجيتك مع مساحة ملاحظات نظيفة وخالية من الفوضى. الطرق المرنة لتنظيم ملاحظاتك: علامات التجزئة ، دفاتر الملاحظات المتداخلة ، تثبيت الملاحظات في أعلى قائمة الملاحظات ، إلخ.' : 'Stay focused and productive with a clean and clutter-free note space. The flexible ways to organize your notes: hashtags, nested notebooks, pinning notes to the top of the note list, etc'}
              </h5>
              <a href="#" className={`color-blue${style} mt-60`}>https://example.domain</a>
            </div>
          </div>
        </div>
      </div></>

  )
}

export default Team