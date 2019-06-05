import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserType } from './KalturaUserType';
import { KalturaUserStatus } from './KalturaUserStatus';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaRelatedFilter, KalturaRelatedFilterArgs } from './KalturaRelatedFilter';
export interface KalturaUserBaseFilterArgs extends KalturaRelatedFilterArgs {
    partnerIdEqual?: number;
    typeEqual?: KalturaUserType;
    typeIn?: string;
    screenNameLike?: string;
    screenNameStartsWith?: string;
    emailLike?: string;
    emailStartsWith?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    statusEqual?: KalturaUserStatus;
    statusIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    firstNameStartsWith?: string;
    lastNameStartsWith?: string;
    isAdminEqual?: KalturaNullableBoolean;
}
export declare class KalturaUserBaseFilter extends KalturaRelatedFilter {
    partnerIdEqual: number;
    typeEqual: KalturaUserType;
    typeIn: string;
    screenNameLike: string;
    screenNameStartsWith: string;
    emailLike: string;
    emailStartsWith: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    statusEqual: KalturaUserStatus;
    statusIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    firstNameStartsWith: string;
    lastNameStartsWith: string;
    isAdminEqual: KalturaNullableBoolean;
    constructor(data?: KalturaUserBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
