/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryMoveActionArgs() { }
/** @type {?} */
CategoryMoveActionArgs.prototype.categoryIds;
/** @type {?} */
CategoryMoveActionArgs.prototype.targetCategoryParentId;
/**
 * Build request payload for service 'category' action 'move'.
 *
 * Usage: Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'category' action 'move'.
 *
 * Usage: Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
CategoryMoveAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryMoveAction, _super);
    function CategoryMoveAction(data) {
        return _super.call(this, data, { responseType: 'b', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    CategoryMoveAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'category' },
            action: { type: 'c', default: 'move' },
            categoryIds: { type: 's' },
            targetCategoryParentId: { type: 'n' }
        });
        return result;
    };
    return CategoryMoveAction;
}(KalturaRequest));
/**
 * Build request payload for service 'category' action 'move'.
 *
 * Usage: Move categories that belong to the same parent category to a target categroy - enabled only for ks with disable entitlement
 *
 * Server response type:         boolean
 * Server failure response type: KalturaAPIException
 */
export { CategoryMoveAction };
if (false) {
    /** @type {?} */
    CategoryMoveAction.prototype.categoryIds;
    /** @type {?} */
    CategoryMoveAction.prototype.targetCategoryParentId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlNb3ZlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXRlZ29yeU1vdmVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF3Qyw4Q0FBdUI7SUFLM0QsNEJBQVksSUFBNkI7ZUFFckMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsRUFBRSxFQUFFLG1CQUFtQixFQUFHLElBQUksRUFBRSxDQUFDO0tBQ3ZGOzs7O0lBRVMseUNBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsVUFBVSxFQUFFO1lBQzFELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLHNCQUFzQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUM5QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzZCQTFDTDtFQW1Cd0MsY0FBYyxFQXdCckQsQ0FBQTs7Ozs7Ozs7O0FBeEJELDhCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlNb3ZlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGNhdGVnb3J5SWRzIDogc3RyaW5nO1xuXHR0YXJnZXRDYXRlZ29yeVBhcmVudElkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2F0ZWdvcnknIGFjdGlvbiAnbW92ZScuXG4gKlxuICogVXNhZ2U6IE1vdmUgY2F0ZWdvcmllcyB0aGF0IGJlbG9uZyB0byB0aGUgc2FtZSBwYXJlbnQgY2F0ZWdvcnkgdG8gYSB0YXJnZXQgY2F0ZWdyb3kgLSBlbmFibGVkIG9ubHkgZm9yIGtzIHdpdGggZGlzYWJsZSBlbnRpdGxlbWVudFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIGJvb2xlYW5cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIENhdGVnb3J5TW92ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PGJvb2xlYW4+IHtcblxuICAgIGNhdGVnb3J5SWRzIDogc3RyaW5nO1xuXHR0YXJnZXRDYXRlZ29yeVBhcmVudElkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENhdGVnb3J5TW92ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ2InLCByZXNwb25zZVN1YlR5cGUgOiAnJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IG51bGwgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2F0ZWdvcnknIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtb3ZlJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YXJnZXRDYXRlZ29yeVBhcmVudElkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==