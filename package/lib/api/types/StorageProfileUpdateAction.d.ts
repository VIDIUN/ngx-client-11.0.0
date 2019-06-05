import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaStorageProfile } from './KalturaStorageProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface StorageProfileUpdateActionArgs extends KalturaRequestArgs {
    storageProfileId: number;
    storageProfile: KalturaStorageProfile;
}
/**
 * Build request payload for service 'storageProfile' action 'update'.
 *
 * Usage: Update storage profile by id
 *
 * Server response type:         KalturaStorageProfile
 * Server failure response type: KalturaAPIException
 */
export declare class StorageProfileUpdateAction extends KalturaRequest<KalturaStorageProfile> {
    storageProfileId: number;
    storageProfile: KalturaStorageProfile;
    constructor(data: StorageProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
