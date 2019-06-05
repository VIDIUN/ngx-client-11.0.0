/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaUserFilter } from './KalturaUserFilter';
import { KalturaEmailNotificationRecipientJobData } from './KalturaEmailNotificationRecipientJobData';
/**
 * @record
 */
export function KalturaEmailNotificationUserRecipientJobDataArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationUserRecipientJobDataArgs.prototype.filter;
var KalturaEmailNotificationUserRecipientJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationUserRecipientJobData, _super);
    function KalturaEmailNotificationUserRecipientJobData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationUserRecipientJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationUserRecipientJobData' },
            filter: { type: 'o', subTypeConstructor: KalturaUserFilter, subType: 'KalturaUserFilter' }
        });
        return result;
    };
    return KalturaEmailNotificationUserRecipientJobData;
}(KalturaEmailNotificationRecipientJobData));
export { KalturaEmailNotificationUserRecipientJobData };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationUserRecipientJobData.prototype.filter;
}
typesMappingStorage['KalturaEmailNotificationUserRecipientJobData'] = KalturaEmailNotificationUserRecipientJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVXNlclJlY2lwaWVudEpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblVzZXJSZWNpcGllbnRKb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3hELE9BQU8sRUFBRSx3Q0FBd0MsRUFBZ0QsTUFBTSw0Q0FBNEMsQ0FBQzs7Ozs7OztBQU9wSixJQUFBO0lBQWtFLHdFQUF3QztJQUl0RyxzREFBWSxJQUF3RDtlQUVoRSxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG1FQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhDQUE4QyxFQUFFO1lBQ2pHLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQ3JGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dURBOUJMO0VBVWtFLHdDQUF3QyxFQXFCekcsQ0FBQTtBQXJCRCx3REFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsOENBQThDLENBQUMsR0FBRyw0Q0FBNEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVXNlckZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVVzZXJGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSwgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblVzZXJSZWNpcGllbnRKb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhQXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFVc2VyRmlsdGVyO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25Vc2VyUmVjaXBpZW50Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYVVzZXJGaWx0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblVzZXJSZWNpcGllbnRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblVzZXJSZWNpcGllbnRKb2JEYXRhJyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFVc2VyRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFVc2VyRmlsdGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW1haWxOb3RpZmljYXRpb25Vc2VyUmVjaXBpZW50Sm9iRGF0YSddID0gS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uVXNlclJlY2lwaWVudEpvYkRhdGE7Il19