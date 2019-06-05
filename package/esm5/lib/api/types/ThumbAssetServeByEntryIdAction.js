/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function ThumbAssetServeByEntryIdActionArgs() { }
/** @type {?} */
ThumbAssetServeByEntryIdActionArgs.prototype.entryId;
/** @type {?|undefined} */
ThumbAssetServeByEntryIdActionArgs.prototype.thumbParamId;
/**
 * Build request payload for service 'thumbAsset' action 'serveByEntryId'.
 *
 * Usage: Serves thumbnail by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbAsset' action 'serveByEntryId'.
 *
 * Usage: Serves thumbnail by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
ThumbAssetServeByEntryIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbAssetServeByEntryIdAction, _super);
    function ThumbAssetServeByEntryIdAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    ThumbAssetServeByEntryIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbasset' },
            action: { type: 'c', default: 'serveByEntryId' },
            entryId: { type: 's' },
            thumbParamId: { type: 'n' }
        });
        return result;
    };
    return ThumbAssetServeByEntryIdAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'thumbAsset' action 'serveByEntryId'.
 *
 * Usage: Serves thumbnail by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { ThumbAssetServeByEntryIdAction };
if (false) {
    /** @type {?} */
    ThumbAssetServeByEntryIdAction.prototype.entryId;
    /** @type {?} */
    ThumbAssetServeByEntryIdAction.prototype.thumbParamId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJBc3NldFNlcnZlQnlFbnRyeUlkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9UaHVtYkFzc2V0U2VydmVCeUVudHJ5SWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsa0JBQWtCLEVBQTBCLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXJGOzs7Ozs7OztBQUFBO0lBQW9ELDBEQUFrQjtJQUtsRSx3Q0FBWSxJQUF5QztlQUVqRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHFEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFlBQVksRUFBRTtZQUM1RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNuRCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDcEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0ExQ0w7RUFtQm9ELGtCQUFrQixFQXdCckUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDBDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1iQXNzZXRTZXJ2ZUJ5RW50cnlJZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0dGh1bWJQYXJhbUlkPyA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3RodW1iQXNzZXQnIGFjdGlvbiAnc2VydmVCeUVudHJ5SWQnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgdGh1bWJuYWlsIGJ5IGVudHJ5IGlkIGFuZCB0aHVtbmFpbCBwYXJhbXMgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFRodW1iQXNzZXRTZXJ2ZUJ5RW50cnlJZEFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHR0aHVtYlBhcmFtSWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogVGh1bWJBc3NldFNlcnZlQnlFbnRyeUlkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3RodW1iYXNzZXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdzZXJ2ZUJ5RW50cnlJZCcgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYlBhcmFtSWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19