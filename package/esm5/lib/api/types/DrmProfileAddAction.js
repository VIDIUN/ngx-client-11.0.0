/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DrmProfileAddActionArgs() { }
/** @type {?} */
DrmProfileAddActionArgs.prototype.drmProfile;
/**
 * Build request payload for service 'drmProfile' action 'add'.
 *
 * Usage: Allows you to add a new DrmProfile object
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'drmProfile' action 'add'.
 *
 * Usage: Allows you to add a new DrmProfile object
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
DrmProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(DrmProfileAddAction, _super);
    function DrmProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDrmProfile', responseConstructor: KalturaDrmProfile }) || this;
    }
    /**
     * @return {?}
     */
    DrmProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'drm_drmprofile' },
            action: { type: 'c', default: 'add' },
            drmProfile: { type: 'o', subTypeConstructor: KalturaDrmProfile, subType: 'KalturaDrmProfile' }
        });
        return result;
    };
    return DrmProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'drmProfile' action 'add'.
 *
 * Usage: Allows you to add a new DrmProfile object
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
export { DrmProfileAddAction };
if (false) {
    /** @type {?} */
    DrmProfileAddAction.prototype.drmProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJtUHJvZmlsZUFkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRHJtUHJvZmlsZUFkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF5QywrQ0FBaUM7SUFJdEUsNkJBQVksSUFBOEI7ZUFFdEMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLDBDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGdCQUFnQixFQUFFO1lBQ2hFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUN6RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhCQXZDTDtFQWtCeUMsY0FBYyxFQXNCdEQsQ0FBQTs7Ozs7Ozs7O0FBdEJELCtCQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRHJtUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYURybVByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBEcm1Qcm9maWxlQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGRybVByb2ZpbGUgOiBLYWx0dXJhRHJtUHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2RybVByb2ZpbGUnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWxsb3dzIHlvdSB0byBhZGQgYSBuZXcgRHJtUHJvZmlsZSBvYmplY3RcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRHJtUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRHJtUHJvZmlsZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFEcm1Qcm9maWxlPiB7XG5cbiAgICBkcm1Qcm9maWxlIDogS2FsdHVyYURybVByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRHJtUHJvZmlsZUFkZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURybVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RybV9kcm1wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRkcm1Qcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhRHJtUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19