import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfileStatus } from './KalturaStorageProfileStatus';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StorageProfileUpdateStatusActionArgs extends KalturaRequestArgs {
    storageId: number;
    status: KalturaStorageProfileStatus;
}
/**
 * Build request payload for service 'storageProfile' action 'updateStatus'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class StorageProfileUpdateStatusAction extends KalturaRequest<void> {
    storageId: number;
    status: KalturaStorageProfileStatus;
    constructor(data: StorageProfileUpdateStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
