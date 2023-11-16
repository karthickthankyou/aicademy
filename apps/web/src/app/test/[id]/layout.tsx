import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import { StudentMeDocument } from '@foundation/network/src/generated'

export default async function CoursePageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const student = await fetchGraphQLServer({ document: StudentMeDocument })
  if (!student) {
    return <div>Register as student.</div>
  }
  return <div>{children}</div>
}
