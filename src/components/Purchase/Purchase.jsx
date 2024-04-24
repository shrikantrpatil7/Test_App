import aboutData from '@data/Saas/about.json';
import aboutDataRTL from '@data/Saas/about-rtl.json';
import PurchaseCont1 from './PurchaseCont1';
import PurchaseCont2 from './PurchaseCont2';
import PurchaseCont3 from './PurchaseCont3';




const Purchase = ({ noPaddingTop, rtl }) => {
  const data = rtl ? aboutDataRTL : aboutData;

  return (
    <section className={`about ${noPaddingTop ? 'pt-0 pb-150':'section-padding'} style-5`} data-scroll-index="1">
      <PurchaseCont1 links={data.lineLinks} rtl={rtl} />
      <PurchaseCont2 links={data.lineLinks} rtl={rtl} />
      <PurchaseCont3 links={data.lineLinks} rtl={rtl} />
     
    </section>
  )
}

export default Purchase