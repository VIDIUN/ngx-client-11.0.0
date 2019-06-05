import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderAction } from './KalturaGenericDistributionProviderAction';
import { KalturaUploadRequest, KalturaUploadRequestArgs } from '../kaltura-upload-request';
export interface GenericDistributionProviderActionAddMrssValidateFromFileActionArgs extends KalturaUploadRequestArgs {
    id: number;
    xsdFile: File;
}
/**
 * Build request payload for service 'genericDistributionProviderAction' action 'addMrssValidateFromFile'.
 *
 * Usage: Add MRSS validate file to generic distribution provider action
 *
 * Server response type:         KalturaGenericDistributionProviderAction
 * Server failure response type: KalturaAPIException
 */
export declare class GenericDistributionProviderActionAddMrssValidateFromFileAction extends KalturaUploadRequest<KalturaGenericDistributionProviderAction> {
    id: number;
    xsdFile: File;
    constructor(data: GenericDistributionProviderActionAddMrssValidateFromFileActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}