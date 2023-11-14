import { createAdmin } from '@foundation/common/src/actions/createAdmin'
import { Label } from '../atoms/label'
import { Form } from '../atoms/form'
import { SimpleDialog } from './SimpleDialog'
import { Input } from '../atoms/input'

export interface ICreateReporterProps {}

export const CreateAdmin = () => {
  return (
    <SimpleDialog buttonText="+ New Admin">
      Create new admin
      <Form action={createAdmin} className="space-y-2">
        <Label title="UID">
          <Input placeholder="Enter the uid" name="adminUid" />
        </Label>
      </Form>
    </SimpleDialog>
  )
}
