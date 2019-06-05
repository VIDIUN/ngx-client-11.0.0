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
export function AccessControlProfileAddActionArgs() { }
/** @type {?} */
AccessControlProfileAddActionArgs.prototype.accessControlProfile;
/**
 * Build request payload for service 'accessControlProfile' action 'add'.
 *
 * Usage: Add new access control profile
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'accessControlProfile' action 'add'.
 *
 * Usage: Add new access control profile
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
AccessControlProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(AccessControlProfileAddAction, _super);
    function AccessControlProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAccessControlProfile', responseConstructor: KalturaAccessControlProfile }) || this;
    }
    /**
     * @return {?}
     */
    AccessControlProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'accesscontrolprofile' },
            action: { type: 'c', default: 'add' },
            accessControlProfile: { type: 'o', subTypeConstructor: KalturaAccessControlProfile, subType: 'KalturaAccessControlProfile' }
        });
        return result;
    };
    return AccessControlProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'accessControlProfile' action 'add'.
 *
 * Usage: Add new access control profile
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
export { AccessControlProfileAddAction };
if (false) {
    /** @type {?} */
    AccessControlProfileAddAction.prototype.accessControlProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbFByb2ZpbGVBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FjY2Vzc0NvbnRyb2xQcm9maWxlQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQW1ELHlEQUEyQztJQUkxRix1Q0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyw2QkFBNkIsRUFBRSxtQkFBbUIsRUFBRywyQkFBMkIsRUFBRyxDQUFDO0tBQzFJOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDdEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7U0FDdkgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0F2Q0w7RUFrQm1ELGNBQWMsRUFzQmhFLENBQUE7Ozs7Ozs7OztBQXRCRCx5Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBY2Nlc3NDb250cm9sUHJvZmlsZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBhY2Nlc3NDb250cm9sUHJvZmlsZSA6IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2FjY2Vzc0NvbnRyb2xQcm9maWxlJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgYWNjZXNzIGNvbnRyb2wgcHJvZmlsZVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbFByb2ZpbGVBZGRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGU+IHtcblxuICAgIGFjY2Vzc0NvbnRyb2xQcm9maWxlIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFjY2Vzc0NvbnRyb2xQcm9maWxlQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhY2Nlc3Njb250cm9scHJvZmlsZScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0YWNjZXNzQ29udHJvbFByb2ZpbGUgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==