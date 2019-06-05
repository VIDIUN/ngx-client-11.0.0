import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VirusScanProfileAddActionArgs extends KalturaRequestArgs {
    virusScanProfile: KalturaVirusScanProfile;
}
/**
 * Build request payload for service 'virusScanProfile' action 'add'.
 *
 * Usage: Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export declare class VirusScanProfileAddAction extends KalturaRequest<KalturaVirusScanProfile> {
    virusScanProfile: KalturaVirusScanProfile;
    constructor(data: VirusScanProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}