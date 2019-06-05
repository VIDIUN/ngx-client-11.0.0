/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbAsset } from './KalturaThumbAsset';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbAssetGetByEntryIdActionArgs() { }
/** @type {?} */
ThumbAssetGetByEntryIdActionArgs.prototype.entryId;
/**
 * Build request payload for service 'thumbAsset' action 'getByEntryId'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbAsset' action 'getByEntryId'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset[]
 * Server failure response type: KalturaAPIException
 */
ThumbAssetGetByEntryIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbAssetGetByEntryIdAction, _super);
    function ThumbAssetGetByEntryIdAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaThumbAsset', responseConstructor: KalturaThumbAsset }) || this;
    }
    /**
     * @return {?}
     */
    ThumbAssetGetByEntryIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'getByEntryId' },
            entryId: { type: 's' }
        });
        return result;
    };
    return ThumbAssetGetByEntryIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbAsset' action 'getByEntryId'.
 *
 *
 *
 * Server response type:         KalturaThumbAsset[]
 * Server failure response type: KalturaAPIException
 */
export { ThumbAssetGetByEntryIdAction };
if (false) {
    /** @type {?} */
    ThumbAssetGetByEntryIdAction.prototype.entryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldEdldEJ5RW50cnlJZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVGh1bWJBc3NldEdldEJ5RW50cnlJZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUFrRCx3REFBbUM7SUFJakYsc0NBQVksSUFBdUM7ZUFFL0Msa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQztLQUN0SDs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDakQsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBdkNMO0VBa0JrRCxjQUFjLEVBc0IvRCxDQUFBOzs7Ozs7Ozs7QUF0QkQsd0NBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFUaHVtYkFzc2V0IH0gZnJvbSAnLi9LYWx0dXJhVGh1bWJBc3NldCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1iQXNzZXRHZXRCeUVudHJ5SWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3RodW1iQXNzZXQnIGFjdGlvbiAnZ2V0QnlFbnRyeUlkJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhVGh1bWJBc3NldFtdXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHVtYkFzc2V0R2V0QnlFbnRyeUlkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVRodW1iQXNzZXRbXT4ge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBUaHVtYkFzc2V0R2V0QnlFbnRyeUlkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYScsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJBc3NldCcsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhVGh1bWJBc3NldCAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndGh1bWJhc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEJ5RW50cnlJZCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=