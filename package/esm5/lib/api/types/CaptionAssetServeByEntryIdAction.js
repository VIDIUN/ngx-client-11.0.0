/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function CaptionAssetServeByEntryIdActionArgs() { }
/** @type {?} */
CaptionAssetServeByEntryIdActionArgs.prototype.entryId;
/** @type {?|undefined} */
CaptionAssetServeByEntryIdActionArgs.prototype.captionParamId;
/**
 * Build request payload for service 'captionAsset' action 'serveByEntryId'.
 *
 * Usage: Serves caption by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionAsset' action 'serveByEntryId'.
 *
 * Usage: Serves caption by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
CaptionAssetServeByEntryIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionAssetServeByEntryIdAction, _super);
    function CaptionAssetServeByEntryIdAction(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    CaptionAssetServeByEntryIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionasset' },
            action: { type: 'c', default: 'serveByEntryId' },
            entryId: { type: 's' },
            captionParamId: { type: 'n' }
        });
        return result;
    };
    return CaptionAssetServeByEntryIdAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'captionAsset' action 'serveByEntryId'.
 *
 * Usage: Serves caption by entry id and thumnail params id
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { CaptionAssetServeByEntryIdAction };
if (false) {
    /** @type {?} */
    CaptionAssetServeByEntryIdAction.prototype.entryId;
    /** @type {?} */
    CaptionAssetServeByEntryIdAction.prototype.captionParamId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvbkFzc2V0U2VydmVCeUVudHJ5SWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NhcHRpb25Bc3NldFNlcnZlQnlFbnRyeUlkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVyRjs7Ozs7Ozs7QUFBQTtJQUFzRCw0REFBa0I7SUFLcEUsMENBQVksSUFBMkM7ZUFFbkQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtZQUN0RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQkFBZ0IsRUFBRTtZQUNuRCxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0ExQ0w7RUFtQnNELGtCQUFrQixFQXdCdkUsQ0FBQTs7Ozs7Ozs7O0FBeEJELDRDQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcHRpb25Bc3NldFNlcnZlQnlFbnRyeUlkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjYXB0aW9uUGFyYW1JZD8gOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdjYXB0aW9uQXNzZXQnIGFjdGlvbiAnc2VydmVCeUVudHJ5SWQnLlxuICpcbiAqIFVzYWdlOiBTZXJ2ZXMgY2FwdGlvbiBieSBlbnRyeSBpZCBhbmQgdGh1bW5haWwgcGFyYW1zIGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgeyB1cmw6IHN0cmluZyB9XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0aW9uQXNzZXRTZXJ2ZUJ5RW50cnlJZEFjdGlvbiBleHRlbmRzIEthbHR1cmFGaWxlUmVxdWVzdCB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRjYXB0aW9uUGFyYW1JZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXB0aW9uQXNzZXRTZXJ2ZUJ5RW50cnlJZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjYXB0aW9uX2NhcHRpb25hc3NldCcgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlQnlFbnRyeUlkJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25QYXJhbUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==