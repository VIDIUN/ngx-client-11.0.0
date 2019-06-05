/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaDeliveryProfileListResponse } from './KalturaDeliveryProfileListResponse';
import { KalturaDeliveryProfileFilter } from './KalturaDeliveryProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DeliveryProfileListActionArgs() { }
/** @type {?|undefined} */
DeliveryProfileListActionArgs.prototype.filter;
/** @type {?|undefined} */
DeliveryProfileListActionArgs.prototype.pager;
/**
 * Build request payload for service 'deliveryProfile' action 'list'.
 *
 * Usage: Retrieve a list of available delivery depends on the filter given
 *
 * Server response type:         KalturaDeliveryProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export class DeliveryProfileListAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaDeliveryProfileListResponse', responseConstructor: KalturaDeliveryProfileListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'deliveryprofile' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaDeliveryProfileFilter, subType: 'KalturaDeliveryProfileFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    DeliveryProfileListAction.prototype.filter;
    /** @type {?} */
    DeliveryProfileListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsaXZlcnlQcm9maWxlTGlzdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRGVsaXZlcnlQcm9maWxlTGlzdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSxnQ0FBaUMsU0FBUSxjQUFrRDs7OztJQUs3RixZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQ0FBb0MsRUFBRSxtQkFBbUIsRUFBRyxrQ0FBa0MsRUFBRyxDQUFDLENBQUM7S0FDeko7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNwSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFEZWxpdmVyeVByb2ZpbGVGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlQcm9maWxlTGlzdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZGVsaXZlcnlQcm9maWxlJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBSZXRyaWV2ZSBhIGxpc3Qgb2YgYXZhaWxhYmxlIGRlbGl2ZXJ5IGRlcGVuZHMgb24gdGhlIGZpbHRlciBnaXZlblxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEZWxpdmVyeVByb2ZpbGVMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIERlbGl2ZXJ5UHJvZmlsZUxpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRGVsaXZlcnlQcm9maWxlTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlRmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogRGVsaXZlcnlQcm9maWxlTGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGVsaXZlcnlQcm9maWxlTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdkZWxpdmVyeXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEZWxpdmVyeVByb2ZpbGVGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYURlbGl2ZXJ5UHJvZmlsZUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==