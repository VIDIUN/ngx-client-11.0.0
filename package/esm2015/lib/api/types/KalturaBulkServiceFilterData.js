/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaBulkServiceFilterData extends KalturaBulkServiceData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkServiceFilterData' },
            filter: { type: 'o', subTypeConstructor: KalturaFilter, subType: 'KalturaFilter' },
            templateObject: { type: 'o', subTypeConstructor: KalturaObjectBase, subType: 'KalturaObjectBase' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkServiceFilterData.prototype.filter;
    /** @type {?} */
    KalturaBulkServiceFilterData.prototype.templateObject;
}
typesMappingStorage['KalturaBulkServiceFilterData'] = KalturaBulkServiceFilterData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtTZXJ2aWNlRmlsdGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtTZXJ2aWNlRmlsdGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsc0JBQXNCLEVBQThCLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7OztBQVE5RixNQUFNLG1DQUFvQyxTQUFRLHNCQUFzQjs7OztJQUtwRSxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNqRixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGFBQWEsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQ3RGLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUJBQWlCLEVBQUUsT0FBTyxFQUFHLG1CQUFtQixFQUFFO1NBQzdGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDhCQUE4QixDQUFDLEdBQUcsNEJBQTRCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtTZXJ2aWNlRGF0YSwgS2FsdHVyYUJ1bGtTZXJ2aWNlRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFCdWxrU2VydmljZURhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrU2VydmljZUZpbHRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrU2VydmljZURhdGFBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYUZpbHRlcjtcblx0dGVtcGxhdGVPYmplY3Q/IDogS2FsdHVyYU9iamVjdEJhc2U7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrU2VydmljZUZpbHRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhQnVsa1NlcnZpY2VEYXRhIHtcblxuICAgIGZpbHRlciA6IEthbHR1cmFGaWx0ZXI7XG5cdHRlbXBsYXRlT2JqZWN0IDogS2FsdHVyYU9iamVjdEJhc2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrU2VydmljZUZpbHRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtTZXJ2aWNlRmlsdGVyRGF0YScgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFGaWx0ZXInIH0sXG5cdFx0XHRcdHRlbXBsYXRlT2JqZWN0IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhT2JqZWN0QmFzZSwgc3ViVHlwZSA6ICdLYWx0dXJhT2JqZWN0QmFzZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtTZXJ2aWNlRmlsdGVyRGF0YSddID0gS2FsdHVyYUJ1bGtTZXJ2aWNlRmlsdGVyRGF0YTsiXX0=