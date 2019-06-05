/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryBaseNestedObject } from './KalturaESearchEntryBaseNestedObject';
/**
 * @record
 */
export function KalturaESearchEntryNestedBaseItemArgs() { }
var KalturaESearchEntryNestedBaseItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchEntryNestedBaseItem, _super);
    function KalturaESearchEntryNestedBaseItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchEntryNestedBaseItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchEntryNestedBaseItem' }
        });
        return result;
    };
    return KalturaESearchEntryNestedBaseItem;
}(KalturaESearchEntryBaseNestedObject));
export { KalturaESearchEntryNestedBaseItem };
typesMappingStorage['KalturaESearchEntryNestedBaseItem'] = KalturaESearchEntryNestedBaseItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1DQUFtQyxFQUEyQyxNQUFNLHVDQUF1QyxDQUFDOzs7OztBQU9ySSxJQUFBO0lBQXVELDZEQUFtQztJQUl0RiwyQ0FBWSxJQUE2QztlQUVyRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHdEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzdFLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7NENBNUJMO0VBU3VELG1DQUFtQyxFQW9CekYsQ0FBQTtBQXBCRCw2Q0FvQkM7QUFFRCxtQkFBbUIsQ0FBQyxtQ0FBbUMsQ0FBQyxHQUFHLGlDQUFpQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoRW50cnlCYXNlTmVzdGVkT2JqZWN0LCBLYWx0dXJhRVNlYXJjaEVudHJ5QmFzZU5lc3RlZE9iamVjdEFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoRW50cnlCYXNlTmVzdGVkT2JqZWN0JztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW1BcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoRW50cnlCYXNlTmVzdGVkT2JqZWN0QXJncyB7XG4gICAgXG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbSBleHRlbmRzIEthbHR1cmFFU2VhcmNoRW50cnlCYXNlTmVzdGVkT2JqZWN0IHtcblxuICAgIFxuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW1BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW0nXSA9IEthbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbTsiXX0=