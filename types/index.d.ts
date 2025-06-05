import { Struct } from '@strapi/types';

import {
  PluginUploadFile,
  PluginUsersPermissionsUser,
} from './generated/contentTypes';

export type StrapiCollectionData<T extends Struct.CollectionTypeSchema> = {
  id: number;
  documentId: string;
} & T['attributes'];

export type User = StrapiCollectionData<PluginUsersPermissionsUser>;

export type File = StrapiCollectionData<PluginUploadFile>;
