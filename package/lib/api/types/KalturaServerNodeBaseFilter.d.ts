import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaFilter, KalturaFilterArgs } from './KalturaFilter';
export interface KalturaServerNodeBaseFilterArgs extends KalturaFilterArgs {
    idEqual?: number;
    idIn?: string;
    createdAtGreaterThanOrEqual?: Date;
    createdAtLessThanOrEqual?: Date;
    updatedAtGreaterThanOrEqual?: Date;
    updatedAtLessThanOrEqual?: Date;
    heartbeatTimeGreaterThanOrEqual?: Date;
    heartbeatTimeLessThanOrEqual?: Date;
    nameEqual?: string;
    nameIn?: string;
    systemNameEqual?: string;
    systemNameIn?: string;
    hostNameLike?: string;
    hostNameMultiLikeOr?: string;
    hostNameMultiLikeAnd?: string;
    statusEqual?: KalturaServerNodeStatus;
    statusIn?: string;
    typeEqual?: KalturaServerNodeType;
    typeIn?: string;
    tagsLike?: string;
    tagsMultiLikeOr?: string;
    tagsMultiLikeAnd?: string;
    dcEqual?: number;
    dcIn?: string;
    parentIdLike?: string;
    parentIdMultiLikeOr?: string;
    parentIdMultiLikeAnd?: string;
}
export declare class KalturaServerNodeBaseFilter extends KalturaFilter {
    idEqual: number;
    idIn: string;
    createdAtGreaterThanOrEqual: Date;
    createdAtLessThanOrEqual: Date;
    updatedAtGreaterThanOrEqual: Date;
    updatedAtLessThanOrEqual: Date;
    heartbeatTimeGreaterThanOrEqual: Date;
    heartbeatTimeLessThanOrEqual: Date;
    nameEqual: string;
    nameIn: string;
    systemNameEqual: string;
    systemNameIn: string;
    hostNameLike: string;
    hostNameMultiLikeOr: string;
    hostNameMultiLikeAnd: string;
    statusEqual: KalturaServerNodeStatus;
    statusIn: string;
    typeEqual: KalturaServerNodeType;
    typeIn: string;
    tagsLike: string;
    tagsMultiLikeOr: string;
    tagsMultiLikeAnd: string;
    dcEqual: number;
    dcIn: string;
    parentIdLike: string;
    parentIdMultiLikeOr: string;
    parentIdMultiLikeAnd: string;
    constructor(data?: KalturaServerNodeBaseFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}