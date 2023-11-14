import { CopyToClipboard } from '@foundation/ui/src/components/molecules/CopyToClipboard'
import { fetchGraphQLServer } from '@foundation/common/src/fetch/server'
import {
  AdminMeDocument,
  namedOperations,
} from '@foundation/network/src/generated'

import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { UserSidebar } from '@foundation/ui/src/components/organisms/UserSidebar'
import { AdminMenu } from '@foundation/ui/src/components/organisms/AdminMenu'
import { TellThem } from '@foundation/ui/src/components/molecules/TellThem'

import { authOptions, getAuth } from '@foundation/common/src/authOptions'

export default async function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await getAuth()

  if (!user?.user?.uid) {
    return <Link href="/api/auth/signin">Login</Link>
  }

  const { data, error } = await fetchGraphQLServer({
    document: AdminMeDocument,
    config: {
      next: {
        tags: [namedOperations.Query.adminMe],
      },
    },
  })

  console.log('data ', data)

  if (!data?.adminMe?.user) {
    return <TellThem uid={user.user.uid} role="admin" />
  }

  return (
    <div className="flex">
      <div className="hidden w-full max-w-xs sm:block">
        <AdminMenu />
      </div>

      <div className="flex-grow">
        <div className="sm:hidden">
          <UserSidebar>
            <AdminMenu />
          </UserSidebar>
        </div>
        <div className="bg-white min-h-[calc(100vh-8rem)] py-2 px-4">
          {children}
        </div>
      </div>
    </div>
  )
}
