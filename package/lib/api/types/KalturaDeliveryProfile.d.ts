import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaDeliveryProfileType } from './KalturaDeliveryProfileType';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaDeliveryStatus } from './KalturaDeliveryStatus';
import { KalturaUrlRecognizer } from './KalturaUrlRecognizer';
import { KalturaUrlTokenizer } from './KalturaUrlTokenizer';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaAssetFilter } from './KalturaAssetFilter';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaDeliveryProfileArgs extends KalturaObjectBaseArgs {
    name?: string;
    type?: KalturaDeliveryProfileType;
    systemName?: string;
    description?: string;
    streamerType?: KalturaPlaybackProtocol;
    url?: string;
    status?: KalturaDeliveryStatus;
    recognizer?: KalturaUrlRecognizer;
    tokenizer?: KalturaUrlTokenizer;
    mediaProtocols?: string;
    priority?: number;
    extraParams?: string;
    supplementaryAssetsFilter?: KalturaAssetFilter;
}
export declare class KalturaDeliveryProfile extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    name: string;
    type: KalturaDeliveryProfileType;
    systemName: string;
    description: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    streamerType: KalturaPlaybackProtocol;
    url: string;
    readonly hostName: string;
    status: KalturaDeliveryStatus;
    recognizer: KalturaUrlRecognizer;
    tokenizer: KalturaUrlTokenizer;
    readonly isDefault: KalturaNullableBoolean;
    readonly parentId: number;
    mediaProtocols: string;
    priority: number;
    extraParams: string;
    supplementaryAssetsFilter: KalturaAssetFilter;
    constructor(data?: KalturaDeliveryProfileArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}