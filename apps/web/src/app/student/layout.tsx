import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  AdminMeDocument,
  StudentMeDocument,
  namedOperations,
} from '@foundation/network/src/generated'

import Link from 'next/link'
import { UserSidebar } from '@foundation/ui/src/components/organisms/UserSidebar'
import { StudentMenu } from '@foundation/ui/src/components/organisms/StudentMenu'
import { TellThem } from '@foundation/ui/src/components/molecules/TellThem'

import { getAuth } from '@foundation/common/src/authOptions'

export default async function StudentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQLServer({
    document: StudentMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.adminMe],
      },
    },
  })

  if (!data?.studentMe?.uid) {
    return <TellThem uid={user.user.uid} role="admin" />
  }

  return (
    <div className="flex">
      <div className="hidden w-full max-w-xs sm:block">
        <StudentMenu />
      </div>

      <div className="flex-grow">
        <div className="sm:hidden">
          <UserSidebar>
            <StudentMenu />
          </UserSidebar>
        </div>
        <div className="bg-white min-h-[calc(100vh-8rem)] py-2 px-4">
          {children}
        </div>
      </div>
    </div>
  )
}
