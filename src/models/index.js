// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CommentTypeEnum = {
  "TEXT": "TEXT",
  "LINK": "LINK",
  "IMAGE": "IMAGE",
  "VOICE": "VOICE"
};

const UserTypeEnum = {
  "USER": "USER",
  "SUPERADMIN": "SUPERADMIN",
  "ADMIN": "ADMIN"
};

const { RollNumberModel, VideoComment, VideoRating, AdminVideoModel, ChannelModel, DiscussionModel, SettingModel, VideoModel, UserModel } = initSchema(schema);

export {
  RollNumberModel,
  VideoComment,
  VideoRating,
  AdminVideoModel,
  ChannelModel,
  DiscussionModel,
  SettingModel,
  VideoModel,
  UserModel,
  CommentTypeEnum,
  UserTypeEnum
};