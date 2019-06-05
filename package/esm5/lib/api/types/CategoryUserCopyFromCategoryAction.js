/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryUserCopyFromCategoryActionArgs() { }
/** @type {?} */
CategoryUserCopyFromCategoryActionArgs.prototype.categoryId;
/**
 * Build request payload for service 'categoryUser' action 'copyFromCategory'.
 *
 * Usage: Copy all memeber from parent category
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'categoryUser' action 'copyFromCategory'.
 *
 * Usage: Copy all memeber from parent category
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
CategoryUserCopyFromCategoryAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryUserCopyFromCategoryAction, _super);
    function CategoryUserCopyFromCategoryAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    CategoryUserCopyFromCategoryAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryuser' },
            action: { type: 'c', default: 'copyFromCategory' },
            categoryId: { type: 'n' }
        });
        return result;
    };
    return CategoryUserCopyFromCategoryAction;
}(KalturaRequest));
/**
 * Build request payload for service 'categoryUser' action 'copyFromCategory'.
 *
 * Usage: Copy all memeber from parent category
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { CategoryUserCopyFromCategoryAction };
if (false) {
    /** @type {?} */
    CategoryUserCopyFromCategoryAction.prototype.categoryId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlVc2VyQ29weUZyb21DYXRlZ29yeUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2F0ZWdvcnlVc2VyQ29weUZyb21DYXRlZ29yeUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUF3RCw4REFBb0I7SUFJeEUsNENBQVksSUFBNkM7ZUFFckQsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMseURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQzlELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ3JELFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbEIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2Q0F2Q0w7RUFrQndELGNBQWMsRUFzQnJFLENBQUE7Ozs7Ozs7OztBQXRCRCw4Q0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5VXNlckNvcHlGcm9tQ2F0ZWdvcnlBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgY2F0ZWdvcnlJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5VXNlcicgYWN0aW9uICdjb3B5RnJvbUNhdGVnb3J5Jy5cbiAqXG4gKiBVc2FnZTogQ29weSBhbGwgbWVtZWJlciBmcm9tIHBhcmVudCBjYXRlZ29yeVxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIHZvaWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhdGVnb3J5VXNlckNvcHlGcm9tQ2F0ZWdvcnlBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDx2b2lkPiB7XG5cbiAgICBjYXRlZ29yeUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENhdGVnb3J5VXNlckNvcHlGcm9tQ2F0ZWdvcnlBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICd2JywgcmVzcG9uc2VTdWJUeXBlIDogJycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBudWxsIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NhdGVnb3J5dXNlcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvcHlGcm9tQ2F0ZWdvcnknIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWQgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19