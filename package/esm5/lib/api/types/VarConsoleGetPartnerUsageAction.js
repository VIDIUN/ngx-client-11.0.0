/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var /**
 * Build request payload for service 'varConsole' action 'getPartnerUsage'.
 *
 * Usage: Function which calulates partner usage of a group of a VAR's sub-publishers
 *
 * Server response type:         KalturaPartnerUsageListResponse
 * Server failure response type: KalturaAPIException
 */
VarConsoleGetPartnerUsageAction = /** @class */ (function (_super) {
    tslib_1.__extends(VarConsoleGetPartnerUsageAction, _super);
    function VarConsoleGetPartnerUsageAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartnerUsageListResponse', responseConstructor: KalturaPartnerUsageListResponse }) || this;
    }
    /**
     * @return {?}
     */
    VarConsoleGetPartnerUsageAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'varconsole_varconsole' },
            action: { type: 'c', default: 'getPartnerUsage' },
            partnerFilter: { type: 'o', subTypeConstructor: KalturaPartnerFilter, subType: 'KalturaPartnerFilter' },
            usageFilter: { type: 'o', subTypeConstructor: KalturaReportInputFilter, subType: 'KalturaReportInputFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return VarConsoleGetPartnerUsageAction;
}(KalturaRequest));
/**
 * Build request payload for service 'varConsole' action 'getPartnerUsage'.
 *
 * Usage: Function which calulates partner usage of a group of a VAR's sub-publishers
 *
 * Server response type:         KalturaPartnerUsageListResponse
 * Server failure response type: KalturaAPIException
 */
export { VarConsoleGetPartnerUsageAction };
if (false) {
    /** @type {?} */
    VarConsoleGetPartnerUsageAction.prototype.partnerFilter;
    /** @type {?} */
    VarConsoleGetPartnerUsageAction.prototype.usageFilter;
    /** @type {?} */
    VarConsoleGetPartnerUsageAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyQ29uc29sZUdldFBhcnRuZXJVc2FnZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvVmFyQ29uc29sZUdldFBhcnRuZXJVc2FnZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXBGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQzlELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQnhFOzs7Ozs7OztBQUFBO0lBQXFELDJEQUErQztJQU1oRyx5Q0FBWSxJQUEyQztlQUVuRCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxpQ0FBaUMsRUFBRSxtQkFBbUIsRUFBRywrQkFBK0IsRUFBRyxDQUFDO0tBQ2xKOzs7O0lBRVMsc0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUJBQWlCLEVBQUU7WUFDcEQsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDM0csV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDakgsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjswQ0FoREw7RUF1QnFELGNBQWMsRUEwQmxFLENBQUE7Ozs7Ozs7OztBQTFCRCwyQ0EwQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZSc7XG5cbmltcG9ydCB7IEthbHR1cmFQYXJ0bmVyRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhUGFydG5lckZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFSZXBvcnRJbnB1dEZpbHRlcic7XG5pbXBvcnQgeyBLYWx0dXJhRmlsdGVyUGFnZXIgfSBmcm9tICcuL0thbHR1cmFGaWx0ZXJQYWdlcic7XG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBWYXJDb25zb2xlR2V0UGFydG5lclVzYWdlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBhcnRuZXJGaWx0ZXI/IDogS2FsdHVyYVBhcnRuZXJGaWx0ZXI7XG5cdHVzYWdlRmlsdGVyPyA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAndmFyQ29uc29sZScgYWN0aW9uICdnZXRQYXJ0bmVyVXNhZ2UnLlxuICpcbiAqIFVzYWdlOiBGdW5jdGlvbiB3aGljaCBjYWx1bGF0ZXMgcGFydG5lciB1c2FnZSBvZiBhIGdyb3VwIG9mIGEgVkFSJ3Mgc3ViLXB1Ymxpc2hlcnNcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhUGFydG5lclVzYWdlTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBWYXJDb25zb2xlR2V0UGFydG5lclVzYWdlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZT4ge1xuXG4gICAgcGFydG5lckZpbHRlciA6IEthbHR1cmFQYXJ0bmVyRmlsdGVyO1xuXHR1c2FnZUZpbHRlciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFZhckNvbnNvbGVHZXRQYXJ0bmVyVXNhZ2VBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFQYXJ0bmVyVXNhZ2VMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJVc2FnZUxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndmFyY29uc29sZV92YXJjb25zb2xlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0UGFydG5lclVzYWdlJyB9LFxuXHRcdFx0XHRwYXJ0bmVyRmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lckZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lckZpbHRlcicgfSxcblx0XHRcdFx0dXNhZ2VGaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFSZXBvcnRJbnB1dEZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUmVwb3J0SW5wdXRGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=