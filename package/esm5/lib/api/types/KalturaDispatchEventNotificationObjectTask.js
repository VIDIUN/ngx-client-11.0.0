/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaDispatchEventNotificationObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaDispatchEventNotificationObjectTaskArgs.prototype.eventNotificationTemplateId;
var KalturaDispatchEventNotificationObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaDispatchEventNotificationObjectTask, _super);
    function KalturaDispatchEventNotificationObjectTask(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaDispatchEventNotificationObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDispatchEventNotificationObjectTask' },
            eventNotificationTemplateId: { type: 'n' }
        });
        return result;
    };
    return KalturaDispatchEventNotificationObjectTask;
}(KalturaObjectTask));
export { KalturaDispatchEventNotificationObjectTask };
if (false) {
    /** @type {?} */
    KalturaDispatchEventNotificationObjectTask.prototype.eventNotificationTemplateId;
}
typesMappingStorage['KalturaDispatchEventNotificationObjectTask'] = KalturaDispatchEventNotificationObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3BhdGNoRXZlbnROb3RpZmljYXRpb25PYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRGlzcGF0Y2hFdmVudE5vdGlmaWNhdGlvbk9iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0FBTy9FLElBQUE7SUFBZ0Usc0VBQWlCO0lBSTdFLG9EQUFZLElBQXNEO2VBRTlELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsaUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNENBQTRDLEVBQUU7WUFDL0YsMkJBQTJCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25DLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBN0JMO0VBU2dFLGlCQUFpQixFQXFCaEYsQ0FBQTtBQXJCRCxzREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNENBQTRDLENBQUMsR0FBRywwQ0FBMEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0VGFzaywgS2FsdHVyYU9iamVjdFRhc2tBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0VGFzayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYURpc3BhdGNoRXZlbnROb3RpZmljYXRpb25PYmplY3RUYXNrQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFza0FyZ3Mge1xuICAgIGV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVJZD8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFEaXNwYXRjaEV2ZW50Tm90aWZpY2F0aW9uT2JqZWN0VGFzayBleHRlbmRzIEthbHR1cmFPYmplY3RUYXNrIHtcblxuICAgIGV2ZW50Tm90aWZpY2F0aW9uVGVtcGxhdGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURpc3BhdGNoRXZlbnROb3RpZmljYXRpb25PYmplY3RUYXNrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFEaXNwYXRjaEV2ZW50Tm90aWZpY2F0aW9uT2JqZWN0VGFzaycgfSxcblx0XHRcdFx0ZXZlbnROb3RpZmljYXRpb25UZW1wbGF0ZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXNwYXRjaEV2ZW50Tm90aWZpY2F0aW9uT2JqZWN0VGFzayddID0gS2FsdHVyYURpc3BhdGNoRXZlbnROb3RpZmljYXRpb25PYmplY3RUYXNrOyJdfQ==