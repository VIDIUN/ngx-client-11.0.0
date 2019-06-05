import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppearInListType } from './KalturaAppearInListType';
import { KalturaPrivacyType } from './KalturaPrivacyType';
import { KalturaInheritanceType } from './KalturaInheritanceType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaContributionPolicyType } from './KalturaContributionPolicyType';
import { KalturaCategoryStatus } from './KalturaCategoryStatus';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaCategoryBaseFilterArgs extends KalturaRelatedFilterArgs {
    idEqual?: number;
    idIn?: string;
    idNotIn?: string;
    parentIdEqual?: number;
    parentIdIn?: string;
    depthEqual?: number;
    fullNameEqual?: string;
    fullNameStartsWith?: string;
    fullNameIn?: string;
    fullIdsEqual?: string;
    fullIdsStartsWith?: string;
    fullIdsMatchOr?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    tagsLike?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    appearInListEqual?: KalturaAppearInListType;
    privacyEqual?: KalturaPrivacyType;
    privacyIn?: string;
    inheritanceTypeEqual?: KalturaInheritanceType;
    inheritanceTypeIn?: string;
    referenceIdEqual?: string;
    referenceIdEmpty?: KalturaNullableBoolean;
    contributionPolicyEqual?: KalturaContributionPolicyType;
    membersCountGreaterThanOrEqual?: number;
    membersCountLessThanOrEqual?: number;
    pendingMembersCountGreaterThanOrEqual?: number;
    pendingMembersCountLessThanOrEqual?: number;
    privacyContextEqual?: string;
    statusEqual?: KalturaCategoryStatus;
    statusIn?: string;
    inheritedParentIdEqual?: number;
    inheritedParentIdIn?: string;
    partnerSortValueGreaterThanOrEqual?: number;
    partnerSortValueLessThanOrEqual?: number;
    aggregationCategoriesMultiLikeOr?: string;
    aggregationCategoriesMultiLikeAnd?: string;
}
export declare class KalturaCategoryBaseFilter extends KalturaRelatedFilter {
    idEqual: number;
    idIn: string;
    idNotIn: string;
    parentIdEqual: number;
    parentIdIn: string;
    depthEqual: number;
    fullNameEqual: string;
    fullNameStartsWith: string;
    fullNameIn: string;
    fullIdsEqual: string;
    fullIdsStartsWith: string;
    fullIdsMatchOr: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    tagsLike: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    appearInListEqual: KalturaAppearInListType;
    privacyEqual: KalturaPrivacyType;
    privacyIn: string;
    inheritanceTypeEqual: KalturaInheritanceType;
    inheritanceTypeIn: string;
    referenceIdEqual: string;
    referenceIdEmpty: KalturaNullableBoolean;
    contributionPolicyEqual: KalturaContributionPolicyType;
    membersCountGreaterThanOrEqual: number;
    membersCountLessThanOrEqual: number;
    pendingMembersCountGreaterThanOrEqual: number;
    pendingMembersCountLessThanOrEqual: number;
    privacyContextEqual: string;
    statusEqual: KalturaCategoryStatus;
    statusIn: string;
    inheritedParentIdEqual: number;
    inheritedParentIdIn: string;
    partnerSortValueGreaterThanOrEqual: number;
    partnerSortValueLessThanOrEqual: number;
    aggregationCategoriesMultiLikeOr: string;
    aggregationCategoriesMultiLikeAnd: string;
    constructor(data?: KalturaCategoryBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}