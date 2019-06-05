import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaRoomDetailsArgs extends KalturaObjectBaseArgs {
    serverUrl?: string;
    entryId?: string;
    token?: string;
}
export declare class KalturaRoomDetails extends KalturaObjectBase {
    serverUrl: string;
    entryId: string;
    token: string;
    constructor(data?: KalturaRoomDetailsArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
