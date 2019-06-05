/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCompareCondition } from './KalturaCompareCondition';
/**
 * @record
 */
export function KalturaCompareMetadataConditionArgs() { }
/** @type {?|undefined} */
KalturaCompareMetadataConditionArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaCompareMetadataConditionArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaCompareMetadataConditionArgs.prototype.profileSystemName;
var KalturaCompareMetadataCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaCompareMetadataCondition, _super);
    function KalturaCompareMetadataCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaCompareMetadataCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaCompareMetadataCondition' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' }
        });
        return result;
    };
    return KalturaCompareMetadataCondition;
}(KalturaCompareCondition));
export { KalturaCompareMetadataCondition };
if (false) {
    /** @type {?} */
    KalturaCompareMetadataCondition.prototype.xPath;
    /** @type {?} */
    KalturaCompareMetadataCondition.prototype.profileId;
    /** @type {?} */
    KalturaCompareMetadataCondition.prototype.profileSystemName;
}
typesMappingStorage['KalturaCompareMetadataCondition'] = KalturaCompareMetadataCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7Ozs7O0FBU2pHLElBQUE7SUFBcUQsMkRBQXVCO0lBTXhFLHlDQUFZLElBQTJDO2VBRW5ELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzBDQW5DTDtFQVdxRCx1QkFBdUIsRUF5QjNFLENBQUE7QUF6QkQsMkNBeUJDOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb21wYXJlQ29uZGl0aW9uLCBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbkFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb21wYXJlQ29uZGl0aW9uJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQ29tcGFyZU1ldGFkYXRhQ29uZGl0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbkFyZ3Mge1xuICAgIHhQYXRoPyA6IHN0cmluZztcblx0cHJvZmlsZUlkPyA6IG51bWJlcjtcblx0cHJvZmlsZVN5c3RlbU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29tcGFyZU1ldGFkYXRhQ29uZGl0aW9uIGV4dGVuZHMgS2FsdHVyYUNvbXBhcmVDb25kaXRpb24ge1xuXG4gICAgeFBhdGggOiBzdHJpbmc7XG5cdHByb2ZpbGVJZCA6IG51bWJlcjtcblx0cHJvZmlsZVN5c3RlbU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb21wYXJlTWV0YWRhdGFDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbicgfSxcblx0XHRcdFx0eFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByb2ZpbGVTeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb21wYXJlTWV0YWRhdGFDb25kaXRpb24nXSA9IEthbHR1cmFDb21wYXJlTWV0YWRhdGFDb25kaXRpb247Il19