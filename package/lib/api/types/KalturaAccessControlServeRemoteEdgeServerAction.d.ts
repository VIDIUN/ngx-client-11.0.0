import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlServeRemoteEdgeServerActionArgs extends KalturaRuleActionArgs {
    edgeServerIds?: string;
}
export declare class KalturaAccessControlServeRemoteEdgeServerAction extends KalturaRuleAction {
    edgeServerIds: string;
    constructor(data?: KalturaAccessControlServeRemoteEdgeServerActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
