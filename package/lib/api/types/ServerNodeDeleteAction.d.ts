import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeDeleteActionArgs extends KalturaRequestArgs {
    serverNodeId: string;
}
/**
 * Build request payload for service 'serverNode' action 'delete'.
 *
 * Usage: delete server node by id
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeDeleteAction extends KalturaRequest<void> {
    serverNodeId: string;
    constructor(data: ServerNodeDeleteActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
