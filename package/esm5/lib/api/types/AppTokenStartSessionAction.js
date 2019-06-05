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
export function AppTokenStartSessionActionArgs() { }
/** @type {?} */
AppTokenStartSessionActionArgs.prototype.id;
/** @type {?} */
AppTokenStartSessionActionArgs.prototype.tokenHash;
/** @type {?|undefined} */
AppTokenStartSessionActionArgs.prototype.userId;
/** @type {?|undefined} */
AppTokenStartSessionActionArgs.prototype.type;
/** @type {?|undefined} */
AppTokenStartSessionActionArgs.prototype.expiry;
/**
 * Build request payload for service 'appToken' action 'startSession'.
 *
 * Usage: Starts a new KS (kaltura Session) based on application authentication token id
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'appToken' action 'startSession'.
 *
 * Usage: Starts a new KS (kaltura Session) based on application authentication token id
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
AppTokenStartSessionAction = /** @class */ (function (_super) {
    tslib_1.__extends(AppTokenStartSessionAction, _super);
    function AppTokenStartSessionAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSessionInfo', responseConstructor: KalturaSessionInfo }) || this;
    }
    /**
     * @return {?}
     */
    AppTokenStartSessionAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'apptoken' },
            action: { type: 'c', default: 'startSession' },
            id: { type: 's' },
            tokenHash: { type: 's' },
            userId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            expiry: { type: 'n' }
        });
        return result;
    };
    return AppTokenStartSessionAction;
}(KalturaRequest));
/**
 * Build request payload for service 'appToken' action 'startSession'.
 *
 * Usage: Starts a new KS (kaltura Session) based on application authentication token id
 *
 * Server response type:         KalturaSessionInfo
 * Server failure response type: KalturaAPIException
 */
export { AppTokenStartSessionAction };
if (false) {
    /** @type {?} */
    AppTokenStartSessionAction.prototype.id;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.tokenHash;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.userId;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.type;
    /** @type {?} */
    AppTokenStartSessionAction.prototype.expiry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBwVG9rZW5TdGFydFNlc3Npb25BY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0FwcFRva2VuU3RhcnRTZXNzaW9uQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQnhFOzs7Ozs7OztBQUFBO0lBQWdELHNEQUFrQztJQVE5RSxvQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzFELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGNBQWMsRUFBRTtZQUNqRCxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMvRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0FwREw7RUF1QmdELGNBQWMsRUE4QjdELENBQUE7Ozs7Ozs7OztBQTlCRCxzQ0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlc3Npb25JbmZvIH0gZnJvbSAnLi9LYWx0dXJhU2Vzc2lvbkluZm8nO1xuXG5pbXBvcnQgeyBLYWx0dXJhU2Vzc2lvblR5cGUgfSBmcm9tICcuL0thbHR1cmFTZXNzaW9uVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBBcHBUb2tlblN0YXJ0U2Vzc2lvbkFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IHN0cmluZztcblx0dG9rZW5IYXNoIDogc3RyaW5nO1xuXHR1c2VySWQ/IDogc3RyaW5nO1xuXHR0eXBlPyA6IEthbHR1cmFTZXNzaW9uVHlwZTtcblx0ZXhwaXJ5PyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2FwcFRva2VuJyBhY3Rpb24gJ3N0YXJ0U2Vzc2lvbicuXG4gKlxuICogVXNhZ2U6IFN0YXJ0cyBhIG5ldyBLUyAoa2FsdHVyYSBTZXNzaW9uKSBiYXNlZCBvbiBhcHBsaWNhdGlvbiBhdXRoZW50aWNhdGlvbiB0b2tlbiBpZFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTZXNzaW9uSW5mb1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQXBwVG9rZW5TdGFydFNlc3Npb25BY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU2Vzc2lvbkluZm8+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHR0b2tlbkhhc2ggOiBzdHJpbmc7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0dHlwZSA6IEthbHR1cmFTZXNzaW9uVHlwZTtcblx0ZXhwaXJ5IDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFwcFRva2VuU3RhcnRTZXNzaW9uQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU2Vzc2lvbkluZm8nLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlc3Npb25JbmZvICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhcHB0b2tlbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N0YXJ0U2Vzc2lvbicgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dG9rZW5IYXNoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlc3Npb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZXNzaW9uVHlwZScgfSxcblx0XHRcdFx0ZXhwaXJ5IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==