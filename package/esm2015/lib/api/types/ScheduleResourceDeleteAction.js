/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaScheduleResource } from './KalturaScheduleResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleResourceDeleteActionArgs() { }
/** @type {?} */
ScheduleResourceDeleteActionArgs.prototype.scheduleResourceId;
/**
 * Build request payload for service 'scheduleResource' action 'delete'.
 *
 * Usage: Mark the KalturaScheduleResource object as deleted
 *
 * Server response type:         KalturaScheduleResource
 * Server failure response type: KalturaAPIException
 */
export class ScheduleResourceDeleteAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaScheduleResource', responseConstructor: KalturaScheduleResource });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleresource' },
            action: { type: 'c', default: 'delete' },
            scheduleResourceId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ScheduleResourceDeleteAction.prototype.scheduleResourceId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVSZXNvdXJjZURlbGV0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2NoZWR1bGVSZXNvdXJjZURlbGV0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFcEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFLE1BQU0sbUNBQW9DLFNBQVEsY0FBdUM7Ozs7SUFJckYsWUFBWSxJQUF1QztRQUUvQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcseUJBQXlCLEVBQUUsbUJBQW1CLEVBQUcsdUJBQXVCLEVBQUcsQ0FBQyxDQUFDO0tBQ25JOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMzRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0Msa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzFCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZVJlc291cmNlRGVsZXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHNjaGVkdWxlUmVzb3VyY2VJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NjaGVkdWxlUmVzb3VyY2UnIGFjdGlvbiAnZGVsZXRlJy5cbiAqXG4gKiBVc2FnZTogTWFyayB0aGUgS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2Ugb2JqZWN0IGFzIGRlbGV0ZWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU2NoZWR1bGVSZXNvdXJjZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2NoZWR1bGVSZXNvdXJjZURlbGV0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTY2hlZHVsZVJlc291cmNlPiB7XG5cbiAgICBzY2hlZHVsZVJlc291cmNlSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVSZXNvdXJjZURlbGV0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlUmVzb3VyY2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlX3NjaGVkdWxlcmVzb3VyY2UnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkZWxldGUnIH0sXG5cdFx0XHRcdHNjaGVkdWxlUmVzb3VyY2VJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=