/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchOperatorType } from './KalturaESearchOperatorType';
import { KalturaESearchEntryNestedBaseItem } from './KalturaESearchEntryNestedBaseItem';
/**
 * @record
 */
export function KalturaESearchNestedOperatorArgs() { }
/** @type {?|undefined} */
KalturaESearchNestedOperatorArgs.prototype.operator;
/** @type {?|undefined} */
KalturaESearchNestedOperatorArgs.prototype.searchItems;
var KalturaESearchNestedOperator = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchNestedOperator, _super);
    function KalturaESearchNestedOperator(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.searchItems === 'undefined')
            _this.searchItems = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaESearchNestedOperator.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchNestedOperator' },
            operator: { type: 'en', subTypeConstructor: KalturaESearchOperatorType, subType: 'KalturaESearchOperatorType' },
            searchItems: { type: 'a', subTypeConstructor: KalturaESearchEntryNestedBaseItem, subType: 'KalturaESearchEntryNestedBaseItem' }
        });
        return result;
    };
    return KalturaESearchNestedOperator;
}(KalturaESearchEntryNestedBaseItem));
export { KalturaESearchNestedOperator };
if (false) {
    /** @type {?} */
    KalturaESearchNestedOperator.prototype.operator;
    /** @type {?} */
    KalturaESearchNestedOperator.prototype.searchItems;
}
typesMappingStorage['KalturaESearchNestedOperator'] = KalturaESearchNestedOperator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7OztBQVEvSCxJQUFBO0lBQWtELHdEQUFpQztJQUsvRSxzQ0FBWSxJQUF3QztRQUFwRCxZQUVJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1FBREcsRUFBRSxDQUFDLENBQUMsT0FBTyxLQUFJLENBQUMsV0FBVyxLQUFLLFdBQVcsQ0FBQztZQUFDLEtBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDOztLQUN0RTs7OztJQUVTLG1EQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ2pGLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsMEJBQTBCLEVBQUUsT0FBTyxFQUFHLDRCQUE0QixFQUFFO1lBQ25ILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1NBQzFILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBbENMO0VBV2tELGlDQUFpQyxFQXdCbEYsQ0FBQTtBQXhCRCx3Q0F3QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaE9wZXJhdG9yVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRVNlYXJjaEVudHJ5TmVzdGVkQmFzZUl0ZW0sIEthbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvckFyZ3MgIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtQXJncyB7XG4gICAgb3BlcmF0b3I/IDogS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGU7XG5cdHNlYXJjaEl0ZW1zPyA6IEthbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaE5lc3RlZE9wZXJhdG9yIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtIHtcblxuICAgIG9wZXJhdG9yIDogS2FsdHVyYUVTZWFyY2hPcGVyYXRvclR5cGU7XG5cdHNlYXJjaEl0ZW1zIDogS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtW107XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoTmVzdGVkT3BlcmF0b3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5zZWFyY2hJdGVtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuc2VhcmNoSXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhRVNlYXJjaE5lc3RlZE9wZXJhdG9yJyB9LFxuXHRcdFx0XHRvcGVyYXRvciA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoT3BlcmF0b3JUeXBlJyB9LFxuXHRcdFx0XHRzZWFyY2hJdGVtcyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVTZWFyY2hFbnRyeU5lc3RlZEJhc2VJdGVtLCBzdWJUeXBlIDogJ0thbHR1cmFFU2VhcmNoRW50cnlOZXN0ZWRCYXNlSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvciddID0gS2FsdHVyYUVTZWFyY2hOZXN0ZWRPcGVyYXRvcjsiXX0=