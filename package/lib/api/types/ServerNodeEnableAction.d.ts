import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeEnableActionArgs extends KalturaRequestArgs {
    serverNodeId: string;
}
/**
 * Build request payload for service 'serverNode' action 'enable'.
 *
 * Usage: Enable server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeEnableAction extends KalturaRequest<KalturaServerNode> {
    serverNodeId: string;
    constructor(data: ServerNodeEnableActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
