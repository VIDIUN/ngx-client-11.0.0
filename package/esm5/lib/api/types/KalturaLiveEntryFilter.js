/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaLiveEntryBaseFilter } from './KalturaLiveEntryBaseFilter';
/**
 * @record
 */
export function KalturaLiveEntryFilterArgs() { }
/** @type {?|undefined} */
KalturaLiveEntryFilterArgs.prototype.isLive;
/** @type {?|undefined} */
KalturaLiveEntryFilterArgs.prototype.isRecordedEntryIdEmpty;
/** @type {?|undefined} */
KalturaLiveEntryFilterArgs.prototype.hasMediaServerHostname;
var KalturaLiveEntryFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaLiveEntryFilter, _super);
    function KalturaLiveEntryFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaLiveEntryFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaLiveEntryFilter' },
            isLive: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            isRecordedEntryIdEmpty: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasMediaServerHostname: { type: 's' }
        });
        return result;
    };
    return KalturaLiveEntryFilter;
}(KalturaLiveEntryBaseFilter));
export { KalturaLiveEntryFilter };
if (false) {
    /** @type {?} */
    KalturaLiveEntryFilter.prototype.isLive;
    /** @type {?} */
    KalturaLiveEntryFilter.prototype.isRecordedEntryIdEmpty;
    /** @type {?} */
    KalturaLiveEntryFilter.prototype.hasMediaServerHostname;
}
typesMappingStorage['KalturaLiveEntryFilter'] = KalturaLiveEntryFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUxpdmVFbnRyeUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUxpdmVFbnRyeUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7O0FBUzFHLElBQUE7SUFBNEMsa0RBQTBCO0lBTWxFLGdDQUFZLElBQWtDO2VBRTFDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsNkNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0UsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDekcsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN6SCxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDOUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpQ0FwQ0w7RUFZNEMsMEJBQTBCLEVBeUJyRSxDQUFBO0FBekJELGtDQXlCQzs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsd0JBQXdCLENBQUMsR0FBRyxzQkFBc0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFMaXZlRW50cnlCYXNlRmlsdGVyLCBLYWx0dXJhTGl2ZUVudHJ5QmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFMaXZlRW50cnlCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTGl2ZUVudHJ5RmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhTGl2ZUVudHJ5QmFzZUZpbHRlckFyZ3Mge1xuICAgIGlzTGl2ZT8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRpc1JlY29yZGVkRW50cnlJZEVtcHR5PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGhhc01lZGlhU2VydmVySG9zdG5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTGl2ZUVudHJ5RmlsdGVyIGV4dGVuZHMgS2FsdHVyYUxpdmVFbnRyeUJhc2VGaWx0ZXIge1xuXG4gICAgaXNMaXZlIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0aXNSZWNvcmRlZEVudHJ5SWRFbXB0eSA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGhhc01lZGlhU2VydmVySG9zdG5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFMaXZlRW50cnlGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUxpdmVFbnRyeUZpbHRlcicgfSxcblx0XHRcdFx0aXNMaXZlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRpc1JlY29yZGVkRW50cnlJZEVtcHR5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRoYXNNZWRpYVNlcnZlckhvc3RuYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFMaXZlRW50cnlGaWx0ZXInXSA9IEthbHR1cmFMaXZlRW50cnlGaWx0ZXI7Il19