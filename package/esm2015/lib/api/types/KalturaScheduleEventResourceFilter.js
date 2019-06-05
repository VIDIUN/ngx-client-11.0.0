/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventResourceBaseFilter } from './KalturaScheduleEventResourceBaseFilter';
/**
 * @record
 */
export function KalturaScheduleEventResourceFilterArgs() { }
/** @type {?|undefined} */
KalturaScheduleEventResourceFilterArgs.prototype.eventIdOrItsParentIdEqual;
export class KalturaScheduleEventResourceFilter extends KalturaScheduleEventResourceBaseFilter {
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
            objectType: { type: 'c', default: 'KalturaScheduleEventResourceFilter' },
            eventIdOrItsParentIdEqual: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaScheduleEventResourceFilter.prototype.eventIdOrItsParentIdEqual;
}
typesMappingStorage['KalturaScheduleEventResourceFilter'] = KalturaScheduleEventResourceFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxzQ0FBc0MsRUFBOEMsTUFBTSwwQ0FBMEMsQ0FBQzs7Ozs7OztBQU85SSxNQUFNLHlDQUEwQyxTQUFRLHNDQUFzQzs7OztJQUkxRixZQUFZLElBQThDO1FBRXRELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2Rix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7OztBQUVELG1CQUFtQixDQUFDLG9DQUFvQyxDQUFDLEdBQUcsa0NBQWtDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUJhc2VGaWx0ZXIsIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUJhc2VGaWx0ZXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VGaWx0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyQXJncyB7XG4gICAgZXZlbnRJZE9ySXRzUGFyZW50SWRFcXVhbD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VGaWx0ZXIgZXh0ZW5kcyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlQmFzZUZpbHRlciB7XG5cbiAgICBldmVudElkT3JJdHNQYXJlbnRJZEVxdWFsIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlRmlsdGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VGaWx0ZXInIH0sXG5cdFx0XHRcdGV2ZW50SWRPckl0c1BhcmVudElkRXF1YWwgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUZpbHRlciddID0gS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUZpbHRlcjsiXX0=