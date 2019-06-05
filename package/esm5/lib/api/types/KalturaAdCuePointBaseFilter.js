/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAdProtocolType } from './KalturaAdProtocolType';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaAdCuePointBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.protocolTypeEqual;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.protocolTypeIn;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.titleLike;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.titleMultiLikeOr;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.titleMultiLikeAnd;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.endTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.endTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.durationGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAdCuePointBaseFilterArgs.prototype.durationLessThanOrEqual;
var KalturaAdCuePointBaseFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaAdCuePointBaseFilter, _super);
    function KalturaAdCuePointBaseFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaAdCuePointBaseFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaAdCuePointBaseFilter' },
            protocolTypeEqual: { type: 'es', subTypeConstructor: KalturaAdProtocolType, subType: 'KalturaAdProtocolType' },
            protocolTypeIn: { type: 's' },
            titleLike: { type: 's' },
            titleMultiLikeOr: { type: 's' },
            titleMultiLikeAnd: { type: 's' },
            endTimeGreaterThanOrEqual: { type: 'n' },
            endTimeLessThanOrEqual: { type: 'n' },
            durationGreaterThanOrEqual: { type: 'n' },
            durationLessThanOrEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaAdCuePointBaseFilter;
}(KalturaCuePointFilter));
export { KalturaAdCuePointBaseFilter };
if (false) {
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.protocolTypeEqual;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.protocolTypeIn;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.titleLike;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.titleMultiLikeOr;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.titleMultiLikeAnd;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.endTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.endTimeLessThanOrEqual;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.durationGreaterThanOrEqual;
    /** @type {?} */
    KalturaAdCuePointBaseFilter.prototype.durationLessThanOrEqual;
}
typesMappingStorage['KalturaAdCuePointBaseFilter'] = KalturaAdCuePointBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFkQ3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWRDdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUE2QixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWUzRixJQUFBO0lBQWlELHVEQUFxQjtJQVlsRSxxQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLGtEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDbEgsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7c0NBdERMO0VBa0JpRCxxQkFBcUIsRUFxQ3JFLENBQUE7QUFyQ0QsdUNBcUNDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBZFByb3RvY29sVHlwZSB9IGZyb20gJy4vS2FsdHVyYUFkUHJvdG9jb2xUeXBlJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludEZpbHRlciwgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQWRDdWVQb2ludEJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3Mge1xuICAgIHByb3RvY29sVHlwZUVxdWFsPyA6IEthbHR1cmFBZFByb3RvY29sVHlwZTtcblx0cHJvdG9jb2xUeXBlSW4/IDogc3RyaW5nO1xuXHR0aXRsZUxpa2U/IDogc3RyaW5nO1xuXHR0aXRsZU11bHRpTGlrZU9yPyA6IHN0cmluZztcblx0dGl0bGVNdWx0aUxpa2VBbmQ/IDogc3RyaW5nO1xuXHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGR1cmF0aW9uR3JlYXRlclRoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQWRDdWVQb2ludEJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIge1xuXG4gICAgcHJvdG9jb2xUeXBlRXF1YWwgOiBLYWx0dXJhQWRQcm90b2NvbFR5cGU7XG5cdHByb3RvY29sVHlwZUluIDogc3RyaW5nO1xuXHR0aXRsZUxpa2UgOiBzdHJpbmc7XG5cdHRpdGxlTXVsdGlMaWtlT3IgOiBzdHJpbmc7XG5cdHRpdGxlTXVsdGlMaWtlQW5kIDogc3RyaW5nO1xuXHRlbmRUaW1lR3JlYXRlclRoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRlbmRUaW1lTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFBZEN1ZVBvaW50QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQWRDdWVQb2ludEJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdHByb3RvY29sVHlwZUVxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFkUHJvdG9jb2xUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFBZFByb3RvY29sVHlwZScgfSxcblx0XHRcdFx0cHJvdG9jb2xUeXBlSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGl0bGVMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlTXVsdGlMaWtlT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGl0bGVNdWx0aUxpa2VBbmQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbmRUaW1lTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uR3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFBZEN1ZVBvaW50QmFzZUZpbHRlciddID0gS2FsdHVyYUFkQ3VlUG9pbnRCYXNlRmlsdGVyOyJdfQ==