import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaVirusScanProfile } from './KalturaVirusScanProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface VirusScanProfileGetActionArgs extends KalturaRequestArgs {
    virusScanProfileId: number;
}
/**
 * Build request payload for service 'virusScanProfile' action 'get'.
 *
 * Usage: Retrieve an virus scan profile object by id
 *
 * Server response type:         KalturaVirusScanProfile
 * Server failure response type: KalturaAPIException
 */
export declare class VirusScanProfileGetAction extends KalturaRequest<KalturaVirusScanProfile> {
    virusScanProfileId: number;
    constructor(data: VirusScanProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}