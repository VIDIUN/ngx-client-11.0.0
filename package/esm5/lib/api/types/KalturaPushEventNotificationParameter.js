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
export function KalturaPushEventNotificationParameterArgs() { }
/** @type {?|undefined} */
KalturaPushEventNotificationParameterArgs.prototype.queueKeyToken;
var KalturaPushEventNotificationParameter = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPushEventNotificationParameter, _super);
    function KalturaPushEventNotificationParameter(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPushEventNotificationParameter.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPushEventNotificationParameter' },
            queueKeyToken: { type: 's' }
        });
        return result;
    };
    return KalturaPushEventNotificationParameter;
}(KalturaEventNotificationParameter));
export { KalturaPushEventNotificationParameter };
if (false) {
    /** @type {?} */
    KalturaPushEventNotificationParameter.prototype.queueKeyToken;
}
typesMappingStorage['KalturaPushEventNotificationParameter'] = KalturaPushEventNotificationParameter;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7QUFPL0gsSUFBQTtJQUEyRCxpRUFBaUM7SUFJeEYsK0NBQVksSUFBaUQ7ZUFFekQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyw0REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1Q0FBdUMsRUFBRTtZQUMxRixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3JCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Z0RBN0JMO0VBUzJELGlDQUFpQyxFQXFCM0YsQ0FBQTtBQXJCRCxpREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUNBQXVDLENBQUMsR0FBRyxxQ0FBcUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXIsIEthbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyQXJncyB7XG4gICAgcXVldWVLZXlUb2tlbj8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXIgZXh0ZW5kcyBLYWx0dXJhRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXIge1xuXG4gICAgcXVldWVLZXlUb2tlbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlckFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJyB9LFxuXHRcdFx0XHRxdWV1ZUtleVRva2VuIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXInXSA9IEthbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXI7Il19