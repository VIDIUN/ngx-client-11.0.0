import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAssetArgs extends KalturaObjectBaseArgs {
    tags?: string;
    fileExt?: string;
    partnerData?: string;
    partnerDescription?: string;
    actualSourceAssetParamsIds?: string;
}
export declare class KalturaAsset extends KalturaObjectBase {
    readonly id: string;
    readonly entryId: string;
    readonly partnerId: number;
    readonly version: number;
    readonly size: number;
    tags: string;
    fileExt: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly deletedAt: Date;
    readonly description: string;
    partnerData: string;
    partnerDescription: string;
    actualSourceAssetParamsIds: string;
    constructor(data?: KalturaAssetArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
