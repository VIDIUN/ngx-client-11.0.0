/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSessionInfo } from './KalturaSessionInfo';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SessionGetActionArgs() { }
/** @type {?|undefined} */
SessionGetActionArgs.prototype.session;
/**
 * Build request payload for service 'session' action 'get'.
 *
 * Usage: Parse session key and return its info
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'session' action 'get'.
 *
 * Usage: Parse session key and return its info
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
SessionGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(SessionGetAction, _super);
    function SessionGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSessionInfo', responseConstructor: KalturaSessionInfo }) || this;
    }
    /**
     * @return {?}
     */
    SessionGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'session' },
            action: { type: 'c', default: 'get' },
            session: { type: 's' }
        });
        return result;
    };
    return SessionGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'session' action 'get'.
 *
 * Usage: Parse session key and return its info
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
export { SessionGetAction };
if (false) {
    /** @type {?} */
    SessionGetAction.prototype.session;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbkdldEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2Vzc2lvbkdldEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFzQyw0Q0FBa0M7SUFJcEUsMEJBQVksSUFBNEI7ZUFFcEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsb0JBQW9CLEVBQUUsbUJBQW1CLEVBQUcsa0JBQWtCLEVBQUcsQ0FBQztLQUN4SDs7OztJQUVTLHVDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUN6RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkJBdkNMO0VBa0JzQyxjQUFjLEVBc0JuRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsNEJBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uSW5mbyB9IGZyb20gJy4vS2FsdHVyYVNlc3Npb25JbmZvJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvbkdldEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZXNzaW9uPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Nlc3Npb24nIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogUGFyc2Ugc2Vzc2lvbiBrZXkgYW5kIHJldHVybiBpdHMgaW5mb1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZXNzaW9uSW5mb1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkdldEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTZXNzaW9uSW5mbz4ge1xuXG4gICAgc2Vzc2lvbiA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogU2Vzc2lvbkdldEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVNlc3Npb25JbmZvJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXNzaW9uSW5mbyAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2Vzc2lvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldCcgfSxcblx0XHRcdFx0c2Vzc2lvbiA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=