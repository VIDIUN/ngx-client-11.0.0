import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryServerNode, KalturaDeliveryServerNodeArgs } from './KalturaDeliveryServerNode';
export interface KalturaEdgeServerNodeArgs extends KalturaDeliveryServerNodeArgs {
    playbackDomain?: string;
    config?: string;
}
export declare class KalturaEdgeServerNode extends KalturaDeliveryServerNode {
    playbackDomain: string;
    config: string;
    constructor(data?: KalturaEdgeServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
