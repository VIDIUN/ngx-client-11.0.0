import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaContentResource, KalturaContentResourceArgs } from './KalturaContentResource';
export interface KalturaFileSyncResourceArgs extends KalturaContentResourceArgs {
    fileSyncObjectType?: number;
    objectSubType?: number;
    objectId?: string;
    version?: string;
}
export declare class KalturaFileSyncResource extends KalturaContentResource {
    fileSyncObjectType: number;
    objectSubType: number;
    objectId: string;
    version: string;
    constructor(data?: KalturaFileSyncResourceArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}