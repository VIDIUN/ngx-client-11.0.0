import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeDisableActionArgs extends KalturaRequestArgs {
    serverNodeId: string;
}
/**
 * Build request payload for service 'serverNode' action 'disable'.
 *
 * Usage: Disable server node by id
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeDisableAction extends KalturaRequest<KalturaServerNode> {
    serverNodeId: string;
    constructor(data: ServerNodeDisableActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}