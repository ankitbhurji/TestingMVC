import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum CommentTypeEnum {
  TEXT = "TEXT",
  LINK = "LINK",
  IMAGE = "IMAGE",
  VOICE = "VOICE"
}

export enum UserTypeEnum {
  USER = "USER",
  SUPERADMIN = "SUPERADMIN",
  ADMIN = "ADMIN"
}



type EagerRollNumberModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RollNumberModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rollNumber?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRollNumberModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<RollNumberModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly rollNumber?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type RollNumberModel = LazyLoading extends LazyLoadingDisabled ? EagerRollNumberModel : LazyRollNumberModel

export declare const RollNumberModel: (new (init: ModelInit<RollNumberModel>) => RollNumberModel) & {
  copyOf(source: RollNumberModel, mutator: (draft: MutableModel<RollNumberModel>) => MutableModel<RollNumberModel> | void): RollNumberModel;
}

type EagerVideoComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly status?: string | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly status?: string | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoComment = LazyLoading extends LazyLoadingDisabled ? EagerVideoComment : LazyVideoComment

export declare const VideoComment: (new (init: ModelInit<VideoComment>) => VideoComment) & {
  copyOf(source: VideoComment, mutator: (draft: MutableModel<VideoComment>) => MutableModel<VideoComment> | void): VideoComment;
}

type EagerVideoRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoRating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ratingType?: string | null;
  readonly rating?: number | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoRating = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoRating, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ratingType?: string | null;
  readonly rating?: number | null;
  readonly channelmodelID: string;
  readonly videomodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoRating = LazyLoading extends LazyLoadingDisabled ? EagerVideoRating : LazyVideoRating

export declare const VideoRating: (new (init: ModelInit<VideoRating>) => VideoRating) & {
  copyOf(source: VideoRating, mutator: (draft: MutableModel<VideoRating>) => MutableModel<VideoRating> | void): VideoRating;
}

type EagerAdminVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdminVideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoID?: string | null;
  readonly videoUrl?: string | null;
  readonly videoTitle?: string | null;
  readonly videoDescription?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly videoCategory?: string | null;
  readonly viewsCount?: string | null;
  readonly likesCount?: string | null;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoPublishDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAdminVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AdminVideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoID?: string | null;
  readonly videoUrl?: string | null;
  readonly videoTitle?: string | null;
  readonly videoDescription?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly videoCategory?: string | null;
  readonly viewsCount?: string | null;
  readonly likesCount?: string | null;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoPublishDateTime?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type AdminVideoModel = LazyLoading extends LazyLoadingDisabled ? EagerAdminVideoModel : LazyAdminVideoModel

export declare const AdminVideoModel: (new (init: ModelInit<AdminVideoModel>) => AdminVideoModel) & {
  copyOf(source: AdminVideoModel, mutator: (draft: MutableModel<AdminVideoModel>) => MutableModel<AdminVideoModel> | void): AdminVideoModel;
}

type EagerChannelModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channelName?: string | null;
  readonly channelLink?: string | null;
  readonly channelId?: string | null;
  readonly totalSubscribersJoin?: number | null;
  readonly totalSubscribers?: string | null;
  readonly subscriberUpdateDate?: string | null;
  readonly channelCategory?: string | null;
  readonly isChannelMonetize?: boolean | null;
  readonly channelImage?: string | null;
  readonly channelBanner?: string | null;
  readonly channelDescription?: string | null;
  readonly handleName?: string | null;
  readonly totalViews?: string | null;
  readonly totalVideos?: string | null;
  readonly lastVideoDateTime?: string | null;
  readonly rollNumber?: number | null;
  readonly dailyVideoLimit?: number | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly status?: string | null;
  readonly membership?: string | null;
  readonly level?: string | null;
  readonly verifystatus?: string | null;
  readonly membershipExpiryDate?: string | null;
  readonly membershipDate?: string | null;
  readonly channelSubCategory?: string | null;
  readonly videoType?: string | null;
  readonly otherData?: string | null;
  readonly instagramUrl?: string | null;
  readonly facebookUrl?: string | null;
  readonly email?: string | null;
  readonly VideoRatings?: (VideoRating | null)[] | null;
  readonly VideoComments?: (VideoComment | null)[] | null;
  readonly VideoModels?: (VideoModel | null)[] | null;
  readonly DiscussionChannelRelation?: (DiscussionModel | null)[] | null;
  readonly usermodelID: string;
  readonly isChannelVerified?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChannelModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChannelModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly channelName?: string | null;
  readonly channelLink?: string | null;
  readonly channelId?: string | null;
  readonly totalSubscribersJoin?: number | null;
  readonly totalSubscribers?: string | null;
  readonly subscriberUpdateDate?: string | null;
  readonly channelCategory?: string | null;
  readonly isChannelMonetize?: boolean | null;
  readonly channelImage?: string | null;
  readonly channelBanner?: string | null;
  readonly channelDescription?: string | null;
  readonly handleName?: string | null;
  readonly totalViews?: string | null;
  readonly totalVideos?: string | null;
  readonly lastVideoDateTime?: string | null;
  readonly rollNumber?: number | null;
  readonly dailyVideoLimit?: number | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly status?: string | null;
  readonly membership?: string | null;
  readonly level?: string | null;
  readonly verifystatus?: string | null;
  readonly membershipExpiryDate?: string | null;
  readonly membershipDate?: string | null;
  readonly channelSubCategory?: string | null;
  readonly videoType?: string | null;
  readonly otherData?: string | null;
  readonly instagramUrl?: string | null;
  readonly facebookUrl?: string | null;
  readonly email?: string | null;
  readonly VideoRatings: AsyncCollection<VideoRating>;
  readonly VideoComments: AsyncCollection<VideoComment>;
  readonly VideoModels: AsyncCollection<VideoModel>;
  readonly DiscussionChannelRelation: AsyncCollection<DiscussionModel>;
  readonly usermodelID: string;
  readonly isChannelVerified?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ChannelModel = LazyLoading extends LazyLoadingDisabled ? EagerChannelModel : LazyChannelModel

export declare const ChannelModel: (new (init: ModelInit<ChannelModel>) => ChannelModel) & {
  copyOf(source: ChannelModel, mutator: (draft: MutableModel<ChannelModel>) => MutableModel<ChannelModel> | void): ChannelModel;
}

type EagerDiscussionModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscussionModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly commentType?: CommentTypeEnum | keyof typeof CommentTypeEnum | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly userHandle?: string | null;
  readonly otherData?: string | null;
  readonly toID?: string | null;
  readonly channelmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDiscussionModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<DiscussionModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly comment?: string | null;
  readonly commentType?: CommentTypeEnum | keyof typeof CommentTypeEnum | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly userHandle?: string | null;
  readonly otherData?: string | null;
  readonly toID?: string | null;
  readonly channelmodelID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type DiscussionModel = LazyLoading extends LazyLoadingDisabled ? EagerDiscussionModel : LazyDiscussionModel

export declare const DiscussionModel: (new (init: ModelInit<DiscussionModel>) => DiscussionModel) & {
  copyOf(source: DiscussionModel, mutator: (draft: MutableModel<DiscussionModel>) => MutableModel<DiscussionModel> | void): DiscussionModel;
}

type EagerSettingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SettingModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly settingKey?: string | null;
  readonly settingValue?: string | null;
  readonly displayName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySettingModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<SettingModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly settingKey?: string | null;
  readonly settingValue?: string | null;
  readonly displayName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type SettingModel = LazyLoading extends LazyLoadingDisabled ? EagerSettingModel : LazySettingModel

export declare const SettingModel: (new (init: ModelInit<SettingModel>) => SettingModel) & {
  copyOf(source: SettingModel, mutator: (draft: MutableModel<SettingModel>) => MutableModel<SettingModel> | void): SettingModel;
}

type EagerVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoUrl?: string | null;
  readonly videoDateTime?: string | null;
  readonly videoTitle?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly otherData?: string | null;
  readonly addIpAddress?: string | null;
  readonly videoViews?: string | null;
  readonly videoID?: string | null;
  readonly videoCategory?: string | null;
  readonly ratingSound?: number | null;
  readonly videoDescription?: string | null;
  readonly ratingOverall?: number | null;
  readonly ratingTitle?: number | null;
  readonly ratingVideo?: number | null;
  readonly ratingCount?: string | null;
  readonly commentCount?: string | null;
  readonly ratingThumbnail?: number | null;
  readonly VideoRatings?: (VideoRating | null)[] | null;
  readonly VideoComments?: (VideoComment | null)[] | null;
  readonly channelmodelID: string;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoLikeCount?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVideoModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VideoModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly videoUrl?: string | null;
  readonly videoDateTime?: string | null;
  readonly videoTitle?: string | null;
  readonly videoType?: string | null;
  readonly status?: string | null;
  readonly addDateTime?: string | null;
  readonly otherData?: string | null;
  readonly addIpAddress?: string | null;
  readonly videoViews?: string | null;
  readonly videoID?: string | null;
  readonly videoCategory?: string | null;
  readonly ratingSound?: number | null;
  readonly videoDescription?: string | null;
  readonly ratingOverall?: number | null;
  readonly ratingTitle?: number | null;
  readonly ratingVideo?: number | null;
  readonly ratingCount?: string | null;
  readonly commentCount?: string | null;
  readonly ratingThumbnail?: number | null;
  readonly VideoRatings: AsyncCollection<VideoRating>;
  readonly VideoComments: AsyncCollection<VideoComment>;
  readonly channelmodelID: string;
  readonly videoCategoryId?: string | null;
  readonly videoTags?: string | null;
  readonly videoLikeCount?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VideoModel = LazyLoading extends LazyLoadingDisabled ? EagerVideoModel : LazyVideoModel

export declare const VideoModel: (new (init: ModelInit<VideoModel>) => VideoModel) & {
  copyOf(source: VideoModel, mutator: (draft: MutableModel<VideoModel>) => MutableModel<VideoModel> | void): VideoModel;
}

type EagerUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly mobileNumber?: string | null;
  readonly cityName?: string | null;
  readonly job?: string | null;
  readonly otp?: number | null;
  readonly addDateTime?: string | null;
  readonly gender?: string | null;
  readonly countryName?: string | null;
  readonly stateName?: string | null;
  readonly userType?: UserTypeEnum | keyof typeof UserTypeEnum | null;
  readonly status?: string | null;
  readonly lastLoginDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly UserChannelModelRelation?: (ChannelModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email?: string | null;
  readonly name?: string | null;
  readonly mobileNumber?: string | null;
  readonly cityName?: string | null;
  readonly job?: string | null;
  readonly otp?: number | null;
  readonly addDateTime?: string | null;
  readonly gender?: string | null;
  readonly countryName?: string | null;
  readonly stateName?: string | null;
  readonly userType?: UserTypeEnum | keyof typeof UserTypeEnum | null;
  readonly status?: string | null;
  readonly lastLoginDateTime?: string | null;
  readonly addIpAddress?: string | null;
  readonly otherData?: string | null;
  readonly UserChannelModelRelation: AsyncCollection<ChannelModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserModel = LazyLoading extends LazyLoadingDisabled ? EagerUserModel : LazyUserModel

export declare const UserModel: (new (init: ModelInit<UserModel>) => UserModel) & {
  copyOf(source: UserModel, mutator: (draft: MutableModel<UserModel>) => MutableModel<UserModel> | void): UserModel;
}