/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function LiveStreamUpdateOfflineThumbnailJpegActionArgs() { }
/** @type {?} */
LiveStreamUpdateOfflineThumbnailJpegActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamUpdateOfflineThumbnailJpegActionArgs.prototype.fileData;
/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailJpeg'.
 *
 * Usage: Update live stream entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailJpeg'.
 *
 * Usage: Update live stream entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
LiveStreamUpdateOfflineThumbnailJpegAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamUpdateOfflineThumbnailJpegAction, _super);
    function LiveStreamUpdateOfflineThumbnailJpegAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveStreamEntry', responseConstructor: KalturaLiveStreamEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamUpdateOfflineThumbnailJpegAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'updateOfflineThumbnailJpeg' },
            entryId: { type: 's' },
            fileData: { type: 'f' }
        });
        return result;
    };
    return LiveStreamUpdateOfflineThumbnailJpegAction;
}(KalturaUploadRequest));
/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailJpeg'.
 *
 * Usage: Update live stream entry thumbnail using a raw jpeg file
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamUpdateOfflineThumbnailJpegAction };
if (false) {
    /** @type {?} */
    LiveStreamUpdateOfflineThumbnailJpegAction.prototype.entryId;
    /** @type {?} */
    LiveStreamUpdateOfflineThumbnailJpegAction.prototype.fileData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbVVwZGF0ZU9mZmxpbmVUaHVtYm5haWxKcGVnQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlU3RyZWFtVXBkYXRlT2ZmbGluZVRodW1ibmFpbEpwZWdBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTNGOzs7Ozs7OztBQUFBO0lBQWdFLHNFQUE0QztJQUt4RyxvREFBWSxJQUFxRDtlQUU3RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx3QkFBd0IsRUFBRSxtQkFBbUIsRUFBRyxzQkFBc0IsRUFBRyxDQUFDO0tBQ2hJOzs7O0lBRVMsaUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsWUFBWSxFQUFFO1lBQzVELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9ELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3FEQTFDTDtFQW1CZ0Usb0JBQW9CLEVBd0JuRixDQUFBOzs7Ozs7Ozs7QUF4QkQsc0RBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlU3RyZWFtRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlU3RyZWFtRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVN0cmVhbVVwZGF0ZU9mZmxpbmVUaHVtYm5haWxKcGVnQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGZpbGVEYXRhIDogRmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdHJlYW0nIGFjdGlvbiAndXBkYXRlT2ZmbGluZVRodW1ibmFpbEpwZWcnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgbGl2ZSBzdHJlYW0gZW50cnkgdGh1bWJuYWlsIHVzaW5nIGEgcmF3IGpwZWcgZmlsZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlU3RyZWFtRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW1VcGRhdGVPZmZsaW5lVGh1bWJuYWlsSnBlZ0FjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PEthbHR1cmFMaXZlU3RyZWFtRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGZpbGVEYXRhIDogRmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtVXBkYXRlT2ZmbGluZVRodW1ibmFpbEpwZWdBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVTdHJlYW1FbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZXN0cmVhbScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZU9mZmxpbmVUaHVtYm5haWxKcGVnJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVEYXRhIDogeyB0eXBlIDogJ2YnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==