/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleResourceAddActionArgs() { }
/** @type {?} */
ScheduleResourceAddActionArgs.prototype.scheduleResource;
/**
 * Build request payload for service 'scheduleResource' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleResource' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
ScheduleResourceAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleResourceAddAction, _super);
    function ScheduleResourceAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleResource', responseConstructor: KalturaScheduleResource }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleResourceAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleresource' },
            action: { type: 'c', default: 'add' },
            scheduleResource: { type: 'o', subTypeConstructor: KalturaScheduleResource, subType: 'KalturaScheduleResource' }
        });
        return result;
    };
    return ScheduleResourceAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleResource' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
export { ScheduleResourceAddAction };
if (false) {
    /** @type {?} */
    ScheduleResourceAddAction.prototype.scheduleResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVSZXNvdXJjZUFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVSZXNvdXJjZUFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUErQyxxREFBdUM7SUFJbEYsbUNBQVksSUFBb0M7ZUFFNUMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUcsdUJBQXVCLEVBQUcsQ0FBQztLQUNsSTs7OztJQUVTLGdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzNFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1NBQzNHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBdkNMO0VBa0IrQyxjQUFjLEVBc0I1RCxDQUFBOzs7Ozs7Ozs7QUF0QkQscUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZVJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVSZXNvdXJjZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlUmVzb3VyY2VBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVSZXNvdXJjZSA6IEthbHR1cmFTY2hlZHVsZVJlc291cmNlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVSZXNvdXJjZScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBbGxvd3MgeW91IHRvIGFkZCBhIG5ldyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZSBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXNvdXJjZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTY2hlZHVsZVJlc291cmNlPiB7XG5cbiAgICBzY2hlZHVsZVJlc291cmNlIDogS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVSZXNvdXJjZUFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlX3NjaGVkdWxlcmVzb3VyY2UnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGQnIH0sXG5cdFx0XHRcdHNjaGVkdWxlUmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZVJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZVJlc291cmNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=