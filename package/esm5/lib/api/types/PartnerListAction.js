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
export function PartnerListActionArgs() { }
/** @type {?|undefined} */
PartnerListActionArgs.prototype.filter;
/** @type {?|undefined} */
PartnerListActionArgs.prototype.pager;
/**
 * Build request payload for service 'partner' action 'list'.
 *
 * Usage: List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the api call (using the current KS).
 * This action is only partially implemented to support listing sub partners of a VAR partner
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'partner' action 'list'.
 *
 * Usage: List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the api call (using the current KS).
 * This action is only partially implemented to support listing sub partners of a VAR partner
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 */
PartnerListAction = /** @class */ (function (_super) {
    tslib_1.__extends(PartnerListAction, _super);
    function PartnerListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaPartnerListResponse', responseConstructor: KalturaPartnerListResponse }) || this;
    }
    /**
     * @return {?}
     */
    PartnerListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'partner' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaPartnerFilter, subType: 'KalturaPartnerFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return PartnerListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'partner' action 'list'.
 *
 * Usage: List partners by filter with paging support
 * Current implementation will only list the sub partners of the partner initiating the api call (using the current KS).
 * This action is only partially implemented to support listing sub partners of a VAR partner
 *
 * Server response type:         KalturaPartnerListResponse
 * Server failure response type: KalturaAPIException
 */
export { PartnerListAction };
if (false) {
    /** @type {?} */
    PartnerListAction.prototype.filter;
    /** @type {?} */
    PartnerListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFydG5lckxpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1BhcnRuZXJMaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCeEU7Ozs7Ozs7Ozs7QUFBQTtJQUF1Qyw2Q0FBMEM7SUFLN0UsMkJBQVksSUFBNkI7ZUFFckMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsNEJBQTRCLEVBQUUsbUJBQW1CLEVBQUcsMEJBQTBCLEVBQUcsQ0FBQztLQUN4STs7OztJQUVTLHdDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFNBQVMsRUFBRTtZQUN6RCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7WUFDcEcsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs0QkE5Q0w7RUF1QnVDLGNBQWMsRUF3QnBELENBQUE7Ozs7Ozs7Ozs7O0FBeEJELDZCQXdCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lckxpc3RSZXNwb25zZSB9IGZyb20gJy4vS2FsdHVyYVBhcnRuZXJMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUGFydG5lckZpbHRlciB9IGZyb20gJy4vS2FsdHVyYVBhcnRuZXJGaWx0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYUZpbHRlclBhZ2VyIH0gZnJvbSAnLi9LYWx0dXJhRmlsdGVyUGFnZXInO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFydG5lckxpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFQYXJ0bmVyRmlsdGVyO1xuXHRwYWdlcj8gOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICdwYXJ0bmVyJyBhY3Rpb24gJ2xpc3QnLlxuICpcbiAqIFVzYWdlOiBMaXN0IHBhcnRuZXJzIGJ5IGZpbHRlciB3aXRoIHBhZ2luZyBzdXBwb3J0XG4gKiBDdXJyZW50IGltcGxlbWVudGF0aW9uIHdpbGwgb25seSBsaXN0IHRoZSBzdWIgcGFydG5lcnMgb2YgdGhlIHBhcnRuZXIgaW5pdGlhdGluZyB0aGUgYXBpIGNhbGwgKHVzaW5nIHRoZSBjdXJyZW50IEtTKS5cbiAqIFRoaXMgYWN0aW9uIGlzIG9ubHkgcGFydGlhbGx5IGltcGxlbWVudGVkIHRvIHN1cHBvcnQgbGlzdGluZyBzdWIgcGFydG5lcnMgb2YgYSBWQVIgcGFydG5lclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFQYXJ0bmVyTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBQYXJ0bmVyTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFQYXJ0bmVyTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhUGFydG5lckZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IFBhcnRuZXJMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhUGFydG5lckxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhUGFydG5lckxpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAncGFydG5lcicgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVBhcnRuZXJGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYVBhcnRuZXJGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=