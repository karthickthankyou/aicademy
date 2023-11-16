import { Link } from '../molecules/CustomLink'

export interface IStudentMenuProps {}

export const StudentMenu = () => {
  return (
    <div className="flex flex-col gap-1">
      <Link href="/student">Dashboard</Link>
      <Link href="/student/tests">Test results</Link>
    </div>
  )
}
