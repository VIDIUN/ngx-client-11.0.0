/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PollVoteActionArgs() { }
/** @type {?} */
PollVoteActionArgs.prototype.pollId;
/** @type {?} */
PollVoteActionArgs.prototype.userId;
/** @type {?} */
PollVoteActionArgs.prototype.answerIds;
/**
 * Build request payload for service 'poll' action 'vote'.
 *
 * Usage: Vote Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'poll' action 'vote'.
 *
 * Usage: Vote Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
PollVoteAction = /** @class */ (function (_super) {
    tslib_1.__extends(PollVoteAction, _super);
    function PollVoteAction(data) {
        return _super.call(this, data, { responseType: 's', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    PollVoteAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'poll_poll' },
            action: { type: 'c', default: 'vote' },
            pollId: { type: 's' },
            userId: { type: 's' },
            answerIds: { type: 's' }
        });
        return result;
    };
    return PollVoteAction;
}(KalturaRequest));
/**
 * Build request payload for service 'poll' action 'vote'.
 *
 * Usage: Vote Action
 *
 * Server response type:         string
 * Server failure response type: KalturaAPIException
 */
export { PollVoteAction };
if (false) {
    /** @type {?} */
    PollVoteAction.prototype.pollId;
    /** @type {?} */
    PollVoteAction.prototype.userId;
    /** @type {?} */
    PollVoteAction.prototype.answerIds;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9sbFZvdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BvbGxWb3RlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEU7Ozs7Ozs7O0FBQUE7SUFBb0MsMENBQXNCO0lBTXRELHdCQUFZLElBQXlCO2VBRWpDLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLHFDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDakIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5QkE3Q0w7RUFvQm9DLGNBQWMsRUEwQmpELENBQUE7Ozs7Ozs7OztBQTFCRCwwQkEwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvbGxWb3RlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBvbGxJZCA6IHN0cmluZztcblx0dXNlcklkIDogc3RyaW5nO1xuXHRhbnN3ZXJJZHMgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwb2xsJyBhY3Rpb24gJ3ZvdGUnLlxuICpcbiAqIFVzYWdlOiBWb3RlIEFjdGlvblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHN0cmluZ1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgUG9sbFZvdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxzdHJpbmc+IHtcblxuICAgIHBvbGxJZCA6IHN0cmluZztcblx0dXNlcklkIDogc3RyaW5nO1xuXHRhbnN3ZXJJZHMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogUG9sbFZvdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdzJywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BvbGxfcG9sbCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3ZvdGUnIH0sXG5cdFx0XHRcdHBvbGxJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1c2VySWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YW5zd2VySWRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==