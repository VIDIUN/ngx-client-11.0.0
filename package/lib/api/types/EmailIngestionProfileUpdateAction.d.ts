import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EmailIngestionProfileUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    EmailIP: KalturaEmailIngestionProfile;
}
/**
 * Build request payload for service 'EmailIngestionProfile' action 'update'.
 *
 * Usage: Update an existing EmailIngestionProfile
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class EmailIngestionProfileUpdateAction extends KalturaRequest<KalturaEmailIngestionProfile> {
    id: number;
    EmailIP: KalturaEmailIngestionProfile;
    constructor(data: EmailIngestionProfileUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
