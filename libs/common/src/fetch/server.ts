import { cookies } from 'next/headers'
import { FetchResult, GraphqlRequestOptions, fetchGraphQL } from '.'

export async function fetchGraphQLServer<TData, V>({
  document,
  variables,
  apiSecret,
  config,
}: Omit<GraphqlRequestOptions<TData, V>, 'token'>): Promise<
  FetchResult<TData>
> {
  const getCookies = cookies()
  const token = getCookies.get('next-auth.session-token')?.value || ''
  console.log('toklen ', token)

  return fetchGraphQL({ document, apiSecret, config, variables, token })
}
