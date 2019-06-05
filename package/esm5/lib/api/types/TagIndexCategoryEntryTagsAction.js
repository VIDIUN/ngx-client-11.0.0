/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function TagIndexCategoryEntryTagsActionArgs() { }
/** @type {?} */
TagIndexCategoryEntryTagsActionArgs.prototype.categoryId;
/** @type {?} */
TagIndexCategoryEntryTagsActionArgs.prototype.pcToDecrement;
/** @type {?} */
TagIndexCategoryEntryTagsActionArgs.prototype.pcToIncrement;
/**
 * Build request payload for service 'tag' action 'indexCategoryEntryTags'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'tag' action 'indexCategoryEntryTags'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
TagIndexCategoryEntryTagsAction = /** @class */ (function (_super) {
    tslib_1.__extends(TagIndexCategoryEntryTagsAction, _super);
    function TagIndexCategoryEntryTagsAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    TagIndexCategoryEntryTagsAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'tagsearch_tag' },
            action: { type: 'c', default: 'indexCategoryEntryTags' },
            categoryId: { type: 'n' },
            pcToDecrement: { type: 's' },
            pcToIncrement: { type: 's' }
        });
        return result;
    };
    return TagIndexCategoryEntryTagsAction;
}(KalturaRequest));
/**
 * Build request payload for service 'tag' action 'indexCategoryEntryTags'.
 *
 *
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { TagIndexCategoryEntryTagsAction };
if (false) {
    /** @type {?} */
    TagIndexCategoryEntryTagsAction.prototype.categoryId;
    /** @type {?} */
    TagIndexCategoryEntryTagsAction.prototype.pcToDecrement;
    /** @type {?} */
    TagIndexCategoryEntryTagsAction.prototype.pcToIncrement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGFnSW5kZXhDYXRlZ29yeUVudHJ5VGFnc0FjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVGFnSW5kZXhDYXRlZ29yeUVudHJ5VGFnc0FjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUlBLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQXFELDJEQUFvQjtJQU1yRSx5Q0FBWSxJQUEwQztlQUVsRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxFQUFFLEVBQUUsbUJBQW1CLEVBQUcsSUFBSSxFQUFFLENBQUM7S0FDdkY7Ozs7SUFFUyxzREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7WUFDL0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0QsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzlCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0E3Q0w7RUFvQnFELGNBQWMsRUEwQmxFLENBQUE7Ozs7Ozs7OztBQTFCRCwyQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRhZ0luZGV4Q2F0ZWdvcnlFbnRyeVRhZ3NBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgY2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0cGNUb0RlY3JlbWVudCA6IHN0cmluZztcblx0cGNUb0luY3JlbWVudCA6IHN0cmluZztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3RhZycgYWN0aW9uICdpbmRleENhdGVnb3J5RW50cnlUYWdzJy5cbiAqXG4gKiBcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICB2b2lkXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUYWdJbmRleENhdGVnb3J5RW50cnlUYWdzQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8dm9pZD4ge1xuXG4gICAgY2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0cGNUb0RlY3JlbWVudCA6IHN0cmluZztcblx0cGNUb0luY3JlbWVudCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBUYWdJbmRleENhdGVnb3J5RW50cnlUYWdzQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAndicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd0YWdzZWFyY2hfdGFnJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnaW5kZXhDYXRlZ29yeUVudHJ5VGFncycgfSxcblx0XHRcdFx0Y2F0ZWdvcnlJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRwY1RvRGVjcmVtZW50IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHBjVG9JbmNyZW1lbnQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19