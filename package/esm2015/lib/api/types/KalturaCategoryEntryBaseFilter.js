/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCategoryEntryStatus } from './KalturaCategoryEntryStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaCategoryEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.categoryIdEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.categoryIdIn;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.categoryFullIdsStartsWith;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.statusIn;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.creatorUserIdEqual;
/** @type {?|undefined} */
KalturaCategoryEntryBaseFilterArgs.prototype.creatorUserIdIn;
export class KalturaCategoryEntryBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaCategoryEntryBaseFilter' },
            categoryIdEqual: { type: 'n' },
            categoryIdIn: { type: 's' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            createdAtLessThanOrEqual: { type: 'd' },
            categoryFullIdsStartsWith: { type: 's' },
            statusEqual: { type: 'en', subTypeConstructor: KalturaCategoryEntryStatus, subType: 'KalturaCategoryEntryStatus' },
            statusIn: { type: 's' },
            creatorUserIdEqual: { type: 's' },
            creatorUserIdIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.categoryIdEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.categoryIdIn;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.categoryFullIdsStartsWith;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.statusIn;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.creatorUserIdEqual;
    /** @type {?} */
    KalturaCategoryEntryBaseFilter.prototype.creatorUserIdIn;
}
typesMappingStorage['KalturaCategoryEntryBaseFilter'] = KalturaCategoryEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNhdGVnb3J5RW50cnlCYXNlRmlsdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ2F0ZWdvcnlFbnRyeUJhc2VGaWx0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEYsTUFBTSxxQ0FBc0MsU0FBUSxvQkFBb0I7Ozs7SUFjcEUsWUFBWSxJQUEwQztRQUVsRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQiwyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUN0SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3ZCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdDQUFnQyxDQUFDLEdBQUcsOEJBQThCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ2F0ZWdvcnlFbnRyeUJhc2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyQXJncyB7XG4gICAgY2F0ZWdvcnlJZEVxdWFsPyA6IG51bWJlcjtcblx0Y2F0ZWdvcnlJZEluPyA6IHN0cmluZztcblx0ZW50cnlJZEVxdWFsPyA6IHN0cmluZztcblx0ZW50cnlJZEluPyA6IHN0cmluZztcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdGNyZWF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHRjYXRlZ29yeUZ1bGxJZHNTdGFydHNXaXRoPyA6IHN0cmluZztcblx0c3RhdHVzRXF1YWw/IDogS2FsdHVyYUNhdGVnb3J5RW50cnlTdGF0dXM7XG5cdHN0YXR1c0luPyA6IHN0cmluZztcblx0Y3JlYXRvclVzZXJJZEVxdWFsPyA6IHN0cmluZztcblx0Y3JlYXRvclVzZXJJZEluPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNhdGVnb3J5RW50cnlCYXNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXIge1xuXG4gICAgY2F0ZWdvcnlJZEVxdWFsIDogbnVtYmVyO1xuXHRjYXRlZ29yeUlkSW4gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0ZW50cnlJZEluIDogc3RyaW5nO1xuXHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiBEYXRlO1xuXHRjYXRlZ29yeUZ1bGxJZHNTdGFydHNXaXRoIDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbCA6IEthbHR1cmFDYXRlZ29yeUVudHJ5U3RhdHVzO1xuXHRzdGF0dXNJbiA6IHN0cmluZztcblx0Y3JlYXRvclVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHRjcmVhdG9yVXNlcklkSW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDYXRlZ29yeUVudHJ5QmFzZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2F0ZWdvcnlFbnRyeUJhc2VGaWx0ZXInIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRFcXVhbCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNhdGVnb3J5RnVsbElkc1N0YXJ0c1dpdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RhdHVzRXF1YWwgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlFbnRyeVN0YXR1cycgfSxcblx0XHRcdFx0c3RhdHVzSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRvclVzZXJJZEVxdWFsIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWF0b3JVc2VySWRJbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2F0ZWdvcnlFbnRyeUJhc2VGaWx0ZXInXSA9IEthbHR1cmFDYXRlZ29yeUVudHJ5QmFzZUZpbHRlcjsiXX0=