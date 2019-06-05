/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaPlaybackProtocol } from './KalturaPlaybackProtocol';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs() { }
/** @type {?} */
LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamRemoveLiveStreamPushPublishConfigurationActionArgs.prototype.protocol;
/**
 * Build request payload for service 'liveStream' action 'removeLiveStreamPushPublishConfiguration'.
 *
 * Usage: Remove push publish configuration from entry
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export class LiveStreamRemoveLiveStreamPushPublishConfigurationAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaLiveStreamEntry', responseConstructor: KalturaLiveStreamEntry });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'removeLiveStreamPushPublishConfiguration' },
            entryId: { type: 's' },
            protocol: { type: 'es', subTypeConstructor: KalturaPlaybackProtocol, subType: 'KalturaPlaybackProtocol' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    LiveStreamRemoveLiveStreamPushPublishConfigurationAction.prototype.entryId;
    /** @type {?} */
    LiveStreamRemoveLiveStreamPushPublishConfigurationAction.prototype.protocol;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbVJlbW92ZUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1SZW1vdmVMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RSxNQUFNLCtEQUFnRSxTQUFRLGNBQXNDOzs7O0lBS2hILFlBQVksSUFBbUU7UUFFM0UsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUMsQ0FBQztLQUNqSTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBDQUEwQyxFQUFFO1lBQzdFLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1QkFBdUIsRUFBRSxPQUFPLEVBQUcseUJBQXlCLEVBQUU7U0FDcEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RyZWFtRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhUGxheWJhY2tQcm90b2NvbCB9IGZyb20gJy4vS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVN0cmVhbVJlbW92ZUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0cHJvdG9jb2wgOiBLYWx0dXJhUGxheWJhY2tQcm90b2NvbDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdHJlYW0nIGFjdGlvbiAncmVtb3ZlTGl2ZVN0cmVhbVB1c2hQdWJsaXNoQ29uZmlndXJhdGlvbicuXG4gKlxuICogVXNhZ2U6IFJlbW92ZSBwdXNoIHB1Ymxpc2ggY29uZmlndXJhdGlvbiBmcm9tIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUxpdmVTdHJlYW1FbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbVJlbW92ZUxpdmVTdHJlYW1QdXNoUHVibGlzaENvbmZpZ3VyYXRpb25BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5PiB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRwcm90b2NvbCA6IEthbHR1cmFQbGF5YmFja1Byb3RvY29sO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IExpdmVTdHJlYW1SZW1vdmVMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFMaXZlU3RyZWFtRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpdmVzdHJlYW0nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdyZW1vdmVMaXZlU3RyZWFtUHVzaFB1Ymxpc2hDb25maWd1cmF0aW9uJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHByb3RvY29sIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wsIHN1YlR5cGUgOiAnS2FsdHVyYVBsYXliYWNrUHJvdG9jb2wnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==