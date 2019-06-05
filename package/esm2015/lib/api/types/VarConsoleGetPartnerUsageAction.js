/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaPartnerUsageListResponse } from './KalturaPartnerUsageListResponse';
import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaReportInputFilter } from './KalturaReportInputFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function VarConsoleGetPartnerUsageActionArgs() { }
/** @type {?|undefined} */
VarConsoleGetPartnerUsageActionArgs.prototype.partnerFilter;
/** @type {?|undefined} */
VarConsoleGetPartnerUsageActionArgs.prototype.usageFilter;
/** @type {?|undefined} */
VarConsoleGetPartnerUsageActionArgs.prototype.pager;
/**
 * Build request payload for service 'varConsole' action 'getPartnerUsage'.
 *
 * Usage: Function which calulates partner usage of a group of a VAR's sub-publishers
 *
 * Server response type:         KalturaPartnerUsageListResponse
 * Server failure response type: KalturaAPIException
 */
export class VarConsoleGetPartnerUsageAction extends KalturaRequest {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaPartnerUsageListResponse', responseConstructor: KalturaPartnerUsageListResponse });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'varconsole_varconsole' },
            action: { type: 'c', default: 'getPartnerUsage' },
            partnerFilter: { type: 'o', subTypeConstructor: KalturaPartnerFilter, subType: 'KalturaPartnerFilter' },
            usageFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    VarConsoleGetPartnerUsageAction.prototype.partnerFilter;
    /** @type {?} */
    VarConsoleGetPartnerUsageAction.prototype.usageFilter;
    /** @type {?} */
    VarConsoleGetPartnerUsageAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyQ29uc29sZUdldFBhcnRuZXJVc2FnZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVmFyQ29uc29sZUdldFBhcnRuZXJVc2FnZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBRUEsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFcEYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCeEUsTUFBTSxzQ0FBdUMsU0FBUSxjQUErQzs7OztJQU1oRyxZQUFZLElBQTJDO1FBRW5ELEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxpQ0FBaUMsRUFBRSxtQkFBbUIsRUFBRywrQkFBK0IsRUFBRyxDQUFDLENBQUM7S0FDbko7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ3BELGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1lBQzNHLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQ2pILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lclVzYWdlTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lclVzYWdlTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFZhckNvbnNvbGVHZXRQYXJ0bmVyVXNhZ2VBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgcGFydG5lckZpbHRlcj8gOiBLYWx0dXJhUGFydG5lckZpbHRlcjtcblx0dXNhZ2VGaWx0ZXI/IDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd2YXJDb25zb2xlJyBhY3Rpb24gJ2dldFBhcnRuZXJVc2FnZScuXG4gKlxuICogVXNhZ2U6IEZ1bmN0aW9uIHdoaWNoIGNhbHVsYXRlcyBwYXJ0bmVyIHVzYWdlIG9mIGEgZ3JvdXAgb2YgYSBWQVIncyBzdWItcHVibGlzaGVyc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQYXJ0bmVyVXNhZ2VMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFZhckNvbnNvbGVHZXRQYXJ0bmVyVXNhZ2VBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhUGFydG5lclVzYWdlTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBwYXJ0bmVyRmlsdGVyIDogS2FsdHVyYVBhcnRuZXJGaWx0ZXI7XG5cdHVzYWdlRmlsdGVyIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogVmFyQ29uc29sZUdldFBhcnRuZXJVc2FnZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lclVzYWdlTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd2YXJjb25zb2xlX3ZhcmNvbnNvbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdnZXRQYXJ0bmVyVXNhZ2UnIH0sXG5cdFx0XHRcdHBhcnRuZXJGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFQYXJ0bmVyRmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFQYXJ0bmVyRmlsdGVyJyB9LFxuXHRcdFx0XHR1c2FnZUZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVJlcG9ydElucHV0RmlsdGVyLCBzdWJUeXBlIDogJ0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==