/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaStartWidgetSessionResponse } from './KalturaStartWidgetSessionResponse';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SessionStartWidgetSessionActionArgs() { }
/** @type {?} */
SessionStartWidgetSessionActionArgs.prototype.widgetId;
/** @type {?|undefined} */
SessionStartWidgetSessionActionArgs.prototype.expiry;
/**
 * Build request payload for service 'session' action 'startWidgetSession'.
 *
 * Usage: Start a session for Kaltura's flash widgets
 *
 * Server response type:         KalturaStartWidgetSessionResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'session' action 'startWidgetSession'.
 *
 * Usage: Start a session for Kaltura's flash widgets
 *
 * Server response type:         KalturaStartWidgetSessionResponse
 * Server failure response type: KalturaAPIException
 */
SessionStartWidgetSessionAction = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStartWidgetSessionAction, _super);
    function SessionStartWidgetSessionAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaStartWidgetSessionResponse', responseConstructor: KalturaStartWidgetSessionResponse }) || this;
        if (typeof _this.expiry === 'undefined')
            _this.expiry = 86400;
        return _this;
    }
    /**
     * @return {?}
     */
    SessionStartWidgetSessionAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'session' },
            action: { type: 'c', default: 'startWidgetSession' },
            widgetId: { type: 's' },
            expiry: { type: 'n' }
        });
        return result;
    };
    return SessionStartWidgetSessionAction;
}(KalturaRequest));
/**
 * Build request payload for service 'session' action 'startWidgetSession'.
 *
 * Usage: Start a session for Kaltura's flash widgets
 *
 * Server response type:         KalturaStartWidgetSessionResponse
 * Server failure response type: KalturaAPIException
 */
export { SessionStartWidgetSessionAction };
if (false) {
    /** @type {?} */
    SessionStartWidgetSessionAction.prototype.widgetId;
    /** @type {?} */
    SessionStartWidgetSessionAction.prototype.expiry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Vzc2lvblN0YXJ0V2lkZ2V0U2Vzc2lvbkFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU2Vzc2lvblN0YXJ0V2lkZ2V0U2Vzc2lvbkFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBRXhGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQXFELDJEQUFpRDtJQUtsRyx5Q0FBWSxJQUEwQztRQUF0RCxZQUVJLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLG1DQUFtQyxFQUFFLG1CQUFtQixFQUFHLGlDQUFpQyxFQUFHLENBQUMsU0FFdEo7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxNQUFNLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7O0tBQy9EOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQ3pELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3ZELFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBM0NMO0VBbUJxRCxjQUFjLEVBeUJsRSxDQUFBOzs7Ozs7Ozs7QUF6QkQsMkNBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdGFydFdpZGdldFNlc3Npb25SZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYVN0YXJ0V2lkZ2V0U2Vzc2lvblJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Vzc2lvblN0YXJ0V2lkZ2V0U2Vzc2lvbkFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICB3aWRnZXRJZCA6IHN0cmluZztcblx0ZXhwaXJ5PyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3Nlc3Npb24nIGFjdGlvbiAnc3RhcnRXaWRnZXRTZXNzaW9uJy5cbiAqXG4gKiBVc2FnZTogU3RhcnQgYSBzZXNzaW9uIGZvciBLYWx0dXJhJ3MgZmxhc2ggd2lkZ2V0c1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFTdGFydFdpZGdldFNlc3Npb25SZXNwb25zZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU2Vzc2lvblN0YXJ0V2lkZ2V0U2Vzc2lvbkFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTdGFydFdpZGdldFNlc3Npb25SZXNwb25zZT4ge1xuXG4gICAgd2lkZ2V0SWQgOiBzdHJpbmc7XG5cdGV4cGlyeSA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBTZXNzaW9uU3RhcnRXaWRnZXRTZXNzaW9uQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhU3RhcnRXaWRnZXRTZXNzaW9uUmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0YXJ0V2lkZ2V0U2Vzc2lvblJlc3BvbnNlICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV4cGlyeSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZXhwaXJ5ID0gODY0MDA7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnc2Vzc2lvbicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N0YXJ0V2lkZ2V0U2Vzc2lvbicgfSxcblx0XHRcdFx0d2lkZ2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZXhwaXJ5IDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==