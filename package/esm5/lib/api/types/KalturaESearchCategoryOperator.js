/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchCategoryBaseItem } from './KalturaESearchCategoryBaseItem';
/**
 * @record
 */
export function KalturaESearchCategoryOperatorArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryOperatorArgs.prototype.operator;
/** @type {?|undefined} */
KalturaESearchCategoryOperatorArgs.prototype.searchItems;
var KalturaESearchCategoryOperator = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryOperator, _super);
    function KalturaESearchCategoryOperator(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.searchItems === 'undefined')
            _this.searchItems = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryOperator.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryOperator' },
            operator: { type: 'en', subTypeConstructor: KalturaESearchOperatorType, subType: 'KalturaESearchOperatorType' },
            searchItems: { type: 'a', subTypeConstructor: KalturaESearchCategoryBaseItem, subType: 'KalturaESearchCategoryBaseItem' }
        });
        return result;
    };
    return KalturaESearchCategoryOperator;
}(KalturaESearchCategoryBaseItem));
export { KalturaESearchCategoryOperator };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryOperator.prototype.operator;
    /** @type {?} */
    KalturaESearchCategoryOperator.prototype.searchItems;
}
typesMappingStorage['KalturaESearchCategoryOperator'] = KalturaESearchCategoryOperator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9wZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLDhCQUE4QixFQUFzQyxNQUFNLGtDQUFrQyxDQUFDOzs7Ozs7Ozs7QUFRdEgsSUFBQTtJQUFvRCwwREFBOEI7SUFLOUUsd0NBQVksSUFBMEM7UUFBdEQsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFdBQVcsS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzs7S0FDdEU7Ozs7SUFFUyxxREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNuRixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUNuSCxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUNwSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3lDQWxDTDtFQVdvRCw4QkFBOEIsRUF3QmpGLENBQUE7QUF4QkQsMENBd0JDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsR0FBRyw4QkFBOEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaE9wZXJhdG9yVHlwZSB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUJhc2VJdGVtLCBLYWx0dXJhRVNlYXJjaENhdGVnb3J5QmFzZUl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5QmFzZUl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcGVyYXRvckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUJhc2VJdGVtQXJncyB7XG4gICAgb3BlcmF0b3I/IDogS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGU7XG5cdHNlYXJjaEl0ZW1zPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlCYXNlSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3IgZXh0ZW5kcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5QmFzZUl0ZW0ge1xuXG4gICAgb3BlcmF0b3IgOiBLYWx0dXJhRVNlYXJjaE9wZXJhdG9yVHlwZTtcblx0c2VhcmNoSXRlbXMgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5QmFzZUl0ZW1bXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9wZXJhdG9yQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuc2VhcmNoSXRlbXMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnNlYXJjaEl0ZW1zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9wZXJhdG9yJyB9LFxuXHRcdFx0XHRvcGVyYXRvciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlJyB9LFxuXHRcdFx0XHRzZWFyY2hJdGVtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeUJhc2VJdGVtLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlCYXNlSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9wZXJhdG9yJ10gPSBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3I7Il19