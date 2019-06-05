/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSessionInfo } from './KalturaSessionInfo';
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SessionImpersonateByKsActionArgs() { }
/** @type {?} */
SessionImpersonateByKsActionArgs.prototype.session;
/** @type {?|undefined} */
SessionImpersonateByKsActionArgs.prototype.type;
/** @type {?|undefined} */
SessionImpersonateByKsActionArgs.prototype.expiry;
/** @type {?|undefined} */
SessionImpersonateByKsActionArgs.prototype.privileges;
/**
 * Build request payload for service 'session' action 'impersonateByKs'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'session' action 'impersonateByKs'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
SessionImpersonateByKsAction = /** @class */ (function (_super) {
    tslib_1.__extends(SessionImpersonateByKsAction, _super);
    function SessionImpersonateByKsAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSessionInfo', responseConstructor: KalturaSessionInfo }) || this;
    }
    /**
     * @return {?}
     */
    SessionImpersonateByKsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'session' },
            action: { type: 'c', default: 'impersonateByKs' },
            session: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            expiry: { type: 'n' },
            privileges: { type: 's' }
        });
        return result;
    };
    return SessionImpersonateByKsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'session' action 'impersonateByKs'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS info contains the session key that you should pass to all services that requires a ticket.
 * Type, expiry and privileges won't be changed if they're not set
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
export { SessionImpersonateByKsAction };
if (false) {
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.session;
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.type;
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.expiry;
    /** @type {?} */
    SessionImpersonateByKsAction.prototype.privileges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbkltcGVyc29uYXRlQnlLc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2Vzc2lvbkltcGVyc29uYXRlQnlLc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRTFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ4RTs7Ozs7Ozs7OztBQUFBO0lBQWtELHdEQUFrQztJQU9oRixzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsbURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQ3pELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BELE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDL0YsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBbkRMO0VBd0JrRCxjQUFjLEVBNEIvRCxDQUFBOzs7Ozs7Ozs7OztBQTVCRCx3Q0E0QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlc3Npb25JbmZvIH0gZnJvbSAnLi9LYWx0dXJhU2Vzc2lvbkluZm8nO1xuXG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvblR5cGUgfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTZXNzaW9uSW1wZXJzb25hdGVCeUtzQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHNlc3Npb24gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRleHBpcnk/IDogbnVtYmVyO1xuXHRwcml2aWxlZ2VzPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Nlc3Npb24nIGFjdGlvbiAnaW1wZXJzb25hdGVCeUtzJy5cbiAqXG4gKiBVc2FnZTogU3RhcnQgYW4gaW1wZXJzb25hdGVkIHNlc3Npb24gd2l0aCBLYWx0dXJhJ3Mgc2VydmVyLlxuICogVGhlIHJlc3VsdCBLUyBpbmZvIGNvbnRhaW5zIHRoZSBzZXNzaW9uIGtleSB0aGF0IHlvdSBzaG91bGQgcGFzcyB0byBhbGwgc2VydmljZXMgdGhhdCByZXF1aXJlcyBhIHRpY2tldC5cbiAqIFR5cGUsIGV4cGlyeSBhbmQgcHJpdmlsZWdlcyB3b24ndCBiZSBjaGFuZ2VkIGlmIHRoZXkncmUgbm90IHNldFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZXNzaW9uSW5mb1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvbkltcGVyc29uYXRlQnlLc0FjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTZXNzaW9uSW5mbz4ge1xuXG4gICAgc2Vzc2lvbiA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFTZXNzaW9uVHlwZTtcblx0ZXhwaXJ5IDogbnVtYmVyO1xuXHRwcml2aWxlZ2VzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNlc3Npb25JbXBlcnNvbmF0ZUJ5S3NBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTZXNzaW9uSW5mbycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2Vzc2lvbkluZm8gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3Nlc3Npb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpbXBlcnNvbmF0ZUJ5S3MnIH0sXG5cdFx0XHRcdHNlc3Npb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXNzaW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2Vzc2lvblR5cGUnIH0sXG5cdFx0XHRcdGV4cGlyeSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcml2aWxlZ2VzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==