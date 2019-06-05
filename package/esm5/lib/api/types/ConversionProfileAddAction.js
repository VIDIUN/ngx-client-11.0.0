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
export function ConversionProfileAddActionArgs() { }
/** @type {?} */
ConversionProfileAddActionArgs.prototype.conversionProfile;
/**
 * Build request payload for service 'conversionProfile' action 'add'.
 *
 * Usage: Add new Conversion Profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'conversionProfile' action 'add'.
 *
 * Usage: Add new Conversion Profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
ConversionProfileAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(ConversionProfileAddAction, _super);
    function ConversionProfileAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaConversionProfile', responseConstructor: KalturaConversionProfile }) || this;
    }
    /**
     * @return {?}
     */
    ConversionProfileAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'conversionprofile' },
            action: { type: 'c', default: 'add' },
            conversionProfile: { type: 'o', subTypeConstructor: KalturaConversionProfile, subType: 'KalturaConversionProfile' }
        });
        return result;
    };
    return ConversionProfileAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'conversionProfile' action 'add'.
 *
 * Usage: Add new Conversion Profile
 *
 * Server response type:         KalturaConversionProfile
 * Server failure response type: KalturaAPIException
 */
export { ConversionProfileAddAction };
if (false) {
    /** @type {?} */
    ConversionProfileAddAction.prototype.conversionProfile;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udmVyc2lvblByb2ZpbGVBZGRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0NvbnZlcnNpb25Qcm9maWxlQWRkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEUsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQWdELHNEQUF3QztJQUlwRixvQ0FBWSxJQUFxQztlQUU3QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywwQkFBMEIsRUFBRSxtQkFBbUIsRUFBRyx3QkFBd0IsRUFBRyxDQUFDO0tBQ3BJOzs7O0lBRVMsaURBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsbUJBQW1CLEVBQUU7WUFDbkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsS0FBSyxFQUFFO1lBQ3hDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx3QkFBd0IsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7U0FDOUcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtxQ0F2Q0w7RUFrQmdELGNBQWMsRUFzQjdELENBQUE7Ozs7Ozs7OztBQXRCRCxzQ0FzQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGUnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDb252ZXJzaW9uUHJvZmlsZUFkZEFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBjb252ZXJzaW9uUHJvZmlsZSA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NvbnZlcnNpb25Qcm9maWxlJyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgQ29udmVyc2lvbiBQcm9maWxlXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDb252ZXJzaW9uUHJvZmlsZUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZT4ge1xuXG4gICAgY29udmVyc2lvblByb2ZpbGUgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQ29udmVyc2lvblByb2ZpbGVBZGRBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGUgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2NvbnZlcnNpb25wcm9maWxlJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRjb252ZXJzaW9uUHJvZmlsZSA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlLCBzdWJUeXBlIDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19