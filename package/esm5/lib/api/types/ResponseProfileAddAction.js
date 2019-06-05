/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaResponseProfile } from './KalturaResponseProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ResponseProfileAddActionArgs() { }
/** @type {?} */
ResponseProfileAddActionArgs.prototype.addResponseProfile;
/**
 * Build request payload for service 'responseProfile' action 'add'.
 *
 * Usage: Add new response profile
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'responseProfile' action 'add'.
 *
 * Usage: Add new response profile
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
ResponseProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ResponseProfileAddAction, _super);
    function ResponseProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaResponseProfile', responseConstructor: KalturaResponseProfile }) || this;
    }
    /**
     * @return {?}
     */
    ResponseProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'responseprofile' },
            action: { type: 'c', default: 'add' },
            addResponseProfile: { type: 'o', subTypeConstructor: KalturaResponseProfile, subType: 'KalturaResponseProfile' }
        });
        return result;
    };
    return ResponseProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'responseProfile' action 'add'.
 *
 * Usage: Add new response profile
 *
 * Server response type:         KalturaResponseProfile
 * Server failure response type: KalturaAPIException
 */
export { ResponseProfileAddAction };
if (false) {
    /** @type {?} */
    ResponseProfileAddAction.prototype.addResponseProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVzcG9uc2VQcm9maWxlQWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9SZXNwb25zZVByb2ZpbGVBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBOEMsb0RBQXNDO0lBSWhGLGtDQUFZLElBQW1DO2VBRTNDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdCQUF3QixFQUFFLG1CQUFtQixFQUFHLHNCQUFzQixFQUFHLENBQUM7S0FDaEk7Ozs7SUFFUywrQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtTQUMzRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQXZDTDtFQWtCOEMsY0FBYyxFQXNCM0QsQ0FBQTs7Ozs7Ozs7O0FBdEJELG9DQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVzcG9uc2VQcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhUmVzcG9uc2VQcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2VQcm9maWxlQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGFkZFJlc3BvbnNlUHJvZmlsZSA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGU7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdyZXNwb25zZVByb2ZpbGUnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyByZXNwb25zZSBwcm9maWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVJlc3BvbnNlUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VQcm9maWxlQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVJlc3BvbnNlUHJvZmlsZT4ge1xuXG4gICAgYWRkUmVzcG9uc2VQcm9maWxlIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBSZXNwb25zZVByb2ZpbGVBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFSZXNwb25zZVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlc3BvbnNlUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncmVzcG9uc2Vwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRhZGRSZXNwb25zZVByb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXNwb25zZVByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYVJlc3BvbnNlUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19