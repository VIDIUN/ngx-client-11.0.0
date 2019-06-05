/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPartner } from './KalturaPartner';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerGetSecretsActionArgs() { }
/** @type {?} */
PartnerGetSecretsActionArgs.prototype.partnerId;
/** @type {?} */
PartnerGetSecretsActionArgs.prototype.adminEmail;
/** @type {?} */
PartnerGetSecretsActionArgs.prototype.cmsPassword;
/**
 * Build request payload for service 'partner' action 'getSecrets'.
 *
 * Usage: Retrieve partner secret and admin secret
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'getSecrets'.
 *
 * Usage: Retrieve partner secret and admin secret
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
PartnerGetSecretsAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerGetSecretsAction, _super);
    function PartnerGetSecretsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartner', responseConstructor: KalturaPartner }) || this;
    }
    /**
     * @return {?}
     */
    PartnerGetSecretsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'getSecrets' },
            partnerId: { type: 'n' },
            adminEmail: { type: 's' },
            cmsPassword: { type: 's' }
        });
        return result;
    };
    return PartnerGetSecretsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'getSecrets'.
 *
 * Usage: Retrieve partner secret and admin secret
 *
 * Server response type:         KalturaPartner
 * Server failure response type: KalturaAPIException
 */
export { PartnerGetSecretsAction };
if (false) {
    /** @type {?} */
    PartnerGetSecretsAction.prototype.partnerId;
    /** @type {?} */
    PartnerGetSecretsAction.prototype.adminEmail;
    /** @type {?} */
    PartnerGetSecretsAction.prototype.cmsPassword;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lckdldFNlY3JldHNBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BhcnRuZXJHZXRTZWNyZXRzQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRWxELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQTZDLG1EQUE4QjtJQU12RSxpQ0FBWSxJQUFrQztlQUUxQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxnQkFBZ0IsRUFBRSxtQkFBbUIsRUFBRyxjQUFjLEVBQUcsQ0FBQztLQUNoSDs7OztJQUVTLDhDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUN6RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDL0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtrQ0E3Q0w7RUFvQjZDLGNBQWMsRUEwQjFELENBQUE7Ozs7Ozs7OztBQTFCRCxtQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXIgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydG5lckdldFNlY3JldHNBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcGFydG5lcklkIDogbnVtYmVyO1xuXHRhZG1pbkVtYWlsIDogc3RyaW5nO1xuXHRjbXNQYXNzd29yZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BhcnRuZXInIGFjdGlvbiAnZ2V0U2VjcmV0cycuXG4gKlxuICogVXNhZ2U6IFJldHJpZXZlIHBhcnRuZXIgc2VjcmV0IGFuZCBhZG1pbiBzZWNyZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUGFydG5lclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUGFydG5lckdldFNlY3JldHNBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGFydG5lcj4ge1xuXG4gICAgcGFydG5lcklkIDogbnVtYmVyO1xuXHRhZG1pbkVtYWlsIDogc3RyaW5nO1xuXHRjbXNQYXNzd29yZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBQYXJ0bmVyR2V0U2VjcmV0c0FjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXInLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXIgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BhcnRuZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRTZWNyZXRzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0YWRtaW5FbWFpbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjbXNQYXNzd29yZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=