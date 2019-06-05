import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEmailIngestionProfile } from './KalturaEmailIngestionProfile';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EmailIngestionProfileGetActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'EmailIngestionProfile' action 'get'.
 *
 * Usage: Retrieve a EmailIngestionProfile by id
 *
 * Server response type:         KalturaEmailIngestionProfile
 * Server failure response type: KalturaAPIException
 */
export declare class EmailIngestionProfileGetAction extends KalturaRequest<KalturaEmailIngestionProfile> {
    id: number;
    constructor(data: EmailIngestionProfileGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}