/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaDistributionProfileListResponse } from './KalturaDistributionProfileListResponse';
import { KalturaDistributionProfileFilter } from './KalturaDistributionProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function DistributionProfileListActionArgs() { }
/** @type {?|undefined} */
DistributionProfileListActionArgs.prototype.filter;
/** @type {?|undefined} */
DistributionProfileListActionArgs.prototype.pager;
/**
 * Build request payload for service 'distributionProfile' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaDistributionProfileListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'distributionProfile' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaDistributionProfileListResponse
 * Server failure response type: KalturaAPIException
 */
DistributionProfileListAction = /** @class */ (function (_super) {
    tslib_1.__extends(DistributionProfileListAction, _super);
    function DistributionProfileListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaDistributionProfileListResponse', responseConstructor: KalturaDistributionProfileListResponse }) || this;
    }
    /**
     * @return {?}
     */
    DistributionProfileListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'contentdistribution_distributionprofile' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaDistributionProfileFilter, subType: 'KalturaDistributionProfileFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return DistributionProfileListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'distributionProfile' action 'list'.
 *
 * Usage: List all distribution providers
 *
 * Server response type:         KalturaDistributionProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export { DistributionProfileListAction };
if (false) {
    /** @type {?} */
    DistributionProfileListAction.prototype.filter;
    /** @type {?} */
    DistributionProfileListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uUHJvZmlsZUxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Rpc3RyaWJ1dGlvblByb2ZpbGVMaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHNDQUFzQyxFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFbEcsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBbUQseURBQXNEO0lBS3JHLHVDQUFZLElBQXlDO2VBRWpELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHdDQUF3QyxFQUFFLG1CQUFtQixFQUFHLHNDQUFzQyxFQUFHLENBQUM7S0FDaEs7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyx5Q0FBeUMsRUFBRTtZQUN6RixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQ0FBZ0MsRUFBRSxPQUFPLEVBQUcsa0NBQWtDLEVBQUU7WUFDNUgsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjt3Q0E1Q0w7RUFxQm1ELGNBQWMsRUF3QmhFLENBQUE7Ozs7Ozs7OztBQXhCRCx5Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGVGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpc3RyaWJ1dGlvblByb2ZpbGVMaXN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZGlzdHJpYnV0aW9uUHJvZmlsZScgYWN0aW9uICdsaXN0Jy5cbiAqXG4gKiBVc2FnZTogTGlzdCBhbGwgZGlzdHJpYnV0aW9uIHByb3ZpZGVyc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBEaXN0cmlidXRpb25Qcm9maWxlTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IERpc3RyaWJ1dGlvblByb2ZpbGVMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udGVudGRpc3RyaWJ1dGlvbl9kaXN0cmlidXRpb25wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnbGlzdCcgfSxcblx0XHRcdFx0ZmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==