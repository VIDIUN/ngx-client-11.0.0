/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaAdCuePointBaseFilter extends KalturaCuePointFilter {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFkQ3VlUG9pbnRCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQWRDdWVQb2ludEJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTNGLE1BQU0sa0NBQW1DLFNBQVEscUJBQXFCOzs7O0lBWWxFLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDbEgsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMvQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWRQcm90b2NvbFR5cGUgfSBmcm9tICcuL0thbHR1cmFBZFByb3RvY29sVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIsIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFDdWVQb2ludEZpbHRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUFkQ3VlUG9pbnRCYXNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXJBcmdzIHtcbiAgICBwcm90b2NvbFR5cGVFcXVhbD8gOiBLYWx0dXJhQWRQcm90b2NvbFR5cGU7XG5cdHByb3RvY29sVHlwZUluPyA6IHN0cmluZztcblx0dGl0bGVMaWtlPyA6IHN0cmluZztcblx0dGl0bGVNdWx0aUxpa2VPcj8gOiBzdHJpbmc7XG5cdHRpdGxlTXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGVuZFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUFkQ3VlUG9pbnRCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYUN1ZVBvaW50RmlsdGVyIHtcblxuICAgIHByb3RvY29sVHlwZUVxdWFsIDogS2FsdHVyYUFkUHJvdG9jb2xUeXBlO1xuXHRwcm90b2NvbFR5cGVJbiA6IHN0cmluZztcblx0dGl0bGVMaWtlIDogc3RyaW5nO1xuXHR0aXRsZU11bHRpTGlrZU9yIDogc3RyaW5nO1xuXHR0aXRsZU11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQWRDdWVQb2ludEJhc2VGaWx0ZXJBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUFkQ3VlUG9pbnRCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRwcm90b2NvbFR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBZFByb3RvY29sVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQWRQcm90b2NvbFR5cGUnIH0sXG5cdFx0XHRcdHByb3RvY29sVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlTGlrZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aXRsZU11bHRpTGlrZU9yIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlTXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQWRDdWVQb2ludEJhc2VGaWx0ZXInXSA9IEthbHR1cmFBZEN1ZVBvaW50QmFzZUZpbHRlcjsiXX0=