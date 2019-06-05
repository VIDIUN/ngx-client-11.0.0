/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaFilter } from './KalturaFilter';
import { KalturaObjectBase } from '../kaltura-object-base';
import { KalturaBulkServiceData } from './KalturaBulkServiceData';
/**
 * @record
 */
export function KalturaBulkServiceFilterDataArgs() { }
/** @type {?|undefined} */
KalturaBulkServiceFilterDataArgs.prototype.filter;
/** @type {?|undefined} */
KalturaBulkServiceFilterDataArgs.prototype.templateObject;
var KalturaBulkServiceFilterData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkServiceFilterData, _super);
    function KalturaBulkServiceFilterData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkServiceFilterData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkServiceFilterData' },
            filter: { type: 'o', subTypeConstructor: KalturaFilter, subType: 'KalturaFilter' },
            templateObject: { type: 'o', subTypeConstructor: KalturaObjectBase, subType: 'KalturaObjectBase' }
        });
        return result;
    };
    return KalturaBulkServiceFilterData;
}(KalturaBulkServiceData));
export { KalturaBulkServiceFilterData };
if (false) {
    /** @type {?} */
    KalturaBulkServiceFilterData.prototype.filter;
    /** @type {?} */
    KalturaBulkServiceFilterData.prototype.templateObject;
}
typesMappingStorage['KalturaBulkServiceFilterData'] = KalturaBulkServiceFilterData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtTZXJ2aWNlRmlsdGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtTZXJ2aWNlRmlsdGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDM0QsT0FBTyxFQUFFLHNCQUFzQixFQUE4QixNQUFNLDBCQUEwQixDQUFDOzs7Ozs7Ozs7QUFROUYsSUFBQTtJQUFrRCx3REFBc0I7SUFLcEUsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3RGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQzdGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7dUNBbENMO0VBWWtELHNCQUFzQixFQXVCdkUsQ0FBQTtBQXZCRCx3Q0F1QkM7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw4QkFBOEIsQ0FBQyxHQUFHLDRCQUE0QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrU2VydmljZURhdGEsIEthbHR1cmFCdWxrU2VydmljZURhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1NlcnZpY2VEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1NlcnZpY2VGaWx0ZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQnVsa1NlcnZpY2VEYXRhQXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFGaWx0ZXI7XG5cdHRlbXBsYXRlT2JqZWN0PyA6IEthbHR1cmFPYmplY3RCYXNlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1NlcnZpY2VGaWx0ZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUJ1bGtTZXJ2aWNlRGF0YSB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhRmlsdGVyO1xuXHR0ZW1wbGF0ZU9iamVjdCA6IEthbHR1cmFPYmplY3RCYXNlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1NlcnZpY2VGaWx0ZXJEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrU2VydmljZUZpbHRlckRhdGEnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyJyB9LFxuXHRcdFx0XHR0ZW1wbGF0ZU9iamVjdCA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU9iamVjdEJhc2UsIHN1YlR5cGUgOiAnS2FsdHVyYU9iamVjdEJhc2UnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrU2VydmljZUZpbHRlckRhdGEnXSA9IEthbHR1cmFCdWxrU2VydmljZUZpbHRlckRhdGE7Il19