export const HOMEPAGE_CMS_QUERY = `query ($filters: HomepageFashionFiltersInput) {
    homepageFashions(filters: $filters) {
      data {
        attributes {
          slug
          logo
          HelmetWrapper {
            favicon
          }
          ModalComponent {
            offerBanner
            offerContentH2
            subscribeBtnText
          }
          HeaderOne {
            headerContactWelcome
            headerContactCallus
          }
          MasterFooter {
            subscribeH4
            subscribeParagraph
            footerLogoParagraph
            footerCol3Title
            footerCol3L1
            footerCol3L2
            footerCol3L3
          }
        }
      }
    }
  }`;

  export const HOMEPAGE_COMMERCE_QUERY = `query products($limit: Int){
    products(options :{take: $limit} ) {
      items {
        id
        name
        description
        facetValues {
          code
          facet {
            code
          }
        }
        variants {
          id
          sku
          price
          stockLevel
          featuredAsset {
            source
          }
        }
        featuredAsset {
          source
        }
      }
    }
  }`;