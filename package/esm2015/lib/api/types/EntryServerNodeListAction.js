/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaEntryServerNodeListResponse } from './KalturaEntryServerNodeListResponse';
import { KalturaEntryServerNodeFilter } from './KalturaEntryServerNodeFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EntryServerNodeListActionArgs() { }
/** @type {?|undefined} */
EntryServerNodeListActionArgs.prototype.filter;
/** @type {?|undefined} */
EntryServerNodeListActionArgs.prototype.pager;
/**
 * Build request payload for service 'entryServerNode' action 'list'.
 *
 *
 *
 * Server response type:         KalturaEntryServerNodeListResponse
 * Server failure response type: KalturaAPIException
 */
export class EntryServerNodeListAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaEntryServerNodeListResponse', responseConstructor: KalturaEntryServerNodeListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'entryservernode' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaEntryServerNodeFilter, subType: 'KalturaEntryServerNodeFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    EntryServerNodeListAction.prototype.filter;
    /** @type {?} */
    EntryServerNodeListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlTZXJ2ZXJOb2RlTGlzdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRW50cnlTZXJ2ZXJOb2RlTGlzdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFMUYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEUsTUFBTSxnQ0FBaUMsU0FBUSxjQUFrRDs7OztJQUs3RixZQUFZLElBQXFDO1FBRTdDLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQ0FBb0MsRUFBRSxtQkFBbUIsRUFBRyxrQ0FBa0MsRUFBRyxDQUFDLENBQUM7S0FDeko7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLE1BQU0sRUFBRTtZQUN6QyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNwSCxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtTQUN0RixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5U2VydmVyTm9kZUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYUVudHJ5U2VydmVyTm9kZUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFFbnRyeVNlcnZlck5vZGVGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFFbnRyeVNlcnZlck5vZGVGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlTZXJ2ZXJOb2RlTGlzdEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBmaWx0ZXI/IDogS2FsdHVyYUVudHJ5U2VydmVyTm9kZUZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlTZXJ2ZXJOb2RlJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFFbnRyeVNlcnZlck5vZGVMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEVudHJ5U2VydmVyTm9kZUxpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlRmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogRW50cnlTZXJ2ZXJOb2RlTGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZUxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlTZXJ2ZXJOb2RlTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdlbnRyeXNlcnZlcm5vZGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVNlcnZlck5vZGVGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5U2VydmVyTm9kZUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==