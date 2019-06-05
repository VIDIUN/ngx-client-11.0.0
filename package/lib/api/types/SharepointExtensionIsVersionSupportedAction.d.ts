import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaRequest, KalturaRequestArgs } from '../kaltura-request';
export interface SharepointExtensionIsVersionSupportedActionArgs extends KalturaRequestArgs {
    serverMajor: number;
    serverMinor: number;
    serverBuild: number;
}
/**
 * Build request payload for service 'sharepointExtension' action 'isVersionSupported'.
 *
 * Usage: Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension)
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export declare class SharepointExtensionIsVersionSupportedAction extends KalturaRequest<boolean> {
    serverMajor: number;
    serverMinor: number;
    serverBuild: number;
    constructor(data: SharepointExtensionIsVersionSupportedActionArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}