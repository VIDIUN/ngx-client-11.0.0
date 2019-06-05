/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchOperatorType } from './KalturaSearchOperatorType';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaSearchOperatorArgs() { }
/** @type {?|undefined} */
KalturaSearchOperatorArgs.prototype.type;
/** @type {?|undefined} */
KalturaSearchOperatorArgs.prototype.items;
var KalturaSearchOperator = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSearchOperator, _super);
    function KalturaSearchOperator(data) {
        var _this = _super.call(this, data) || this;
        if (typeof _this.items === 'undefined')
            _this.items = [];
        return _this;
    }
    /**
     * @return {?}
     */
    KalturaSearchOperator.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearchOperator' },
            type: { type: 'en', subTypeConstructor: KalturaSearchOperatorType, subType: 'KalturaSearchOperatorType' },
            items: { type: 'a', subTypeConstructor: KalturaSearchItem, subType: 'KalturaSearchItem' }
        });
        return result;
    };
    return KalturaSearchOperator;
}(KalturaSearchItem));
export { KalturaSearchOperator };
if (false) {
    /** @type {?} */
    KalturaSearchOperator.prototype.type;
    /** @type {?} */
    KalturaSearchOperator.prototype.items;
}
typesMappingStorage['KalturaSearchOperator'] = KalturaSearchOperator;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaE9wZXJhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhU2VhcmNoT3BlcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7QUFRL0UsSUFBQTtJQUEyQyxpREFBaUI7SUFLeEQsK0JBQVksSUFBaUM7UUFBN0MsWUFFSSxrQkFBTSxJQUFJLENBQUMsU0FFZDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLEtBQUssS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzs7S0FDMUQ7Ozs7SUFFUyw0Q0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMxRSxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHlCQUF5QixFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM3RyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGlCQUFpQixFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtTQUNwRixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2dDQWxDTDtFQVcyQyxpQkFBaUIsRUF3QjNELENBQUE7QUF4QkQsaUNBd0JDOzs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsR0FBRyxxQkFBcUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hJdGVtLCBLYWx0dXJhU2VhcmNoSXRlbUFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hJdGVtJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2VhcmNoT3BlcmF0b3JBcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtQXJncyB7XG4gICAgdHlwZT8gOiBLYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlO1xuXHRpdGVtcz8gOiBLYWx0dXJhU2VhcmNoSXRlbVtdO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2VhcmNoT3BlcmF0b3IgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICB0eXBlIDogS2FsdHVyYVNlYXJjaE9wZXJhdG9yVHlwZTtcblx0aXRlbXMgOiBLYWx0dXJhU2VhcmNoSXRlbVtdO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhU2VhcmNoT3BlcmF0b3JBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5pdGVtcyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2VhcmNoT3BlcmF0b3InIH0sXG5cdFx0XHRcdHR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoT3BlcmF0b3JUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hPcGVyYXRvclR5cGUnIH0sXG5cdFx0XHRcdGl0ZW1zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoSXRlbSwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoSXRlbScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNlYXJjaE9wZXJhdG9yJ10gPSBLYWx0dXJhU2VhcmNoT3BlcmF0b3I7Il19