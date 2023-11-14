'use client'

import {
  Controller,
  useFieldArray,
  useFormContext,
  useWatch,
} from '@foundation/forms/src'
import { Plus } from 'lucide-react'

import { TextArea } from '../atoms/textArea'
import { Button } from '../atoms/button'

import { createCourse } from '@foundation/common/src/actions/createCourse'

import { useState } from 'react'
import {
  FormProviderCreateCourse,
  FormTypeCreateCourse,
} from '@foundation/forms/src/createCourse'
import { DialogMessage } from '../organisms/DialogMessage'
import { Label } from '../atoms/label'
import { Input } from '../atoms/input'
import { Switch } from '../atoms/switch'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../atoms/accordion'

export interface INewCourseProps {}

export const NewCourse = () => {
  return (
    <FormProviderCreateCourse>
      <NewCourseContent />
    </FormProviderCreateCourse>
  )
}

export const NewCourseContent = () => {
  const { register, handleSubmit, reset, control } =
    useFormContext<FormTypeCreateCourse>()
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
        <AddChapter />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  )
}

export const AddChapter = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTypeCreateCourse>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: `chapters`,
  })

  const { chapters } = useWatch<FormTypeCreateCourse>()
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div>
      {fields.map((item, chapterIndex) => (
        <Accordion type="single" key={item.id} collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {chapters?.[chapterIndex]?.title || '[Empty]'}
            </AccordionTrigger>
            <AccordionContent>
              <div className={`flex justify-end my-2`}>
                <Button
                  variant={'ghost'}
                  className="text-xs text-gray-600 underline underline-offset-2"
                  onClick={() => {
                    remove(chapterIndex)
                  }}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered(null)}
                >
                  remove slot type
                </Button>
              </div>

              <div
                className={`flex flex-col ${
                  hovered === item.id ? 'bg-strip' : null
                }`}
              >
                <Label
                  title="Title"
                  error={errors.chapters?.[chapterIndex]?.title?.toString()}
                >
                  <Input
                    placeholder="Title"
                    {...register(`chapters.${chapterIndex}.title`)}
                  />
                </Label>
                <Label
                  title="Content"
                  error={errors.chapters?.[chapterIndex]?.content?.message}
                >
                  <TextArea
                    rows={16}
                    placeholder="Content"
                    {...register(`chapters.${chapterIndex}.content`)}
                  />
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <div>
        <Button
          className="flex items-center justify-center w-full py-2 text-xs border border-dashed"
          variant={'outline'}
          onClick={() =>
            append({
              content: '',
              title: '',
            })
          }
        >
          <Plus className="w-4 h-4" /> Add slots
        </Button>
      </div>
    </div>
  )
}
