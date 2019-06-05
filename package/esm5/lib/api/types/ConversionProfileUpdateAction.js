/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaConversionProfile } from './KalturaConversionProfile';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ConversionProfileUpdateActionArgs() { }
/** @type {?} */
ConversionProfileUpdateActionArgs.prototype.id;
/** @type {?} */
ConversionProfileUpdateActionArgs.prototype.conversionProfile;
/**
 * Build request payload for service 'conversionProfile' action 'update'.
 *
 * Usage: Update Conversion Profile by ID
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'conversionProfile' action 'update'.
 *
 * Usage: Update Conversion Profile by ID
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
ConversionProfileUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ConversionProfileUpdateAction, _super);
    function ConversionProfileUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaConversionProfile', responseConstructor: KalturaConversionProfile }) || this;
    }
    /**
     * @return {?}
     */
    ConversionProfileUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'conversionprofile' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            conversionProfile: { type: 'o', subTypeConstructor: KalturaConversionProfile, subType: 'KalturaConversionProfile' }
        });
        return result;
    };
    return ConversionProfileUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'conversionProfile' action 'update'.
 *
 * Usage: Update Conversion Profile by ID
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export { ConversionProfileUpdateAction };
if (false) {
    /** @type {?} */
    ConversionProfileUpdateAction.prototype.id;
    /** @type {?} */
    ConversionProfileUpdateAction.prototype.conversionProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2lvblByb2ZpbGVVcGRhdGVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NvbnZlcnNpb25Qcm9maWxlVXBkYXRlQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBbUQseURBQXdDO0lBS3ZGLHVDQUFZLElBQXdDO2VBRWhELGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLDBCQUEwQixFQUFFLG1CQUFtQixFQUFHLHdCQUF3QixFQUFHLENBQUM7S0FDcEk7Ozs7SUFFUyxvREFBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUNuRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxRQUFRLEVBQUU7WUFDM0MsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQixpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsd0JBQXdCLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1NBQzlHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7d0NBMUNMO0VBbUJtRCxjQUFjLEVBd0JoRSxDQUFBOzs7Ozs7Ozs7QUF4QkQseUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVyc2lvblByb2ZpbGVVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGNvbnZlcnNpb25Qcm9maWxlIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY29udmVyc2lvblByb2ZpbGUnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIENvbnZlcnNpb24gUHJvZmlsZSBieSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29udmVyc2lvblByb2ZpbGVVcGRhdGVBY3Rpb24gZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdDxLYWx0dXJhQ29udmVyc2lvblByb2ZpbGU+IHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHRjb252ZXJzaW9uUHJvZmlsZSA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDb252ZXJzaW9uUHJvZmlsZVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZSAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY29udmVyc2lvbnByb2ZpbGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=