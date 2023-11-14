import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any }
}

export type Admin = {
  __typename?: 'Admin'
  uid: Scalars['String']['output']
  user: User
}

export type AdminOrderByWithRelationInput = {
  courses?: InputMaybe<CourseOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type AdminRelationFilter = {
  is?: InputMaybe<AdminWhereInput>
  isNot?: InputMaybe<AdminWhereInput>
}

export enum AdminScalarFieldEnum {
  Uid = 'uid',
}

export type AdminWhereInput = {
  AND?: InputMaybe<Array<AdminWhereInput>>
  NOT?: InputMaybe<Array<AdminWhereInput>>
  OR?: InputMaybe<Array<AdminWhereInput>>
  courses?: InputMaybe<CourseListRelationFilter>
  uid?: InputMaybe<StringFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type AdminWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type Answer = {
  __typename?: 'Answer'
  answer: Scalars['String']['output']
}

export type AuthProvider = {
  __typename?: 'AuthProvider'
  type: AuthProviderType
  uid: Scalars['String']['output']
}

export enum AuthProviderType {
  Credentials = 'CREDENTIALS',
  Google = 'GOOGLE',
}

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  not?: InputMaybe<Scalars['Boolean']['input']>
}

export type Chapter = {
  __typename?: 'Chapter'
  content: Scalars['String']['output']
  courseId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type ChapterListRelationFilter = {
  every?: InputMaybe<ChapterWhereInput>
  none?: InputMaybe<ChapterWhereInput>
  some?: InputMaybe<ChapterWhereInput>
}

export type ChapterOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type ChapterOrderByWithRelationInput = {
  content?: InputMaybe<SortOrder>
  course?: InputMaybe<CourseOrderByWithRelationInput>
  courseId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export enum ChapterScalarFieldEnum {
  Content = 'content',
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type ChapterWhereInput = {
  AND?: InputMaybe<Array<ChapterWhereInput>>
  NOT?: InputMaybe<Array<ChapterWhereInput>>
  OR?: InputMaybe<Array<ChapterWhereInput>>
  content?: InputMaybe<StringFilter>
  course?: InputMaybe<CourseRelationFilter>
  courseId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type ChapterWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type Course = {
  __typename?: 'Course'
  adminUid: Scalars['String']['output']
  chapters: Array<Chapter>
  chaptersLength: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  published?: Maybe<Scalars['Boolean']['output']>
  title: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type CourseListRelationFilter = {
  every?: InputMaybe<CourseWhereInput>
  none?: InputMaybe<CourseWhereInput>
  some?: InputMaybe<CourseWhereInput>
}

export type CourseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type CourseOrderByWithRelationInput = {
  admin?: InputMaybe<AdminOrderByWithRelationInput>
  adminUid?: InputMaybe<SortOrder>
  chapters?: InputMaybe<ChapterOrderByRelationAggregateInput>
  createdAt?: InputMaybe<SortOrder>
  description?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  published?: InputMaybe<SortOrder>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type CourseRelationFilter = {
  is?: InputMaybe<CourseWhereInput>
  isNot?: InputMaybe<CourseWhereInput>
}

export enum CourseScalarFieldEnum {
  AdminUid = 'adminUid',
  CreatedAt = 'createdAt',
  Description = 'description',
  Id = 'id',
  Published = 'published',
  Title = 'title',
  UpdatedAt = 'updatedAt',
}

export type CourseWhereInput = {
  AND?: InputMaybe<Array<CourseWhereInput>>
  NOT?: InputMaybe<Array<CourseWhereInput>>
  OR?: InputMaybe<Array<CourseWhereInput>>
  admin?: InputMaybe<AdminRelationFilter>
  adminUid?: InputMaybe<StringFilter>
  chapters?: InputMaybe<ChapterListRelationFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  description?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  published?: InputMaybe<BoolFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CourseWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type CreateAdminInput = {
  uid: Scalars['String']['input']
}

export type CreateChapterInput = {
  content: Scalars['String']['input']
  courseId: Scalars['Int']['input']
  title: Scalars['String']['input']
}

export type CreateChapterInputWithoutCourseId = {
  content: Scalars['String']['input']
  title: Scalars['String']['input']
}

export type CreateCourseInput = {
  adminUid: Scalars['String']['input']
  chapters: Array<CreateChapterInputWithoutCourseId>
  description?: InputMaybe<Scalars['String']['input']>
  published?: InputMaybe<Scalars['Boolean']['input']>
  title: Scalars['String']['input']
}

export type CreateUserWithCredentialsInput = {
  email: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  password: Scalars['String']['input']
}

export type CreateUserWithProviderInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name: Scalars['String']['input']
  type: AuthProviderType
  uid: Scalars['String']['input']
}

export type Credential = {
  __typename?: 'Credential'
  createdAt: Scalars['DateTime']['output']
  email: Scalars['String']['output']
  passwordHash: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
}

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>
  gt?: InputMaybe<Scalars['Int']['input']>
  gte?: InputMaybe<Scalars['Int']['input']>
  lt?: InputMaybe<Scalars['Int']['input']>
  lte?: InputMaybe<Scalars['Int']['input']>
}

export type Mark = {
  __typename?: 'Mark'
  mark: Scalars['String']['output']
}

export type Mutation = {
  __typename?: 'Mutation'
  createAdmin: Admin
  createChapter: Chapter
  createCourse: Course
  createUserWithCredentials: User
  createUserWithProvider: User
  removeAdmin: Admin
  removeChapter: Chapter
  removeCourse: Course
  removeUser: User
  updateAdmin: Admin
  updateChapter: Chapter
  updateCourse: Course
  updateUser: User
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateChapterArgs = {
  createChapterInput: CreateChapterInput
}

export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput
}

export type MutationCreateUserWithCredentialsArgs = {
  createUserWithCredentialsInput: CreateUserWithCredentialsInput
}

export type MutationCreateUserWithProviderArgs = {
  createUserWithProviderInput: CreateUserWithProviderInput
}

export type MutationRemoveAdminArgs = {
  where: AdminWhereUniqueInput
}

export type MutationRemoveChapterArgs = {
  where: ChapterWhereUniqueInput
}

export type MutationRemoveCourseArgs = {
  where: CourseWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateChapterArgs = {
  updateChapterInput: UpdateChapterInput
}

export type MutationUpdateCourseArgs = {
  updateCourseInput: UpdateCourseInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  admin: Admin
  adminMe: Admin
  admins: Array<Admin>
  chapter: Chapter
  chapters: Array<Chapter>
  course: Course
  courses: Array<Course>
  doubt: Answer
  getAuthProvider?: Maybe<AuthProvider>
  getCredentials?: Maybe<User>
  takeTest: Question
  user: User
  users: Array<User>
  verifyAnswer: Mark
}

export type QueryAdminArgs = {
  where: AdminWhereUniqueInput
}

export type QueryAdminsArgs = {
  cursor?: InputMaybe<AdminWhereUniqueInput>
  distinct?: InputMaybe<Array<AdminScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AdminOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AdminWhereInput>
}

export type QueryChapterArgs = {
  where: ChapterWhereUniqueInput
}

export type QueryChaptersArgs = {
  cursor?: InputMaybe<ChapterWhereUniqueInput>
  distinct?: InputMaybe<Array<ChapterScalarFieldEnum>>
  orderBy?: InputMaybe<Array<ChapterOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ChapterWhereInput>
}

export type QueryCourseArgs = {
  where: CourseWhereUniqueInput
}

export type QueryCoursesArgs = {
  cursor?: InputMaybe<CourseWhereUniqueInput>
  distinct?: InputMaybe<Array<CourseScalarFieldEnum>>
  orderBy?: InputMaybe<Array<CourseOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<CourseWhereInput>
}

export type QueryDoubtArgs = {
  courseInfo: Scalars['String']['input']
  question: Scalars['String']['input']
}

export type QueryGetAuthProviderArgs = {
  uid: Scalars['String']['input']
}

export type QueryGetCredentialsArgs = {
  email: Scalars['String']['input']
}

export type QueryTakeTestArgs = {
  courseInfo: Scalars['String']['input']
}

export type QueryUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserWhereInput>
}

export type QueryVerifyAnswerArgs = {
  answer: Scalars['String']['input']
  courseInfo: Scalars['String']['input']
  question: Scalars['String']['input']
}

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive',
}

export type Question = {
  __typename?: 'Question'
  question: Scalars['String']['output']
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc',
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>
  endsWith?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  gt?: InputMaybe<Scalars['String']['input']>
  gte?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<Scalars['String']['input']>>
  lt?: InputMaybe<Scalars['String']['input']>
  lte?: InputMaybe<Scalars['String']['input']>
  mode?: InputMaybe<QueryMode>
  not?: InputMaybe<Scalars['String']['input']>
  notIn?: InputMaybe<Array<Scalars['String']['input']>>
  startsWith?: InputMaybe<Scalars['String']['input']>
}

export type UpdateAdminInput = {
  uid: Scalars['String']['input']
}

export type UpdateChapterInput = {
  content?: InputMaybe<Scalars['String']['input']>
  courseId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateCourseInput = {
  adminUid?: InputMaybe<Scalars['String']['input']>
  chapters?: InputMaybe<Array<CreateChapterInputWithoutCourseId>>
  description?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  published?: InputMaybe<Scalars['Boolean']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type UpdateUserInput = {
  image?: InputMaybe<Scalars['String']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  uid: Scalars['String']['input']
}

export type User = {
  __typename?: 'User'
  createdAt: Scalars['DateTime']['output']
  credentials: Credential
  image?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  uid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type UserOrderByWithRelationInput = {
  Admin?: InputMaybe<AdminOrderByWithRelationInput>
  createdAt?: InputMaybe<SortOrder>
  image?: InputMaybe<SortOrder>
  name?: InputMaybe<SortOrder>
  uid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>
  isNot?: InputMaybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Image = 'image',
  Name = 'name',
  Uid = 'uid',
  UpdatedAt = 'updatedAt',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>
  Admin?: InputMaybe<AdminRelationFilter>
  NOT?: InputMaybe<Array<UserWhereInput>>
  OR?: InputMaybe<Array<UserWhereInput>>
  createdAt?: InputMaybe<DateTimeFilter>
  image?: InputMaybe<StringFilter>
  name?: InputMaybe<StringFilter>
  uid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type UserWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type CreateUserWithCredentialsMutationVariables = Exact<{
  createUserWithCredentialsInput: CreateUserWithCredentialsInput
}>

export type CreateUserWithCredentialsMutation = {
  __typename?: 'Mutation'
  createUserWithCredentials: { __typename?: 'User'; uid: string }
}

export type CreateUserWithProviderMutationVariables = Exact<{
  createUserWithProviderInput: CreateUserWithProviderInput
}>

export type CreateUserWithProviderMutation = {
  __typename?: 'Mutation'
  createUserWithProvider: { __typename?: 'User'; uid: string }
}

export type GetCredentialsQueryVariables = Exact<{
  email: Scalars['String']['input']
}>

export type GetCredentialsQuery = {
  __typename?: 'Query'
  getCredentials?: {
    __typename?: 'User'
    uid: string
    name: string
    image?: string | null
    credentials: {
      __typename?: 'Credential'
      email: string
      passwordHash: string
    }
  } | null
}

export type GetAuthProviderQueryVariables = Exact<{
  uid: Scalars['String']['input']
}>

export type GetAuthProviderQuery = {
  __typename?: 'Query'
  getAuthProvider?: {
    __typename?: 'AuthProvider'
    uid: string
    type: AuthProviderType
  } | null
}

export type UserDetailsFragment = {
  __typename?: 'User'
  image?: string | null
  name: string
  uid: string
}

export type AdminMeQueryVariables = Exact<{ [key: string]: never }>

export type AdminMeQuery = {
  __typename?: 'Query'
  adminMe: {
    __typename?: 'Admin'
    user: {
      __typename?: 'User'
      image?: string | null
      name: string
      uid: string
    }
  }
}

export type CoursesQueryVariables = Exact<{
  where?: InputMaybe<CourseWhereInput>
  orderBy?: InputMaybe<
    Array<CourseOrderByWithRelationInput> | CourseOrderByWithRelationInput
  >
  take?: InputMaybe<Scalars['Int']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}>

export type CoursesQuery = {
  __typename?: 'Query'
  courses: Array<{
    __typename?: 'Course'
    id: number
    title: string
    chaptersLength: number
    createdAt: any
    published?: boolean | null
  }>
}

export type AdminsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<AdminOrderByWithRelationInput> | AdminOrderByWithRelationInput
  >
  where?: InputMaybe<AdminWhereInput>
}>

export type AdminsQuery = {
  __typename?: 'Query'
  admins: Array<{
    __typename?: 'Admin'
    uid: string
    user: {
      __typename?: 'User'
      name: string
      image?: string | null
      uid: string
    }
  }>
}

export type CreateAdminMutationVariables = Exact<{
  createAdminInput: CreateAdminInput
}>

export type CreateAdminMutation = {
  __typename?: 'Mutation'
  createAdmin: { __typename?: 'Admin'; uid: string }
}

export type UserQueryVariables = Exact<{
  where?: InputMaybe<UserWhereUniqueInput>
}>

export type UserQuery = {
  __typename?: 'Query'
  user: {
    __typename?: 'User'
    name: string
    image?: string | null
    updatedAt: any
    createdAt: any
    uid: string
  }
}

export type CreateCourseMutationVariables = Exact<{
  createCourseInput: CreateCourseInput
}>

export type CreateCourseMutation = {
  __typename?: 'Mutation'
  createCourse: { __typename?: 'Course'; id: number }
}

export type CourseQueryVariables = Exact<{
  where: CourseWhereUniqueInput
}>

export type CourseQuery = {
  __typename?: 'Query'
  course: {
    __typename?: 'Course'
    description?: string | null
    id: number
    title: string
    createdAt: any
    chaptersLength: number
    chapters: Array<{
      __typename?: 'Chapter'
      id: number
      title: string
      content: string
    }>
  }
}

export type DoubtQueryVariables = Exact<{
  question: Scalars['String']['input']
  courseInfo: Scalars['String']['input']
}>

export type DoubtQuery = {
  __typename?: 'Query'
  doubt: { __typename?: 'Answer'; answer: string }
}

export type TakeTestQueryVariables = Exact<{
  courseInfo: Scalars['String']['input']
}>

export type TakeTestQuery = {
  __typename?: 'Query'
  takeTest: { __typename?: 'Question'; question: string }
}

export type VerifyAnswerQueryVariables = Exact<{
  courseInfo: Scalars['String']['input']
  question: Scalars['String']['input']
  answer: Scalars['String']['input']
}>

export type VerifyAnswerQuery = {
  __typename?: 'Query'
  verifyAnswer: { __typename?: 'Mark'; mark: string }
}

export const namedOperations = {
  Query: {
    getCredentials: 'getCredentials',
    GetAuthProvider: 'GetAuthProvider',
    adminMe: 'adminMe',
    courses: 'courses',
    admins: 'admins',
    User: 'User',
    course: 'course',
    doubt: 'doubt',
    takeTest: 'takeTest',
    verifyAnswer: 'verifyAnswer',
  },
  Mutation: {
    createUserWithCredentials: 'createUserWithCredentials',
    CreateUserWithProvider: 'CreateUserWithProvider',
    createAdmin: 'createAdmin',
    createCourse: 'createCourse',
  },
  Fragment: {
    userDetails: 'userDetails',
  },
}
export const UserDetailsFragmentDoc = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserDetailsFragment, unknown>
export const CreateUserWithCredentialsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createUserWithCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserWithCredentialsInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUserWithCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserWithCredentialsInput' },
                value: {
                  kind: 'Variable',
                  name: {
                    kind: 'Name',
                    value: 'createUserWithCredentialsInput',
                  },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserWithCredentialsMutation,
  CreateUserWithCredentialsMutationVariables
>
export const CreateUserWithProviderDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'CreateUserWithProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createUserWithProviderInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateUserWithProviderInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createUserWithProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createUserWithProviderInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createUserWithProviderInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateUserWithProviderMutation,
  CreateUserWithProviderMutationVariables
>
export const GetCredentialsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'getCredentials' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'email' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getCredentials' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'email' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'email' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'credentials' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'passwordHash' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCredentialsQuery, GetCredentialsQueryVariables>
export const GetAuthProviderDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAuthProvider' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'uid' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'getAuthProvider' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'uid' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'uid' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetAuthProviderQuery,
  GetAuthProviderQueryVariables
>
export const AdminMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'adminMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'adminMe' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'userDetails' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'userDetails' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'User' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: 'image' } },
          { kind: 'Field', name: { kind: 'Name', value: 'name' } },
          { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AdminMeQuery, AdminMeQueryVariables>
export const CoursesDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'courses' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CourseWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'CourseOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'courses' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'chaptersLength' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'published' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CoursesQuery, CoursesQueryVariables>
export const AdminsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'admins' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'skip' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'take' } },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'AdminOrderByWithRelationInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'AdminWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'admins' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'skip' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'skip' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'take' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'take' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AdminsQuery, AdminsQueryVariables>
export const CreateAdminDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createAdmin' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createAdminInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateAdminInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createAdmin' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createAdminInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createAdminInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateAdminMutation, CreateAdminMutationVariables>
export const UserDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'User' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'UserWhereUniqueInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'user' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                { kind: 'Field', name: { kind: 'Name', value: 'image' } },
                { kind: 'Field', name: { kind: 'Name', value: 'updatedAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                { kind: 'Field', name: { kind: 'Name', value: 'uid' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserQuery, UserQueryVariables>
export const CreateCourseDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createCourse' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'createCourseInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CreateCourseInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createCourse' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'createCourseInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'createCourseInput' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CreateCourseMutation,
  CreateCourseMutationVariables
>
export const CourseDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'course' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'CourseWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'course' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'chapters' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'chaptersLength' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CourseQuery, CourseQueryVariables>
export const DoubtDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'doubt' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'question' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'courseInfo' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'doubt' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'question' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'question' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'courseInfo' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'courseInfo' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'answer' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DoubtQuery, DoubtQueryVariables>
export const TakeTestDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'takeTest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'courseInfo' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'takeTest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'courseInfo' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'courseInfo' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'question' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<TakeTestQuery, TakeTestQueryVariables>
export const VerifyAnswerDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'verifyAnswer' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'courseInfo' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'question' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'answer' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'verifyAnswer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'courseInfo' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'courseInfo' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'question' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'question' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'answer' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'answer' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'mark' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VerifyAnswerQuery, VerifyAnswerQueryVariables>
