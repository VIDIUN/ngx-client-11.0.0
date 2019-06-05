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
export function SessionImpersonateActionArgs() { }
/** @type {?} */
SessionImpersonateActionArgs.prototype.secret;
/** @type {?} */
SessionImpersonateActionArgs.prototype.impersonatedPartnerId;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.userId;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.type;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.partnerId;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.expiry;
/** @type {?|undefined} */
SessionImpersonateActionArgs.prototype.privileges;
/**
 * Build request payload for service 'session' action 'impersonate'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'session' action 'impersonate'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
SessionImpersonateAction = /** @class */ (function (_super) {
    tslib_1.__extends(SessionImpersonateAction, _super);
    function SessionImpersonateAction(data) {
        var _this = _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
        if (typeof _this.expiry === 'undefined')
            _this.expiry = 86400;
        return _this;
    }
    /**
     * @return {?}
     */
    SessionImpersonateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'session' },
            action: { type: 'c', default: 'impersonate' },
            secret: { type: 's' },
            impersonatedPartnerId: { type: 'n' },
            userId: { type: 's' },
            type: { type: 'en', subTypeConstructor: KalturaSessionType, subType: 'KalturaSessionType' },
            partnerId: { type: 'n' },
            expiry: { type: 'n' },
            privileges: { type: 's' }
        });
        return result;
    };
    return SessionImpersonateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'session' action 'impersonate'.
 *
 * Usage: Start an impersonated session with Kaltura's server.
 * The result KS is the session key that you should pass to all services that requires a ticket
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { SessionImpersonateAction };
if (false) {
    /** @type {?} */
    SessionImpersonateAction.prototype.secret;
    /** @type {?} */
    SessionImpersonateAction.prototype.impersonatedPartnerId;
    /** @type {?} */
    SessionImpersonateAction.prototype.userId;
    /** @type {?} */
    SessionImpersonateAction.prototype.type;
    /** @type {?} */
    SessionImpersonateAction.prototype.partnerId;
    /** @type {?} */
    SessionImpersonateAction.prototype.expiry;
    /** @type {?} */
    SessionImpersonateAction.prototype.privileges;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvbkltcGVyc29uYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TZXNzaW9uSW1wZXJzb25hdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJ4RTs7Ozs7Ozs7O0FBQUE7SUFBOEMsb0RBQXNCO0lBVWhFLGtDQUFZLElBQW1DO1FBQS9DLFlBRUksa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDLFNBRXZGO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsTUFBTSxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDOztLQUMvRDs7OztJQUVTLCtDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUN6RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxhQUFhLEVBQUU7WUFDaEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUMvRixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNsQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQTVETDtFQTBCOEMsY0FBYyxFQW1DM0QsQ0FBQTs7Ozs7Ozs7OztBQW5DRCxvQ0FtQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFTZXNzaW9uVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNlc3Npb25UeXBlJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNlc3Npb25JbXBlcnNvbmF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBzZWNyZXQgOiBzdHJpbmc7XG5cdGltcGVyc29uYXRlZFBhcnRuZXJJZCA6IG51bWJlcjtcblx0dXNlcklkPyA6IHN0cmluZztcblx0dHlwZT8gOiBLYWx0dXJhU2Vzc2lvblR5cGU7XG5cdHBhcnRuZXJJZD8gOiBudW1iZXI7XG5cdGV4cGlyeT8gOiBudW1iZXI7XG5cdHByaXZpbGVnZXM/IDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2Vzc2lvbicgYWN0aW9uICdpbXBlcnNvbmF0ZScuXG4gKlxuICogVXNhZ2U6IFN0YXJ0IGFuIGltcGVyc29uYXRlZCBzZXNzaW9uIHdpdGggS2FsdHVyYSdzIHNlcnZlci5cbiAqIFRoZSByZXN1bHQgS1MgaXMgdGhlIHNlc3Npb24ga2V5IHRoYXQgeW91IHNob3VsZCBwYXNzIHRvIGFsbCBzZXJ2aWNlcyB0aGF0IHJlcXVpcmVzIGEgdGlja2V0XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgc3RyaW5nXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBTZXNzaW9uSW1wZXJzb25hdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxzdHJpbmc+IHtcblxuICAgIHNlY3JldCA6IHN0cmluZztcblx0aW1wZXJzb25hdGVkUGFydG5lcklkIDogbnVtYmVyO1xuXHR1c2VySWQgOiBzdHJpbmc7XG5cdHR5cGUgOiBLYWx0dXJhU2Vzc2lvblR5cGU7XG5cdHBhcnRuZXJJZCA6IG51bWJlcjtcblx0ZXhwaXJ5IDogbnVtYmVyO1xuXHRwcml2aWxlZ2VzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNlc3Npb25JbXBlcnNvbmF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3MnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5leHBpcnkgPT09ICd1bmRlZmluZWQnKSB0aGlzLmV4cGlyeSA9IDg2NDAwO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3Nlc3Npb24nIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdpbXBlcnNvbmF0ZScgfSxcblx0XHRcdFx0c2VjcmV0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGltcGVyc29uYXRlZFBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTZXNzaW9uVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2Vzc2lvblR5cGUnIH0sXG5cdFx0XHRcdHBhcnRuZXJJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRleHBpcnkgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJpdmlsZWdlcyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=