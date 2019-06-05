import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEntryAddActionArgs extends KalturaRequestArgs {
    userEntry: KalturaUserEntry;
}
/**
 * Build request payload for service 'userEntry' action 'add'.
 *
 * Usage: Adds a user_entry to the Kaltura DB
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 */
export declare class UserEntryAddAction extends KalturaRequest<KalturaUserEntry> {
    userEntry: KalturaUserEntry;
    constructor(data: UserEntryAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}