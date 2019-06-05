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
export function ScheduleResourceUpdateActionArgs() { }
/** @type {?} */
ScheduleResourceUpdateActionArgs.prototype.scheduleResourceId;
/** @type {?} */
ScheduleResourceUpdateActionArgs.prototype.scheduleResource;
/**
 * Build request payload for service 'scheduleResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
ScheduleResourceUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleResourceUpdateAction, _super);
    function ScheduleResourceUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleResource', responseConstructor: KalturaScheduleResource }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleResourceUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleresource' },
            action: { type: 'c', default: 'update' },
            scheduleResourceId: { type: 'n' },
            scheduleResource: { type: 'o', subTypeConstructor: KalturaScheduleResource, subType: 'KalturaScheduleResource' }
        });
        return result;
    };
    return ScheduleResourceUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleResource' action 'update'.
 *
 * Usage: Update an existing KalturaScheduleResource object
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
export { ScheduleResourceUpdateAction };
if (false) {
    /** @type {?} */
    ScheduleResourceUpdateAction.prototype.scheduleResourceId;
    /** @type {?} */
    ScheduleResourceUpdateAction.prototype.scheduleResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVSZXNvdXJjZVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVSZXNvdXJjZVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXBFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQWtELHdEQUF1QztJQUtyRixzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx5QkFBeUIsRUFBRSxtQkFBbUIsRUFBRyx1QkFBdUIsRUFBRyxDQUFDO0tBQ2xJOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7WUFDM0UsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsdUJBQXVCLEVBQUUsT0FBTyxFQUFHLHlCQUF5QixFQUFFO1NBQzNHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBMUNMO0VBbUJrRCxjQUFjLEVBd0IvRCxDQUFBOzs7Ozs7Ozs7QUF4QkQsd0NBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZVJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVSZXNvdXJjZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlUmVzb3VyY2VVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVSZXNvdXJjZUlkIDogbnVtYmVyO1xuXHRzY2hlZHVsZVJlc291cmNlIDogS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2U7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlZHVsZVJlc291cmNlJyBhY3Rpb24gJ3VwZGF0ZScuXG4gKlxuICogVXNhZ2U6IFVwZGF0ZSBhbiBleGlzdGluZyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZSBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXNvdXJjZVVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTY2hlZHVsZVJlc291cmNlPiB7XG5cbiAgICBzY2hlZHVsZVJlc291cmNlSWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlUmVzb3VyY2UgOiBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTY2hlZHVsZVJlc291cmNlVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZWR1bGVfc2NoZWR1bGVyZXNvdXJjZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3VwZGF0ZScgfSxcblx0XHRcdFx0c2NoZWR1bGVSZXNvdXJjZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHNjaGVkdWxlUmVzb3VyY2UgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZVJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZVJlc291cmNlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=