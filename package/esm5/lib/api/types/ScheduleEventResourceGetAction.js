/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleEventResourceGetActionArgs() { }
/** @type {?} */
ScheduleEventResourceGetActionArgs.prototype.scheduleEventId;
/** @type {?} */
ScheduleEventResourceGetActionArgs.prototype.scheduleResourceId;
/**
 * Build request payload for service 'scheduleEventResource' action 'get'.
 *
 * Usage: Retrieve a KalturaScheduleEventResource object by ID
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleEventResource' action 'get'.
 *
 * Usage: Retrieve a KalturaScheduleEventResource object by ID
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
ScheduleEventResourceGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleEventResourceGetAction, _super);
    function ScheduleEventResourceGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleEventResource', responseConstructor: KalturaScheduleEventResource }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleEventResourceGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleeventresource' },
            action: { type: 'c', default: 'get' },
            scheduleEventId: { type: 'n' },
            scheduleResourceId: { type: 'n' }
        });
        return result;
    };
    return ScheduleEventResourceGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleEventResource' action 'get'.
 *
 * Usage: Retrieve a KalturaScheduleEventResource object by ID
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
export { ScheduleEventResourceGetAction };
if (false) {
    /** @type {?} */
    ScheduleEventResourceGetAction.prototype.scheduleEventId;
    /** @type {?} */
    ScheduleEventResourceGetAction.prototype.scheduleResourceId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudFJlc291cmNlR2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZUV2ZW50UmVzb3VyY2VHZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUFvRCwwREFBNEM7SUFLNUYsd0NBQVksSUFBeUM7ZUFFakQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsOEJBQThCLEVBQUUsbUJBQW1CLEVBQUcsNEJBQTRCLEVBQUcsQ0FBQztLQUM1STs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQ2hGLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQTFDTDtFQW1Cb0QsY0FBYyxFQXdCakUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDBDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlIH0gZnJvbSAnLi9LYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVFdmVudFJlc291cmNlR2V0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHNjaGVkdWxlRXZlbnRJZCA6IG51bWJlcjtcblx0c2NoZWR1bGVSZXNvdXJjZUlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVFdmVudFJlc291cmNlJyBhY3Rpb24gJ2dldCcuXG4gKlxuICogVXNhZ2U6IFJldHJpZXZlIGEgS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZSBvYmplY3QgYnkgSURcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTY2hlZHVsZUV2ZW50UmVzb3VyY2VHZXRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlPiB7XG5cbiAgICBzY2hlZHVsZUV2ZW50SWQgOiBudW1iZXI7XG5cdHNjaGVkdWxlUmVzb3VyY2VJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTY2hlZHVsZUV2ZW50UmVzb3VyY2VHZXRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2NoZWR1bGVfc2NoZWR1bGVldmVudHJlc291cmNlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0JyB9LFxuXHRcdFx0XHRzY2hlZHVsZUV2ZW50SWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c2NoZWR1bGVSZXNvdXJjZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==