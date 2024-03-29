import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryServerNodeValidateRegisteredEntryServerNodeActionArgs extends KalturaRequestArgs {
    id: number;
}
/**
 * Build request payload for service 'entryServerNode' action 'validateRegisteredEntryServerNode'.
 *
 * Usage: Validates server node still registered on entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class EntryServerNodeValidateRegisteredEntryServerNodeAction extends KalturaRequest<void> {
    id: number;
    constructor(data: EntryServerNodeValidateRegisteredEntryServerNodeActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
