/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaFlavorParamsOutputListResponse } from './KalturaFlavorParamsOutputListResponse';
import { KalturaFlavorParamsOutputFilter } from './KalturaFlavorParamsOutputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorParamsOutputListActionArgs() { }
/** @type {?|undefined} */
FlavorParamsOutputListActionArgs.prototype.filter;
/** @type {?|undefined} */
FlavorParamsOutputListActionArgs.prototype.pager;
/**
 * Build request payload for service 'flavorParamsOutput' action 'list'.
 *
 * Usage: List flavor params output objects by filter and pager
 *
 * Server response type:         KalturaFlavorParamsOutputListResponse
 * Server failure response type: KalturaAPIException
 */
export class FlavorParamsOutputListAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaFlavorParamsOutputListResponse', responseConstructor: KalturaFlavorParamsOutputListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorparamsoutput' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaFlavorParamsOutputFilter, subType: 'KalturaFlavorParamsOutputFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    FlavorParamsOutputListAction.prototype.filter;
    /** @type {?} */
    FlavorParamsOutputListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yUGFyYW1zT3V0cHV0TGlzdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRmxhdm9yUGFyYW1zT3V0cHV0TGlzdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFaEcsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSxtQ0FBb0MsU0FBUSxjQUFxRDs7OztJQUtuRyxZQUFZLElBQXdDO1FBRWhELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyx1Q0FBdUMsRUFBRSxtQkFBbUIsRUFBRyxxQ0FBcUMsRUFBRyxDQUFDLENBQUM7S0FDL0o7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1lBQ3BFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLCtCQUErQixFQUFFLE9BQU8sRUFBRyxpQ0FBaUMsRUFBRTtZQUMxSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dExpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dExpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmxhdm9yUGFyYW1zT3V0cHV0TGlzdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZmxhdm9yUGFyYW1zT3V0cHV0JyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBMaXN0IGZsYXZvciBwYXJhbXMgb3V0cHV0IG9iamVjdHMgYnkgZmlsdGVyIGFuZCBwYWdlclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXZvclBhcmFtc091dHB1dExpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0RmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogRmxhdm9yUGFyYW1zT3V0cHV0TGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dExpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmxhdm9yUGFyYW1zT3V0cHV0TGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdmbGF2b3JwYXJhbXNvdXRwdXQnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGbGF2b3JQYXJhbXNPdXRwdXRGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZsYXZvclBhcmFtc091dHB1dEZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==