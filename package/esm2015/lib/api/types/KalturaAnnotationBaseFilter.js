/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCuePointFilter } from './KalturaCuePointFilter';
/**
 * @record
 */
export function KalturaAnnotationBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.parentIdEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.parentIdIn;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.textLike;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.textMultiLikeOr;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.textMultiLikeAnd;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.endTimeGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.endTimeLessThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.durationGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.durationLessThanOrEqual;
/** @type {?|undefined} */
KalturaAnnotationBaseFilterArgs.prototype.isPublicEqual;
export class KalturaAnnotationBaseFilter extends KalturaCuePointFilter {
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
            objectType: { type: 'c', default: 'KalturaAnnotationBaseFilter' },
            parentIdEqual: { type: 's' },
            parentIdIn: { type: 's' },
            textLike: { type: 's' },
            textMultiLikeOr: { type: 's' },
            textMultiLikeAnd: { type: 's' },
            endTimeGreaterThanOrEqual: { type: 'n' },
            endTimeLessThanOrEqual: { type: 'n' },
            durationGreaterThanOrEqual: { type: 'n' },
            durationLessThanOrEqual: { type: 'n' },
            isPublicEqual: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.parentIdEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.parentIdIn;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.textLike;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.textMultiLikeOr;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.textMultiLikeAnd;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.endTimeGreaterThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.endTimeLessThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.durationGreaterThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.durationLessThanOrEqual;
    /** @type {?} */
    KalturaAnnotationBaseFilter.prototype.isPublicEqual;
}
typesMappingStorage['KalturaAnnotationBaseFilter'] = KalturaAnnotationBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUFubm90YXRpb25CYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQW5ub3RhdGlvbkJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQTZCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjNGLE1BQU0sa0NBQW1DLFNBQVEscUJBQXFCOzs7O0lBYWxFLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsMEJBQTBCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUN2RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNkJBQTZCLENBQUMsR0FBRywyQkFBMkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFDdWVQb2ludEZpbHRlciwgS2FsdHVyYUN1ZVBvaW50RmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUN1ZVBvaW50RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQW5ub3RhdGlvbkJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFDdWVQb2ludEZpbHRlckFyZ3Mge1xuICAgIHBhcmVudElkRXF1YWw/IDogc3RyaW5nO1xuXHRwYXJlbnRJZEluPyA6IHN0cmluZztcblx0dGV4dExpa2U/IDogc3RyaW5nO1xuXHR0ZXh0TXVsdGlMaWtlT3I/IDogc3RyaW5nO1xuXHR0ZXh0TXVsdGlMaWtlQW5kPyA6IHN0cmluZztcblx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGVuZFRpbWVMZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsPyA6IG51bWJlcjtcblx0aXNQdWJsaWNFcXVhbD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQW5ub3RhdGlvbkJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQ3VlUG9pbnRGaWx0ZXIge1xuXG4gICAgcGFyZW50SWRFcXVhbCA6IHN0cmluZztcblx0cGFyZW50SWRJbiA6IHN0cmluZztcblx0dGV4dExpa2UgOiBzdHJpbmc7XG5cdHRleHRNdWx0aUxpa2VPciA6IHN0cmluZztcblx0dGV4dE11bHRpTGlrZUFuZCA6IHN0cmluZztcblx0ZW5kVGltZUdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiBudW1iZXI7XG5cdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRpc1B1YmxpY0VxdWFsIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUFubm90YXRpb25CYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFBbm5vdGF0aW9uQmFzZUZpbHRlcicgfSxcblx0XHRcdFx0cGFyZW50SWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJlbnRJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRleHRMaWtlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRleHRNdWx0aUxpa2VPciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0ZXh0TXVsdGlMaWtlQW5kIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVuZFRpbWVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZW5kVGltZUxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkxlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRpc1B1YmxpY0VxdWFsIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQW5ub3RhdGlvbkJhc2VGaWx0ZXInXSA9IEthbHR1cmFBbm5vdGF0aW9uQmFzZUZpbHRlcjsiXX0=