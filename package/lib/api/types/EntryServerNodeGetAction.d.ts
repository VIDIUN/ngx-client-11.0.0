import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaEntryServerNode } from './KalturaEntryServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface EntryServerNodeGetActionArgs extends KalturaRequestArgs {
    id: string;
}
/**
 * Build request payload for service 'entryServerNode' action 'get'.
 *
 *
 *
 * Server response type:         KalturaEntryServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class EntryServerNodeGetAction extends KalturaRequest<KalturaEntryServerNode> {
    id: string;
    constructor(data: EntryServerNodeGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
