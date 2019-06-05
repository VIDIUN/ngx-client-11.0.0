/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPlaybackContext } from './KalturaPlaybackContext';
import { KalturaPlaybackContextOptions } from './KalturaPlaybackContextOptions';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryGetPlaybackContextActionArgs() { }
/** @type {?} */
BaseEntryGetPlaybackContextActionArgs.prototype.entryId;
/** @type {?} */
BaseEntryGetPlaybackContextActionArgs.prototype.contextDataParams;
/**
 * Build request payload for service 'baseEntry' action 'getPlaybackContext'.
 *
 * Usage: This action delivers all data relevant for player
 *
 * Server response type:         KalturaPlaybackContext
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'getPlaybackContext'.
 *
 * Usage: This action delivers all data relevant for player
 *
 * Server response type:         KalturaPlaybackContext
 * Server failure response type: KalturaAPIException
 */
BaseEntryGetPlaybackContextAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryGetPlaybackContextAction, _super);
    function BaseEntryGetPlaybackContextAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPlaybackContext', responseConstructor: KalturaPlaybackContext }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryGetPlaybackContextAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'getPlaybackContext' },
            entryId: { type: 's' },
            contextDataParams: { type: 'o', subTypeConstructor: KalturaPlaybackContextOptions, subType: 'KalturaPlaybackContextOptions' }
        });
        return result;
    };
    return BaseEntryGetPlaybackContextAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'getPlaybackContext'.
 *
 * Usage: This action delivers all data relevant for player
 *
 * Server response type:         KalturaPlaybackContext
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryGetPlaybackContextAction };
if (false) {
    /** @type {?} */
    BaseEntryGetPlaybackContextAction.prototype.entryId;
    /** @type {?} */
    BaseEntryGetPlaybackContextAction.prototype.contextDataParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5R2V0UGxheWJhY2tDb250ZXh0QWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CYXNlRW50cnlHZXRQbGF5YmFja0NvbnRleHRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVsRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF1RCw2REFBc0M7SUFLekYsMkNBQVksSUFBNEM7ZUFFcEQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsd0JBQXdCLEVBQUUsbUJBQW1CLEVBQUcsc0JBQXNCLEVBQUcsQ0FBQztLQUNoSTs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN2RCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyw2QkFBNkIsRUFBRSxPQUFPLEVBQUcsK0JBQStCLEVBQUU7U0FDeEgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0EzQ0w7RUFvQnVELGNBQWMsRUF3QnBFLENBQUE7Ozs7Ozs7OztBQXhCRCw2Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXliYWNrQ29udGV4dCB9IGZyb20gJy4vS2FsdHVyYVBsYXliYWNrQ29udGV4dCc7XG5cbmltcG9ydCB7IEthbHR1cmFQbGF5YmFja0NvbnRleHRPcHRpb25zIH0gZnJvbSAnLi9LYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBCYXNlRW50cnlHZXRQbGF5YmFja0NvbnRleHRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y29udGV4dERhdGFQYXJhbXMgOiBLYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Jhc2VFbnRyeScgYWN0aW9uICdnZXRQbGF5YmFja0NvbnRleHQnLlxuICpcbiAqIFVzYWdlOiBUaGlzIGFjdGlvbiBkZWxpdmVycyBhbGwgZGF0YSByZWxldmFudCBmb3IgcGxheWVyXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYVBsYXliYWNrQ29udGV4dFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQmFzZUVudHJ5R2V0UGxheWJhY2tDb250ZXh0QWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBsYXliYWNrQ29udGV4dD4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y29udGV4dERhdGFQYXJhbXMgOiBLYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9ucztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCYXNlRW50cnlHZXRQbGF5YmFja0NvbnRleHRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQbGF5YmFja0NvbnRleHQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXliYWNrQ29udGV4dCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYmFzZWVudHJ5JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0UGxheWJhY2tDb250ZXh0JyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRleHREYXRhUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9ucywgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWJhY2tDb250ZXh0T3B0aW9ucycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19