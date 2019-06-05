/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaSyndicationFeedEntryCount } from './KalturaSyndicationFeedEntryCount';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function SyndicationFeedGetEntryCountActionArgs() { }
/** @type {?} */
SyndicationFeedGetEntryCountActionArgs.prototype.feedId;
/**
 * Build request payload for service 'syndicationFeed' action 'getEntryCount'.
 *
 * Usage: get entry count for a syndication feed
 *
 * Server response type:         KalturaSyndicationFeedEntryCount
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'syndicationFeed' action 'getEntryCount'.
 *
 * Usage: get entry count for a syndication feed
 *
 * Server response type:         KalturaSyndicationFeedEntryCount
 * Server failure response type: KalturaAPIException
 */
SyndicationFeedGetEntryCountAction = /** @class */ (function (_super) {
    tslib_1.__extends(SyndicationFeedGetEntryCountAction, _super);
    function SyndicationFeedGetEntryCountAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaSyndicationFeedEntryCount', responseConstructor: KalturaSyndicationFeedEntryCount }) || this;
    }
    /**
     * @return {?}
     */
    SyndicationFeedGetEntryCountAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'getEntryCount' },
            feedId: { type: 's' }
        });
        return result;
    };
    return SyndicationFeedGetEntryCountAction;
}(KalturaRequest));
/**
 * Build request payload for service 'syndicationFeed' action 'getEntryCount'.
 *
 * Usage: get entry count for a syndication feed
 *
 * Server response type:         KalturaSyndicationFeedEntryCount
 * Server failure response type: KalturaAPIException
 */
export { SyndicationFeedGetEntryCountAction };
if (false) {
    /** @type {?} */
    SyndicationFeedGetEntryCountAction.prototype.feedId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkR2V0RW50cnlDb3VudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU3luZGljYXRpb25GZWVkR2V0RW50cnlDb3VudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF3RCw4REFBZ0Q7SUFJcEcsNENBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0NBQWtDLEVBQUUsbUJBQW1CLEVBQUcsZ0NBQWdDLEVBQUcsQ0FBQztLQUNwSjs7OztJQUVTLHlEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2QsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0F2Q0w7RUFrQndELGNBQWMsRUFzQnJFLENBQUE7Ozs7Ozs7OztBQXRCRCw4Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQgfSBmcm9tICcuL0thbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50JztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3luZGljYXRpb25GZWVkR2V0RW50cnlDb3VudEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmZWVkSWQgOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdzeW5kaWNhdGlvbkZlZWQnIGFjdGlvbiAnZ2V0RW50cnlDb3VudCcuXG4gKlxuICogVXNhZ2U6IGdldCBlbnRyeSBjb3VudCBmb3IgYSBzeW5kaWNhdGlvbiBmZWVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFN5bmRpY2F0aW9uRmVlZEdldEVudHJ5Q291bnRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudD4ge1xuXG4gICAgZmVlZElkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFN5bmRpY2F0aW9uRmVlZEdldEVudHJ5Q291bnRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzeW5kaWNhdGlvbmZlZWQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRFbnRyeUNvdW50JyB9LFxuXHRcdFx0XHRmZWVkSWQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19