/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaPlaylistCompareAttribute } from './KalturaPlaylistCompareAttribute';
import { KalturaSearchComparableAttributeCondition } from './KalturaSearchComparableAttributeCondition';
/**
 * @record
 */
export function KalturaPlaylistCompareAttributeConditionArgs() { }
/** @type {?|undefined} */
KalturaPlaylistCompareAttributeConditionArgs.prototype.attribute;
var KalturaPlaylistCompareAttributeCondition = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaPlaylistCompareAttributeCondition, _super);
    function KalturaPlaylistCompareAttributeCondition(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaPlaylistCompareAttributeCondition.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaPlaylistCompareAttributeCondition' },
            attribute: { type: 'es', subTypeConstructor: KalturaPlaylistCompareAttribute, subType: 'KalturaPlaylistCompareAttribute' }
        });
        return result;
    };
    return KalturaPlaylistCompareAttributeCondition;
}(KalturaSearchComparableAttributeCondition));
export { KalturaPlaylistCompareAttributeCondition };
if (false) {
    /** @type {?} */
    KalturaPlaylistCompareAttributeCondition.prototype.attribute;
}
typesMappingStorage['KalturaPlaylistCompareAttributeCondition'] = KalturaPlaylistCompareAttributeCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsK0JBQStCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNwRixPQUFPLEVBQUUseUNBQXlDLEVBQWlELE1BQU0sNkNBQTZDLENBQUM7Ozs7Ozs7QUFPdkosSUFBQTtJQUE4RCxvRUFBeUM7SUFJbkcsa0RBQVksSUFBb0Q7ZUFFNUQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywrREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM3RixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLCtCQUErQixFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtTQUNySCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO21EQTlCTDtFQVU4RCx5Q0FBeUMsRUFxQnRHLENBQUE7QUFyQkQsb0RBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDBDQUEwQyxDQUFDLEdBQUcsd0NBQXdDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZSB9IGZyb20gJy4vS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZSc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUF0dHJpYnV0ZUNvbmRpdGlvbiwgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb25BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoQ29tcGFyYWJsZUF0dHJpYnV0ZUNvbmRpdGlvbic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaENvbXBhcmFibGVBdHRyaWJ1dGVDb25kaXRpb25BcmdzIHtcbiAgICBhdHRyaWJ1dGU/IDogS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbiBleHRlbmRzIEthbHR1cmFTZWFyY2hDb21wYXJhYmxlQXR0cmlidXRlQ29uZGl0aW9uIHtcblxuICAgIGF0dHJpYnV0ZSA6IEthbHR1cmFQbGF5bGlzdENvbXBhcmVBdHRyaWJ1dGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFQbGF5bGlzdENvbXBhcmVBdHRyaWJ1dGVDb25kaXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZUNvbmRpdGlvbicgfSxcblx0XHRcdFx0YXR0cmlidXRlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBsYXlsaXN0Q29tcGFyZUF0dHJpYnV0ZSwgc3ViVHlwZSA6ICdLYWx0dXJhUGxheWxpc3RDb21wYXJlQXR0cmlidXRlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhUGxheWxpc3RDb21wYXJlQXR0cmlidXRlQ29uZGl0aW9uJ10gPSBLYWx0dXJhUGxheWxpc3RDb21wYXJlQXR0cmlidXRlQ29uZGl0aW9uOyJdfQ==