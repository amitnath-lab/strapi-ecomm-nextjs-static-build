import {HOMEPAGE_CMS_QUERY} from "../../config/queries/graphQL";
import traverse from "traverse"
async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.STRAPI_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getCMSPageData(page) {
  let data = await fetchAPI(HOMEPAGE_CMS_QUERY,
    {
      variables: {
        filters: {id : {eq : page}},
      }
    }
  )

  const strapiURL = process.env.STRAPI_URL;
  return traverse(data).map(function (x) {
    if (this.key === 'url') {
      this.update(strapiURL + x)
    }
  });
}