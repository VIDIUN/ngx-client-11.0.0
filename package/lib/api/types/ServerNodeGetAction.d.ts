import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeGetActionArgs extends KalturaRequestArgs {
    serverNodeId: number;
}
/**
 * Build request payload for service 'serverNode' action 'get'.
 *
 * Usage: Get server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeGetAction extends KalturaRequest<KalturaServerNode> {
    serverNodeId: number;
    constructor(data: ServerNodeGetActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
