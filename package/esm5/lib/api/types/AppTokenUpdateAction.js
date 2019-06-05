/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAppToken } from './KalturaAppToken';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AppTokenUpdateActionArgs() { }
/** @type {?} */
AppTokenUpdateActionArgs.prototype.id;
/** @type {?} */
AppTokenUpdateActionArgs.prototype.appToken;
/**
 * Build request payload for service 'appToken' action 'update'.
 *
 * Usage: Update application authentication token by id
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'appToken' action 'update'.
 *
 * Usage: Update application authentication token by id
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
AppTokenUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(AppTokenUpdateAction, _super);
    function AppTokenUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAppToken', responseConstructor: KalturaAppToken }) || this;
    }
    /**
     * @return {?}
     */
    AppTokenUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'apptoken' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            appToken: { type: 'o', subTypeConstructor: KalturaAppToken, subType: 'KalturaAppToken' }
        });
        return result;
    };
    return AppTokenUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'appToken' action 'update'.
 *
 * Usage: Update application authentication token by id
 *
 * Server response type:         KalturaAppToken
 * Server failure response type: KalturaAPIException
 */
export { AppTokenUpdateAction };
if (false) {
    /** @type {?} */
    AppTokenUpdateAction.prototype.id;
    /** @type {?} */
    AppTokenUpdateAction.prototype.appToken;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwVG9rZW5VcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FwcFRva2VuVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXBELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQTBDLGdEQUErQjtJQUtyRSw4QkFBWSxJQUErQjtlQUV2QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxpQkFBaUIsRUFBRSxtQkFBbUIsRUFBRyxlQUFlLEVBQUcsQ0FBQztLQUNsSDs7OztJQUVTLDJDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFVBQVUsRUFBRTtZQUMxRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGVBQWUsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7U0FDbkYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkExQ0w7RUFtQjBDLGNBQWMsRUF3QnZELENBQUE7Ozs7Ozs7OztBQXhCRCxnQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFwcFRva2VuIH0gZnJvbSAnLi9LYWx0dXJhQXBwVG9rZW4nO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBUb2tlblVwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0YXBwVG9rZW4gOiBLYWx0dXJhQXBwVG9rZW47XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdhcHBUb2tlbicgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgYXBwbGljYXRpb24gYXV0aGVudGljYXRpb24gdG9rZW4gYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQXBwVG9rZW5cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEFwcFRva2VuVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUFwcFRva2VuPiB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0YXBwVG9rZW4gOiBLYWx0dXJhQXBwVG9rZW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQXBwVG9rZW5VcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFBcHBUb2tlbicsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQXBwVG9rZW4gIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FwcHRva2VuJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhcHBUb2tlbiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUFwcFRva2VuLCBzdWJUeXBlIDogJ0thbHR1cmFBcHBUb2tlbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19