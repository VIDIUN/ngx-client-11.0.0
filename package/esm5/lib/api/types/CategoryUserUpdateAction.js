/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCategoryUser } from './KalturaCategoryUser';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CategoryUserUpdateActionArgs() { }
/** @type {?} */
CategoryUserUpdateActionArgs.prototype.categoryId;
/** @type {?} */
CategoryUserUpdateActionArgs.prototype.userId;
/** @type {?} */
CategoryUserUpdateActionArgs.prototype.categoryUser;
/** @type {?|undefined} */
CategoryUserUpdateActionArgs.prototype.override;
/**
 * Build request payload for service 'categoryUser' action 'update'.
 *
 * Usage: Update CategoryUser by id
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'categoryUser' action 'update'.
 *
 * Usage: Update CategoryUser by id
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
CategoryUserUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(CategoryUserUpdateAction, _super);
    function CategoryUserUpdateAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCategoryUser', responseConstructor: KalturaCategoryUser }) || this;
        if (typeof _this.override === 'undefined')
            _this.override = false;
        return _this;
    }
    /**
     * @return {?}
     */
    CategoryUserUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryuser' },
            action: { type: 'c', default: 'update' },
            categoryId: { type: 'n' },
            userId: { type: 's' },
            categoryUser: { type: 'o', subTypeConstructor: KalturaCategoryUser, subType: 'KalturaCategoryUser' },
            override: { type: 'b' }
        });
        return result;
    };
    return CategoryUserUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'categoryUser' action 'update'.
 *
 * Usage: Update CategoryUser by id
 *
 * Server response type:         KalturaCategoryUser
 * Server failure response type: KalturaAPIException
 */
export { CategoryUserUpdateAction };
if (false) {
    /** @type {?} */
    CategoryUserUpdateAction.prototype.categoryId;
    /** @type {?} */
    CategoryUserUpdateAction.prototype.userId;
    /** @type {?} */
    CategoryUserUpdateAction.prototype.categoryUser;
    /** @type {?} */
    CategoryUserUpdateAction.prototype.override;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXRlZ29yeVVzZXJVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnhFOzs7Ozs7OztBQUFBO0lBQThDLG9EQUFtQztJQU83RSxrQ0FBWSxJQUFtQztRQUEvQyxZQUVJLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHFCQUFxQixFQUFFLG1CQUFtQixFQUFHLG1CQUFtQixFQUFHLENBQUMsU0FFMUg7UUFERyxFQUFFLENBQUMsQ0FBQyxPQUFPLEtBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxDQUFDO1lBQUMsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7O0tBQ25FOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsY0FBYyxFQUFFO1lBQzlELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxtQkFBbUIsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEcsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21DQWpETDtFQXFCOEMsY0FBYyxFQTZCM0QsQ0FBQTs7Ozs7Ozs7O0FBN0JELG9DQTZCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlVc2VyIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlVc2VyJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGNhdGVnb3J5SWQgOiBudW1iZXI7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0Y2F0ZWdvcnlVc2VyIDogS2FsdHVyYUNhdGVnb3J5VXNlcjtcblx0b3ZlcnJpZGU/IDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5VXNlcicgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgQ2F0ZWdvcnlVc2VyIGJ5IGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNhdGVnb3J5VXNlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUNhdGVnb3J5VXNlcj4ge1xuXG4gICAgY2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0dXNlcklkIDogc3RyaW5nO1xuXHRjYXRlZ29yeVVzZXIgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyO1xuXHRvdmVycmlkZSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXIgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3ZlcnJpZGUgPT09ICd1bmRlZmluZWQnKSB0aGlzLm92ZXJyaWRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2F0ZWdvcnl1c2VyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeVVzZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5VXNlcicgfSxcblx0XHRcdFx0b3ZlcnJpZGUgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19