import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUserEntryFilter } from './KalturaUserEntryFilter';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface UserEntryBulkDeleteActionArgs extends KalturaRequestArgs {
    filter: KalturaUserEntryFilter;
}
/**
 * Build request payload for service 'userEntry' action 'bulkDelete'.
 *
 *
 *
 * Server response type:         number
 * Server failure response type: KalturaAPIException
 */
export declare class UserEntryBulkDeleteAction extends KalturaRequest<number> {
    filter: KalturaUserEntryFilter;
    constructor(data: UserEntryBulkDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
