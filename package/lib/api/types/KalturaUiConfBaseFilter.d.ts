import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfObjType } from './KalturaUiConfObjType';
import { KalturaUiConfCreationMode } from './KalturaUiConfCreationMode';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaUiConfBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    nameLike?: string;
    partnerIdEqual?: number;
    partnerIdIn?: string;
    objTypeEqual?: KalturaUiConfObjType;
    objTypeIn?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    creationModeEqual?: KalturaUiConfCreationMode;
    creationModeIn?: string;
    versionEqual?: string;
    versionMultiLikeOr?: string;
    versionMultiLikeAnd?: string;
    partnerTagsMultiLikeOr?: string;
    partnerTagsMultiLikeAnd?: string;
}
export declare class KalturaUiConfBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    nameLike: string;
    partnerIdEqual: number;
    partnerIdIn: string;
    objTypeEqual: KalturaUiConfObjType;
    objTypeIn: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    creationModeEqual: KalturaUiConfCreationMode;
    creationModeIn: string;
    versionEqual: string;
    versionMultiLikeOr: string;
    versionMultiLikeAnd: string;
    partnerTagsMultiLikeOr: string;
    partnerTagsMultiLikeAnd: string;
    constructor(data?: KalturaUiConfBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
