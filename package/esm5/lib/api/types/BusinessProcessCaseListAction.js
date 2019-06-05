/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBusinessProcessCase } from './KalturaBusinessProcessCase';
import { KalturaEventNotificationEventObjectType } from './KalturaEventNotificationEventObjectType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BusinessProcessCaseListActionArgs() { }
/** @type {?} */
BusinessProcessCaseListActionArgs.prototype.objectType;
/** @type {?} */
BusinessProcessCaseListActionArgs.prototype.objectId;
/**
 * Build request payload for service 'businessProcessCase' action 'list'.
 *
 * Usage: list business-process cases
 *
 * Server response type:         KalturaBusinessProcessCase[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'businessProcessCase' action 'list'.
 *
 * Usage: list business-process cases
 *
 * Server response type:         KalturaBusinessProcessCase[]
 * Server failure response type: KalturaAPIException
 */
BusinessProcessCaseListAction = /** @class */ (function (_super) {
    tslib_1.__extends(BusinessProcessCaseListAction, _super);
    function BusinessProcessCaseListAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaBusinessProcessCase', responseConstructor: KalturaBusinessProcessCase }) || this;
    }
    /**
     * @return {?}
     */
    BusinessProcessCaseListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'businessprocessnotification_businessprocesscase' },
            action: { type: 'c', default: 'list' },
            objectType: { type: 'es', subTypeConstructor: KalturaEventNotificationEventObjectType, subType: 'KalturaEventNotificationEventObjectType' },
            objectId: { type: 's' }
        });
        return result;
    };
    return BusinessProcessCaseListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'businessProcessCase' action 'list'.
 *
 * Usage: list business-process cases
 *
 * Server response type:         KalturaBusinessProcessCase[]
 * Server failure response type: KalturaAPIException
 */
export { BusinessProcessCaseListAction };
if (false) {
    /** @type {?} */
    BusinessProcessCaseListAction.prototype.objectType;
    /** @type {?} */
    BusinessProcessCaseListAction.prototype.objectId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnVzaW5lc3NQcm9jZXNzQ2FzZUxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0J1c2luZXNzUHJvY2Vzc0Nhc2VMaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUUsT0FBTyxFQUFFLHVDQUF1QyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDcEcsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBbUQseURBQTRDO0lBSzNGLHVDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDRCQUE0QixFQUFFLG1CQUFtQixFQUFHLDBCQUEwQixFQUFHLENBQUM7S0FDeEk7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpREFBaUQsRUFBRTtZQUNqRyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyx1Q0FBdUMsRUFBRSxPQUFPLEVBQUcseUNBQXlDLEVBQUU7WUFDL0ksUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQTNDTDtFQW9CbUQsY0FBYyxFQXdCaEUsQ0FBQTs7Ozs7Ozs7O0FBeEJELHlDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVzaW5lc3NQcm9jZXNzQ2FzZSB9IGZyb20gJy4vS2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCdXNpbmVzc1Byb2Nlc3NDYXNlTGlzdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBvYmplY3RUeXBlIDogS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlO1xuXHRvYmplY3RJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2J1c2luZXNzUHJvY2Vzc0Nhc2UnIGFjdGlvbiAnbGlzdCcuXG4gKlxuICogVXNhZ2U6IGxpc3QgYnVzaW5lc3MtcHJvY2VzcyBjYXNlc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NDYXNlW11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJ1c2luZXNzUHJvY2Vzc0Nhc2VMaXN0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUJ1c2luZXNzUHJvY2Vzc0Nhc2VbXT4ge1xuXG4gICAgb2JqZWN0VHlwZSA6IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvbkV2ZW50T2JqZWN0VHlwZTtcblx0b2JqZWN0SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQnVzaW5lc3NQcm9jZXNzQ2FzZUxpc3RBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdhJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFCdXNpbmVzc1Byb2Nlc3NDYXNlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCdXNpbmVzc1Byb2Nlc3NDYXNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdidXNpbmVzc3Byb2Nlc3Nub3RpZmljYXRpb25fYnVzaW5lc3Nwcm9jZXNzY2FzZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25FdmVudE9iamVjdFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uRXZlbnRPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHRvYmplY3RJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=