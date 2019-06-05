/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaScheduledTaskAddOrRemoveType } from './KalturaScheduledTaskAddOrRemoveType';
import { KalturaIntegerValue } from './KalturaIntegerValue';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaModifyCategoriesObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaModifyCategoriesObjectTaskArgs.prototype.addRemoveType;
/** @type {?|undefined} */
KalturaModifyCategoriesObjectTaskArgs.prototype.categoryIds;
var KalturaModifyCategoriesObjectTask = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaModifyCategoriesObjectTask, _super);
    function KalturaModifyCategoriesObjectTask(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.categoryIds === 'undefined')
            _this.categoryIds = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaModifyCategoriesObjectTask.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaModifyCategoriesObjectTask' },
            addRemoveType: { type: 'en', subTypeConstructor: KalturaScheduledTaskAddOrRemoveType, subType: 'KalturaScheduledTaskAddOrRemoveType' },
            categoryIds: { type: 'a', subTypeConstructor: KalturaIntegerValue, subType: 'KalturaIntegerValue' }
        });
        return result;
    };
    return KalturaModifyCategoriesObjectTask;
}(KalturaObjectTask));
export { KalturaModifyCategoriesObjectTask };
if (false) {
    /** @type {?} */
    KalturaModifyCategoriesObjectTask.prototype.addRemoveType;
    /** @type {?} */
    KalturaModifyCategoriesObjectTask.prototype.categoryIds;
}
typesMappingStorage['KalturaModifyCategoriesObjectTask'] = KalturaModifyCategoriesObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYU1vZGlmeUNhdGVnb3JpZXNPYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhTW9kaWZ5Q2F0ZWdvcmllc09iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDNUYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsSUFBQTtJQUF1RCw2REFBaUI7SUFLcEUsMkNBQVksSUFBNkM7UUFBekQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzs7S0FDdEU7Ozs7SUFFUyx3REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQ0FBbUMsRUFBRTtZQUN0RixhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLG1DQUFtQyxFQUFFLE9BQU8sRUFBRyxxQ0FBcUMsRUFBRTtZQUMxSSxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG1CQUFtQixFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtTQUM5RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzRDQW5DTDtFQVl1RCxpQkFBaUIsRUF3QnZFLENBQUE7QUF4QkQsNkNBd0JDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsbUNBQW1DLENBQUMsR0FBRyxpQ0FBaUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2NoZWR1bGVkVGFza0FkZE9yUmVtb3ZlVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNjaGVkdWxlZFRhc2tBZGRPclJlbW92ZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVnZXJWYWx1ZSB9IGZyb20gJy4vS2FsdHVyYUludGVnZXJWYWx1ZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0VGFzaywgS2FsdHVyYU9iamVjdFRhc2tBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0VGFzayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYU1vZGlmeUNhdGVnb3JpZXNPYmplY3RUYXNrQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFza0FyZ3Mge1xuICAgIGFkZFJlbW92ZVR5cGU/IDogS2FsdHVyYVNjaGVkdWxlZFRhc2tBZGRPclJlbW92ZVR5cGU7XG5cdGNhdGVnb3J5SWRzPyA6IEthbHR1cmFJbnRlZ2VyVmFsdWVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYU1vZGlmeUNhdGVnb3JpZXNPYmplY3RUYXNrIGV4dGVuZHMgS2FsdHVyYU9iamVjdFRhc2sge1xuXG4gICAgYWRkUmVtb3ZlVHlwZSA6IEthbHR1cmFTY2hlZHVsZWRUYXNrQWRkT3JSZW1vdmVUeXBlO1xuXHRjYXRlZ29yeUlkcyA6IEthbHR1cmFJbnRlZ2VyVmFsdWVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYU1vZGlmeUNhdGVnb3JpZXNPYmplY3RUYXNrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY2F0ZWdvcnlJZHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLmNhdGVnb3J5SWRzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYU1vZGlmeUNhdGVnb3JpZXNPYmplY3RUYXNrJyB9LFxuXHRcdFx0XHRhZGRSZW1vdmVUeXBlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNjaGVkdWxlZFRhc2tBZGRPclJlbW92ZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYVNjaGVkdWxlZFRhc2tBZGRPclJlbW92ZVR5cGUnIH0sXG5cdFx0XHRcdGNhdGVnb3J5SWRzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdlclZhbHVlLCBzdWJUeXBlIDogJ0thbHR1cmFJbnRlZ2VyVmFsdWUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFNb2RpZnlDYXRlZ29yaWVzT2JqZWN0VGFzayddID0gS2FsdHVyYU1vZGlmeUNhdGVnb3JpZXNPYmplY3RUYXNrOyJdfQ==