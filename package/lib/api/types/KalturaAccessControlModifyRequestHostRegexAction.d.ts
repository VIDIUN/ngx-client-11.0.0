import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRuleAction, KalturaRuleActionArgs } from './KalturaRuleAction';
export interface KalturaAccessControlModifyRequestHostRegexActionArgs extends KalturaRuleActionArgs {
    pattern?: string;
    replacement?: string;
    replacmenServerNodeId?: number;
}
export declare class KalturaAccessControlModifyRequestHostRegexAction extends KalturaRuleAction {
    pattern: string;
    replacement: string;
    replacmenServerNodeId: number;
    constructor(data?: KalturaAccessControlModifyRequestHostRegexActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
