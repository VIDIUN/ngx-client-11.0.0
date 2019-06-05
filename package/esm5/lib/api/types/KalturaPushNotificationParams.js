/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPushEventNotificationParameter } from './KalturaPushEventNotificationParameter';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaPushNotificationParamsArgs() { }
/** @type {?|undefined} */
KalturaPushNotificationParamsArgs.prototype.userParams;
var KalturaPushNotificationParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPushNotificationParams, _super);
    function KalturaPushNotificationParams(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.userParams === 'undefined')
            _this.userParams = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaPushNotificationParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPushNotificationParams' },
            userParams: { type: 'a', subTypeConstructor: KalturaPushEventNotificationParameter, subType: 'KalturaPushEventNotificationParameter' }
        });
        return result;
    };
    return KalturaPushNotificationParams;
}(KalturaObjectBase));
export { KalturaPushNotificationParams };
if (false) {
    /** @type {?} */
    KalturaPushNotificationParams.prototype.userParams;
}
typesMappingStorage['KalturaPushNotificationParams'] = KalturaPushNotificationParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFQdXNoTm90aWZpY2F0aW9uUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQU9sRixJQUFBO0lBQW1ELHlEQUFpQjtJQUloRSx1Q0FBWSxJQUF5QztRQUFyRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztLQUNwRTs7OztJQUVTLG9EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcscUNBQXFDLEVBQUUsT0FBTyxFQUFHLHVDQUF1QyxFQUFFO1NBQ2pJLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBL0JMO0VBVW1ELGlCQUFpQixFQXNCbkUsQ0FBQTtBQXRCRCx5Q0FzQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyIH0gZnJvbSAnLi9LYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtc0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICB1c2VyUGFyYW1zPyA6IEthbHR1cmFQdXNoRXZlbnROb3RpZmljYXRpb25QYXJhbWV0ZXJbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXMgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICB1c2VyUGFyYW1zIDogS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlcltdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtc0FyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnVzZXJQYXJhbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnVzZXJQYXJhbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcycgfSxcblx0XHRcdFx0dXNlclBhcmFtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVB1c2hFdmVudE5vdGlmaWNhdGlvblBhcmFtZXRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUHVzaEV2ZW50Tm90aWZpY2F0aW9uUGFyYW1ldGVyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUHVzaE5vdGlmaWNhdGlvblBhcmFtcyddID0gS2FsdHVyYVB1c2hOb3RpZmljYXRpb25QYXJhbXM7Il19