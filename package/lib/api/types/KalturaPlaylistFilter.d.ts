import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaPlaylistBaseFilter, KalturaPlaylistBaseFilterArgs } from './KalturaPlaylistBaseFilter';
export interface KalturaPlaylistFilterArgs extends KalturaPlaylistBaseFilterArgs {
}
export declare class KalturaPlaylistFilter extends KalturaPlaylistBaseFilter {
    constructor(data?: KalturaPlaylistFilterArgs);
    protected _getMetadata(): KalturaObjectMetadata;
}
