/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryScheduleEvent } from './KalturaEntryScheduleEvent';
/**
 * @record
 */
export function KalturaRecordScheduleEventArgs() { }
export class KalturaRecordScheduleEvent extends KalturaEntryScheduleEvent {
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
            objectType: { type: 'c', default: 'KalturaRecordScheduleEvent' }
        });
        return result;
    }
}
typesMappingStorage['KalturaRecordScheduleEvent'] = KalturaRecordScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7OztBQU92RyxNQUFNLGlDQUFrQyxTQUFRLHlCQUF5Qjs7OztJQUlyRSxZQUFZLElBQXNDO1FBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUN0RSxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7QUFFRCxtQkFBbUIsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFHLDBCQUEwQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnQsIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlTY2hlZHVsZUV2ZW50JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVudHJ5U2NoZWR1bGVFdmVudEFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudCBleHRlbmRzIEthbHR1cmFFbnRyeVNjaGVkdWxlRXZlbnQge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFSZWNvcmRTY2hlZHVsZUV2ZW50JyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUmVjb3JkU2NoZWR1bGVFdmVudCddID0gS2FsdHVyYVJlY29yZFNjaGVkdWxlRXZlbnQ7Il19