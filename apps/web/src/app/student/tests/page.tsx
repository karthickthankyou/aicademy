import { fetchGraphQL } from '@foundation/common/src/fetch'
import { fetchGraphQLClient } from '@foundation/common/src/fetch/client'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { MyTestsDocument } from '@foundation/network/src/generated'
import { StudentTests } from '@foundation/ui/src/components/templates/StudentTests'

export default async function StudentTestsPage() {
  const { data } = await fetchGraphQLServer({
    document: MyTestsDocument,
  })

  return <StudentTests tests={data?.myTests || []} />
}
