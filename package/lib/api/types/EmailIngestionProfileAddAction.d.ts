import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EmailIngestionProfileAddActionArgs extends KalturaRequestArgs {
    EmailIP: KalturaEmailIngestionProfile;
}
/**
 * Build request payload for service 'EmailIngestionProfile' action 'add'.
 *
 * Usage: EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class EmailIngestionProfileAddAction extends KalturaRequest<KalturaEmailIngestionProfile> {
    EmailIP: KalturaEmailIngestionProfile;
    constructor(data: EmailIngestionProfileAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
