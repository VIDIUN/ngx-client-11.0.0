/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaScheduleEventResource } from './KalturaScheduleEventResource';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ScheduleEventResourceAddActionArgs() { }
/** @type {?} */
ScheduleEventResourceAddActionArgs.prototype.scheduleEventResource;
/**
 * Build request payload for service 'scheduleEventResource' action 'add'.
 *
 * Usage: Allows you to add a new KalturaScheduleEventResource object
 *
 * Server response type:         KalturaScheduleEventResource
 * Server failure response type: KalturaAPIException
 */
export class ScheduleEventResourceAddAction extends KalturaRequest {
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
            action: { type: 'c', default: 'add' },
            scheduleEventResource: { type: 'o', subTypeConstructor: KalturaScheduleEventResource, subType: 'KalturaScheduleEventResource' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ScheduleEventResourceAddAction.prototype.scheduleEventResource;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVFdmVudFJlc291cmNlQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZUV2ZW50UmVzb3VyY2VBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RSxNQUFNLHFDQUFzQyxTQUFRLGNBQTRDOzs7O0lBSTVGLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDhCQUE4QixFQUFFLG1CQUFtQixFQUFHLDRCQUE0QixFQUFHLENBQUMsQ0FBQztLQUM3STs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDaEYsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7U0FDMUgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UgfSBmcm9tICcuL0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTY2hlZHVsZUV2ZW50UmVzb3VyY2VBZGRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgc2NoZWR1bGVFdmVudFJlc291cmNlIDogS2FsdHVyYVNjaGVkdWxlRXZlbnRSZXNvdXJjZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3NjaGVkdWxlRXZlbnRSZXNvdXJjZScgYWN0aW9uICdhZGQnLlxuICpcbiAqIFVzYWdlOiBBbGxvd3MgeW91IHRvIGFkZCBhIG5ldyBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlIG9iamVjdFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlRXZlbnRSZXNvdXJjZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2U+IHtcblxuICAgIHNjaGVkdWxlRXZlbnRSZXNvdXJjZSA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU2NoZWR1bGVFdmVudFJlc291cmNlQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlX3NjaGVkdWxlZXZlbnRyZXNvdXJjZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0c2NoZWR1bGVFdmVudFJlc291cmNlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2NoZWR1bGVFdmVudFJlc291cmNlLCBzdWJUeXBlIDogJ0thbHR1cmFTY2hlZHVsZUV2ZW50UmVzb3VyY2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==