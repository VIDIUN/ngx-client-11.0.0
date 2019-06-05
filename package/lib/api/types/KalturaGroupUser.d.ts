import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGroupUserStatus } from './KalturaGroupUserStatus';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaGroupUserArgs extends KalturaObjectBaseArgs {
    userId?: string;
    groupId?: string;
}
export declare class KalturaGroupUser extends KalturaObjectBase {
    userId: string;
    groupId: string;
    readonly status: KalturaGroupUserStatus;
    readonly partnerId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    constructor(data?: KalturaGroupUserArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
