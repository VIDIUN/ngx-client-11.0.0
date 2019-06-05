/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEventNotificationParameter } from './KalturaEventNotificationParameter';
/**
 * @record
 */
export function KalturaEmailNotificationParameterArgs() { }
var KalturaEmailNotificationParameter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaEmailNotificationParameter, _super);
    function KalturaEmailNotificationParameter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaEmailNotificationParameter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEmailNotificationParameter' }
        });
        return result;
    };
    return KalturaEmailNotificationParameter;
}(KalturaEventNotificationParameter));
export { KalturaEmailNotificationParameter };
typesMappingStorage['KalturaEmailNotificationParameter'] = KalturaEmailNotificationParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUGFyYW1ldGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW1haWxOb3RpZmljYXRpb25QYXJhbWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUF5QyxNQUFNLHFDQUFxQyxDQUFDOzs7OztBQU8vSCxJQUFBO0lBQXVELDZEQUFpQztJQUlwRiwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBNUJMO0VBU3VELGlDQUFpQyxFQW9CdkYsQ0FBQTtBQXBCRCw2Q0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciwgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyQXJncyB9IGZyb20gJy4vS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25QYXJhbWV0ZXJBcmdzICBleHRlbmRzIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3Mge1xuICAgIFxufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRW1haWxOb3RpZmljYXRpb25QYXJhbWV0ZXIgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXIge1xuXG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFbWFpbE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRW1haWxOb3RpZmljYXRpb25QYXJhbWV0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFbWFpbE5vdGlmaWNhdGlvblBhcmFtZXRlciddID0gS2FsdHVyYUVtYWlsTm90aWZpY2F0aW9uUGFyYW1ldGVyOyJdfQ==