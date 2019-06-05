/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveStreamEntry } from './KalturaLiveStreamEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamUpdateOfflineThumbnailFromUrlActionArgs() { }
/** @type {?} */
LiveStreamUpdateOfflineThumbnailFromUrlActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamUpdateOfflineThumbnailFromUrlActionArgs.prototype.url;
/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
LiveStreamUpdateOfflineThumbnailFromUrlAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamUpdateOfflineThumbnailFromUrlAction, _super);
    function LiveStreamUpdateOfflineThumbnailFromUrlAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveStreamEntry', responseConstructor: KalturaLiveStreamEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamUpdateOfflineThumbnailFromUrlAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'updateOfflineThumbnailFromUrl' },
            entryId: { type: 's' },
            url: { type: 's' }
        });
        return result;
    };
    return LiveStreamUpdateOfflineThumbnailFromUrlAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'updateOfflineThumbnailFromUrl'.
 *
 * Usage: Update entry thumbnail using url
 *
 * Server response type:         KalturaLiveStreamEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamUpdateOfflineThumbnailFromUrlAction };
if (false) {
    /** @type {?} */
    LiveStreamUpdateOfflineThumbnailFromUrlAction.prototype.entryId;
    /** @type {?} */
    LiveStreamUpdateOfflineThumbnailFromUrlAction.prototype.url;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbVVwZGF0ZU9mZmxpbmVUaHVtYm5haWxGcm9tVXJsQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9MaXZlU3RyZWFtVXBkYXRlT2ZmbGluZVRodW1ibmFpbEZyb21VcmxBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFtRSx5RUFBc0M7SUFLckcsdURBQVksSUFBd0Q7ZUFFaEUsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLG9FQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywrQkFBK0IsRUFBRTtZQUNsRSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dEQTFDTDtFQW1CbUUsY0FBYyxFQXdCaEYsQ0FBQTs7Ozs7Ozs7O0FBeEJELHlEQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGl2ZVN0cmVhbUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhTGl2ZVN0cmVhbUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZVN0cmVhbVVwZGF0ZU9mZmxpbmVUaHVtYm5haWxGcm9tVXJsQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHVybCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2xpdmVTdHJlYW0nIGFjdGlvbiAndXBkYXRlT2ZmbGluZVRodW1ibmFpbEZyb21VcmwnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgZW50cnkgdGh1bWJuYWlsIHVzaW5nIHVybFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFMaXZlU3RyZWFtRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIExpdmVTdHJlYW1VcGRhdGVPZmZsaW5lVGh1bWJuYWlsRnJvbVVybEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlU3RyZWFtRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtVXBkYXRlT2ZmbGluZVRodW1ibmFpbEZyb21VcmxBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFMaXZlU3RyZWFtRW50cnknLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxpdmVTdHJlYW1FbnRyeSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGl2ZXN0cmVhbScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZU9mZmxpbmVUaHVtYm5haWxGcm9tVXJsJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=