import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaFileSyncObjectType } from './KalturaFileSyncObjectType';
import { KalturaFileSyncStatus } from './KalturaFileSyncStatus';
import { KalturaFileSyncType } from './KalturaFileSyncType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaFileSyncArgs extends KalturaObjectBaseArgs {
    status?: KalturaFileSyncStatus;
    fileRoot?: string;
    filePath?: string;
}
export declare class KalturaFileSync extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    readonly fileObjectType: KalturaFileSyncObjectType;
    readonly objectId: string;
    readonly version: string;
    readonly objectSubType: number;
    readonly dc: string;
    readonly original: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly readyAt: number;
    readonly syncTime: number;
    status: KalturaFileSyncStatus;
    readonly fileType: KalturaFileSyncType;
    readonly linkedId: number;
    readonly linkCount: number;
    fileRoot: string;
    filePath: string;
    readonly fileSize: number;
    readonly fileUrl: string;
    readonly fileContent: string;
    readonly fileDiscSize: number;
    readonly isCurrentDc: boolean;
    readonly isDir: boolean;
    readonly originalId: number;
    constructor(data?: KalturaFileSyncArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}