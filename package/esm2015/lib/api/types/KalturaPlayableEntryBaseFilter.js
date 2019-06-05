/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBaseEntryFilter } from './KalturaBaseEntryFilter';
/**
 * @record
 */
export function KalturaPlayableEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.lastPlayedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.lastPlayedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationLessThan;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationGreaterThan;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationLessThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaPlayableEntryBaseFilterArgs.prototype.durationTypeMatchOr;
export class KalturaPlayableEntryBaseFilter extends KalturaBaseEntryFilter {
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
            objectType: { type: 'c', default: 'KalturaPlayableEntryBaseFilter' },
            lastPlayedAtGreaterThanOrEqual: { type: 'd' },
            lastPlayedAtLessThanOrEqual: { type: 'd' },
            durationLessThan: { type: 'n' },
            durationGreaterThan: { type: 'n' },
            durationLessThanOrEqual: { type: 'n' },
            durationGreaterThanOrEqual: { type: 'n' },
            durationTypeMatchOr: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.lastPlayedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.lastPlayedAtLessThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationLessThan;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationGreaterThan;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationLessThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationGreaterThanOrEqual;
    /** @type {?} */
    KalturaPlayableEntryBaseFilter.prototype.durationTypeMatchOr;
}
typesMappingStorage['KalturaPlayableEntryBaseFilter'] = KalturaPlayableEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlhYmxlRW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhUGxheWFibGVFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhOUYsTUFBTSxxQ0FBc0MsU0FBUSxzQkFBc0I7Ozs7SUFVdEUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsOEJBQThCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9DLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QywwQkFBMEIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0MsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlGaWx0ZXIsIEthbHR1cmFCYXNlRW50cnlGaWx0ZXJBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQmFzZUVudHJ5RmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUGxheWFibGVFbnRyeUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFCYXNlRW50cnlGaWx0ZXJBcmdzIHtcbiAgICBsYXN0UGxheWVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0bGFzdFBsYXllZEF0TGVzc1RoYW5PckVxdWFsPyA6IERhdGU7XG5cdGR1cmF0aW9uTGVzc1RoYW4/IDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuPyA6IG51bWJlcjtcblx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWw/IDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbD8gOiBudW1iZXI7XG5cdGR1cmF0aW9uVHlwZU1hdGNoT3I/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUGxheWFibGVFbnRyeUJhc2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhQmFzZUVudHJ5RmlsdGVyIHtcblxuICAgIGxhc3RQbGF5ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGxhc3RQbGF5ZWRBdExlc3NUaGFuT3JFcXVhbCA6IERhdGU7XG5cdGR1cmF0aW9uTGVzc1RoYW4gOiBudW1iZXI7XG5cdGR1cmF0aW9uR3JlYXRlclRoYW4gOiBudW1iZXI7XG5cdGR1cmF0aW9uTGVzc1RoYW5PckVxdWFsIDogbnVtYmVyO1xuXHRkdXJhdGlvbkdyZWF0ZXJUaGFuT3JFcXVhbCA6IG51bWJlcjtcblx0ZHVyYXRpb25UeXBlTWF0Y2hPciA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVBsYXlhYmxlRW50cnlCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFQbGF5YWJsZUVudHJ5QmFzZUZpbHRlcicgfSxcblx0XHRcdFx0bGFzdFBsYXllZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGxhc3RQbGF5ZWRBdExlc3NUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRkdXJhdGlvbkxlc3NUaGFuIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGR1cmF0aW9uR3JlYXRlclRoYW4gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb25MZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb25HcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZHVyYXRpb25UeXBlTWF0Y2hPciA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheWFibGVFbnRyeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFQbGF5YWJsZUVudHJ5QmFzZUZpbHRlcjsiXX0=