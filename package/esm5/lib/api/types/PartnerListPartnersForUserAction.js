/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaPartnerListResponse } from './KalturaPartnerListResponse';
import { KalturaPartnerFilter } from './KalturaPartnerFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function PartnerListPartnersForUserActionArgs() { }
/** @type {?|undefined} */
PartnerListPartnersForUserActionArgs.prototype.partnerFilter;
/** @type {?|undefined} */
PartnerListPartnersForUserActionArgs.prototype.pager;
/**
 * Build request payload for service 'partner' action 'listPartnersForUser'.
 *
 * Usage: Retrieve a list of partner objects which the current user is allowed to access
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'listPartnersForUser'.
 *
 * Usage: Retrieve a list of partner objects which the current user is allowed to access
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 */
PartnerListPartnersForUserAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerListPartnersForUserAction, _super);
    function PartnerListPartnersForUserAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartnerListResponse', responseConstructor: KalturaPartnerListResponse }) || this;
    }
    /**
     * @return {?}
     */
    PartnerListPartnersForUserAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'listPartnersForUser' },
            partnerFilter: { type: 'o', subTypeConstructor: KalturaPartnerFilter, subType: 'KalturaPartnerFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return PartnerListPartnersForUserAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'listPartnersForUser'.
 *
 * Usage: Retrieve a list of partner objects which the current user is allowed to access
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 */
export { PartnerListPartnersForUserAction };
if (false) {
    /** @type {?} */
    PartnerListPartnersForUserAction.prototype.partnerFilter;
    /** @type {?} */
    PartnerListPartnersForUserAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lckxpc3RQYXJ0bmVyc0ZvclVzZXJBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BhcnRuZXJMaXN0UGFydG5lcnNGb3JVc2VyQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBc0QsNERBQTBDO0lBSzVGLDBDQUFZLElBQTRDO2VBRXBELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDRCQUE0QixFQUFFLG1CQUFtQixFQUFHLDBCQUEwQixFQUFHLENBQUM7S0FDeEk7Ozs7SUFFUyx1REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxTQUFTLEVBQUU7WUFDekQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEQsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDM0csS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsyQ0E1Q0w7RUFxQnNELGNBQWMsRUF3Qm5FLENBQUE7Ozs7Ozs7OztBQXhCRCw0Q0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYVBhcnRuZXJGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFQYXJ0bmVyRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcnRuZXJMaXN0UGFydG5lcnNGb3JVc2VyQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIHBhcnRuZXJGaWx0ZXI/IDogS2FsdHVyYVBhcnRuZXJGaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ3BhcnRuZXInIGFjdGlvbiAnbGlzdFBhcnRuZXJzRm9yVXNlcicuXG4gKlxuICogVXNhZ2U6IFJldHJpZXZlIGEgbGlzdCBvZiBwYXJ0bmVyIG9iamVjdHMgd2hpY2ggdGhlIGN1cnJlbnQgdXNlciBpcyBhbGxvd2VkIHRvIGFjY2Vzc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQYXJ0bmVyTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJ0bmVyTGlzdFBhcnRuZXJzRm9yVXNlckFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQYXJ0bmVyTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBwYXJ0bmVyRmlsdGVyIDogS2FsdHVyYVBhcnRuZXJGaWx0ZXI7XG5cdHBhZ2VyIDogS2FsdHVyYUZpbHRlclBhZ2VyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBQYXJ0bmVyTGlzdFBhcnRuZXJzRm9yVXNlckFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJMaXN0UmVzcG9uc2UnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJMaXN0UmVzcG9uc2UgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3BhcnRuZXInIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0UGFydG5lcnNGb3JVc2VyJyB9LFxuXHRcdFx0XHRwYXJ0bmVyRmlsdGVyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lckZpbHRlciwgc3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lckZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==