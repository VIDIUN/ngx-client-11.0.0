/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaConversionProfileAssetParamsListResponse } from './KalturaConversionProfileAssetParamsListResponse';
import { KalturaConversionProfileAssetParamsFilter } from './KalturaConversionProfileAssetParamsFilter';
import { KalturaFilterPager } from './KalturaFilterPager';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ConversionProfileAssetParamsListActionArgs() { }
/** @type {?|undefined} */
ConversionProfileAssetParamsListActionArgs.prototype.filter;
/** @type {?|undefined} */
ConversionProfileAssetParamsListActionArgs.prototype.pager;
/**
 * Build request payload for service 'conversionProfileAssetParams' action 'list'.
 *
 * Usage: Lists asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParamsListResponse
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'conversionProfileAssetParams' action 'list'.
 *
 * Usage: Lists asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParamsListResponse
 * Server failure response type: KalturaAPIException
 */
ConversionProfileAssetParamsListAction = /** @class */ (function (_super) {
    tslib_1.__extends(ConversionProfileAssetParamsListAction, _super);
    function ConversionProfileAssetParamsListAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaConversionProfileAssetParamsListResponse', responseConstructor: KalturaConversionProfileAssetParamsListResponse }) || this;
    }
    /**
     * @return {?}
     */
    ConversionProfileAssetParamsListAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'conversionprofileassetparams' },
            action: { type: 'c', default: 'list' },
            filter: { type: 'o', subTypeConstructor: KalturaConversionProfileAssetParamsFilter, subType: 'KalturaConversionProfileAssetParamsFilter' },
            pager: { type: 'o', subTypeConstructor: KalturaFilterPager, subType: 'KalturaFilterPager' }
        });
        return result;
    };
    return ConversionProfileAssetParamsListAction;
}(KalturaRequest));
/**
 * Build request payload for service 'conversionProfileAssetParams' action 'list'.
 *
 * Usage: Lists asset parmas of conversion profile by ID
 *
 * Server response type:         KalturaConversionProfileAssetParamsListResponse
 * Server failure response type: KalturaAPIException
 */
export { ConversionProfileAssetParamsListAction };
if (false) {
    /** @type {?} */
    ConversionProfileAssetParamsListAction.prototype.filter;
    /** @type {?} */
    ConversionProfileAssetParamsListAction.prototype.pager;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0xpc3RBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNMaXN0QWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLCtDQUErQyxFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFFcEgsT0FBTyxFQUFFLHlDQUF5QyxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBNEQsa0VBQStEO0lBS3ZILGdEQUFZLElBQWtEO2VBRTFELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLGlEQUFpRCxFQUFFLG1CQUFtQixFQUFHLCtDQUErQyxFQUFHLENBQUM7S0FDbEw7Ozs7SUFFUyw2REFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUM5RSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxNQUFNLEVBQUU7WUFDekMsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUksS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7U0FDdEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtpREE1Q0w7RUFxQjRELGNBQWMsRUF3QnpFLENBQUE7Ozs7Ozs7OztBQXhCRCxrREF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNMaXN0UmVzcG9uc2UgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zTGlzdFJlc3BvbnNlJztcblxuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNGaWx0ZXIgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zRmlsdGVyJztcbmltcG9ydCB7IEthbHR1cmFGaWx0ZXJQYWdlciB9IGZyb20gJy4vS2FsdHVyYUZpbHRlclBhZ2VyJztcbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNMaXN0QWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGZpbHRlcj8gOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0ZpbHRlcjtcblx0cGFnZXI/IDogS2FsdHVyYUZpbHRlclBhZ2VyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtcycgYWN0aW9uICdsaXN0Jy5cbiAqXG4gKiBVc2FnZTogTGlzdHMgYXNzZXQgcGFybWFzIG9mIGNvbnZlcnNpb24gcHJvZmlsZSBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zTGlzdFJlc3BvbnNlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zTGlzdEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFzc2V0UGFyYW1zTGlzdFJlc3BvbnNlPiB7XG5cbiAgICBmaWx0ZXIgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0ZpbHRlcjtcblx0cGFnZXIgOiBLYWx0dXJhRmlsdGVyUGFnZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IENvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNMaXN0QWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0xpc3RSZXNwb25zZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVBc3NldFBhcmFtc0xpc3RSZXNwb25zZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udmVyc2lvbnByb2ZpbGVhc3NldHBhcmFtcycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2xpc3QnIH0sXG5cdFx0XHRcdGZpbHRlciA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNGaWx0ZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXNzZXRQYXJhbXNGaWx0ZXInIH0sXG5cdFx0XHRcdHBhZ2VyIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRmlsdGVyUGFnZXIsIHN1YlR5cGUgOiAnS2FsdHVyYUZpbHRlclBhZ2VyJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=