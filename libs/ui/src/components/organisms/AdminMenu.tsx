import { Link } from '../molecules/CustomLink'

export interface IAdminMenuProps {}

export const AdminMenu = () => {
  return (
    <div className="flex flex-col gap-1">
      <Link href="/admin">Dashboard</Link>
      <Link href="/admin/manageAdmins">Manage admins</Link>
      <Link href="/admin/newCourse">New course</Link>
      <Link href="/admin/manageCourses">Manage courses</Link>
    </div>
  )
}
