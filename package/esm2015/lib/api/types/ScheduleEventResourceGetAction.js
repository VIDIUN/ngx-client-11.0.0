/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class ScheduleEventResourceGetAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaScheduleEventResource', responseConstructor: KalturaScheduleEventResource });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleeventresource' },
            action: { type: 'c', default: 'get' },
            scheduleEventId: { type: 'n' },
            scheduleResourceId: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ScheduleEventResourceGetAction.prototype.scheduleEventId;
    /** @type {?} */
    ScheduleEventResourceGetAction.prototype.scheduleResourceId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudFJlc291cmNlR2V0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZUV2ZW50UmVzb3VyY2VHZXRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFLE1BQU0scUNBQXNDLFNBQVEsY0FBNEM7Ozs7SUFLNUYsWUFBWSxJQUF5QztRQUVqRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsOEJBQThCLEVBQUUsbUJBQW1CLEVBQUcsNEJBQTRCLEVBQUcsQ0FBQyxDQUFDO0tBQzdJOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNoRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNoQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDMUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZUV2ZW50UmVzb3VyY2VHZXRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVFdmVudElkIDogbnVtYmVyO1xuXHRzY2hlZHVsZVJlc291cmNlSWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzY2hlZHVsZUV2ZW50UmVzb3VyY2UnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmUgYSBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlIG9iamVjdCBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlRXZlbnRSZXNvdXJjZUdldEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2U+IHtcblxuICAgIHNjaGVkdWxlRXZlbnRJZCA6IG51bWJlcjtcblx0c2NoZWR1bGVSZXNvdXJjZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNjaGVkdWxlRXZlbnRSZXNvdXJjZUdldEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzY2hlZHVsZV9zY2hlZHVsZWV2ZW50cmVzb3VyY2UnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXQnIH0sXG5cdFx0XHRcdHNjaGVkdWxlRXZlbnRJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRzY2hlZHVsZVJlc291cmNlSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19