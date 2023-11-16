import { z } from 'zod'

export const formSchemaRegister = z.object({
  name: z.string(),
  image: z.string().optional(),

  email: z.string().email(),
  password: z.string().min(6),
})

export const formSchemaSignin = formSchemaRegister.pick({
  email: true,
  password: true,
})

export const formSchemaQuestion = z.object({
  question: z.string(),
  answer: z.string(),
  explanation: z.string().optional(),
})

export const formSchemaCreateChapter = z.object({
  title: z.string(),
  content: z.string(),
  questions: z.array(formSchemaQuestion),
})

export const formSchemaCreateCourse = z.object({
  title: z.string(),
  description: z.string().optional(),
  published: z.boolean(),
  chapters: z.array(formSchemaCreateChapter),
})

export const formSchemaTest = z.object({
  answers: z.array(
    z.object({
      id: z.number(),
      question: z.string(),
      userAnswer: z.string().optional().nullable(),
    }),
  ),
})
