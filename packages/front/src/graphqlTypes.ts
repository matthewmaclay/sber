import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsConnection?: Maybe<CommentConnection>;
  lesson?: Maybe<Lesson>;
  lessons?: Maybe<Array<Maybe<Lesson>>>;
  lessonsConnection?: Maybe<LessonConnection>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Maybe<Project>>>;
  projectsConnection?: Maybe<ProjectConnection>;
  stage?: Maybe<Stage>;
  stages?: Maybe<Array<Maybe<Stage>>>;
  stagesConnection?: Maybe<StageConnection>;
  files?: Maybe<Array<Maybe<UploadFile>>>;
  filesConnection?: Maybe<UploadFileConnection>;
  role?: Maybe<UsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  rolesConnection?: Maybe<UsersPermissionsRoleConnection>;
  user?: Maybe<UsersPermissionsUser>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  usersConnection?: Maybe<UsersPermissionsUserConnection>;
  me?: Maybe<UsersPermissionsMe>;
};


export type QueryCommentArgs = {
  id: Scalars['ID'];
};


export type QueryCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryCommentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonArgs = {
  id: Scalars['ID'];
};


export type QueryLessonsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryLessonsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QueryProjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryProjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStageArgs = {
  id: Scalars['ID'];
};


export type QueryStagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryStagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRoleArgs = {
  id: Scalars['ID'];
};


export type QueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type QueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Comment = {
  __typename?: 'Comment';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  topOffset?: Maybe<Scalars['Int']>;
  messages?: Maybe<Array<Maybe<ComponentNewMessage>>>;
  content?: Maybe<Scalars['String']>;
  lesson?: Maybe<Lesson>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};


export type ComponentNewMessage = {
  __typename?: 'ComponentNewMessage';
  id: Scalars['ID'];
  author?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type Lesson = {
  __typename?: 'Lesson';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  status?: Maybe<Enum_Lesson_Status>;
  time?: Maybe<Scalars['String']>;
  uniq?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  comments?: Maybe<Array<Maybe<Comment>>>;
};


export type LessonCommentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export enum Enum_Lesson_Status {
  Draft = 'draft',
  Fix = 'fix',
  Check = 'check',
  Complete = 'complete'
}


export type AdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
};

export type CommentConnection = {
  __typename?: 'CommentConnection';
  values?: Maybe<Array<Maybe<Comment>>>;
  groupBy?: Maybe<CommentGroupBy>;
  aggregate?: Maybe<CommentAggregator>;
};

export type CommentGroupBy = {
  __typename?: 'CommentGroupBy';
  id?: Maybe<Array<Maybe<CommentConnectionId>>>;
  created_at?: Maybe<Array<Maybe<CommentConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<CommentConnectionUpdated_At>>>;
  topOffset?: Maybe<Array<Maybe<CommentConnectionTopOffset>>>;
  content?: Maybe<Array<Maybe<CommentConnectionContent>>>;
  lesson?: Maybe<Array<Maybe<CommentConnectionLesson>>>;
  created_by?: Maybe<Array<Maybe<CommentConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<CommentConnectionUpdated_By>>>;
};

export type CommentConnectionId = {
  __typename?: 'CommentConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionCreated_At = {
  __typename?: 'CommentConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionUpdated_At = {
  __typename?: 'CommentConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionTopOffset = {
  __typename?: 'CommentConnectionTopOffset';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionContent = {
  __typename?: 'CommentConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionLesson = {
  __typename?: 'CommentConnectionLesson';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionCreated_By = {
  __typename?: 'CommentConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentConnectionUpdated_By = {
  __typename?: 'CommentConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<CommentConnection>;
};

export type CommentAggregator = {
  __typename?: 'CommentAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<CommentAggregatorSum>;
  avg?: Maybe<CommentAggregatorAvg>;
  min?: Maybe<CommentAggregatorMin>;
  max?: Maybe<CommentAggregatorMax>;
};

export type CommentAggregatorSum = {
  __typename?: 'CommentAggregatorSum';
  topOffset?: Maybe<Scalars['Float']>;
};

export type CommentAggregatorAvg = {
  __typename?: 'CommentAggregatorAvg';
  topOffset?: Maybe<Scalars['Float']>;
};

export type CommentAggregatorMin = {
  __typename?: 'CommentAggregatorMin';
  topOffset?: Maybe<Scalars['Float']>;
};

export type CommentAggregatorMax = {
  __typename?: 'CommentAggregatorMax';
  topOffset?: Maybe<Scalars['Float']>;
};

export type LessonConnection = {
  __typename?: 'LessonConnection';
  values?: Maybe<Array<Maybe<Lesson>>>;
  groupBy?: Maybe<LessonGroupBy>;
  aggregate?: Maybe<LessonAggregator>;
};

export type LessonGroupBy = {
  __typename?: 'LessonGroupBy';
  id?: Maybe<Array<Maybe<LessonConnectionId>>>;
  created_at?: Maybe<Array<Maybe<LessonConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<LessonConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<LessonConnectionTitle>>>;
  content?: Maybe<Array<Maybe<LessonConnectionContent>>>;
  status?: Maybe<Array<Maybe<LessonConnectionStatus>>>;
  time?: Maybe<Array<Maybe<LessonConnectionTime>>>;
  uniq?: Maybe<Array<Maybe<LessonConnectionUniq>>>;
  created_by?: Maybe<Array<Maybe<LessonConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<LessonConnectionUpdated_By>>>;
};

export type LessonConnectionId = {
  __typename?: 'LessonConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionCreated_At = {
  __typename?: 'LessonConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionUpdated_At = {
  __typename?: 'LessonConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionTitle = {
  __typename?: 'LessonConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionContent = {
  __typename?: 'LessonConnectionContent';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionStatus = {
  __typename?: 'LessonConnectionStatus';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionTime = {
  __typename?: 'LessonConnectionTime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionUniq = {
  __typename?: 'LessonConnectionUniq';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionCreated_By = {
  __typename?: 'LessonConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonConnectionUpdated_By = {
  __typename?: 'LessonConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<LessonConnection>;
};

export type LessonAggregator = {
  __typename?: 'LessonAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  metrics?: Maybe<Array<Maybe<ComponentNewMetrics>>>;
  name?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  stages?: Maybe<Array<Maybe<Stage>>>;
};


export type ProjectStagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type ComponentNewMetrics = {
  __typename?: 'ComponentNewMetrics';
  id: Scalars['ID'];
  data?: Maybe<Scalars['JSON']>;
};

export type Stage = {
  __typename?: 'Stage';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  number?: Maybe<Scalars['String']>;
  project?: Maybe<Project>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  values?: Maybe<Array<Maybe<Project>>>;
  groupBy?: Maybe<ProjectGroupBy>;
  aggregate?: Maybe<ProjectAggregator>;
};

export type ProjectGroupBy = {
  __typename?: 'ProjectGroupBy';
  id?: Maybe<Array<Maybe<ProjectConnectionId>>>;
  created_at?: Maybe<Array<Maybe<ProjectConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<ProjectConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<ProjectConnectionName>>>;
  created_by?: Maybe<Array<Maybe<ProjectConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<ProjectConnectionUpdated_By>>>;
};

export type ProjectConnectionId = {
  __typename?: 'ProjectConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionCreated_At = {
  __typename?: 'ProjectConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionUpdated_At = {
  __typename?: 'ProjectConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionName = {
  __typename?: 'ProjectConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionCreated_By = {
  __typename?: 'ProjectConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectConnectionUpdated_By = {
  __typename?: 'ProjectConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<ProjectConnection>;
};

export type ProjectAggregator = {
  __typename?: 'ProjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StageConnection = {
  __typename?: 'StageConnection';
  values?: Maybe<Array<Maybe<Stage>>>;
  groupBy?: Maybe<StageGroupBy>;
  aggregate?: Maybe<StageAggregator>;
};

export type StageGroupBy = {
  __typename?: 'StageGroupBy';
  id?: Maybe<Array<Maybe<StageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StageConnectionUpdated_At>>>;
  number?: Maybe<Array<Maybe<StageConnectionNumber>>>;
  project?: Maybe<Array<Maybe<StageConnectionProject>>>;
  created_by?: Maybe<Array<Maybe<StageConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<StageConnectionUpdated_By>>>;
};

export type StageConnectionId = {
  __typename?: 'StageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionCreated_At = {
  __typename?: 'StageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionUpdated_At = {
  __typename?: 'StageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionNumber = {
  __typename?: 'StageConnectionNumber';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionProject = {
  __typename?: 'StageConnectionProject';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionCreated_By = {
  __typename?: 'StageConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageConnectionUpdated_By = {
  __typename?: 'StageConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StageConnection>;
};

export type StageAggregator = {
  __typename?: 'StageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  related?: Maybe<Array<Maybe<Morph>>>;
};


export type UploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type Morph = UsersPermissionsMe | UsersPermissionsMeRole | UsersPermissionsLoginPayload | UserPermissionsPasswordPayload | Comment | CommentConnection | CommentAggregator | CommentAggregatorSum | CommentAggregatorAvg | CommentAggregatorMin | CommentAggregatorMax | CommentGroupBy | CommentConnectionId | CommentConnectionCreated_At | CommentConnectionUpdated_At | CommentConnectionTopOffset | CommentConnectionContent | CommentConnectionLesson | CommentConnectionCreated_By | CommentConnectionUpdated_By | CreateCommentPayload | UpdateCommentPayload | DeleteCommentPayload | Lesson | LessonConnection | LessonAggregator | LessonGroupBy | LessonConnectionId | LessonConnectionCreated_At | LessonConnectionUpdated_At | LessonConnectionTitle | LessonConnectionContent | LessonConnectionStatus | LessonConnectionTime | LessonConnectionUniq | LessonConnectionCreated_By | LessonConnectionUpdated_By | CreateLessonPayload | UpdateLessonPayload | DeleteLessonPayload | Project | ProjectConnection | ProjectAggregator | ProjectGroupBy | ProjectConnectionId | ProjectConnectionCreated_At | ProjectConnectionUpdated_At | ProjectConnectionName | ProjectConnectionCreated_By | ProjectConnectionUpdated_By | CreateProjectPayload | UpdateProjectPayload | DeleteProjectPayload | Stage | StageConnection | StageAggregator | StageGroupBy | StageConnectionId | StageConnectionCreated_At | StageConnectionUpdated_At | StageConnectionNumber | StageConnectionProject | StageConnectionCreated_By | StageConnectionUpdated_By | CreateStagePayload | UpdateStagePayload | DeleteStagePayload | UploadFile | UploadFileConnection | UploadFileAggregator | UploadFileAggregatorSum | UploadFileAggregatorAvg | UploadFileAggregatorMin | UploadFileAggregatorMax | UploadFileGroupBy | UploadFileConnectionId | UploadFileConnectionCreated_At | UploadFileConnectionUpdated_At | UploadFileConnectionName | UploadFileConnectionAlternativeText | UploadFileConnectionCaption | UploadFileConnectionWidth | UploadFileConnectionHeight | UploadFileConnectionFormats | UploadFileConnectionHash | UploadFileConnectionExt | UploadFileConnectionMime | UploadFileConnectionSize | UploadFileConnectionUrl | UploadFileConnectionPreviewUrl | UploadFileConnectionProvider | UploadFileConnectionProvider_Metadata | UploadFileConnectionCreated_By | UploadFileConnectionUpdated_By | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsRoleConnection | UsersPermissionsRoleAggregator | UsersPermissionsRoleGroupBy | UsersPermissionsRoleConnectionId | UsersPermissionsRoleConnectionName | UsersPermissionsRoleConnectionDescription | UsersPermissionsRoleConnectionType | UsersPermissionsRoleConnectionCreated_By | UsersPermissionsRoleConnectionUpdated_By | CreateRolePayload | UpdateRolePayload | DeleteRolePayload | UsersPermissionsUser | UsersPermissionsUserConnection | UsersPermissionsUserAggregator | UsersPermissionsUserGroupBy | UsersPermissionsUserConnectionId | UsersPermissionsUserConnectionCreated_At | UsersPermissionsUserConnectionUpdated_At | UsersPermissionsUserConnectionUsername | UsersPermissionsUserConnectionEmail | UsersPermissionsUserConnectionProvider | UsersPermissionsUserConnectionConfirmed | UsersPermissionsUserConnectionBlocked | UsersPermissionsUserConnectionRole | UsersPermissionsUserConnectionCreated_By | UsersPermissionsUserConnectionUpdated_By | CreateUserPayload | UpdateUserPayload | DeleteUserPayload | ComponentNewMessage | ComponentNewMetrics;

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsMeRole>;
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: UsersPermissionsMe;
};

export type UserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type CreateCommentPayload = {
  __typename?: 'createCommentPayload';
  comment?: Maybe<Comment>;
};

export type UpdateCommentPayload = {
  __typename?: 'updateCommentPayload';
  comment?: Maybe<Comment>;
};

export type DeleteCommentPayload = {
  __typename?: 'deleteCommentPayload';
  comment?: Maybe<Comment>;
};

export type CreateLessonPayload = {
  __typename?: 'createLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type UpdateLessonPayload = {
  __typename?: 'updateLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type DeleteLessonPayload = {
  __typename?: 'deleteLessonPayload';
  lesson?: Maybe<Lesson>;
};

export type CreateProjectPayload = {
  __typename?: 'createProjectPayload';
  project?: Maybe<Project>;
};

export type UpdateProjectPayload = {
  __typename?: 'updateProjectPayload';
  project?: Maybe<Project>;
};

export type DeleteProjectPayload = {
  __typename?: 'deleteProjectPayload';
  project?: Maybe<Project>;
};

export type CreateStagePayload = {
  __typename?: 'createStagePayload';
  stage?: Maybe<Stage>;
};

export type UpdateStagePayload = {
  __typename?: 'updateStagePayload';
  stage?: Maybe<Stage>;
};

export type DeleteStagePayload = {
  __typename?: 'deleteStagePayload';
  stage?: Maybe<Stage>;
};

export type UploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<UploadFile>>>;
  groupBy?: Maybe<UploadFileGroupBy>;
  aggregate?: Maybe<UploadFileAggregator>;
};

export type UploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<UploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<UploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<UploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<UploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<UploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<UploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<UploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<UploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<UploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<UploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<UploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<UploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<UploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<UploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<UploadFileConnectionProvider_Metadata>>>;
  created_by?: Maybe<Array<Maybe<UploadFileConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UploadFileConnectionUpdated_By>>>;
};

export type UploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionCreated_By = {
  __typename?: 'UploadFileConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileConnectionUpdated_By = {
  __typename?: 'UploadFileConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UploadFileConnection>;
};

export type UploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<UploadFileAggregatorSum>;
  avg?: Maybe<UploadFileAggregatorAvg>;
  min?: Maybe<UploadFileAggregatorMin>;
  max?: Maybe<UploadFileAggregatorMax>;
};

export type UploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
  permissions?: Maybe<Array<Maybe<UsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
};


export type UsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type UsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<UsersPermissionsRole>;
  created_by?: Maybe<AdminUser>;
  updated_by?: Maybe<AdminUser>;
};

export type UsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsRole>>>;
  groupBy?: Maybe<UsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<UsersPermissionsRoleAggregator>;
};

export type UsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionType>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsRoleConnectionUpdated_By>>>;
};

export type UsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionCreated_By = {
  __typename?: 'UsersPermissionsRoleConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleConnectionUpdated_By = {
  __typename?: 'UsersPermissionsRoleConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsRoleConnection>;
};

export type UsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type DeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<UsersPermissionsRole>;
};

export type UsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<UsersPermissionsUser>>>;
  groupBy?: Maybe<UsersPermissionsUserGroupBy>;
  aggregate?: Maybe<UsersPermissionsUserAggregator>;
};

export type UsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<UsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<UsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<UsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<UsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<UsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<UsersPermissionsUserConnectionRole>>>;
  created_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionCreated_By>>>;
  updated_by?: Maybe<Array<Maybe<UsersPermissionsUserConnectionUpdated_By>>>;
};

export type UsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionCreated_By = {
  __typename?: 'UsersPermissionsUserConnectionCreated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserConnectionUpdated_By = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_by';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<UsersPermissionsUserConnection>;
};

export type UsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type CreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type UpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type DeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<UsersPermissionsUser>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<CreateCommentPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  createLesson?: Maybe<CreateLessonPayload>;
  updateLesson?: Maybe<UpdateLessonPayload>;
  deleteLesson?: Maybe<DeleteLessonPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  createStage?: Maybe<CreateStagePayload>;
  updateStage?: Maybe<UpdateStagePayload>;
  deleteStage?: Maybe<DeleteStagePayload>;
  /** Create a new role */
  createRole?: Maybe<CreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<UpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<DeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<CreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<UpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<DeleteUserPayload>;
  upload: UploadFile;
  multipleUpload: Array<Maybe<UploadFile>>;
  updateFileInfo: UploadFile;
  login: UsersPermissionsLoginPayload;
  register: UsersPermissionsLoginPayload;
  forgotPassword?: Maybe<UserPermissionsPasswordPayload>;
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
};


export type MutationCreateCommentArgs = {
  input?: Maybe<CreateCommentInput>;
};


export type MutationUpdateCommentArgs = {
  input?: Maybe<UpdateCommentInput>;
};


export type MutationDeleteCommentArgs = {
  input?: Maybe<DeleteCommentInput>;
};


export type MutationCreateLessonArgs = {
  input?: Maybe<CreateLessonInput>;
};


export type MutationUpdateLessonArgs = {
  input?: Maybe<UpdateLessonInput>;
};


export type MutationDeleteLessonArgs = {
  input?: Maybe<DeleteLessonInput>;
};


export type MutationCreateProjectArgs = {
  input?: Maybe<CreateProjectInput>;
};


export type MutationUpdateProjectArgs = {
  input?: Maybe<UpdateProjectInput>;
};


export type MutationDeleteProjectArgs = {
  input?: Maybe<DeleteProjectInput>;
};


export type MutationCreateStageArgs = {
  input?: Maybe<CreateStageInput>;
};


export type MutationUpdateStageArgs = {
  input?: Maybe<UpdateStageInput>;
};


export type MutationDeleteStageArgs = {
  input?: Maybe<DeleteStageInput>;
};


export type MutationCreateRoleArgs = {
  input?: Maybe<CreateRoleInput>;
};


export type MutationUpdateRoleArgs = {
  input?: Maybe<UpdateRoleInput>;
};


export type MutationDeleteRoleArgs = {
  input?: Maybe<DeleteRoleInput>;
};


export type MutationCreateUserArgs = {
  input?: Maybe<CreateUserInput>;
};


export type MutationUpdateUserArgs = {
  input?: Maybe<UpdateUserInput>;
};


export type MutationDeleteUserArgs = {
  input?: Maybe<DeleteUserInput>;
};


export type MutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: FileInfoInput;
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type CreateCommentInput = {
  data?: Maybe<CommentInput>;
};

export type CommentInput = {
  topOffset?: Maybe<Scalars['Int']>;
  messages?: Maybe<Array<Maybe<ComponentNewMessageInput>>>;
  content?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentNewMessageInput = {
  author?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type UpdateCommentInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditCommentInput>;
};

export type InputId = {
  id: Scalars['ID'];
};

export type EditCommentInput = {
  topOffset?: Maybe<Scalars['Int']>;
  messages?: Maybe<Array<Maybe<EditComponentNewMessageInput>>>;
  content?: Maybe<Scalars['String']>;
  lesson?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentNewMessageInput = {
  id?: Maybe<Scalars['ID']>;
  author?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
};

export type DeleteCommentInput = {
  where?: Maybe<InputId>;
};

export type CreateLessonInput = {
  data?: Maybe<LessonInput>;
};

export type LessonInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Lesson_Status>;
  time?: Maybe<Scalars['String']>;
  uniq?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateLessonInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditLessonInput>;
};

export type EditLessonInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Scalars['ID']>>>;
  status?: Maybe<Enum_Lesson_Status>;
  time?: Maybe<Scalars['String']>;
  uniq?: Maybe<Scalars['JSON']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteLessonInput = {
  where?: Maybe<InputId>;
};

export type CreateProjectInput = {
  data?: Maybe<ProjectInput>;
};

export type ProjectInput = {
  metrics?: Maybe<Array<Maybe<ComponentNewMetricInput>>>;
  name?: Maybe<Scalars['String']>;
  stages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type ComponentNewMetricInput = {
  data?: Maybe<Scalars['JSON']>;
};

export type UpdateProjectInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditProjectInput>;
};

export type EditProjectInput = {
  metrics?: Maybe<Array<Maybe<EditComponentNewMetricInput>>>;
  name?: Maybe<Scalars['String']>;
  stages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditComponentNewMetricInput = {
  id?: Maybe<Scalars['ID']>;
  data?: Maybe<Scalars['JSON']>;
};

export type DeleteProjectInput = {
  where?: Maybe<InputId>;
};

export type CreateStageInput = {
  data?: Maybe<StageInput>;
};

export type StageInput = {
  number?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateStageInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditStageInput>;
};

export type EditStageInput = {
  number?: Maybe<Scalars['String']>;
  project?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteStageInput = {
  where?: Maybe<InputId>;
};

export type CreateRoleInput = {
  data?: Maybe<RoleInput>;
};

export type RoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateRoleInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditRoleInput>;
};

export type EditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteRoleInput = {
  where?: Maybe<InputId>;
};

export type CreateUserInput = {
  data?: Maybe<UserInput>;
};

export type UserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type UpdateUserInput = {
  where?: Maybe<InputId>;
  data?: Maybe<EditUserInput>;
};

export type EditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type DeleteUserInput = {
  where?: Maybe<InputId>;
};


export type FileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type UsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type FileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type EditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};




export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type GetLessonsQueryVariables = Exact<{
  status?: Maybe<Enum_Lesson_Status>;
}>;


export type GetLessonsQuery = (
  { __typename?: 'Query' }
  & { lessons?: Maybe<Array<Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'status' | 'id' | 'title' | 'time'>
  )>>> }
);

export type GetLessonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLessonQuery = (
  { __typename?: 'Query' }
  & { lesson?: Maybe<(
    { __typename?: 'Lesson' }
    & Pick<Lesson, 'status' | 'content' | 'title'>
  )> }
);

export type UpdateLessonContentMutationVariables = Exact<{
  id: Scalars['ID'];
  content?: Maybe<Scalars['String']>;
}>;


export type UpdateLessonContentMutation = (
  { __typename?: 'Mutation' }
  & { updateLesson?: Maybe<(
    { __typename?: 'updateLessonPayload' }
    & { lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id'>
    )> }
  )> }
);

export type UpdateLessonStatusMutationVariables = Exact<{
  id: Scalars['ID'];
  status?: Maybe<Enum_Lesson_Status>;
}>;


export type UpdateLessonStatusMutation = (
  { __typename?: 'Mutation' }
  & { updateLesson?: Maybe<(
    { __typename?: 'updateLessonPayload' }
    & { lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id'>
    )> }
  )> }
);

export type CreateLessonMutationVariables = Exact<{
  title?: Maybe<Scalars['String']>;
}>;


export type CreateLessonMutation = (
  { __typename?: 'Mutation' }
  & { createLesson?: Maybe<(
    { __typename?: 'createLessonPayload' }
    & { lesson?: Maybe<(
      { __typename?: 'Lesson' }
      & Pick<Lesson, 'id'>
    )> }
  )> }
);


export const GetLessonsDocument = gql`
    query getLessons($status: ENUM_LESSON_STATUS) {
  lessons(where: {status: $status}) {
    status
    id
    title
    time
  }
}
    `;

/**
 * __useGetLessonsQuery__
 *
 * To run a query within a React component, call `useGetLessonsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonsQuery({
 *   variables: {
 *      status: // value for 'status'
 *   },
 * });
 */
export function useGetLessonsQuery(baseOptions?: Apollo.QueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
        return Apollo.useQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, baseOptions);
      }
export function useGetLessonsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonsQuery, GetLessonsQueryVariables>) {
          return Apollo.useLazyQuery<GetLessonsQuery, GetLessonsQueryVariables>(GetLessonsDocument, baseOptions);
        }
export type GetLessonsQueryHookResult = ReturnType<typeof useGetLessonsQuery>;
export type GetLessonsLazyQueryHookResult = ReturnType<typeof useGetLessonsLazyQuery>;
export type GetLessonsQueryResult = Apollo.QueryResult<GetLessonsQuery, GetLessonsQueryVariables>;
export const GetLessonDocument = gql`
    query getLesson($id: ID!) {
  lesson(id: $id) {
    status
    content
    title
  }
}
    `;

/**
 * __useGetLessonQuery__
 *
 * To run a query within a React component, call `useGetLessonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLessonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLessonQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetLessonQuery(baseOptions?: Apollo.QueryHookOptions<GetLessonQuery, GetLessonQueryVariables>) {
        return Apollo.useQuery<GetLessonQuery, GetLessonQueryVariables>(GetLessonDocument, baseOptions);
      }
export function useGetLessonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLessonQuery, GetLessonQueryVariables>) {
          return Apollo.useLazyQuery<GetLessonQuery, GetLessonQueryVariables>(GetLessonDocument, baseOptions);
        }
export type GetLessonQueryHookResult = ReturnType<typeof useGetLessonQuery>;
export type GetLessonLazyQueryHookResult = ReturnType<typeof useGetLessonLazyQuery>;
export type GetLessonQueryResult = Apollo.QueryResult<GetLessonQuery, GetLessonQueryVariables>;
export const UpdateLessonContentDocument = gql`
    mutation updateLessonContent($id: ID!, $content: String) {
  updateLesson(input: {where: {id: $id}, data: {content: $content}}) {
    lesson {
      id
    }
  }
}
    `;
export type UpdateLessonContentMutationFn = Apollo.MutationFunction<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>;

/**
 * __useUpdateLessonContentMutation__
 *
 * To run a mutation, you first call `useUpdateLessonContentMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonContentMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonContentMutation, { data, loading, error }] = useUpdateLessonContentMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateLessonContentMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>) {
        return Apollo.useMutation<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>(UpdateLessonContentDocument, baseOptions);
      }
export type UpdateLessonContentMutationHookResult = ReturnType<typeof useUpdateLessonContentMutation>;
export type UpdateLessonContentMutationResult = Apollo.MutationResult<UpdateLessonContentMutation>;
export type UpdateLessonContentMutationOptions = Apollo.BaseMutationOptions<UpdateLessonContentMutation, UpdateLessonContentMutationVariables>;
export const UpdateLessonStatusDocument = gql`
    mutation updateLessonStatus($id: ID!, $status: ENUM_LESSON_STATUS) {
  updateLesson(input: {where: {id: $id}, data: {status: $status}}) {
    lesson {
      id
    }
  }
}
    `;
export type UpdateLessonStatusMutationFn = Apollo.MutationFunction<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>;

/**
 * __useUpdateLessonStatusMutation__
 *
 * To run a mutation, you first call `useUpdateLessonStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLessonStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLessonStatusMutation, { data, loading, error }] = useUpdateLessonStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateLessonStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>) {
        return Apollo.useMutation<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>(UpdateLessonStatusDocument, baseOptions);
      }
export type UpdateLessonStatusMutationHookResult = ReturnType<typeof useUpdateLessonStatusMutation>;
export type UpdateLessonStatusMutationResult = Apollo.MutationResult<UpdateLessonStatusMutation>;
export type UpdateLessonStatusMutationOptions = Apollo.BaseMutationOptions<UpdateLessonStatusMutation, UpdateLessonStatusMutationVariables>;
export const CreateLessonDocument = gql`
    mutation createLesson($title: String) {
  createLesson(input: {data: {title: $title}}) {
    lesson {
      id
    }
  }
}
    `;
export type CreateLessonMutationFn = Apollo.MutationFunction<CreateLessonMutation, CreateLessonMutationVariables>;

/**
 * __useCreateLessonMutation__
 *
 * To run a mutation, you first call `useCreateLessonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLessonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLessonMutation, { data, loading, error }] = useCreateLessonMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useCreateLessonMutation(baseOptions?: Apollo.MutationHookOptions<CreateLessonMutation, CreateLessonMutationVariables>) {
        return Apollo.useMutation<CreateLessonMutation, CreateLessonMutationVariables>(CreateLessonDocument, baseOptions);
      }
export type CreateLessonMutationHookResult = ReturnType<typeof useCreateLessonMutation>;
export type CreateLessonMutationResult = Apollo.MutationResult<CreateLessonMutation>;
export type CreateLessonMutationOptions = Apollo.BaseMutationOptions<CreateLessonMutation, CreateLessonMutationVariables>;