'use server'

import {
  CreateCourseDocument,
  namedOperations,
} from '@foundation/network/src/generated'
import { FormTypeCreateCourse } from '@foundation/forms/src/createCourse'
import { getAuth } from '../authOptions'
import { fetchGraphQLServer } from '../fetch/server'
import { revalidateTag } from 'next/cache'
import { FormState } from '@foundation/util/types'

export const createCourse = async (
  formData: FormTypeCreateCourse,
): Promise<FormState> => {
  const user = await getAuth()
  const uid = user?.user?.uid
  if (!uid) {
    return { error: 'You are not logged in.' }
  }

  try {
    const data = await fetchGraphQLServer({
      document: CreateCourseDocument,
      variables: {
        createCourseInput: { ...formData, adminUid: uid },
      },
    })

    if (data.data) {
      revalidateTag(namedOperations.Query.courses)
      return { data: 'Course created successfully.' }
    }
    if (data.error) {
      return { error: data.error.toString() }
    }
  } catch (error) {}
  return {}
}
