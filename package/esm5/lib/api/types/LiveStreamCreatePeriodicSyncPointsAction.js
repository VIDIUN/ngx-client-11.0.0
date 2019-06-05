/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamCreatePeriodicSyncPointsActionArgs() { }
/** @type {?} */
LiveStreamCreatePeriodicSyncPointsActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamCreatePeriodicSyncPointsActionArgs.prototype.interval;
/** @type {?} */
LiveStreamCreatePeriodicSyncPointsActionArgs.prototype.duration;
/**
 * Build request payload for service 'liveStream' action 'createPeriodicSyncPoints'.
 *
 * Usage: Creates perioding metadata sync-point events on a live stream
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'createPeriodicSyncPoints'.
 *
 * Usage: Creates perioding metadata sync-point events on a live stream
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
LiveStreamCreatePeriodicSyncPointsAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamCreatePeriodicSyncPointsAction, _super);
    function LiveStreamCreatePeriodicSyncPointsAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamCreatePeriodicSyncPointsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'createPeriodicSyncPoints' },
            entryId: { type: 's' },
            interval: { type: 'n' },
            duration: { type: 'n' }
        });
        return result;
    };
    return LiveStreamCreatePeriodicSyncPointsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'createPeriodicSyncPoints'.
 *
 * Usage: Creates perioding metadata sync-point events on a live stream
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamCreatePeriodicSyncPointsAction };
if (false) {
    /** @type {?} */
    LiveStreamCreatePeriodicSyncPointsAction.prototype.entryId;
    /** @type {?} */
    LiveStreamCreatePeriodicSyncPointsAction.prototype.interval;
    /** @type {?} */
    LiveStreamCreatePeriodicSyncPointsAction.prototype.duration;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUNyZWF0ZVBlcmlvZGljU3luY1BvaW50c0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTGl2ZVN0cmVhbUNyZWF0ZVBlcmlvZGljU3luY1BvaW50c0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQThELG9FQUFvQjtJQU05RSxrREFBWSxJQUFtRDtlQUUzRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUywrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0QsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDaEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttREE3Q0w7RUFvQjhELGNBQWMsRUEwQjNFLENBQUE7Ozs7Ozs7OztBQTFCRCxvREEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpdmVTdHJlYW1DcmVhdGVQZXJpb2RpY1N5bmNQb2ludHNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0aW50ZXJ2YWwgOiBudW1iZXI7XG5cdGR1cmF0aW9uIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnbGl2ZVN0cmVhbScgYWN0aW9uICdjcmVhdGVQZXJpb2RpY1N5bmNQb2ludHMnLlxuICpcbiAqIFVzYWdlOiBDcmVhdGVzIHBlcmlvZGluZyBtZXRhZGF0YSBzeW5jLXBvaW50IGV2ZW50cyBvbiBhIGxpdmUgc3RyZWFtXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgTGl2ZVN0cmVhbUNyZWF0ZVBlcmlvZGljU3luY1BvaW50c0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHZvaWQ+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGludGVydmFsIDogbnVtYmVyO1xuXHRkdXJhdGlvbiA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtQ3JlYXRlUGVyaW9kaWNTeW5jUG9pbnRzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAndicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlc3RyZWFtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY3JlYXRlUGVyaW9kaWNTeW5jUG9pbnRzJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGludGVydmFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==