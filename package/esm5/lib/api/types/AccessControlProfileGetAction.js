/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAccessControlProfile } from './KalturaAccessControlProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AccessControlProfileGetActionArgs() { }
/** @type {?} */
AccessControlProfileGetActionArgs.prototype.id;
/**
 * Build request payload for service 'accessControlProfile' action 'get'.
 *
 * Usage: Get access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'accessControlProfile' action 'get'.
 *
 * Usage: Get access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
AccessControlProfileGetAction = /** @class */ (function (_super) {
    tslib_1.__extends(AccessControlProfileGetAction, _super);
    function AccessControlProfileGetAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAccessControlProfile', responseConstructor: KalturaAccessControlProfile }) || this;
    }
    /**
     * @return {?}
     */
    AccessControlProfileGetAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'accesscontrolprofile' },
            action: { type: 'c', default: 'get' },
            id: { type: 'n' }
        });
        return result;
    };
    return AccessControlProfileGetAction;
}(KalturaRequest));
/**
 * Build request payload for service 'accessControlProfile' action 'get'.
 *
 * Usage: Get access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
export { AccessControlProfileGetAction };
if (false) {
    /** @type {?} */
    AccessControlProfileGetAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbFByb2ZpbGVHZXRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FjY2Vzc0NvbnRyb2xQcm9maWxlR2V0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQW1ELHlEQUEyQztJQUkxRix1Q0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRywyQkFBMkIsRUFBRyxDQUFDO0tBQzFJOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDdEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dDQXZDTDtFQWtCbUQsY0FBYyxFQXNCaEUsQ0FBQTs7Ozs7Ozs7O0FBdEJELHlDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGUgfSBmcm9tICcuL0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0NvbnRyb2xQcm9maWxlR2V0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYWNjZXNzQ29udHJvbFByb2ZpbGUnIGFjdGlvbiAnZ2V0Jy5cbiAqXG4gKiBVc2FnZTogR2V0IGFjY2VzcyBjb250cm9sIHByb2ZpbGUgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc0NvbnRyb2xQcm9maWxlR2V0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBBY2Nlc3NDb250cm9sUHJvZmlsZUdldEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWNjZXNzY29udHJvbHByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXQnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==