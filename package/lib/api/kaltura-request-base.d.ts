import { KalturaObjectBase, KalturaObjectBaseArgs } from './kaltura-object-base';
export interface KalturaRequestBaseArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaRequestBase extends KalturaObjectBase {
    private _networkTag;
    constructor(data: KalturaRequestBaseArgs);
    setNetworkTag(tag: string): this;
    getNetworkTag(): string;
}
