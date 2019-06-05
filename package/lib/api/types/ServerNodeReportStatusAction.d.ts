import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNode } from './KalturaServerNode';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface ServerNodeReportStatusActionArgs extends KalturaRequestArgs {
    hostName: string;
    serverNode?: KalturaServerNode;
}
/**
 * Build request payload for service 'serverNode' action 'reportStatus'.
 *
 * Usage: Update server node status
 *
 * Server response type:         KalturaServerNode
 * Server failure response type: KalturaAPIException
 */
export declare class ServerNodeReportStatusAction extends KalturaRequest<KalturaServerNode> {
    hostName: string;
    serverNode: KalturaServerNode;
    constructor(data: ServerNodeReportStatusActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
