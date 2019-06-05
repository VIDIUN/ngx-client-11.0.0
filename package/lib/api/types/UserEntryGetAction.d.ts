import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEntryGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'userEntry' action 'get'.
 *
 *
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 */
export declare class UserEntryGetAction extends KalturaRequest<KalturaUserEntry> {
    id: string;
    constructor(data: UserEntryGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}