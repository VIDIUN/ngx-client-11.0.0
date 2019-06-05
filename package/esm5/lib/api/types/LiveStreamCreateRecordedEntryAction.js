/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaLiveEntry } from './KalturaLiveEntry';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaEntryServerNodeStatus } from './KalturaEntryServerNodeStatus';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function LiveStreamCreateRecordedEntryActionArgs() { }
/** @type {?} */
LiveStreamCreateRecordedEntryActionArgs.prototype.entryId;
/** @type {?} */
LiveStreamCreateRecordedEntryActionArgs.prototype.mediaServerIndex;
/** @type {?} */
LiveStreamCreateRecordedEntryActionArgs.prototype.liveEntryStatus;
/**
 * Build request payload for service 'liveStream' action 'createRecordedEntry'.
 *
 * Usage: Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'liveStream' action 'createRecordedEntry'.
 *
 * Usage: Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
LiveStreamCreateRecordedEntryAction = /** @class */ (function (_super) {
    tslib_1.__extends(LiveStreamCreateRecordedEntryAction, _super);
    function LiveStreamCreateRecordedEntryAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaLiveEntry', responseConstructor: KalturaLiveEntry }) || this;
    }
    /**
     * @return {?}
     */
    LiveStreamCreateRecordedEntryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'livestream' },
            action: { type: 'c', default: 'createRecordedEntry' },
            entryId: { type: 's' },
            mediaServerIndex: { type: 'es', subTypeConstructor: KalturaEntryServerNodeType, subType: 'KalturaEntryServerNodeType' },
            liveEntryStatus: { type: 'en', subTypeConstructor: KalturaEntryServerNodeStatus, subType: 'KalturaEntryServerNodeStatus' }
        });
        return result;
    };
    return LiveStreamCreateRecordedEntryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'liveStream' action 'createRecordedEntry'.
 *
 * Usage: Create recorded entry id if it doesn't exist and make sure it happens on the DC that the live entry was created on
 *
 * Server response type:         KalturaLiveEntry
 * Server failure response type: KalturaAPIException
 */
export { LiveStreamCreateRecordedEntryAction };
if (false) {
    /** @type {?} */
    LiveStreamCreateRecordedEntryAction.prototype.entryId;
    /** @type {?} */
    LiveStreamCreateRecordedEntryAction.prototype.mediaServerIndex;
    /** @type {?} */
    LiveStreamCreateRecordedEntryAction.prototype.liveEntryStatus;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGl2ZVN0cmVhbUNyZWF0ZVJlY29yZGVkRW50cnlBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0xpdmVTdHJlYW1DcmVhdGVSZWNvcmRlZEVudHJ5QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBeUQsK0RBQWdDO0lBTXJGLDZDQUFZLElBQThDO2VBRXRELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGtCQUFrQixFQUFFLG1CQUFtQixFQUFHLGdCQUFnQixFQUFHLENBQUM7S0FDcEg7Ozs7SUFFUywwREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQzNILGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1NBQ3JILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7OENBL0NMO0VBc0J5RCxjQUFjLEVBMEJ0RSxDQUFBOzs7Ozs7Ozs7QUExQkQsK0NBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaXZlRW50cnkgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnknO1xuXG5pbXBvcnQgeyBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBMaXZlU3RyZWFtQ3JlYXRlUmVjb3JkZWRFbnRyeUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRtZWRpYVNlcnZlckluZGV4IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGU7XG5cdGxpdmVFbnRyeVN0YXR1cyA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXM7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdsaXZlU3RyZWFtJyBhY3Rpb24gJ2NyZWF0ZVJlY29yZGVkRW50cnknLlxuICpcbiAqIFVzYWdlOiBDcmVhdGUgcmVjb3JkZWQgZW50cnkgaWQgaWYgaXQgZG9lc24ndCBleGlzdCBhbmQgbWFrZSBzdXJlIGl0IGhhcHBlbnMgb24gdGhlIERDIHRoYXQgdGhlIGxpdmUgZW50cnkgd2FzIGNyZWF0ZWQgb25cbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhTGl2ZUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBMaXZlU3RyZWFtQ3JlYXRlUmVjb3JkZWRFbnRyeUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFMaXZlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdG1lZGlhU2VydmVySW5kZXggOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlVHlwZTtcblx0bGl2ZUVudHJ5U3RhdHVzIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBMaXZlU3RyZWFtQ3JlYXRlUmVjb3JkZWRFbnRyeUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUxpdmVFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGl2ZUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXZlc3RyZWFtJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY3JlYXRlUmVjb3JkZWRFbnRyeScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYVNlcnZlckluZGV4IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVR5cGUnIH0sXG5cdFx0XHRcdGxpdmVFbnRyeVN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZVN0YXR1cycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19