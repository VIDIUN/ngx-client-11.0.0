import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StorageProfileGetActionArgs extends KalturaRequestArgs {
    storageProfileId: number;
}
/**
 * Build request payload for service 'storageProfile' action 'get'.
 *
 * Usage: Get storage profile by id
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
export declare class StorageProfileGetAction extends KalturaRequest<KalturaStorageProfile> {
    storageProfileId: number;
    constructor(data: StorageProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}