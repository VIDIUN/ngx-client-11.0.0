import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaSessionInfoArgs extends KalturaObjectBaseArgs {
}
export declare class KalturaSessionInfo extends KalturaObjectBase {
    readonly ks: string;
    readonly sessionType: KalturaSessionType;
    readonly partnerId: number;
    readonly userId: string;
    readonly expiry: number;
    readonly privileges: string;
    constructor(data?: KalturaSessionInfoArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}