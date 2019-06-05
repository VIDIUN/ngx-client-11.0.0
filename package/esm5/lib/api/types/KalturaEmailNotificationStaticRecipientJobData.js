/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaKeyValue } from './KalturaKeyValue';
import { KalturaEmailNotificationRecipientJobData } from './KalturaEmailNotificationRecipientJobData';
/**
 * @record
 */
export function KalturaEmailNotificationStaticRecipientJobDataArgs() { }
/** @type {?|undefined} */
KalturaEmailNotificationStaticRecipientJobDataArgs.prototype.emailRecipients;
var KalturaEmailNotificationStaticRecipientJobData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationStaticRecipientJobData, _super);
    function KalturaEmailNotificationStaticRecipientJobData(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.emailRecipients === 'undefined')
            _this.emailRecipients = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationStaticRecipientJobData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationStaticRecipientJobData' },
            emailRecipients: { type: 'a', subTypeConstructor: KalturaKeyValue, subType: 'KalturaKeyValue' }
        });
        return result;
    };
    return KalturaEmailNotificationStaticRecipientJobData;
}(KalturaEmailNotificationRecipientJobData));
export { KalturaEmailNotificationStaticRecipientJobData };
if (false) {
    /** @type {?} */
    KalturaEmailNotificationStaticRecipientJobData.prototype.emailRecipients;
}
typesMappingStorage['KalturaEmailNotificationStaticRecipientJobData'] = KalturaEmailNotificationStaticRecipientJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50Sm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50Sm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdDQUF3QyxFQUFnRCxNQUFNLDRDQUE0QyxDQUFDOzs7Ozs7O0FBT3BKLElBQUE7SUFBb0UsMEVBQXdDO0lBSXhHLHdEQUFZLElBQTBEO1FBQXRFLFlBRUksa0JBQU0sSUFBSSxDQUFDLFNBRWQ7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxlQUFlLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7O0tBQzlFOzs7O0lBRVMscUVBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0RBQWdELEVBQUU7WUFDbkcsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQzFGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eURBL0JMO0VBVW9FLHdDQUF3QyxFQXNCM0csQ0FBQTtBQXRCRCwwREFzQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0RBQWdELENBQUMsR0FBRyw4Q0FBOEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhS2V5VmFsdWUgfSBmcm9tICcuL0thbHR1cmFLZXlWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhLCBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25SZWNpcGllbnRKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50Sm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUmVjaXBpZW50Sm9iRGF0YUFyZ3Mge1xuICAgIGVtYWlsUmVjaXBpZW50cz8gOiBLYWx0dXJhS2V5VmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50Sm9iRGF0YSBleHRlbmRzIEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblJlY2lwaWVudEpvYkRhdGEge1xuXG4gICAgZW1haWxSZWNpcGllbnRzIDogS2FsdHVyYUtleVZhbHVlW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblN0YXRpY1JlY2lwaWVudEpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5lbWFpbFJlY2lwaWVudHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmVtYWlsUmVjaXBpZW50cyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblN0YXRpY1JlY2lwaWVudEpvYkRhdGEnIH0sXG5cdFx0XHRcdGVtYWlsUmVjaXBpZW50cyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUtleVZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFLZXlWYWx1ZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50Sm9iRGF0YSddID0gS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uU3RhdGljUmVjaXBpZW50Sm9iRGF0YTsiXX0=