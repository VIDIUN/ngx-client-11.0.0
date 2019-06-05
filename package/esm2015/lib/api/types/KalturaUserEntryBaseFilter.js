/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserEntryStatus } from './KalturaUserEntryStatus';
import { KalturaUserEntryType } from './KalturaUserEntryType';
import { KalturaUserEntryExtendedStatus } from './KalturaUserEntryExtendedStatus';
import { KalturaRelatedFilter } from './KalturaRelatedFilter';
/**
 * @record
 */
export function KalturaUserEntryBaseFilterArgs() { }
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.idEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.idIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.idNotIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.entryIdEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.entryIdIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.entryIdNotIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.userIdEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.userIdIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.userIdNotIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.statusEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.createdAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.createdAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.updatedAtLessThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.updatedAtGreaterThanOrEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.typeEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.extendedStatusEqual;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.extendedStatusIn;
/** @type {?|undefined} */
KalturaUserEntryBaseFilterArgs.prototype.extendedStatusNotIn;
export class KalturaUserEntryBaseFilter extends KalturaRelatedFilter {
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
            objectType: { type: 'c', default: 'KalturaUserEntryBaseFilter' },
            idEqual: { type: 'n' },
            idIn: { type: 's' },
            idNotIn: { type: 's' },
            entryIdEqual: { type: 's' },
            entryIdIn: { type: 's' },
            entryIdNotIn: { type: 's' },
            userIdEqual: { type: 's' },
            userIdIn: { type: 's' },
            userIdNotIn: { type: 's' },
            statusEqual: { type: 'es', subTypeConstructor: KalturaUserEntryStatus, subType: 'KalturaUserEntryStatus' },
            createdAtLessThanOrEqual: { type: 'd' },
            createdAtGreaterThanOrEqual: { type: 'd' },
            updatedAtLessThanOrEqual: { type: 'd' },
            updatedAtGreaterThanOrEqual: { type: 'd' },
            typeEqual: { type: 'es', subTypeConstructor: KalturaUserEntryType, subType: 'KalturaUserEntryType' },
            extendedStatusEqual: { type: 'es', subTypeConstructor: KalturaUserEntryExtendedStatus, subType: 'KalturaUserEntryExtendedStatus' },
            extendedStatusIn: { type: 's' },
            extendedStatusNotIn: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.idEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.idIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.idNotIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.entryIdEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.entryIdIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.entryIdNotIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.userIdEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.userIdIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.userIdNotIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.statusEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.createdAtLessThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.createdAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.updatedAtLessThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.updatedAtGreaterThanOrEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.typeEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.extendedStatusEqual;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.extendedStatusIn;
    /** @type {?} */
    KalturaUserEntryBaseFilter.prototype.extendedStatusNotIn;
}
typesMappingStorage['KalturaUserEntryBaseFilter'] = KalturaUserEntryBaseFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVzZXJFbnRyeUJhc2VGaWx0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG9CQUFvQixFQUE0QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCeEYsTUFBTSxpQ0FBa0MsU0FBUSxvQkFBb0I7Ozs7SUFxQmhFLFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQy9FLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQzlHLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUMsd0JBQXdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN4RyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ3RJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDM0IsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRW50cnlTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnlTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVVzZXJFbnRyeVR5cGUgfSBmcm9tICcuL0thbHR1cmFVc2VyRW50cnlUeXBlJztcbmltcG9ydCB7IEthbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFSZWxhdGVkRmlsdGVyLCBLYWx0dXJhUmVsYXRlZEZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFSZWxhdGVkRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVXNlckVudHJ5QmFzZUZpbHRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlbGF0ZWRGaWx0ZXJBcmdzIHtcbiAgICBpZEVxdWFsPyA6IG51bWJlcjtcblx0aWRJbj8gOiBzdHJpbmc7XG5cdGlkTm90SW4/IDogc3RyaW5nO1xuXHRlbnRyeUlkRXF1YWw/IDogc3RyaW5nO1xuXHRlbnRyeUlkSW4/IDogc3RyaW5nO1xuXHRlbnRyeUlkTm90SW4/IDogc3RyaW5nO1xuXHR1c2VySWRFcXVhbD8gOiBzdHJpbmc7XG5cdHVzZXJJZEluPyA6IHN0cmluZztcblx0dXNlcklkTm90SW4/IDogc3RyaW5nO1xuXHRzdGF0dXNFcXVhbD8gOiBLYWx0dXJhVXNlckVudHJ5U3RhdHVzO1xuXHRjcmVhdGVkQXRMZXNzVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsPyA6IERhdGU7XG5cdHVwZGF0ZWRBdExlc3NUaGFuT3JFcXVhbD8gOiBEYXRlO1xuXHR1cGRhdGVkQXRHcmVhdGVyVGhhbk9yRXF1YWw/IDogRGF0ZTtcblx0dHlwZUVxdWFsPyA6IEthbHR1cmFVc2VyRW50cnlUeXBlO1xuXHRleHRlbmRlZFN0YXR1c0VxdWFsPyA6IEthbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cztcblx0ZXh0ZW5kZWRTdGF0dXNJbj8gOiBzdHJpbmc7XG5cdGV4dGVuZGVkU3RhdHVzTm90SW4/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhVXNlckVudHJ5QmFzZUZpbHRlciBleHRlbmRzIEthbHR1cmFSZWxhdGVkRmlsdGVyIHtcblxuICAgIGlkRXF1YWwgOiBudW1iZXI7XG5cdGlkSW4gOiBzdHJpbmc7XG5cdGlkTm90SW4gOiBzdHJpbmc7XG5cdGVudHJ5SWRFcXVhbCA6IHN0cmluZztcblx0ZW50cnlJZEluIDogc3RyaW5nO1xuXHRlbnRyeUlkTm90SW4gOiBzdHJpbmc7XG5cdHVzZXJJZEVxdWFsIDogc3RyaW5nO1xuXHR1c2VySWRJbiA6IHN0cmluZztcblx0dXNlcklkTm90SW4gOiBzdHJpbmc7XG5cdHN0YXR1c0VxdWFsIDogS2FsdHVyYVVzZXJFbnRyeVN0YXR1cztcblx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0Y3JlYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogRGF0ZTtcblx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogRGF0ZTtcblx0dHlwZUVxdWFsIDogS2FsdHVyYVVzZXJFbnRyeVR5cGU7XG5cdGV4dGVuZGVkU3RhdHVzRXF1YWwgOiBLYWx0dXJhVXNlckVudHJ5RXh0ZW5kZWRTdGF0dXM7XG5cdGV4dGVuZGVkU3RhdHVzSW4gOiBzdHJpbmc7XG5cdGV4dGVuZGVkU3RhdHVzTm90SW4gOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyJyB9LFxuXHRcdFx0XHRpZEVxdWFsIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGlkSW4gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aWROb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlbnRyeUlkRXF1YWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZW50cnlJZEluIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5SWROb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWRFcXVhbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWRJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWROb3RJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdGF0dXNFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRW50cnlTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJFbnRyeVN0YXR1cycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0TGVzc1RoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdEdyZWF0ZXJUaGFuT3JFcXVhbCA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHR1cGRhdGVkQXRMZXNzVGhhbk9yRXF1YWwgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0dXBkYXRlZEF0R3JlYXRlclRoYW5PckVxdWFsIDogeyB0eXBlIDogJ2QnIH0sXG5cdFx0XHRcdHR5cGVFcXVhbCA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRW50cnlUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRW50cnlUeXBlJyB9LFxuXHRcdFx0XHRleHRlbmRlZFN0YXR1c0VxdWFsIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJFbnRyeUV4dGVuZGVkU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRW50cnlFeHRlbmRlZFN0YXR1cycgfSxcblx0XHRcdFx0ZXh0ZW5kZWRTdGF0dXNJbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRleHRlbmRlZFN0YXR1c05vdEluIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFVc2VyRW50cnlCYXNlRmlsdGVyJ10gPSBLYWx0dXJhVXNlckVudHJ5QmFzZUZpbHRlcjsiXX0=