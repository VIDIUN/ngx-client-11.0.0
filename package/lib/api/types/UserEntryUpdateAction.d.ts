import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntry } from './KalturaUserEntry';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEntryUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    userEntry: KalturaUserEntry;
}
/**
 * Build request payload for service 'userEntry' action 'update'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class UserEntryUpdateAction extends KalturaRequest<void> {
    id: number;
    userEntry: KalturaUserEntry;
    constructor(data: UserEntryUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
