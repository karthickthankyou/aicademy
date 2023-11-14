'use client'

import { Controller } from '@foundation/forms/src'

import { TextArea } from '../atoms/textArea'
import { Button } from '../atoms/button'

import { createCourse } from '@foundation/common/src/actions/createCourse'

import { useState } from 'react'
import { useFormCreateCourse } from '@foundation/forms/src/createCourse'
import { DialogMessage } from '../organisms/DialogMessage'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'
import { Switch } from '../atoms/switch'

export interface INewCourseProps {}

export const NewCourse = () => {
  const { register, handleSubmit, reset, control } = useFormCreateCourse()
  const [open, setOpen] = useState(false)
  const [message, setMesage] = useState('')

  return (
    <div className="overflow-y-auto">
      <form
        onSubmit={handleSubmit(async (formData) => {
          const { data, error } = await createCourse(formData)
          setOpen(true)
          if (data) {
            setMesage(` ${data} 🎉`)
            reset()
          }
          if (error) {
            setMesage(error)
          }
          console.log('data', data)
        })}
        className="flex flex-col"
      >
        <DialogMessage open={open} setOpen={setOpen}>
          {message}
        </DialogMessage>
        <h1 className="mb-2 text-lg font-semibold">Post new job</h1>
        <Label title="Title">
          <Input {...register('title')} placeholder="Title" />
        </Label>
        <Label title="Body">
          <TextArea {...register('description')} placeholder="Body" />
        </Label>

        <Label title="Published">
          <Controller
            control={control}
            name="published"
            render={({ field }) => (
              <Switch
                checked={field.value}
                onCheckedChange={field.onChange}
                placeholder="Published"
              />
            )}
          />
        </Label>

        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}
