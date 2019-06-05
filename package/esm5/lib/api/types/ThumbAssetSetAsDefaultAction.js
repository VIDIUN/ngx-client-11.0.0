/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbAssetSetAsDefaultActionArgs() { }
/** @type {?} */
ThumbAssetSetAsDefaultActionArgs.prototype.thumbAssetId;
/**
 * Build request payload for service 'thumbAsset' action 'setAsDefault'.
 *
 * Usage: Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbAsset' action 'setAsDefault'.
 *
 * Usage: Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
ThumbAssetSetAsDefaultAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbAssetSetAsDefaultAction, _super);
    function ThumbAssetSetAsDefaultAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    ThumbAssetSetAsDefaultAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'setAsDefault' },
            thumbAssetId: { type: 's' }
        });
        return result;
    };
    return ThumbAssetSetAsDefaultAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbAsset' action 'setAsDefault'.
 *
 * Usage: Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 * Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { ThumbAssetSetAsDefaultAction };
if (false) {
    /** @type {?} */
    ThumbAssetSetAsDefaultAction.prototype.thumbAssetId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldFNldEFzRGVmYXVsdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVGh1bWJBc3NldFNldEFzRGVmYXVsdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7OztBQUFBO0lBQWtELHdEQUFvQjtJQUlsRSxzQ0FBWSxJQUF1QztlQUUvQyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxZQUFZLEVBQUU7WUFDNUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQ2pELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt1Q0F4Q0w7RUFtQmtELGNBQWMsRUFzQi9ELENBQUE7Ozs7Ozs7Ozs7QUF0QkQsd0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBUaHVtYkFzc2V0U2V0QXNEZWZhdWx0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHRodW1iQXNzZXRJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3RodW1iQXNzZXQnIGFjdGlvbiAnc2V0QXNEZWZhdWx0Jy5cbiAqXG4gKiBVc2FnZTogVGFncyB0aGUgdGh1bWJuYWlsIGFzIERFRkFVTFRfVEhVTUIgYW5kIHJlbW92ZXMgdGhhdCB0YWcgZnJvbSBhbGwgb3RoZXIgdGh1bWJuYWlsIGFzc2V0cyBvZiB0aGUgZW50cnkuXG4gKiBDcmVhdGUgYSBuZXcgZmlsZSBzeW5jIGxpbmsgb24gdGhlIGVudHJ5IHRodW1ibmFpbCB0aGF0IHBvaW50cyB0byB0aGUgdGh1bWJuYWlsIGFzc2V0IGZpbGUgc3luY1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHZvaWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFRodW1iQXNzZXRTZXRBc0RlZmF1bHRBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICB0aHVtYkFzc2V0SWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVGh1bWJBc3NldFNldEFzRGVmYXVsdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ3YnLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGh1bWJhc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NldEFzRGVmYXVsdCcgfSxcblx0XHRcdFx0dGh1bWJBc3NldElkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==