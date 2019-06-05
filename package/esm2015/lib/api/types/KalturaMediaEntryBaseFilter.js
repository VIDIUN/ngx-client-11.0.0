/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaSourceType } from './KalturaSourceType';
import { KalturaPlayableEntryFilter } from './KalturaPlayableEntryFilter';
/**
 * @record
 */
export function KalturaMediaEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaTypeEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaTypeIn;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeNotEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeIn;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.sourceTypeNotIn;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaDateGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.mediaDateLessThanOrEqual;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.flavorParamsIdsMatchOr;
/** @type {?|undefined} */
KalturaMediaEntryBaseFilterArgs.prototype.flavorParamsIdsMatchAnd;
export class KalturaMediaEntryBaseFilter extends KalturaPlayableEntryFilter {
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
            objectType: { type: 'c', default: 'KalturaMediaEntryBaseFilter' },
            mediaTypeEqual: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            mediaTypeIn: { type: 's' },
            sourceTypeEqual: { type: 'es', subTypeConstructor: KalturaSourceType, subType: 'KalturaSourceType' },
            sourceTypeNotEqual: { type: 'es', subTypeConstructor: KalturaSourceType, subType: 'KalturaSourceType' },
            sourceTypeIn: { type: 's' },
            sourceTypeNotIn: { type: 's' },
            mediaDateGreaterThanOrEqual: { type: 'd' },
            mediaDateLessThanOrEqual: { type: 'd' },
            flavorParamsIdsMatchOr: { type: 's' },
            flavorParamsIdsMatchAnd: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaTypeEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaTypeIn;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeNotEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeIn;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.sourceTypeNotIn;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaDateGreaterThanOrEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.mediaDateLessThanOrEqual;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.flavorParamsIdsMatchOr;
    /** @type {?} */
    KalturaMediaEntryBaseFilter.prototype.flavorParamsIdsMatchAnd;
}
typesMappingStorage['KalturaMediaEntryBaseFilter'] = KalturaMediaEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1lZGlhRW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTWVkaWFFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMEJBQTBCLEVBQWtDLE1BQU0sOEJBQThCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQjFHLE1BQU0sa0NBQW1DLFNBQVEsMEJBQTBCOzs7O0lBYXZFLFlBQVksSUFBdUM7UUFFL0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1lBQ2hGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JHLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxpQkFBaUIsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDeEcsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUMzRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxzQkFBc0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQy9CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLDJCQUEyQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYVR5cGUgfSBmcm9tICcuL0thbHR1cmFNZWRpYVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNvdXJjZVR5cGUgfSBmcm9tICcuL0thbHR1cmFTb3VyY2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFQbGF5YWJsZUVudHJ5RmlsdGVyLCBLYWx0dXJhUGxheWFibGVFbnRyeUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFQbGF5YWJsZUVudHJ5RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhTWVkaWFFbnRyeUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFQbGF5YWJsZUVudHJ5RmlsdGVyQXJncyB7XG4gICAgbWVkaWFUeXBlRXF1YWw/IDogS2FsdHVyYU1lZGlhVHlwZTtcblx0bWVkaWFUeXBlSW4/IDogc3RyaW5nO1xuXHRzb3VyY2VUeXBlRXF1YWw/IDogS2FsdHVyYVNvdXJjZVR5cGU7XG5cdHNvdXJjZVR5cGVOb3RFcXVhbD8gOiBLYWx0dXJhU291cmNlVHlwZTtcblx0c291cmNlVHlwZUluPyA6IHN0cmluZztcblx0c291cmNlVHlwZU5vdEluPyA6IHN0cmluZztcblx0bWVkaWFEYXRlR3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdG1lZGlhRGF0ZUxlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRmbGF2b3JQYXJhbXNJZHNNYXRjaE9yPyA6IHN0cmluZztcblx0Zmxhdm9yUGFyYW1zSWRzTWF0Y2hBbmQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhTWVkaWFFbnRyeUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhUGxheWFibGVFbnRyeUZpbHRlciB7XG5cbiAgICBtZWRpYVR5cGVFcXVhbCA6IEthbHR1cmFNZWRpYVR5cGU7XG5cdG1lZGlhVHlwZUluIDogc3RyaW5nO1xuXHRzb3VyY2VUeXBlRXF1YWwgOiBLYWx0dXJhU291cmNlVHlwZTtcblx0c291cmNlVHlwZU5vdEVxdWFsIDogS2FsdHVyYVNvdXJjZVR5cGU7XG5cdHNvdXJjZVR5cGVJbiA6IHN0cmluZztcblx0c291cmNlVHlwZU5vdEluIDogc3RyaW5nO1xuXHRtZWRpYURhdGVHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRtZWRpYURhdGVMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRmbGF2b3JQYXJhbXNJZHNNYXRjaE9yIDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZHNNYXRjaEFuZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1lZGlhRW50cnlCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFNZWRpYUVudHJ5QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0bWVkaWFUeXBlRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYVR5cGUnIH0sXG5cdFx0XHRcdG1lZGlhVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNvdXJjZVR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTb3VyY2VUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTb3VyY2VUeXBlJyB9LFxuXHRcdFx0XHRzb3VyY2VUeXBlTm90RXF1YWwgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU291cmNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU291cmNlVHlwZScgfSxcblx0XHRcdFx0c291cmNlVHlwZUluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNvdXJjZVR5cGVOb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYURhdGVHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0bWVkaWFEYXRlTGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGZsYXZvclBhcmFtc0lkc01hdGNoT3IgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzTWF0Y2hBbmQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYU1lZGlhRW50cnlCYXNlRmlsdGVyJ10gPSBLYWx0dXJhTWVkaWFFbnRyeUJhc2VGaWx0ZXI7Il19