/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class CategoryUserUpdateAction extends KalturaRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaCategoryUser', responseConstructor: KalturaCategoryUser });
        if (typeof this.override === 'undefined')
            this.override = false;
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'categoryuser' },
            action: { type: 'c', default: 'update' },
            categoryId: { type: 'n' },
            userId: { type: 's' },
            categoryUser: { type: 'o', subTypeConstructor: KalturaCategoryUser, subType: 'KalturaCategoryUser' },
            override: { type: 'b' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9DYXRlZ29yeVVzZXJVcGRhdGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTVELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEUsTUFBTSwrQkFBZ0MsU0FBUSxjQUFtQzs7OztJQU83RSxZQUFZLElBQW1DO1FBRTNDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxxQkFBcUIsRUFBRSxtQkFBbUIsRUFBRyxtQkFBbUIsRUFBRyxDQUFDLENBQUM7UUFDeEgsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO0tBQ25FOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDOUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RyxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2hCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2F0ZWdvcnlVc2VyIH0gZnJvbSAnLi9LYWx0dXJhQ2F0ZWdvcnlVc2VyJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGNhdGVnb3J5SWQgOiBudW1iZXI7XG5cdHVzZXJJZCA6IHN0cmluZztcblx0Y2F0ZWdvcnlVc2VyIDogS2FsdHVyYUNhdGVnb3J5VXNlcjtcblx0b3ZlcnJpZGU/IDogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhdGVnb3J5VXNlcicgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgQ2F0ZWdvcnlVc2VyIGJ5IGlkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNhdGVnb3J5VXNlclxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUNhdGVnb3J5VXNlcj4ge1xuXG4gICAgY2F0ZWdvcnlJZCA6IG51bWJlcjtcblx0dXNlcklkIDogc3RyaW5nO1xuXHRjYXRlZ29yeVVzZXIgOiBLYWx0dXJhQ2F0ZWdvcnlVc2VyO1xuXHRvdmVycmlkZSA6IGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ2F0ZWdvcnlVc2VyVXBkYXRlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2F0ZWdvcnlVc2VyJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXIgIH0pO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3ZlcnJpZGUgPT09ICd1bmRlZmluZWQnKSB0aGlzLm92ZXJyaWRlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2F0ZWdvcnl1c2VyJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRjYXRlZ29yeUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXRlZ29yeVVzZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXRlZ29yeVVzZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUNhdGVnb3J5VXNlcicgfSxcblx0XHRcdFx0b3ZlcnJpZGUgOiB7IHR5cGUgOiAnYicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19