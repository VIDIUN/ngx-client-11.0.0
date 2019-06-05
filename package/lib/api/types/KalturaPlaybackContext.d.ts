import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaybackSource } from './KalturaPlaybackSource';
import { KalturaFlavorAsset } from './KalturaFlavorAsset';
import { KalturaRuleAction } from './KalturaRuleAction';
import { KalturaAccessControlMessage } from './KalturaAccessControlMessage';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaPlaybackContextArgs extends KalturaObjectBaseArgs {
    sources?: KalturaPlaybackSource[];
    flavorAssets?: KalturaFlavorAsset[];
    actions?: KalturaRuleAction[];
    messages?: KalturaAccessControlMessage[];
}
export declare class KalturaPlaybackContext extends KalturaObjectBase {
    sources: KalturaPlaybackSource[];
    flavorAssets: KalturaFlavorAsset[];
    actions: KalturaRuleAction[];
    messages: KalturaAccessControlMessage[];
    constructor(data?: KalturaPlaybackContextArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
