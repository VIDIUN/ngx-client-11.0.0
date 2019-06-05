/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaFlavorParams } from './KalturaFlavorParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function FlavorParamsGetByConversionProfileIdActionArgs() { }
/** @type {?} */
FlavorParamsGetByConversionProfileIdActionArgs.prototype.conversionProfileId;
/**
 * Build request payload for service 'flavorParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Flavor Params by Conversion Profile ID
 *
 * Server response type:         KalturaFlavorParams[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'flavorParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Flavor Params by Conversion Profile ID
 *
 * Server response type:         KalturaFlavorParams[]
 * Server failure response type: KalturaAPIException
 */
FlavorParamsGetByConversionProfileIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(FlavorParamsGetByConversionProfileIdAction, _super);
    function FlavorParamsGetByConversionProfileIdAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaFlavorParams', responseConstructor: KalturaFlavorParams }) || this;
    }
    /**
     * @return {?}
     */
    FlavorParamsGetByConversionProfileIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'flavorparams' },
            action: { type: 'c', default: 'getByConversionProfileId' },
            conversionProfileId: { type: 'n' }
        });
        return result;
    };
    return FlavorParamsGetByConversionProfileIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'flavorParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Flavor Params by Conversion Profile ID
 *
 * Server response type:         KalturaFlavorParams[]
 * Server failure response type: KalturaAPIException
 */
export { FlavorParamsGetByConversionProfileIdAction };
if (false) {
    /** @type {?} */
    FlavorParamsGetByConversionProfileIdAction.prototype.conversionProfileId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmxhdm9yUGFyYW1zR2V0QnlDb252ZXJzaW9uUHJvZmlsZUlkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9GbGF2b3JQYXJhbXNHZXRCeUNvbnZlcnNpb25Qcm9maWxlSWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBZ0Usc0VBQXFDO0lBSWpHLG9EQUFZLElBQXFEO2VBRTdELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLHFCQUFxQixFQUFFLG1CQUFtQixFQUFHLG1CQUFtQixFQUFHLENBQUM7S0FDMUg7Ozs7SUFFUyxpRUFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxjQUFjLEVBQUU7WUFDOUQsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0QsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQzNCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7cURBdkNMO0VBa0JnRSxjQUFjLEVBc0I3RSxDQUFBOzs7Ozs7Ozs7QUF0QkQsc0RBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFGbGF2b3JQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFGbGF2b3JQYXJhbXMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBGbGF2b3JQYXJhbXNHZXRCeUNvbnZlcnNpb25Qcm9maWxlSWRBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgY29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2ZsYXZvclBhcmFtcycgYWN0aW9uICdnZXRCeUNvbnZlcnNpb25Qcm9maWxlSWQnLlxuICpcbiAqIFVzYWdlOiBHZXQgRmxhdm9yIFBhcmFtcyBieSBDb252ZXJzaW9uIFByb2ZpbGUgSURcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhRmxhdm9yUGFyYW1zW11cbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEZsYXZvclBhcmFtc0dldEJ5Q29udmVyc2lvblByb2ZpbGVJZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFGbGF2b3JQYXJhbXNbXT4ge1xuXG4gICAgY29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBGbGF2b3JQYXJhbXNHZXRCeUNvbnZlcnNpb25Qcm9maWxlSWRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdhJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFGbGF2b3JQYXJhbXMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUZsYXZvclBhcmFtcyAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZmxhdm9ycGFyYW1zJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnZ2V0QnlDb252ZXJzaW9uUHJvZmlsZUlkJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==