import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData, KalturaConfigurableDistributionJobProviderDataArgs } from './KalturaConfigurableDistributionJobProviderData';
export interface KalturaYouTubeDistributionJobProviderDataArgs extends KalturaConfigurableDistributionJobProviderDataArgs {
    videoAssetFilePath?: string;
    thumbAssetFilePath?: string;
    captionAssetIds?: string;
    sftpDirectory?: string;
    sftpMetadataFilename?: string;
    currentPlaylists?: string;
    newPlaylists?: string;
    submitXml?: string;
    updateXml?: string;
    deleteXml?: string;
    googleClientId?: string;
    googleClientSecret?: string;
    googleTokenData?: string;
}
export declare class KalturaYouTubeDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    videoAssetFilePath: string;
    thumbAssetFilePath: string;
    captionAssetIds: string;
    sftpDirectory: string;
    sftpMetadataFilename: string;
    currentPlaylists: string;
    newPlaylists: string;
    submitXml: string;
    updateXml: string;
    deleteXml: string;
    googleClientId: string;
    googleClientSecret: string;
    googleTokenData: string;
    constructor(data?: KalturaYouTubeDistributionJobProviderDataArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}