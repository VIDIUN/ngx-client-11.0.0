/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryOrderByFieldName } from './KalturaESearchCategoryOrderByFieldName';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
/**
 * @record
 */
export function KalturaESearchCategoryOrderByItemArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryOrderByItemArgs.prototype.sortField;
var KalturaESearchCategoryOrderByItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryOrderByItem, _super);
    function KalturaESearchCategoryOrderByItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryOrderByItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryOrderByItem' },
            sortField: { type: 'es', subTypeConstructor: KalturaESearchCategoryOrderByFieldName, subType: 'KalturaESearchCategoryOrderByFieldName' }
        });
        return result;
    };
    return KalturaESearchCategoryOrderByItem;
}(KalturaESearchOrderByItem));
export { KalturaESearchCategoryOrderByItem };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryOrderByItem.prototype.sortField;
}
typesMappingStorage['KalturaESearchCategoryOrderByItem'] = KalturaESearchCategoryOrderByItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9yZGVyQnlJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaENhdGVnb3J5T3JkZXJCeUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbEcsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBT3ZHLElBQUE7SUFBdUQsNkRBQXlCO0lBSTVFLDJDQUFZLElBQTZDO2VBRXJELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsd0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUNBQW1DLEVBQUU7WUFDdEYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQ0FBc0MsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7U0FDbkksQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0Q0E5Qkw7RUFVdUQseUJBQXlCLEVBcUIvRSxDQUFBO0FBckJELDZDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcmRlckJ5RmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5T3JkZXJCeUZpZWxkTmFtZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtLCBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9yZGVyQnlJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtQXJncyB7XG4gICAgc29ydEZpZWxkPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcmRlckJ5RmllbGROYW1lO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3JkZXJCeUl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtIHtcblxuICAgIHNvcnRGaWVsZCA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcmRlckJ5RmllbGROYW1lO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3JkZXJCeUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9yZGVyQnlJdGVtJyB9LFxuXHRcdFx0XHRzb3J0RmllbGQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3JkZXJCeUZpZWxkTmFtZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3JkZXJCeUZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9yZGVyQnlJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3JkZXJCeUl0ZW07Il19