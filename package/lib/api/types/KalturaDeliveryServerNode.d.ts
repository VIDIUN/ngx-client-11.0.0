import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaServerNode, KalturaServerNodeArgs } from './KalturaServerNode';
export interface KalturaDeliveryServerNodeArgs extends KalturaServerNodeArgs {
    deliveryProfileIds?: KalturaKeyValue[];
}
export declare class KalturaDeliveryServerNode extends KalturaServerNode {
    deliveryProfileIds: KalturaKeyValue[];
    constructor(data?: KalturaDeliveryServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
