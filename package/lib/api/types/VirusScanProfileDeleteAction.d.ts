import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VirusScanProfileDeleteActionArgs extends KalturaRequestArgs {
    virusScanProfileId: number;
}
/**
 * Build request payload for service 'virusScanProfile' action 'delete'.
 *
 * Usage: Mark the virus scan profile as deleted
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export declare class VirusScanProfileDeleteAction extends KalturaRequest<KalturaVirusScanProfile> {
    virusScanProfileId: number;
    constructor(data: VirusScanProfileDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
