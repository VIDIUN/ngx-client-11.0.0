/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduleEventResourceBaseFilter } from './KalturaScheduleEventResourceBaseFilter';
/**
 * @record
 */
export function KalturaScheduleEventResourceFilterArgs() { }
/** @type {?|undefined} */
KalturaScheduleEventResourceFilterArgs.prototype.eventIdOrItsParentIdEqual;
var KalturaScheduleEventResourceFilter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaScheduleEventResourceFilter, _super);
    function KalturaScheduleEventResourceFilter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaScheduleEventResourceFilter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaScheduleEventResourceFilter' },
            eventIdOrItsParentIdEqual: { type: 'n' }
        });
        return result;
    };
    return KalturaScheduleEventResourceFilter;
}(KalturaScheduleEventResourceBaseFilter));
export { KalturaScheduleEventResourceFilter };
if (false) {
    /** @type {?} */
    KalturaScheduleEventResourceFilter.prototype.eventIdOrItsParentIdEqual;
}
typesMappingStorage['KalturaScheduleEventResourceFilter'] = KalturaScheduleEventResourceFilter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUZpbHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsc0NBQXNDLEVBQThDLE1BQU0sMENBQTBDLENBQUM7Ozs7Ozs7QUFPOUksSUFBQTtJQUF3RCw4REFBc0M7SUFJMUYsNENBQVksSUFBOEM7ZUFFdEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx5REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUN2Rix5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0E3Qkw7RUFTd0Qsc0NBQXNDLEVBcUI3RixDQUFBO0FBckJELDhDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyLCBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlQmFzZUZpbHRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VCYXNlRmlsdGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlRmlsdGVyQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlQmFzZUZpbHRlckFyZ3Mge1xuICAgIGV2ZW50SWRPckl0c1BhcmVudElkRXF1YWw/IDogbnVtYmVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlRmlsdGVyIGV4dGVuZHMgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUJhc2VGaWx0ZXIge1xuXG4gICAgZXZlbnRJZE9ySXRzUGFyZW50SWRFcXVhbCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZUZpbHRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlRmlsdGVyJyB9LFxuXHRcdFx0XHRldmVudElkT3JJdHNQYXJlbnRJZEVxdWFsIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VGaWx0ZXInXSA9IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VGaWx0ZXI7Il19