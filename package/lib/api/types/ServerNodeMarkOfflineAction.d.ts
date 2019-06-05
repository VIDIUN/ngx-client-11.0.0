import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeMarkOfflineActionArgs extends KalturaRequestArgs {
    serverNodeId: string;
}
/**
 * Build request payload for service 'serverNode' action 'markOffline'.
 *
 * Usage: Mark server node offline
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeMarkOfflineAction extends KalturaRequest<KalturaServerNode> {
    serverNodeId: string;
    constructor(data: ServerNodeMarkOfflineActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}