/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryBaseItem } from './KalturaESearchEntryBaseItem';
/**
 * @record
 */
export function KalturaESearchEntryQueryArgs() { }
/** @type {?|undefined} */
KalturaESearchEntryQueryArgs.prototype.eSearchQuery;
var KalturaESearchEntryQuery = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchEntryQuery, _super);
    function KalturaESearchEntryQuery(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchEntryQuery.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchEntryQuery' },
            eSearchQuery: { type: 's' }
        });
        return result;
    };
    return KalturaESearchEntryQuery;
}(KalturaESearchEntryBaseItem));
export { KalturaESearchEntryQuery };
if (false) {
    /** @type {?} */
    KalturaESearchEntryQuery.prototype.eSearchQuery;
}
typesMappingStorage['KalturaESearchEntryQuery'] = KalturaESearchEntryQuery;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeVF1ZXJ5LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEVudHJ5UXVlcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDJCQUEyQixFQUFtQyxNQUFNLCtCQUErQixDQUFDOzs7Ozs7O0FBTzdHLElBQUE7SUFBOEMsb0RBQTJCO0lBSXJFLGtDQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNwQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQTdCTDtFQVM4QywyQkFBMkIsRUFxQnhFLENBQUE7QUFyQkQsb0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hFbnRyeUJhc2VJdGVtLCBLYWx0dXJhRVNlYXJjaEVudHJ5QmFzZUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEVudHJ5QmFzZUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoRW50cnlRdWVyeUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeUJhc2VJdGVtQXJncyB7XG4gICAgZVNlYXJjaFF1ZXJ5PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVTZWFyY2hFbnRyeVF1ZXJ5IGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeUJhc2VJdGVtIHtcblxuICAgIGVTZWFyY2hRdWVyeSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hFbnRyeVF1ZXJ5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFU2VhcmNoRW50cnlRdWVyeScgfSxcblx0XHRcdFx0ZVNlYXJjaFF1ZXJ5IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoRW50cnlRdWVyeSddID0gS2FsdHVyYUVTZWFyY2hFbnRyeVF1ZXJ5OyJdfQ==