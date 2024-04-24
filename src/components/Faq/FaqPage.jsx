
import faq from '@data/App/faq.json';
import faqRTL from '@data/App/faq-rtl.json';

const FAQ = ({ rtl }) => {
  const data = rtl ? faqRTL : faq;
  const midpoint = Math.ceil(data.length / 2);
  const leftSideData = data.slice(0, midpoint);
  const rightSideData = data.slice(midpoint);


  return (
    <section className="faq section-padding style-4 pt-50" data-scroll-index="7">
    <div className="container">
      <div className="section-head text-center style-4">
        <small className="title_small">{ rtl ? 'أسئلة شائعة' : 'Frequently Asked Question' }</small>
        <h2 className="mb-30">{ rtl ? 'بحاجة إلى' : 'Need A' } <span>{ rtl ? 'دعم ؟' : 'Support?' }</span> </h2>
      </div>
      <div className="content">
        <div className="faq style-3 style-4">
          <div className="accordion" id="accordionSt4">
            <div className="row gx-5">
              <div className="col-lg-6">
                {/* Render questions for left side */}
                {leftSideData.map((item, index) => (
                  <div className={`accordion-item ${index === leftSideData.length - 1 ? '' : 'border-bottom'} rounded-0`} key={index}>
                    <h2 className="accordion-header" id={`heading${item.id + 10}`}>
                      <button className="accordion-button collapsed rounded-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id + 10}`} aria-expanded="true" aria-controls={`collapse${item.id + 10}`}>
                        { item.question }
                      </button>
                    </h2>
                    <div id={`collapse${item.id + 10}`} className="accordion-collapse collapse rounded-0" aria-labelledby={`heading${item.id + 10}`} data-bs-parent="#accordionSt4">
                      <div className="accordion-body">
                        { rtl ? item.answer : renderAnswer(item.answer) }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-lg-6">
                {/* Render questions for right side */}
                {rightSideData.map((item, index) => (
                  <div className={`accordion-item ${index === rightSideData.length - 1 ? '' : 'border-bottom'} rounded-0`} key={index}>
                    <h2 className="accordion-header" id={`heading${item.id + 10}`}>
                      <button className="accordion-button collapsed rounded-0 py-4" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id + 10}`} aria-expanded="true" aria-controls={`collapse${item.id + 10}`}>
                        { item.question }
                      </button>
                    </h2>
                    <div id={`collapse${item.id + 10}`} className="accordion-collapse collapse rounded-0" aria-labelledby={`heading${item.id + 10}`} data-bs-parent="#accordionSt4">
                      <div className="accordion-body">
                        { rtl ? item.answer : renderAnswer(item.answer) }
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
const renderAnswer = (answer) => {
    if (Array.isArray(answer)) {
      return answer.map((part, idx) => <p key={idx}>{part}</p>);
    } else {
      return (
        <>
          {answer.part1 && <p>{answer.part1}</p>}
          {answer.part2 && <p>{answer.part2}</p>}
          {answer.part3 && <p>{answer.part3}</p>}
          {answer.part4 && <p>{answer.part4}</p>}
          {answer.part5 && <p>{answer.part5}</p>}
          {answer.part6 && <p>{answer.part6}</p>}
          {answer.part7 && <p>{answer.part7}</p>}
          {answer.part8 && <p>{answer.part8}</p>}
          {answer.part9 && <p>{answer.part9}</p>}
        </>
      );
    }
}
export default FAQ