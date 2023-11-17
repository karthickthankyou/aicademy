'use client'
import { useImageUpload } from '@foundation/util/imageUpload'
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
import { Title3 } from '../atoms/typography'
import { ImagePreview } from '../molecules/ImagePreview'

export interface INewCourseProps {}

export const NewCourse = () => {
  return (
    <FormProviderCreateCourse>
      <NewCourseContent />
    </FormProviderCreateCourse>
  )
}

export const NewCourseContent = () => {
  const { register, handleSubmit, reset, control, watch, resetField } =
    useFormContext<FormTypeCreateCourse>()
  const [open, setOpen] = useState(false)
  const [message, setMesage] = useState('')

  const [, uploadImages] = useImageUpload()
  const { image } = watch()

  return (
    <div className="overflow-y-auto">
      <form
        onSubmit={handleSubmit(async (formData) => {
          const images = await uploadImages(image)

          const { data, error } = await createCourse({
            ...formData,
            image: images[0],
          })
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
        <h1 className="mb-2 text-lg font-semibold">New course</h1>
        <Label title="Title">
          <Input {...register('title')} placeholder="Title" />
        </Label>
        <Label title="Description">
          <TextArea {...register('description')} placeholder="Description..." />
        </Label>
        <ImagePreview src={image || ''} clearImage={() => resetField('image')}>
          <Controller
            control={control}
            name={`image`}
            render={({ field }) => (
              <Input
                type="file"
                accept="image/*"
                multiple={false}
                onChange={(e) => field.onChange(e?.target?.files)}
              />
            )}
          />
        </ImagePreview>
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
        <Title3>Chapters</Title3>
        <div className="px-4">
          <AddChapter />
        </div>
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
              {chapters?.[chapterIndex]?.title || (
                <span className="italic text-gray-500">No Title</span>
              )}
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
                  remove chapter
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
                    placeholder="Content"
                    {...register(`chapters.${chapterIndex}.content`)}
                  />
                </Label>
              </div>
              <div className="px-4">
                <AddQuestion chapterIndex={chapterIndex} />
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
              questions: [],
            })
          }
        >
          <Plus className="w-4 h-4" /> Add chapter
        </Button>
      </div>
    </div>
  )
}

export const AddQuestion = ({ chapterIndex }: { chapterIndex: number }) => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTypeCreateCourse>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: `chapters.${chapterIndex}.questions`,
  })
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <div className="p-4 bg-gray-100 rounded">
      {fields.map((item, questionIndex) => (
        <Accordion type="single" key={item.id} collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{item.question || '-'}</AccordionTrigger>
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
                  remove question
                </Button>
              </div>

              <div
                className={`flex flex-col ${
                  hovered === item.id ? 'bg-strip' : null
                }`}
              >
                <Label
                  title="Question"
                  error={
                    errors.chapters?.[chapterIndex]?.questions?.[questionIndex]
                      ?.question?.message
                  }
                >
                  <Input
                    placeholder="Question"
                    {...register(
                      `chapters.${chapterIndex}.questions.${questionIndex}.question`,
                    )}
                  />
                </Label>
                <Label
                  title="Answer"
                  error={
                    errors.chapters?.[chapterIndex]?.questions?.[questionIndex]
                      ?.answer?.message
                  }
                >
                  <TextArea
                    placeholder="Answer"
                    {...register(
                      `chapters.${chapterIndex}.questions.${questionIndex}.answer`,
                    )}
                  />
                </Label>
                <Label
                  title="Explanation"
                  error={
                    errors.chapters?.[chapterIndex]?.questions?.[questionIndex]
                      ?.explanation?.message
                  }
                >
                  <TextArea
                    placeholder="Explanation"
                    {...register(
                      `chapters.${chapterIndex}.questions.${questionIndex}.explanation`,
                    )}
                  />
                </Label>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
      <div>
        <Button
          className="flex items-center justify-center w-full py-2 text-xs"
          variant={'outline'}
          onClick={() =>
            append({
              answer: '',
              question: '',
              explanation: '',
            })
          }
        >
          <Plus className="w-4 h-4" /> Add question
        </Button>
      </div>
    </div>
  )
}
