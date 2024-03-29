import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaUiConfListResponse } from './KalturaUiConfListResponse';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SharepointExtensionListUiconfsActionArgs extends KalturaRequestArgs {
}
/**
 * Build request payload for service 'sharepointExtension' action 'listUiconfs'.
 *
 * Usage: list uiconfs for sharepoint extension
 *
 * Server response type:         KalturaUiConfListResponse
 * Server failure response type: KalturaAPIException
 */
export declare class SharepointExtensionListUiconfsAction extends KalturaRequest<KalturaUiConfListResponse> {
    constructor(data?: SharepointExtensionListUiconfsActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
