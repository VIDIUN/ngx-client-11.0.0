/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class SyndicationFeedGetEntryCountAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaSyndicationFeedEntryCount', responseConstructor: KalturaSyndicationFeedEntryCount });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'syndicationfeed' },
            action: { type: 'c', default: 'getEntryCount' },
            feedId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    SyndicationFeedGetEntryCountAction.prototype.feedId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3luZGljYXRpb25GZWVkR2V0RW50cnlDb3VudEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvU3luZGljYXRpb25GZWVkR2V0RW50cnlDb3VudEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFdEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFLE1BQU0seUNBQTBDLFNBQVEsY0FBZ0Q7Ozs7SUFJcEcsWUFBWSxJQUE2QztRQUVyRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0NBQWtDLEVBQUUsbUJBQW1CLEVBQUcsZ0NBQWdDLEVBQUcsQ0FBQyxDQUFDO0tBQ3JKOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNqRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDbEQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNkLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudCB9IGZyb20gJy4vS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBTeW5kaWNhdGlvbkZlZWRHZXRFbnRyeUNvdW50QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZlZWRJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3N5bmRpY2F0aW9uRmVlZCcgYWN0aW9uICdnZXRFbnRyeUNvdW50Jy5cbiAqXG4gKiBVc2FnZTogZ2V0IGVudHJ5IGNvdW50IGZvciBhIHN5bmRpY2F0aW9uIGZlZWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhU3luZGljYXRpb25GZWVkRW50cnlDb3VudFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgU3luZGljYXRpb25GZWVkR2V0RW50cnlDb3VudEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFTeW5kaWNhdGlvbkZlZWRFbnRyeUNvdW50PiB7XG5cbiAgICBmZWVkSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogU3luZGljYXRpb25GZWVkR2V0RW50cnlDb3VudEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN5bmRpY2F0aW9uRmVlZEVudHJ5Q291bnQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3N5bmRpY2F0aW9uZmVlZCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEVudHJ5Q291bnQnIH0sXG5cdFx0XHRcdGZlZWRJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=