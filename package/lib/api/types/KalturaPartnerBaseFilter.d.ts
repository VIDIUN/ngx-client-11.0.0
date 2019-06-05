import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPartnerStatus } from './KalturaPartnerStatus';
import { KalturaPartnerGroupType } from './KalturaPartnerGroupType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaPartnerBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    idNotIn?: string;
    nameLike?: string;
    nameMultiLikeOr?: string;
    nameMultiLikeAnd?: string;
    nameEqual?: string;
    statusEqual?: KalturaPartnerStatus;
    statusIn?: string;
    partnerPackageEqual?: number;
    partnerPackageGreaterThanOrEqual?: number;
    partnerPackageLessThanOrEqual?: number;
    partnerPackageIn?: string;
    partnerGroupTypeEqual?: KalturaPartnerGroupType;
    partnerNameDescriptionWebsiteAdminNameAdminEmailLike?: string;
}
export declare class KalturaPartnerBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    idNotIn: string;
    nameLike: string;
    nameMultiLikeOr: string;
    nameMultiLikeAnd: string;
    nameEqual: string;
    statusEqual: KalturaPartnerStatus;
    statusIn: string;
    partnerPackageEqual: number;
    partnerPackageGreaterThanOrEqual: number;
    partnerPackageLessThanOrEqual: number;
    partnerPackageIn: string;
    partnerGroupTypeEqual: KalturaPartnerGroupType;
    partnerNameDescriptionWebsiteAdminNameAdminEmailLike: string;
    constructor(data?: KalturaPartnerBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
