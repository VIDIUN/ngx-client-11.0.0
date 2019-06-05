import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StorageProfileAddActionArgs extends KalturaRequestArgs {
    storageProfile: KalturaStorageProfile;
}
/**
 * Build request payload for service 'storageProfile' action 'add'.
 *
 * Usage: Adds a storage profile to the Kaltura DB
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
export declare class StorageProfileAddAction extends KalturaRequest<KalturaStorageProfile> {
    storageProfile: KalturaStorageProfile;
    constructor(data: StorageProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}