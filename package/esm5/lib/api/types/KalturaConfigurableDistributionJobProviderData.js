/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionJobProviderData } from './KalturaDistributionJobProviderData';
/**
 * @record
 */
export function KalturaConfigurableDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaConfigurableDistributionJobProviderDataArgs.prototype.fieldValues;
var KalturaConfigurableDistributionJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConfigurableDistributionJobProviderData, _super);
    function KalturaConfigurableDistributionJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConfigurableDistributionJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConfigurableDistributionJobProviderData' },
            fieldValues: { type: 's' }
        });
        return result;
    };
    return KalturaConfigurableDistributionJobProviderData;
}(KalturaDistributionJobProviderData));
export { KalturaConfigurableDistributionJobProviderData };
if (false) {
    /** @type {?} */
    KalturaConfigurableDistributionJobProviderData.prototype.fieldValues;
}
typesMappingStorage['KalturaConfigurableDistributionJobProviderData'] = KalturaConfigurableDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0NBQWtDLEVBQTBDLE1BQU0sc0NBQXNDLENBQUM7Ozs7Ozs7QUFPbEksSUFBQTtJQUFvRSwwRUFBa0M7SUFJbEcsd0RBQVksSUFBMEQ7ZUFFbEUsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxxRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnREFBZ0QsRUFBRTtZQUNuRyxXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ25CLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7eURBN0JMO0VBU29FLGtDQUFrQyxFQXFCckcsQ0FBQTtBQXJCRCwwREFxQkM7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZ0RBQWdELENBQUMsR0FBRyw4Q0FBOEMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3Mge1xuICAgIGZpZWxkVmFsdWVzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgZmllbGRWYWx1ZXMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0ZmllbGRWYWx1ZXMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YTsiXX0=