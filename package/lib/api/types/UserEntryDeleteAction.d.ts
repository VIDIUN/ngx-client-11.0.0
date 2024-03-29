import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEntryDeleteActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'userEntry' action 'delete'.
 *
 *
 *
 * Server response type:         KalturaUserEntry
 * Server failure response type: KalturaAPIException
 */
export declare class UserEntryDeleteAction extends KalturaRequest<KalturaUserEntry> {
    id: number;
    constructor(data: UserEntryDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
