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
  explanation?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  questionId: Scalars['Int']['output']
}

export type AnswerOrderByWithRelationInput = {
  answer?: InputMaybe<SortOrder>
  explanation?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  question?: InputMaybe<QuestionOrderByWithRelationInput>
  questionId?: InputMaybe<SortOrder>
}

export type AnswerOutput = {
  __typename?: 'AnswerOutput'
  answer: Scalars['String']['output']
}

export type AnswerRelationFilter = {
  is?: InputMaybe<AnswerWhereInput>
  isNot?: InputMaybe<AnswerWhereInput>
}

export enum AnswerScalarFieldEnum {
  Answer = 'answer',
  Explanation = 'explanation',
  Id = 'id',
  QuestionId = 'questionId',
}

export type AnswerWhereInput = {
  AND?: InputMaybe<Array<AnswerWhereInput>>
  NOT?: InputMaybe<Array<AnswerWhereInput>>
  OR?: InputMaybe<Array<AnswerWhereInput>>
  answer?: InputMaybe<StringFilter>
  explanation?: InputMaybe<StringFilter>
  id?: InputMaybe<IntFilter>
  question?: InputMaybe<QuestionRelationFilter>
  questionId?: InputMaybe<IntFilter>
}

export type AnswerWhereUniqueInput = {
  id: Scalars['Int']['input']
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
  course: Course
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
  questions?: InputMaybe<QuestionOrderByRelationAggregateInput>
  title?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type ChapterRelationFilter = {
  is?: InputMaybe<ChapterWhereInput>
  isNot?: InputMaybe<ChapterWhereInput>
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
  questions?: InputMaybe<QuestionListRelationFilter>
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
  tests?: InputMaybe<TestOrderByRelationAggregateInput>
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
  tests?: InputMaybe<TestListRelationFilter>
  title?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type CourseWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type CreateAdminInput = {
  uid: Scalars['String']['input']
}

export type CreateAnswerInput = {
  answer: Scalars['String']['input']
  explanation?: InputMaybe<Scalars['String']['input']>
  questionId: Scalars['Int']['input']
}

export type CreateChapterInput = {
  content: Scalars['String']['input']
  courseId: Scalars['Int']['input']
  title: Scalars['String']['input']
}

export type CreateChapterInputWithoutCourseId = {
  content: Scalars['String']['input']
  questions: Array<CreateQuestionInputWithoutChapterId>
  title: Scalars['String']['input']
}

export type CreateCourseInput = {
  adminUid: Scalars['String']['input']
  chapters: Array<CreateChapterInputWithoutCourseId>
  description?: InputMaybe<Scalars['String']['input']>
  published?: InputMaybe<Scalars['Boolean']['input']>
  title: Scalars['String']['input']
}

export type CreateQuestionInput = {
  chapterId: Scalars['Int']['input']
  question: Scalars['String']['input']
}

export type CreateQuestionInputWithoutChapterId = {
  answer: Scalars['String']['input']
  explanation?: InputMaybe<Scalars['String']['input']>
  question: Scalars['String']['input']
}

export type CreateStudentInput = {
  uid: Scalars['String']['input']
}

export type CreateTestQuestionInput = {
  aiFeedback?: InputMaybe<Scalars['String']['input']>
  aiScore?: InputMaybe<Scalars['Int']['input']>
  questionId: Scalars['Int']['input']
  studentAnswer: Scalars['String']['input']
  testId: Scalars['Int']['input']
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
  createAnswer: Answer
  createChapter: Chapter
  createCourse: Course
  createQuestion: Question
  createStudent: Student
  createTest: Test
  createTestQuestion: TestQuestion
  createUserWithCredentials: User
  createUserWithProvider: User
  removeAdmin: Admin
  removeAnswer: Answer
  removeChapter: Chapter
  removeCourse: Course
  removeQuestion: Question
  removeStudent: Student
  removeTest: Test
  removeTestQuestion: TestQuestion
  removeUser: User
  submitTest: Array<TestResultOutput>
  updateAdmin: Admin
  updateAnswer: Answer
  updateChapter: Chapter
  updateCourse: Course
  updateQuestion: Question
  updateStudent: Student
  updateTest: Test
  updateTestQuestion: TestQuestion
  updateUser: User
}

export type MutationCreateAdminArgs = {
  createAdminInput: CreateAdminInput
}

export type MutationCreateAnswerArgs = {
  createAnswerInput: CreateAnswerInput
}

export type MutationCreateChapterArgs = {
  createChapterInput: CreateChapterInput
}

export type MutationCreateCourseArgs = {
  createCourseInput: CreateCourseInput
}

export type MutationCreateQuestionArgs = {
  createQuestionInput: CreateQuestionInput
}

export type MutationCreateStudentArgs = {
  createStudentInput: CreateStudentInput
}

export type MutationCreateTestArgs = {
  courseId: Scalars['Int']['input']
}

export type MutationCreateTestQuestionArgs = {
  createTestQuestionInput: CreateTestQuestionInput
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

export type MutationRemoveAnswerArgs = {
  where: AnswerWhereUniqueInput
}

export type MutationRemoveChapterArgs = {
  where: ChapterWhereUniqueInput
}

export type MutationRemoveCourseArgs = {
  where: CourseWhereUniqueInput
}

export type MutationRemoveQuestionArgs = {
  where: QuestionWhereUniqueInput
}

export type MutationRemoveStudentArgs = {
  where: StudentWhereUniqueInput
}

export type MutationRemoveTestArgs = {
  where: TestWhereUniqueInput
}

export type MutationRemoveTestQuestionArgs = {
  where: TestQuestionWhereUniqueInput
}

export type MutationRemoveUserArgs = {
  where?: InputMaybe<UserWhereUniqueInput>
}

export type MutationSubmitTestArgs = {
  submitTestInput: Array<SubmitTestInput>
  testId: Scalars['Int']['input']
}

export type MutationUpdateAdminArgs = {
  updateAdminInput: UpdateAdminInput
}

export type MutationUpdateAnswerArgs = {
  updateAnswerInput: UpdateAnswerInput
}

export type MutationUpdateChapterArgs = {
  updateChapterInput: UpdateChapterInput
}

export type MutationUpdateCourseArgs = {
  updateCourseInput: UpdateCourseInput
}

export type MutationUpdateQuestionArgs = {
  updateQuestionInput: UpdateQuestionInput
}

export type MutationUpdateStudentArgs = {
  updateStudentInput: UpdateStudentInput
}

export type MutationUpdateTestArgs = {
  updateTestInput: UpdateTestInput
}

export type MutationUpdateTestQuestionArgs = {
  updateTestQuestionInput: UpdateTestQuestionInput
}

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput
}

export type Query = {
  __typename?: 'Query'
  admin: Admin
  adminMe: Admin
  admins: Array<Admin>
  answer: Answer
  answers: Array<Answer>
  chapter: Chapter
  chapters: Array<Chapter>
  course: Course
  courses: Array<Course>
  doubt: AnswerOutput
  getAuthProvider?: Maybe<AuthProvider>
  getCredentials?: Maybe<User>
  myTests: Array<Test>
  question: Question
  questions: Array<Question>
  student: Student
  studentMe: Student
  students: Array<Student>
  test: Test
  testQuestion: TestQuestion
  testQuestions: Array<TestQuestion>
  tests: Array<Test>
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

export type QueryAnswerArgs = {
  where: AnswerWhereUniqueInput
}

export type QueryAnswersArgs = {
  cursor?: InputMaybe<AnswerWhereUniqueInput>
  distinct?: InputMaybe<Array<AnswerScalarFieldEnum>>
  orderBy?: InputMaybe<Array<AnswerOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AnswerWhereInput>
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

export type QueryMyTestsArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>
  distinct?: InputMaybe<Array<TestScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TestOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TestWhereInput>
}

export type QueryQuestionArgs = {
  where: QuestionWhereUniqueInput
}

export type QueryQuestionsArgs = {
  cursor?: InputMaybe<QuestionWhereUniqueInput>
  distinct?: InputMaybe<Array<QuestionScalarFieldEnum>>
  orderBy?: InputMaybe<Array<QuestionOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<QuestionWhereInput>
}

export type QueryStudentArgs = {
  where: StudentWhereUniqueInput
}

export type QueryStudentsArgs = {
  cursor?: InputMaybe<StudentWhereUniqueInput>
  distinct?: InputMaybe<Array<StudentScalarFieldEnum>>
  orderBy?: InputMaybe<Array<StudentOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<StudentWhereInput>
}

export type QueryTestArgs = {
  where: TestWhereUniqueInput
}

export type QueryTestQuestionArgs = {
  where: TestQuestionWhereUniqueInput
}

export type QueryTestQuestionsArgs = {
  cursor?: InputMaybe<TestQuestionWhereUniqueInput>
  distinct?: InputMaybe<Array<TestQuestionScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TestQuestionOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TestQuestionWhereInput>
}

export type QueryTestsArgs = {
  cursor?: InputMaybe<TestWhereUniqueInput>
  distinct?: InputMaybe<Array<TestScalarFieldEnum>>
  orderBy?: InputMaybe<Array<TestOrderByWithRelationInput>>
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<TestWhereInput>
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
  chapterId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  question: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type QuestionListRelationFilter = {
  every?: InputMaybe<QuestionWhereInput>
  none?: InputMaybe<QuestionWhereInput>
  some?: InputMaybe<QuestionWhereInput>
}

export type QuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type QuestionOrderByWithRelationInput = {
  answer?: InputMaybe<AnswerOrderByWithRelationInput>
  chapter?: InputMaybe<ChapterOrderByWithRelationInput>
  chapterId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  question?: InputMaybe<SortOrder>
  testQuestions?: InputMaybe<TestQuestionOrderByRelationAggregateInput>
  updatedAt?: InputMaybe<SortOrder>
}

export type QuestionRelationFilter = {
  is?: InputMaybe<QuestionWhereInput>
  isNot?: InputMaybe<QuestionWhereInput>
}

export enum QuestionScalarFieldEnum {
  ChapterId = 'chapterId',
  CreatedAt = 'createdAt',
  Id = 'id',
  Question = 'question',
  UpdatedAt = 'updatedAt',
}

export type QuestionWhereInput = {
  AND?: InputMaybe<Array<QuestionWhereInput>>
  NOT?: InputMaybe<Array<QuestionWhereInput>>
  OR?: InputMaybe<Array<QuestionWhereInput>>
  answer?: InputMaybe<AnswerRelationFilter>
  chapter?: InputMaybe<ChapterRelationFilter>
  chapterId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  question?: InputMaybe<StringFilter>
  testQuestions?: InputMaybe<TestQuestionListRelationFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type QuestionWhereUniqueInput = {
  id: Scalars['Int']['input']
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

export type Student = {
  __typename?: 'Student'
  uid: Scalars['String']['output']
}

export type StudentOrderByWithRelationInput = {
  tests?: InputMaybe<TestOrderByRelationAggregateInput>
  uid?: InputMaybe<SortOrder>
  user?: InputMaybe<UserOrderByWithRelationInput>
}

export type StudentRelationFilter = {
  is?: InputMaybe<StudentWhereInput>
  isNot?: InputMaybe<StudentWhereInput>
}

export enum StudentScalarFieldEnum {
  Uid = 'uid',
}

export type StudentWhereInput = {
  AND?: InputMaybe<Array<StudentWhereInput>>
  NOT?: InputMaybe<Array<StudentWhereInput>>
  OR?: InputMaybe<Array<StudentWhereInput>>
  tests?: InputMaybe<TestListRelationFilter>
  uid?: InputMaybe<StringFilter>
  user?: InputMaybe<UserRelationFilter>
}

export type StudentWhereUniqueInput = {
  uid: Scalars['String']['input']
}

export type SubmitTestInput = {
  id: Scalars['Int']['input']
  question: Scalars['String']['input']
  userAnswer?: InputMaybe<Scalars['String']['input']>
}

export type Test = {
  __typename?: 'Test'
  aiTotalScore?: Maybe<Scalars['Int']['output']>
  course: Course
  courseId: Scalars['Int']['output']
  createdAt: Scalars['DateTime']['output']
  id: Scalars['Int']['output']
  questions: Array<Question>
  results: Array<TestQuestion>
  studentUid: Scalars['String']['output']
  updatedAt: Scalars['DateTime']['output']
}

export type TestListRelationFilter = {
  every?: InputMaybe<TestWhereInput>
  none?: InputMaybe<TestWhereInput>
  some?: InputMaybe<TestWhereInput>
}

export type TestOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TestOrderByWithRelationInput = {
  Student?: InputMaybe<StudentOrderByWithRelationInput>
  aiTotalScore?: InputMaybe<SortOrder>
  course?: InputMaybe<CourseOrderByWithRelationInput>
  courseId?: InputMaybe<SortOrder>
  createdAt?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  questions?: InputMaybe<TestQuestionOrderByRelationAggregateInput>
  studentUid?: InputMaybe<SortOrder>
  updatedAt?: InputMaybe<SortOrder>
}

export type TestQuestion = {
  __typename?: 'TestQuestion'
  aiFeedback?: Maybe<Scalars['String']['output']>
  aiScore?: Maybe<Scalars['Int']['output']>
  id: Scalars['Int']['output']
  question: Question
  questionId: Scalars['Int']['output']
  studentAnswer: Scalars['String']['output']
  testId: Scalars['Int']['output']
}

export type TestQuestionListRelationFilter = {
  every?: InputMaybe<TestQuestionWhereInput>
  none?: InputMaybe<TestQuestionWhereInput>
  some?: InputMaybe<TestQuestionWhereInput>
}

export type TestQuestionOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>
}

export type TestQuestionOrderByWithRelationInput = {
  Test?: InputMaybe<TestOrderByWithRelationInput>
  aiFeedback?: InputMaybe<SortOrder>
  aiScore?: InputMaybe<SortOrder>
  id?: InputMaybe<SortOrder>
  question?: InputMaybe<QuestionOrderByWithRelationInput>
  questionId?: InputMaybe<SortOrder>
  studentAnswer?: InputMaybe<SortOrder>
  testId?: InputMaybe<SortOrder>
}

export enum TestQuestionScalarFieldEnum {
  AiFeedback = 'aiFeedback',
  AiScore = 'aiScore',
  Id = 'id',
  QuestionId = 'questionId',
  StudentAnswer = 'studentAnswer',
  TestId = 'testId',
}

export type TestQuestionWhereInput = {
  AND?: InputMaybe<Array<TestQuestionWhereInput>>
  NOT?: InputMaybe<Array<TestQuestionWhereInput>>
  OR?: InputMaybe<Array<TestQuestionWhereInput>>
  Test?: InputMaybe<TestRelationFilter>
  aiFeedback?: InputMaybe<StringFilter>
  aiScore?: InputMaybe<IntFilter>
  id?: InputMaybe<IntFilter>
  question?: InputMaybe<QuestionRelationFilter>
  questionId?: InputMaybe<IntFilter>
  studentAnswer?: InputMaybe<StringFilter>
  testId?: InputMaybe<IntFilter>
}

export type TestQuestionWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type TestRelationFilter = {
  is?: InputMaybe<TestWhereInput>
  isNot?: InputMaybe<TestWhereInput>
}

export type TestResultOutput = {
  __typename?: 'TestResultOutput'
  feedback: Scalars['String']['output']
  marks: Scalars['Int']['output']
  questionId: Scalars['String']['output']
}

export enum TestScalarFieldEnum {
  AiTotalScore = 'aiTotalScore',
  CourseId = 'courseId',
  CreatedAt = 'createdAt',
  Id = 'id',
  StudentUid = 'studentUid',
  UpdatedAt = 'updatedAt',
}

export type TestWhereInput = {
  AND?: InputMaybe<Array<TestWhereInput>>
  NOT?: InputMaybe<Array<TestWhereInput>>
  OR?: InputMaybe<Array<TestWhereInput>>
  Student?: InputMaybe<StudentRelationFilter>
  aiTotalScore?: InputMaybe<IntFilter>
  course?: InputMaybe<CourseRelationFilter>
  courseId?: InputMaybe<IntFilter>
  createdAt?: InputMaybe<DateTimeFilter>
  id?: InputMaybe<IntFilter>
  questions?: InputMaybe<TestQuestionListRelationFilter>
  studentUid?: InputMaybe<StringFilter>
  updatedAt?: InputMaybe<DateTimeFilter>
}

export type TestWhereUniqueInput = {
  id: Scalars['Int']['input']
}

export type UpdateAdminInput = {
  uid: Scalars['String']['input']
}

export type UpdateAnswerInput = {
  answer?: InputMaybe<Scalars['String']['input']>
  explanation?: InputMaybe<Scalars['String']['input']>
  id: Scalars['Int']['input']
  questionId?: InputMaybe<Scalars['Int']['input']>
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

export type UpdateQuestionInput = {
  chapterId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  question?: InputMaybe<Scalars['String']['input']>
}

export type UpdateStudentInput = {
  uid: Scalars['String']['input']
}

export type UpdateTestInput = {
  aiTotalScore?: InputMaybe<Scalars['Int']['input']>
  courseId?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  studentUid?: InputMaybe<Scalars['String']['input']>
}

export type UpdateTestQuestionInput = {
  aiFeedback?: InputMaybe<Scalars['String']['input']>
  aiScore?: InputMaybe<Scalars['Int']['input']>
  id: Scalars['Int']['input']
  questionId?: InputMaybe<Scalars['Int']['input']>
  studentAnswer?: InputMaybe<Scalars['String']['input']>
  testId?: InputMaybe<Scalars['Int']['input']>
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
  Student?: InputMaybe<StudentOrderByWithRelationInput>
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
  Student?: InputMaybe<StudentRelationFilter>
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
    chapters: Array<{ __typename?: 'Chapter'; id: number; title: string }>
  }
}

export type ChapterQueryVariables = Exact<{
  where: ChapterWhereUniqueInput
}>

export type ChapterQuery = {
  __typename?: 'Query'
  chapter: {
    __typename?: 'Chapter'
    id: number
    title: string
    content: string
    course: {
      __typename?: 'Course'
      title: string
      description?: string | null
    }
  }
}

export type DoubtQueryVariables = Exact<{
  question: Scalars['String']['input']
  courseInfo: Scalars['String']['input']
}>

export type DoubtQuery = {
  __typename?: 'Query'
  doubt: { __typename?: 'AnswerOutput'; answer: string }
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

export type CreateTestMutationVariables = Exact<{
  courseId: Scalars['Int']['input']
}>

export type CreateTestMutation = {
  __typename?: 'Mutation'
  createTest: {
    __typename?: 'Test'
    id: number
    questions: Array<{ __typename?: 'Question'; id: number; question: string }>
    course: { __typename?: 'Course'; id: number; title: string }
  }
}

export type StudentMeQueryVariables = Exact<{ [key: string]: never }>

export type StudentMeQuery = {
  __typename?: 'Query'
  studentMe: { __typename?: 'Student'; uid: string }
}

export type SubmitTestMutationVariables = Exact<{
  submitTestInput: Array<SubmitTestInput> | SubmitTestInput
  testId: Scalars['Int']['input']
}>

export type SubmitTestMutation = {
  __typename?: 'Mutation'
  submitTest: Array<{
    __typename?: 'TestResultOutput'
    feedback: string
    marks: number
    questionId: string
  }>
}

export type MyTestsQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']['input']>
  take?: InputMaybe<Scalars['Int']['input']>
  orderBy?: InputMaybe<
    Array<TestOrderByWithRelationInput> | TestOrderByWithRelationInput
  >
  where?: InputMaybe<TestWhereInput>
}>

export type MyTestsQuery = {
  __typename?: 'Query'
  myTests: Array<{
    __typename?: 'Test'
    aiTotalScore?: number | null
    id: number
    course: { __typename?: 'Course'; title: string }
    results: Array<{
      __typename?: 'TestQuestion'
      aiFeedback?: string | null
      aiScore?: number | null
      studentAnswer: string
      question: { __typename?: 'Question'; question: string }
    }>
  }>
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
    chapter: 'chapter',
    doubt: 'doubt',
    verifyAnswer: 'verifyAnswer',
    studentMe: 'studentMe',
    myTests: 'myTests',
  },
  Mutation: {
    createUserWithCredentials: 'createUserWithCredentials',
    CreateUserWithProvider: 'CreateUserWithProvider',
    createAdmin: 'createAdmin',
    createCourse: 'createCourse',
    createTest: 'createTest',
    submitTest: 'submitTest',
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
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CourseQuery, CourseQueryVariables>
export const ChapterDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'chapter' },
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
              name: { kind: 'Name', value: 'ChapterWhereUniqueInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'chapter' },
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
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                { kind: 'Field', name: { kind: 'Name', value: 'content' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'course' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'description' },
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
} as unknown as DocumentNode<ChapterQuery, ChapterQueryVariables>
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
export const CreateTestDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'createTest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'courseId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'createTest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'courseId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'courseId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'questions' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'question' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'course' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
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
} as unknown as DocumentNode<CreateTestMutation, CreateTestMutationVariables>
export const StudentMeDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'studentMe' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'studentMe' },
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
} as unknown as DocumentNode<StudentMeQuery, StudentMeQueryVariables>
export const SubmitTestDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'submitTest' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'submitTestInput' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'ListType',
              type: {
                kind: 'NonNullType',
                type: {
                  kind: 'NamedType',
                  name: { kind: 'Name', value: 'SubmitTestInput' },
                },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'testId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'submitTest' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'submitTestInput' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'submitTestInput' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'testId' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'testId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'feedback' } },
                { kind: 'Field', name: { kind: 'Name', value: 'marks' } },
                { kind: 'Field', name: { kind: 'Name', value: 'questionId' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SubmitTestMutation, SubmitTestMutationVariables>
export const MyTestsDocument = /*#__PURE__*/ {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'myTests' },
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
                name: { kind: 'Name', value: 'TestOrderByWithRelationInput' },
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
            name: { kind: 'Name', value: 'TestWhereInput' },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'myTests' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'aiTotalScore' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'course' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'results' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aiFeedback' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'aiScore' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'studentAnswer' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'question' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'question' },
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
      },
    },
  ],
} as unknown as DocumentNode<MyTestsQuery, MyTestsQueryVariables>
