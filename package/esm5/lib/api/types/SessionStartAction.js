/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSessionType } from './KalturaSessionType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SessionStartActionArgs() { }
/** @type {?} */
SessionStartActionArgs.prototype.secret;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.userId;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.type;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.partnerId;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.expiry;
/** @type {?|undefined} */
SessionStartActionArgs.prototype.privileges;
/**
 * Build request payload for service 'session' action 'start'.
 *
 * Usage: Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'session' action 'start'.
 *
 * Usage: Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
SessionStartAction = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStartAction, _super);
    function SessionStartAction(data) {
        var _this = _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.expiry === 'undefined')
            _this.expiry = 86400;
        return _this;
    }
    /**
     * @return {?}
     */
    SessionStartAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'session' },
            action: { type: 'c', default: 'start' },
            secret: { type: 's' },
            userId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            partnerId: { type: 'n' },
            expiry: { type: 'n' },
            privileges: { type: 's' }
        });
        return result;
    };
    return SessionStartAction;
}(KalturaRequest));
/**
 * Build request payload for service 'session' action 'start'.
 *
 * Usage: Start a session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { SessionStartAction };
if (false) {
    /** @type {?} */
    SessionStartAction.prototype.secret;
    /** @type {?} */
    SessionStartAction.prototype.userId;
    /** @type {?} */
    SessionStartAction.prototype.type;
    /** @type {?} */
    SessionStartAction.prototype.partnerId;
    /** @type {?} */
    SessionStartAction.prototype.expiry;
    /** @type {?} */
    SessionStartAction.prototype.privileges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvblN0YXJ0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZXNzaW9uU3RhcnRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CeEU7Ozs7Ozs7OztBQUFBO0lBQXdDLDhDQUFzQjtJQVMxRCw0QkFBWSxJQUE2QjtRQUF6QyxZQUVJLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQyxTQUV2RjtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLE1BQU0sS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzs7S0FDL0Q7Ozs7SUFFUyx5Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDekQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMvRixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZCQXpETDtFQXlCd0MsY0FBYyxFQWlDckQsQ0FBQTs7Ozs7Ozs7OztBQWpDRCw4QkFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNlc3Npb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlc3Npb25TdGFydEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZWNyZXQgOiBzdHJpbmc7XG5cdHVzZXJJZD8gOiBzdHJpbmc7XG5cdHR5cGU/IDogS2FsdHVyYVNlc3Npb25UeXBlO1xuXHRwYXJ0bmVySWQ/IDogbnVtYmVyO1xuXHRleHBpcnk/IDogbnVtYmVyO1xuXHRwcml2aWxlZ2VzPyA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Nlc3Npb24nIGFjdGlvbiAnc3RhcnQnLlxuICpcbiAqIFVzYWdlOiBTdGFydCBhIHNlc3Npb24gd2l0aCBLYWx0dXJhJ3Mgc2VydmVyLlxuICogVGhlIHJlc3VsdCBLUyBpcyB0aGUgc2Vzc2lvbiBrZXkgdGhhdCB5b3Ugc2hvdWxkIHBhc3MgdG8gYWxsIHNlcnZpY2VzIHRoYXQgcmVxdWlyZXMgYSB0aWNrZXRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBzdHJpbmdcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNlc3Npb25TdGFydEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PHN0cmluZz4ge1xuXG4gICAgc2VjcmV0IDogc3RyaW5nO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhU2Vzc2lvblR5cGU7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZXhwaXJ5IDogbnVtYmVyO1xuXHRwcml2aWxlZ2VzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNlc3Npb25TdGFydEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3MnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5leHBpcnkgPT09ICd1bmRlZmluZWQnKSB0aGlzLmV4cGlyeSA9IDg2NDAwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3Nlc3Npb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzdGFydCcgfSxcblx0XHRcdFx0c2VjcmV0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlc3Npb25UeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZXNzaW9uVHlwZScgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGV4cGlyeSA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwcml2aWxlZ2VzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==