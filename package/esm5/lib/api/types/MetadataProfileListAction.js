/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaMetadataProfileListResponse } from './KalturaMetadataProfileListResponse';
import { KalturaMetadataProfileFilter } from './KalturaMetadataProfileFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function MetadataProfileListActionArgs() { }
/** @type {?|undefined} */
MetadataProfileListActionArgs.prototype.filter;
/** @type {?|undefined} */
MetadataProfileListActionArgs.prototype.pager;
/**
 * Build request payload for service 'metadataProfile' action 'list'.
 *
 * Usage: List metadata profile objects by filter and pager
 *
 * Server response type:         KalturaMetadataProfileListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'metadataProfile' action 'list'.
 *
 * Usage: List metadata profile objects by filter and pager
 *
 * Server response type:         KalturaMetadataProfileListResponse
 * Server failure response type: KalturaAPIException
 */
MetadataProfileListAction = /** @class */ (function (_super) {
    tslib_1.__extends(MetadataProfileListAction, _super);
    function MetadataProfileListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaMetadataProfileListResponse', responseConstructor: KalturaMetadataProfileListResponse }) || this;
    }
    /**
     * @return {?}
     */
    MetadataProfileListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'metadata_metadataprofile' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaMetadataProfileFilter, subType: 'KalturaMetadataProfileFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return MetadataProfileListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'metadataProfile' action 'list'.
 *
 * Usage: List metadata profile objects by filter and pager
 *
 * Server response type:         KalturaMetadataProfileListResponse
 * Server failure response type: KalturaAPIException
 */
export { MetadataProfileListAction };
if (false) {
    /** @type {?} */
    MetadataProfileListAction.prototype.filter;
    /** @type {?} */
    MetadataProfileListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGFQcm9maWxlTGlzdEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvTWV0YWRhdGFQcm9maWxlTGlzdEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTFGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFrRDtJQUs3RixtQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQ0FBb0MsRUFBRSxtQkFBbUIsRUFBRyxrQ0FBa0MsRUFBRyxDQUFDO0tBQ3hKOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDMUUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsTUFBTSxFQUFFO1lBQ3pDLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsNEJBQTRCLEVBQUUsT0FBTyxFQUFHLDhCQUE4QixFQUFFO1lBQ3BILEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0JBQWtCLEVBQUUsT0FBTyxFQUFHLG9CQUFvQixFQUFFO1NBQ3RGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBNUNMO0VBcUIrQyxjQUFjLEVBd0I1RCxDQUFBOzs7Ozs7Ozs7QUF4QkQscUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFNZXRhZGF0YVByb2ZpbGVMaXN0UmVzcG9uc2UnO1xuXG5pbXBvcnQgeyBLYWx0dXJhTWV0YWRhdGFQcm9maWxlRmlsdGVyIH0gZnJvbSAnLi9LYWx0dXJhTWV0YWRhdGFQcm9maWxlRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhUHJvZmlsZUxpc3RBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZmlsdGVyPyA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVGaWx0ZXI7XG5cdHBhZ2VyPyA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ21ldGFkYXRhUHJvZmlsZScgYWN0aW9uICdsaXN0Jy5cbiAqXG4gKiBVc2FnZTogTGlzdCBtZXRhZGF0YSBwcm9maWxlIG9iamVjdHMgYnkgZmlsdGVyIGFuZCBwYWdlclxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFNZXRhZGF0YVByb2ZpbGVMaXN0UmVzcG9uc2VcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhUHJvZmlsZUxpc3RBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhTWV0YWRhdGFQcm9maWxlTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlRmlsdGVyO1xuXHRwYWdlciA6IEthbHR1cmFGaWx0ZXJQYWdlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogTWV0YWRhdGFQcm9maWxlTGlzdEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUxpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWV0YWRhdGFQcm9maWxlTGlzdFJlc3BvbnNlICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdtZXRhZGF0YV9tZXRhZGF0YXByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdsaXN0JyB9LFxuXHRcdFx0XHRmaWx0ZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZXRhZGF0YVByb2ZpbGVGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYU1ldGFkYXRhUHJvZmlsZUZpbHRlcicgfSxcblx0XHRcdFx0cGFnZXIgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFGaWx0ZXJQYWdlciwgc3ViVHlwZSA6ICdLYWx0dXJhRmlsdGVyUGFnZXInIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==