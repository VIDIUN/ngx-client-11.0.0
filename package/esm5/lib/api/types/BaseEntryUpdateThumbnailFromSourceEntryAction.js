/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryUpdateThumbnailFromSourceEntryActionArgs() { }
/** @type {?} */
BaseEntryUpdateThumbnailFromSourceEntryActionArgs.prototype.entryId;
/** @type {?} */
BaseEntryUpdateThumbnailFromSourceEntryActionArgs.prototype.sourceEntryId;
/** @type {?} */
BaseEntryUpdateThumbnailFromSourceEntryActionArgs.prototype.timeOffset;
/**
 * Build request payload for service 'baseEntry' action 'updateThumbnailFromSourceEntry'.
 *
 * Usage: Update entry thumbnail from a different entry by a specified time offset (in seconds)
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'updateThumbnailFromSourceEntry'.
 *
 * Usage: Update entry thumbnail from a different entry by a specified time offset (in seconds)
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
BaseEntryUpdateThumbnailFromSourceEntryAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryUpdateThumbnailFromSourceEntryAction, _super);
    function BaseEntryUpdateThumbnailFromSourceEntryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryUpdateThumbnailFromSourceEntryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'updateThumbnailFromSourceEntry' },
            entryId: { type: 's' },
            sourceEntryId: { type: 's' },
            timeOffset: { type: 'n' }
        });
        return result;
    };
    return BaseEntryUpdateThumbnailFromSourceEntryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'updateThumbnailFromSourceEntry'.
 *
 * Usage: Update entry thumbnail from a different entry by a specified time offset (in seconds)
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryUpdateThumbnailFromSourceEntryAction };
if (false) {
    /** @type {?} */
    BaseEntryUpdateThumbnailFromSourceEntryAction.prototype.entryId;
    /** @type {?} */
    BaseEntryUpdateThumbnailFromSourceEntryAction.prototype.sourceEntryId;
    /** @type {?} */
    BaseEntryUpdateThumbnailFromSourceEntryAction.prototype.timeOffset;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5VXBkYXRlVGh1bWJuYWlsRnJvbVNvdXJjZUVudHJ5QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CYXNlRW50cnlVcGRhdGVUaHVtYm5haWxGcm9tU291cmNlRW50cnlBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0J4RTs7Ozs7Ozs7QUFBQTtJQUFtRSx5RUFBZ0M7SUFNL0YsdURBQVksSUFBd0Q7ZUFFaEUsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLG9FQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dEQTdDTDtFQW9CbUUsY0FBYyxFQTBCaEYsQ0FBQTs7Ozs7Ozs7O0FBMUJELHlEQTBCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQmFzZUVudHJ5IH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUVudHJ5VXBkYXRlVGh1bWJuYWlsRnJvbVNvdXJjZUVudHJ5QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHNvdXJjZUVudHJ5SWQgOiBzdHJpbmc7XG5cdHRpbWVPZmZzZXQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdiYXNlRW50cnknIGFjdGlvbiAndXBkYXRlVGh1bWJuYWlsRnJvbVNvdXJjZUVudHJ5Jy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGVudHJ5IHRodW1ibmFpbCBmcm9tIGEgZGlmZmVyZW50IGVudHJ5IGJ5IGEgc3BlY2lmaWVkIHRpbWUgb2Zmc2V0IChpbiBzZWNvbmRzKVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCYXNlRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFbnRyeVVwZGF0ZVRodW1ibmFpbEZyb21Tb3VyY2VFbnRyeUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdHNvdXJjZUVudHJ5SWQgOiBzdHJpbmc7XG5cdHRpbWVPZmZzZXQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQmFzZUVudHJ5VXBkYXRlVGh1bWJuYWlsRnJvbVNvdXJjZUVudHJ5QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Jhc2VlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZVRodW1ibmFpbEZyb21Tb3VyY2VFbnRyeScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzb3VyY2VFbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpbWVPZmZzZXQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19