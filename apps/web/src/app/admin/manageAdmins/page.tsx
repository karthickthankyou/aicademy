import { fetchGraphQL } from '@foundation/common/src/fetch'
import { UserCard } from '@foundation/ui/src/components/organisms/UserCard'
import { CreateAdmin } from '@foundation/ui/src/components/organisms/CreateAdmin'
import { OpinionatedGrid } from '@foundation/ui/src/components/molecules/OpinionatedGrid'
import { AdminsDocument } from '@foundation/network/src/generated'

export default async function ManageAdmins() {
  const { data } = await fetchGraphQL({ document: AdminsDocument })

  return (
    <div>
      <div className="flex justify-between gap-2">
        <div>Manage Admins</div>
        <CreateAdmin />
      </div>
      <OpinionatedGrid>
        {data?.admins.map((admin) => (
          <UserCard key={admin.user.uid} user={admin.user} />
        ))}
      </OpinionatedGrid>
    </div>
  )
}
