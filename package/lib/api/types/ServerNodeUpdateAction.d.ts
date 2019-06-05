import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeUpdateActionArgs extends KalturaRequestArgs {
    serverNodeId: number;
    serverNode: KalturaServerNode;
}
/**
 * Build request payload for service 'serverNode' action 'update'.
 *
 * Usage: Update server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeUpdateAction extends KalturaRequest<KalturaServerNode> {
    serverNodeId: number;
    serverNode: KalturaServerNode;
    constructor(data: ServerNodeUpdateActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
