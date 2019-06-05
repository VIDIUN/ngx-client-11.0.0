/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function UverseClickToOrderGetFeedActionArgs() { }
/** @type {?} */
UverseClickToOrderGetFeedActionArgs.prototype.distributionProfileId;
/** @type {?} */
UverseClickToOrderGetFeedActionArgs.prototype.hash;
/**
 * Build request payload for service 'uverseClickToOrder' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'uverseClickToOrder' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
UverseClickToOrderGetFeedAction = /** @class */ (function (_super) {
    tslib_1.__extends(UverseClickToOrderGetFeedAction, _super);
    function UverseClickToOrderGetFeedAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    UverseClickToOrderGetFeedAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'uverseclicktoorderdistribution_uverseclicktoorder' },
            action: { type: 'c', default: 'getFeed' },
            distributionProfileId: { type: 'n' },
            hash: { type: 's' }
        });
        return result;
    };
    return UverseClickToOrderGetFeedAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'uverseClickToOrder' action 'getFeed'.
 *
 *
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { UverseClickToOrderGetFeedAction };
if (false) {
    /** @type {?} */
    UverseClickToOrderGetFeedAction.prototype.distributionProfileId;
    /** @type {?} */
    UverseClickToOrderGetFeedAction.prototype.hash;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXZlcnNlQ2xpY2tUb09yZGVyR2V0RmVlZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVXZlcnNlQ2xpY2tUb09yZGVyR2V0RmVlZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxrQkFBa0IsRUFBMEIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlckY7Ozs7Ozs7O0FBQUE7SUFBcUQsMkRBQWtCO0lBS25FLHlDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbURBQW1ELEVBQUU7WUFDbkcsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsU0FBUyxFQUFFO1lBQzVDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ1osQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0ExQ0w7RUFtQnFELGtCQUFrQixFQXdCdEUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDJDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFV2ZXJzZUNsaWNrVG9PcmRlckdldEZlZWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdEFyZ3Mge1xuICAgIGRpc3RyaWJ1dGlvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0aGFzaCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3V2ZXJzZUNsaWNrVG9PcmRlcicgYWN0aW9uICdnZXRGZWVkJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFV2ZXJzZUNsaWNrVG9PcmRlckdldEZlZWRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3Qge1xuXG4gICAgZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRoYXNoIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFV2ZXJzZUNsaWNrVG9PcmRlckdldEZlZWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXZlcnNlY2xpY2t0b29yZGVyZGlzdHJpYnV0aW9uX3V2ZXJzZWNsaWNrdG9vcmRlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEZlZWQnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGlvblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRoYXNoIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==