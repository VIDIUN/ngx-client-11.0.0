/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFileRequest } from '../kaltura-file-request';
/**
 * @record
 */
export function DocumentsServeActionArgs() { }
/** @type {?} */
DocumentsServeActionArgs.prototype.entryId;
/** @type {?|undefined} */
DocumentsServeActionArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
DocumentsServeActionArgs.prototype.forceProxy;
/**
 * Build request payload for service 'documents' action 'serve'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'documents' action 'serve'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
DocumentsServeAction = /** @class */ (function (_super) {
    tslib_1.__extends(DocumentsServeAction, _super);
    function DocumentsServeAction(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.forceProxy === 'undefined')
            _this.forceProxy = false;
        return _this;
    }
    /**
     * @return {?}
     */
    DocumentsServeAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'document_documents' },
            action: { type: 'c', default: 'serve' },
            entryId: { type: 's' },
            flavorAssetId: { type: 's' },
            forceProxy: { type: 'b' }
        });
        return result;
    };
    return DocumentsServeAction;
}(KalturaFileRequest));
/**
 * Build request payload for service 'documents' action 'serve'.
 *
 * Usage: Serves the file content
 *
 * Server response type:         { url: string }
 * Server failure response type: KalturaAPIException
 */
export { DocumentsServeAction };
if (false) {
    /** @type {?} */
    DocumentsServeAction.prototype.entryId;
    /** @type {?} */
    DocumentsServeAction.prototype.flavorAssetId;
    /** @type {?} */
    DocumentsServeAction.prototype.forceProxy;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG9jdW1lbnRzU2VydmVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0RvY3VtZW50c1NlcnZlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsT0FBTyxFQUFFLGtCQUFrQixFQUEwQixNQUFNLHlCQUF5QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JyRjs7Ozs7Ozs7QUFBQTtJQUEwQyxnREFBa0I7SUFNeEQsOEJBQVksSUFBK0I7UUFBM0MsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFVBQVUsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzs7S0FDdkU7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUNwRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxPQUFPLEVBQUU7WUFDMUMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkE5Q0w7RUFvQjBDLGtCQUFrQixFQTJCM0QsQ0FBQTs7Ozs7Ozs7O0FBM0JELGdDQTJCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYUZpbGVSZXF1ZXN0LCBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1maWxlLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50c1NlcnZlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhRmlsZVJlcXVlc3RBcmdzIHtcbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkPyA6IHN0cmluZztcblx0Zm9yY2VQcm94eT8gOiBib29sZWFuO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZG9jdW1lbnRzJyBhY3Rpb24gJ3NlcnZlJy5cbiAqXG4gKiBVc2FnZTogU2VydmVzIHRoZSBmaWxlIGNvbnRlbnRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB7IHVybDogc3RyaW5nIH1cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERvY3VtZW50c1NlcnZlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYUZpbGVSZXF1ZXN0IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGZvcmNlUHJveHkgOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IERvY3VtZW50c1NlcnZlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZm9yY2VQcm94eSA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuZm9yY2VQcm94eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2RvY3VtZW50X2RvY3VtZW50cycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NlcnZlJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zm9yY2VQcm94eSA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=