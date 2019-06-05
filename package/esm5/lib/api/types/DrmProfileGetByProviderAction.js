/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDrmProfile } from './KalturaDrmProfile';
import { KalturaDrmProviderType } from './KalturaDrmProviderType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DrmProfileGetByProviderActionArgs() { }
/** @type {?} */
DrmProfileGetByProviderActionArgs.prototype.provider;
/**
 * Build request payload for service 'drmProfile' action 'getByProvider'.
 *
 * Usage: Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'drmProfile' action 'getByProvider'.
 *
 * Usage: Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
DrmProfileGetByProviderAction = /** @class */ (function (_super) {
    tslib_1.__extends(DrmProfileGetByProviderAction, _super);
    function DrmProfileGetByProviderAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDrmProfile', responseConstructor: KalturaDrmProfile }) || this;
    }
    /**
     * @return {?}
     */
    DrmProfileGetByProviderAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'drm_drmprofile' },
            action: { type: 'c', default: 'getByProvider' },
            provider: { type: 'es', subTypeConstructor: KalturaDrmProviderType, subType: 'KalturaDrmProviderType' }
        });
        return result;
    };
    return DrmProfileGetByProviderAction;
}(KalturaRequest));
/**
 * Build request payload for service 'drmProfile' action 'getByProvider'.
 *
 * Usage: Retrieve a KalturaDrmProfile object by provider, if no specific profile defined return default profile
 *
 * Server response type:         KalturaDrmProfile
 * Server failure response type: KalturaAPIException
 */
export { DrmProfileGetByProviderAction };
if (false) {
    /** @type {?} */
    DrmProfileGetByProviderAction.prototype.provider;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRHJtUHJvZmlsZUdldEJ5UHJvdmlkZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0RybVByb2ZpbGVHZXRCeVByb3ZpZGVyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQW1ELHlEQUFpQztJQUloRix1Q0FBWSxJQUF3QztlQUVoRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRyxpQkFBaUIsRUFBRyxDQUFDO0tBQ3RIOzs7O0lBRVMsb0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0JBQWdCLEVBQUU7WUFDaEUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ2xELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQ2xHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBeENMO0VBbUJtRCxjQUFjLEVBc0JoRSxDQUFBOzs7Ozs7Ozs7QUF0QkQseUNBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm1Qcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhRHJtUHJvZmlsZSc7XG5cbmltcG9ydCB7IEthbHR1cmFEcm1Qcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFEcm1Qcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJtUHJvZmlsZUdldEJ5UHJvdmlkZXJBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcHJvdmlkZXIgOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZHJtUHJvZmlsZScgYWN0aW9uICdnZXRCeVByb3ZpZGVyJy5cbiAqXG4gKiBVc2FnZTogUmV0cmlldmUgYSBLYWx0dXJhRHJtUHJvZmlsZSBvYmplY3QgYnkgcHJvdmlkZXIsIGlmIG5vIHNwZWNpZmljIHByb2ZpbGUgZGVmaW5lZCByZXR1cm4gZGVmYXVsdCBwcm9maWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYURybVByb2ZpbGVcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERybVByb2ZpbGVHZXRCeVByb3ZpZGVyQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYURybVByb2ZpbGU+IHtcblxuICAgIHByb3ZpZGVyIDogS2FsdHVyYURybVByb3ZpZGVyVHlwZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBEcm1Qcm9maWxlR2V0QnlQcm92aWRlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURybVByb2ZpbGUnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYURybVByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RybV9kcm1wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0QnlQcm92aWRlcicgfSxcblx0XHRcdFx0cHJvdmlkZXIgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRHJtUHJvdmlkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFEcm1Qcm92aWRlclR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==