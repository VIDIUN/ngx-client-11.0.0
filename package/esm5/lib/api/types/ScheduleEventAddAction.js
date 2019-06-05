/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaScheduleEvent } from './KalturaScheduleEvent';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleEventAddActionArgs() { }
/** @type {?} */
ScheduleEventAddActionArgs.prototype.scheduleEvent;
/**
 * Build request payload for service 'scheduleEvent' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleEvent object
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'scheduleEvent' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleEvent object
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
ScheduleEventAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ScheduleEventAddAction, _super);
    function ScheduleEventAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaScheduleEvent', responseConstructor: KalturaScheduleEvent }) || this;
    }
    /**
     * @return {?}
     */
    ScheduleEventAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleevent' },
            action: { type: 'c', default: 'add' },
            scheduleEvent: { type: 'o', subTypeConstructor: KalturaScheduleEvent, subType: 'KalturaScheduleEvent' }
        });
        return result;
    };
    return ScheduleEventAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'scheduleEvent' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleEvent object
 *
 * Server response type:         KalturaScheduleEvent
 * Server failure response type: KalturaAPIException
 */
export { ScheduleEventAddAction };
if (false) {
    /** @type {?} */
    ScheduleEventAddAction.prototype.scheduleEvent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudEFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVFdmVudEFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUE0QyxrREFBb0M7SUFJNUUsZ0NBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1lBQ3hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtTQUNsRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQXZDTDtFQWtCNEMsY0FBYyxFQXNCekQsQ0FBQTs7Ozs7Ozs7O0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVFdmVudCB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlRXZlbnQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZUV2ZW50QWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHNjaGVkdWxlRXZlbnQgOiBLYWx0dXJhU2NoZWR1bGVFdmVudDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NjaGVkdWxlRXZlbnQnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgYSBuZXcgS2FsdHVyYVNjaGVkdWxlRXZlbnQgb2JqZWN0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVNjaGVkdWxlRXZlbnRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlRXZlbnRBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2NoZWR1bGVFdmVudD4ge1xuXG4gICAgc2NoZWR1bGVFdmVudCA6IEthbHR1cmFTY2hlZHVsZUV2ZW50O1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNjaGVkdWxlRXZlbnRBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzY2hlZHVsZV9zY2hlZHVsZWV2ZW50JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRzY2hlZHVsZUV2ZW50IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudCwgc3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19