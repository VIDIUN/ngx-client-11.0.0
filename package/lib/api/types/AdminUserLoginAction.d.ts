import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AdminUserLoginActionArgs extends KalturaRequestArgs {
    email: string;
    password: string;
    partnerId?: number;
}
/**
 * Build request payload for service 'adminUser' action 'login'.
 *
 * Usage: Get an admin session using admin email and password (Used for login to the KMC application)
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export declare class AdminUserLoginAction extends KalturaRequest<string> {
    email: string;
    password: string;
    partnerId: number;
    constructor(data: AdminUserLoginActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}