import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaSearchAuthData } from './KalturaSearchAuthData';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SearchExternalLoginActionArgs extends KalturaRequestArgs {
    searchSource: KalturaSearchProviderType;
    userName: string;
    password: string;
}
/**
 * Build request payload for service 'search' action 'externalLogin'.
 *
 *
 *
 * Server response type:         KalturaSearchAuthData
 * Server failure response type: KalturaAPIException
 */
export declare class SearchExternalLoginAction extends KalturaRequest<KalturaSearchAuthData> {
    searchSource: KalturaSearchProviderType;
    userName: string;
    password: string;
    constructor(data: SearchExternalLoginActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
