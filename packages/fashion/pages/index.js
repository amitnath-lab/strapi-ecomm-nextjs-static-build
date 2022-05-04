import React from "react";

import Banner from "../components/fashion/Banner";
import CollectionBanner from "../components/fashion/Collection-Banner";
import Parallax from "../components/fashion/Parallax";
import TopCollection from "../components/common/Collections/Collection3";
import ServiceLayout from "../components/common/Service/service1";
import LogoBlock from "../components/common/logo-block";
import HeaderOne from "../components/headers/header-one";
import { Product4 } from "../services/script";
import Paragraph from "../components/common/Paragraph";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import {getCMSPageData} from "../helpers/apollo/cms";
import {getPageDataFromCommerce} from "../helpers/apollo/commerce";

const Fashion = ({cmsData, commerceData}) => {
  return (
    <>
      {cmsData.homepageFashions.data.map((homepage) => {
        return (
          <>
            <Helmet>
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" type="image/x-icon" href={homepage.attributes.HelmetWrapper.favicon.data.attributes.url}/>
            </Helmet>
            <HeaderOne logoName={homepage.attributes.HeaderOne.logo.data.attributes.url} topClass="top-header" />
            <Banner />
            <CollectionBanner />
            <Paragraph
              title="title1 section-t-space"
              inner="title-inner1"
              hrClass={false}
            />            
             <TopCollection
              productData={commerceData}
              noTitle="null"
              backImage={true}
              type="fashion"
              title="top collection"
              subtitle="special offer"
              productSlider={Product4}
              designClass="section-b-space p-t-0 ratio_asos"
              noSlider="false"
              cartClass="cart-info cart-wrap"
            /> 
            <Parallax />
            <ServiceLayout sectionClass="border-section small-section" />
            {/*<Blog type="fashion" title="title1" inner="title-inner1" /> 
            <Instagram type="fashion" />*/}
            <div className="section-b-space">
              <LogoBlock />
            </div>
            <MasterFooter
              data={homepage.attributes.MasterFooter}
              footerClass={`footer-light`}
              footerLayOut={"light-layout upper-footer"}
              footerSection={"small-section border-section border-top-0"}
              belowSection={"section-b-space light-layout"}
              newLatter={true}
            />
          </>
        );
      })};
    </>
  );
};

export async function getStaticProps({ preview = null }) {
  const cmsData = await getCMSPageData("1")
  const commerceData = await getPageDataFromCommerce()
  return {
    props: { cmsData, commerceData },
  }
}

export default Fashion;
