/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchEntryOperator } from './KalturaESearchEntryOperator';
import { KalturaESearchParams } from './KalturaESearchParams';
/**
 * @record
 */
export function KalturaESearchEntryParamsArgs() { }
/** @type {?|undefined} */
KalturaESearchEntryParamsArgs.prototype.searchOperator;
var KalturaESearchEntryParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchEntryParams, _super);
    function KalturaESearchEntryParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchEntryParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchEntryParams' },
            searchOperator: { type: 'o', subTypeConstructor: KalturaESearchEntryOperator, subType: 'KalturaESearchEntryOperator' }
        });
        return result;
    };
    return KalturaESearchEntryParams;
}(KalturaESearchParams));
export { KalturaESearchEntryParams };
if (false) {
    /** @type {?} */
    KalturaESearchEntryParams.prototype.searchOperator;
}
typesMappingStorage['KalturaESearchEntryParams'] = KalturaESearchEntryParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFPeEYsSUFBQTtJQUErQyxxREFBb0I7SUFJL0QsbUNBQVksSUFBcUM7ZUFFN0Msa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxnREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUM5RSxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUNqSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29DQTlCTDtFQVUrQyxvQkFBb0IsRUFxQmxFLENBQUE7QUFyQkQscUNBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hFbnRyeU9wZXJhdG9yIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaEVudHJ5T3BlcmF0b3InO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hQYXJhbXMsIEthbHR1cmFFU2VhcmNoUGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hQYXJhbXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoRW50cnlQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoUGFyYW1zQXJncyB7XG4gICAgc2VhcmNoT3BlcmF0b3I/IDogS2FsdHVyYUVTZWFyY2hFbnRyeU9wZXJhdG9yO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaEVudHJ5UGFyYW1zIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hQYXJhbXMge1xuXG4gICAgc2VhcmNoT3BlcmF0b3IgOiBLYWx0dXJhRVNlYXJjaEVudHJ5T3BlcmF0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoRW50cnlQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hFbnRyeVBhcmFtcycgfSxcblx0XHRcdFx0c2VhcmNoT3BlcmF0b3IgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoRW50cnlPcGVyYXRvciwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaEVudHJ5T3BlcmF0b3InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoRW50cnlQYXJhbXMnXSA9IEthbHR1cmFFU2VhcmNoRW50cnlQYXJhbXM7Il19