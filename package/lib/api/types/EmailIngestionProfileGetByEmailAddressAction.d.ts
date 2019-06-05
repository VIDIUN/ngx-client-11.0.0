import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EmailIngestionProfileGetByEmailAddressActionArgs extends KalturaRequestArgs {
    emailAddress: string;
}
/**
 * Build request payload for service 'EmailIngestionProfile' action 'getByEmailAddress'.
 *
 * Usage: Retrieve a EmailIngestionProfile by email address
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class EmailIngestionProfileGetByEmailAddressAction extends KalturaRequest<KalturaEmailIngestionProfile> {
    emailAddress: string;
    constructor(data: EmailIngestionProfileGetByEmailAddressActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
