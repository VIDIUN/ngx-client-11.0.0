import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VirusScanProfileUpdateActionArgs extends KalturaRequestArgs {
    virusScanProfileId: number;
    virusScanProfile: KalturaVirusScanProfile;
}
/**
 * Build request payload for service 'virusScanProfile' action 'update'.
 *
 * Usage: Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export declare class VirusScanProfileUpdateAction extends KalturaRequest<KalturaVirusScanProfile> {
    virusScanProfileId: number;
    virusScanProfile: KalturaVirusScanProfile;
    constructor(data: VirusScanProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
