export const HOMEPAGE_CMS_QUERY = `# Write your query or mutation here
query ($filters: HomepageFashionFiltersInput) {
    homepageFashions(filters: $filters) {
      data {
        attributes {
          slug
          HelmetWrapper {
            favicon {
              data {
                attributes {
                  url
                }
              }
            }
          }
          HeaderOne {
            headerContactWelcome
            headerContactCallus
            logo {
              data {
                attributes {
                  url
                }
              }
            }
          }
          MasterFooter {
            subscribeH4
            subscribeParagraph
            footerLogoParagraph
            footerCol3Title
            footerCol3L1
            footerCol3L2
            footerCol3L3
            logo {
              data {
                attributes {
                  url
                }
              }
            }
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