import {HOMEPAGE_COMMERCE_QUERY} from "../../config/queries/graphQL";

async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.VENDURE_URL}/shop-api`, {
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

export async function getPageDataFromCommerce(page) {
  return await fetchAPI(HOMEPAGE_COMMERCE_QUERY,
    {
      variables: {
        limit: 8
      }
    }
  )
}