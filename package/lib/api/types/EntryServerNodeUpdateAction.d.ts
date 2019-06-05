import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryServerNodeUpdateActionArgs extends KalturaRequestArgs {
    id: number;
    entryServerNode: KalturaEntryServerNode;
}
/**
 * Build request payload for service 'entryServerNode' action 'update'.
 *
 *
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class EntryServerNodeUpdateAction extends KalturaRequest<KalturaEntryServerNode> {
    id: number;
    entryServerNode: KalturaEntryServerNode;
    constructor(data: EntryServerNodeUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
