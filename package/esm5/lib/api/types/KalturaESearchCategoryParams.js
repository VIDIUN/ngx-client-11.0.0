/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaESearchCategoryOperator } from './KalturaESearchCategoryOperator';
import { KalturaESearchParams } from './KalturaESearchParams';
/**
 * @record
 */
export function KalturaESearchCategoryParamsArgs() { }
/** @type {?|undefined} */
KalturaESearchCategoryParamsArgs.prototype.searchOperator;
var KalturaESearchCategoryParams = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaESearchCategoryParams, _super);
    function KalturaESearchCategoryParams(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaESearchCategoryParams.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaESearchCategoryParams' },
            searchOperator: { type: 'o', subTypeConstructor: KalturaESearchCategoryOperator, subType: 'KalturaESearchCategoryOperator' }
        });
        return result;
    };
    return KalturaESearchCategoryParams;
}(KalturaESearchParams));
export { KalturaESearchCategoryParams };
if (false) {
    /** @type {?} */
    KalturaESearchCategoryParams.prototype.searchOperator;
}
typesMappingStorage['KalturaESearchCategoryParams'] = KalturaESearchCategoryParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsb0JBQW9CLEVBQTRCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFPeEYsSUFBQTtJQUFrRCx3REFBb0I7SUFJbEUsc0NBQVksSUFBd0M7ZUFFaEQsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUyxtREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtTQUN2SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3VDQTlCTDtFQVVrRCxvQkFBb0IsRUFxQnJFLENBQUE7QUFyQkQsd0NBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9wZXJhdG9yIH0gZnJvbSAnLi9LYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3InO1xuaW1wb3J0IHsgS2FsdHVyYUVTZWFyY2hQYXJhbXMsIEthbHR1cmFFU2VhcmNoUGFyYW1zQXJncyB9IGZyb20gJy4vS2FsdHVyYUVTZWFyY2hQYXJhbXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlQYXJhbXNBcmdzICBleHRlbmRzIEthbHR1cmFFU2VhcmNoUGFyYW1zQXJncyB7XG4gICAgc2VhcmNoT3BlcmF0b3I/IDogS2FsdHVyYUVTZWFyY2hDYXRlZ29yeU9wZXJhdG9yO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRVNlYXJjaENhdGVnb3J5UGFyYW1zIGV4dGVuZHMgS2FsdHVyYUVTZWFyY2hQYXJhbXMge1xuXG4gICAgc2VhcmNoT3BlcmF0b3IgOiBLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3I7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVTZWFyY2hDYXRlZ29yeVBhcmFtcycgfSxcblx0XHRcdFx0c2VhcmNoT3BlcmF0b3IgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlPcGVyYXRvciwgc3ViVHlwZSA6ICdLYWx0dXJhRVNlYXJjaENhdGVnb3J5T3BlcmF0b3InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFU2VhcmNoQ2F0ZWdvcnlQYXJhbXMnXSA9IEthbHR1cmFFU2VhcmNoQ2F0ZWdvcnlQYXJhbXM7Il19