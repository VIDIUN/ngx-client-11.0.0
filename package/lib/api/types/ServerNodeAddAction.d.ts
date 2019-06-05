import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeAddActionArgs extends KalturaRequestArgs {
    serverNode: KalturaServerNode;
}
/**
 * Build request payload for service 'serverNode' action 'add'.
 *
 * Usage: Adds a server node to the Kaltura DB
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeAddAction extends KalturaRequest<KalturaServerNode> {
    serverNode: KalturaServerNode;
    constructor(data: ServerNodeAddActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
