import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface GenericDistributionProviderActionAddMrssTransformFromFileActionArgs extends KalturaUploadRequestArgs {
    id: number;
    xslFile: File;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssTransformFromFile'.
 *
 * Usage: Add MRSS transform file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionAddMrssTransformFromFileAction extends KalturaUploadRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    xslFile: File;
    constructor(data: GenericDistributionProviderActionAddMrssTransformFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}