import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSessionInfo } from './KalturaSessionInfo';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface AppTokenStartSessionActionArgs extends KalturaRequestArgs {
    id: string;
    tokenHash: string;
    userId?: string;
    type?: KalturaSessionType;
    expiry?: number;
}
/**
 * Build request payload for service 'appToken' action 'startSession'.
 *
 * Usage: Starts a new KS (kaltura Session) based on application authentication token id
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
export declare class AppTokenStartSessionAction extends KalturaRequest<KalturaSessionInfo> {
    id: string;
    tokenHash: string;
    userId: string;
    type: KalturaSessionType;
    expiry: number;
    constructor(data: AppTokenStartSessionActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
