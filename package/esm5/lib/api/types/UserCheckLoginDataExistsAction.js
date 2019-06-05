/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaUserLoginDataFilter } from './KalturaUserLoginDataFilter';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function UserCheckLoginDataExistsActionArgs() { }
/** @type {?} */
UserCheckLoginDataExistsActionArgs.prototype.filter;
/**
 * Build request payload for service 'user' action 'checkLoginDataExists'.
 *
 * Usage: Action which checks whther user login
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'user' action 'checkLoginDataExists'.
 *
 * Usage: Action which checks whther user login
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
UserCheckLoginDataExistsAction = /** @class */ (function (_super) {
    tslib_1.__extends(UserCheckLoginDataExistsAction, _super);
    function UserCheckLoginDataExistsAction(data) {
        return _super.call(this, data, { responseType: 'b', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    UserCheckLoginDataExistsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'user' },
            action: { type: 'c', default: 'checkLoginDataExists' },
            filter: { type: 'o', subTypeConstructor: KalturaUserLoginDataFilter, subType: 'KalturaUserLoginDataFilter' }
        });
        return result;
    };
    return UserCheckLoginDataExistsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'user' action 'checkLoginDataExists'.
 *
 * Usage: Action which checks whther user login
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export { UserCheckLoginDataExistsAction };
if (false) {
    /** @type {?} */
    UserCheckLoginDataExistsAction.prototype.filter;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNoZWNrTG9naW5EYXRhRXhpc3RzQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9Vc2VyQ2hlY2tMb2dpbkRhdGFFeGlzdHNBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBb0QsMERBQXVCO0lBSXZFLHdDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN0RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN6RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtTQUN2RyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQXhDTDtFQW1Cb0QsY0FBYyxFQXNCakUsQ0FBQTs7Ozs7Ozs7O0FBdEJELDBDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVVzZXJMb2dpbkRhdGFGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFVc2VyTG9naW5EYXRhRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXJDaGVja0xvZ2luRGF0YUV4aXN0c0FjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXIgOiBLYWx0dXJhVXNlckxvZ2luRGF0YUZpbHRlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3VzZXInIGFjdGlvbiAnY2hlY2tMb2dpbkRhdGFFeGlzdHMnLlxuICpcbiAqIFVzYWdlOiBBY3Rpb24gd2hpY2ggY2hlY2tzIHdodGhlciB1c2VyIGxvZ2luXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgYm9vbGVhblxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgVXNlckNoZWNrTG9naW5EYXRhRXhpc3RzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8Ym9vbGVhbj4ge1xuXG4gICAgZmlsdGVyIDogS2FsdHVyYVVzZXJMb2dpbkRhdGFGaWx0ZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVXNlckNoZWNrTG9naW5EYXRhRXhpc3RzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1c2VyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2hlY2tMb2dpbkRhdGFFeGlzdHMnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVVzZXJMb2dpbkRhdGFGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVVzZXJMb2dpbkRhdGFGaWx0ZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==