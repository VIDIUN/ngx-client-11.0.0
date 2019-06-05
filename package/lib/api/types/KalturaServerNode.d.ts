import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaServerNodeStatus } from './KalturaServerNodeStatus';
import { KalturaServerNodeType } from './KalturaServerNodeType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaServerNodeArgs extends KalturaObjectBaseArgs {
    name?: string;
    systemName?: string;
    description?: string;
    hostName?: string;
    tags?: string;
    parentId?: string;
}
export declare class KalturaServerNode extends KalturaObjectBase {
    readonly id: number;
    readonly partnerId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly heartbeatTime: Date;
    name: string;
    systemName: string;
    description: string;
    hostName: string;
    readonly status: KalturaServerNodeStatus;
    readonly type: KalturaServerNodeType;
    tags: string;
    readonly dc: number;
    parentId: string;
    constructor(data?: KalturaServerNodeArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}