/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEventFilter } from './KalturaEntryScheduleEventFilter';
/**
 * @record
 */
export function KalturaLiveStreamScheduleEventBaseFilterArgs() { }
var KalturaLiveStreamScheduleEventBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveStreamScheduleEventBaseFilter, _super);
    function KalturaLiveStreamScheduleEventBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveStreamScheduleEventBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveStreamScheduleEventBaseFilter' }
        });
        return result;
    };
    return KalturaLiveStreamScheduleEventBaseFilter;
}(KalturaEntryScheduleEventFilter));
export { KalturaLiveStreamScheduleEventBaseFilter };
typesMappingStorage['KalturaLiveStreamScheduleEventBaseFilter'] = KalturaLiveStreamScheduleEventBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QmFzZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QmFzZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQXVDLE1BQU0sbUNBQW1DLENBQUM7Ozs7O0FBT3pILElBQUE7SUFBOEQsb0VBQStCO0lBSXpGLGtEQUFZLElBQW9EO2VBRTVELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMENBQTBDLEVBQUU7U0FDcEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjttREE1Qkw7RUFTOEQsK0JBQStCLEVBb0I1RixDQUFBO0FBcEJELG9EQW9CQztBQUVELG1CQUFtQixDQUFDLDBDQUEwQyxDQUFDLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlciwgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXJBcmdzIHtcbiAgICBcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRGaWx0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlU3RyZWFtU2NoZWR1bGVFdmVudEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QmFzZUZpbHRlcicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QmFzZUZpbHRlciddID0gS2FsdHVyYUxpdmVTdHJlYW1TY2hlZHVsZUV2ZW50QmFzZUZpbHRlcjsiXX0=