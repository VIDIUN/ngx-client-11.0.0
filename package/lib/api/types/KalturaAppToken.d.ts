import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaAppTokenStatus } from './KalturaAppTokenStatus';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaAppTokenHashType } from './KalturaAppTokenHashType';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';
export interface KalturaAppTokenArgs extends KalturaObjectBaseArgs {
    expiry?: number;
    sessionType?: KalturaSessionType;
    sessionUserId?: string;
    sessionDuration?: number;
    sessionPrivileges?: string;
    hashType?: KalturaAppTokenHashType;
    description?: string;
}
export declare class KalturaAppToken extends KalturaObjectBase {
    readonly id: string;
    readonly token: string;
    readonly partnerId: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly status: KalturaAppTokenStatus;
    expiry: number;
    sessionType: KalturaSessionType;
    sessionUserId: string;
    sessionDuration: number;
    sessionPrivileges: string;
    hashType: KalturaAppTokenHashType;
    description: string;
    constructor(data?: KalturaAppTokenArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}