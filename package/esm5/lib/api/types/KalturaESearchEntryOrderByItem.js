/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryOrderByFieldName } from './KalturaESearchEntryOrderByFieldName';
import { KalturaESearchOrderByItem } from './KalturaESearchOrderByItem';
/**
 * @record
 */
export function KalturaESearchEntryOrderByItemArgs() { }
/** @type {?|undefined} */
KalturaESearchEntryOrderByItemArgs.prototype.sortField;
var KalturaESearchEntryOrderByItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchEntryOrderByItem, _super);
    function KalturaESearchEntryOrderByItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchEntryOrderByItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchEntryOrderByItem' },
            sortField: { type: 'es', subTypeConstructor: KalturaESearchEntryOrderByFieldName, subType: 'KalturaESearchEntryOrderByFieldName' }
        });
        return result;
    };
    return KalturaESearchEntryOrderByItem;
}(KalturaESearchOrderByItem));
export { KalturaESearchEntryOrderByItem };
if (false) {
    /** @type {?} */
    KalturaESearchEntryOrderByItem.prototype.sortField;
}
typesMappingStorage['KalturaESearchEntryOrderByItem'] = KalturaESearchEntryOrderByItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7O0FBT3ZHLElBQUE7SUFBb0QsMERBQXlCO0lBSXpFLHdDQUFZLElBQTBDO2VBRWxELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMscURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZ0NBQWdDLEVBQUU7WUFDbkYsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxtQ0FBbUMsRUFBRSxPQUFPLEVBQUcscUNBQXFDLEVBQUU7U0FDN0gsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt5Q0E5Qkw7RUFVb0QseUJBQXlCLEVBcUI1RSxDQUFBO0FBckJELDBDQXFCQzs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLDhCQUE4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5RmllbGROYW1lIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUZpZWxkTmFtZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtLCBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hPcmRlckJ5SXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtQXJncyB7XG4gICAgc29ydEZpZWxkPyA6IEthbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5RmllbGROYW1lO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW0gZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaE9yZGVyQnlJdGVtIHtcblxuICAgIHNvcnRGaWVsZCA6IEthbHR1cmFFU2VhcmNoRW50cnlPcmRlckJ5RmllbGROYW1lO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlJdGVtJyB9LFxuXHRcdFx0XHRzb3J0RmllbGQgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUZpZWxkTmFtZSwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUZpZWxkTmFtZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hFbnRyeU9yZGVyQnlJdGVtJ10gPSBLYWx0dXJhRVNlYXJjaEVudHJ5T3JkZXJCeUl0ZW07Il19