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
export function AccessControlProfileUpdateActionArgs() { }
/** @type {?} */
AccessControlProfileUpdateActionArgs.prototype.id;
/** @type {?} */
AccessControlProfileUpdateActionArgs.prototype.accessControlProfile;
/**
 * Build request payload for service 'accessControlProfile' action 'update'.
 *
 * Usage: Update access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'accessControlProfile' action 'update'.
 *
 * Usage: Update access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
AccessControlProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(AccessControlProfileUpdateAction, _super);
    function AccessControlProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAccessControlProfile', responseConstructor: KalturaAccessControlProfile }) || this;
    }
    /**
     * @return {?}
     */
    AccessControlProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'accesscontrolprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            accessControlProfile: { type: 'o', subTypeConstructor: KalturaAccessControlProfile, subType: 'KalturaAccessControlProfile' }
        });
        return result;
    };
    return AccessControlProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'accessControlProfile' action 'update'.
 *
 * Usage: Update access control profile by id
 *
 * Server response type:         KalturaAccessControlProfile
 * Server failure response type: KalturaAPIException
 */
export { AccessControlProfileUpdateAction };
if (false) {
    /** @type {?} */
    AccessControlProfileUpdateAction.prototype.id;
    /** @type {?} */
    AccessControlProfileUpdateAction.prototype.accessControlProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbFByb2ZpbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FjY2Vzc0NvbnRyb2xQcm9maWxlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFFNUUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBc0QsNERBQTJDO0lBSzdGLDBDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDZCQUE2QixFQUFFLG1CQUFtQixFQUFHLDJCQUEyQixFQUFHLENBQUM7S0FDMUk7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN0RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ3ZILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MkNBMUNMO0VBbUJzRCxjQUFjLEVBd0JuRSxDQUFBOzs7Ozs7Ozs7QUF4QkQsNENBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWNjZXNzQ29udHJvbFByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGFjY2Vzc0NvbnRyb2xQcm9maWxlIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYWNjZXNzQ29udHJvbFByb2ZpbGUnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGFjY2VzcyBjb250cm9sIHByb2ZpbGUgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFjY2Vzc0NvbnRyb2xQcm9maWxlVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0YWNjZXNzQ29udHJvbFByb2ZpbGUgOiBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQWNjZXNzQ29udHJvbFByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWNjZXNzQ29udHJvbFByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FjY2Vzc2NvbnRyb2xwcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhY2Nlc3NDb250cm9sUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFjY2Vzc0NvbnRyb2xQcm9maWxlLCBzdWJUeXBlIDogJ0thbHR1cmFBY2Nlc3NDb250cm9sUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19