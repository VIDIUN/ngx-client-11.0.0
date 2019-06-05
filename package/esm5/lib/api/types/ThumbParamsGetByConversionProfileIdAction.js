/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaThumbParams } from './KalturaThumbParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ThumbParamsGetByConversionProfileIdActionArgs() { }
/** @type {?} */
ThumbParamsGetByConversionProfileIdActionArgs.prototype.conversionProfileId;
/**
 * Build request payload for service 'thumbParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Thumb Params by Conversion Profile ID
 *
 * Server response type:         KalturaThumbParams[]
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'thumbParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Thumb Params by Conversion Profile ID
 *
 * Server response type:         KalturaThumbParams[]
 * Server failure response type: KalturaAPIException
 */
ThumbParamsGetByConversionProfileIdAction = /** @class */ (function (_super) {
    tslib_1.__extends(ThumbParamsGetByConversionProfileIdAction, _super);
    function ThumbParamsGetByConversionProfileIdAction(data) {
        return _super.call(this, data, { responseType: 'a', responseSubType: 'KalturaThumbParams', responseConstructor: KalturaThumbParams }) || this;
    }
    /**
     * @return {?}
     */
    ThumbParamsGetByConversionProfileIdAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'thumbparams' },
            action: { type: 'c', default: 'getByConversionProfileId' },
            conversionProfileId: { type: 'n' }
        });
        return result;
    };
    return ThumbParamsGetByConversionProfileIdAction;
}(KalturaRequest));
/**
 * Build request payload for service 'thumbParams' action 'getByConversionProfileId'.
 *
 * Usage: Get Thumb Params by Conversion Profile ID
 *
 * Server response type:         KalturaThumbParams[]
 * Server failure response type: KalturaAPIException
 */
export { ThumbParamsGetByConversionProfileIdAction };
if (false) {
    /** @type {?} */
    ThumbParamsGetByConversionProfileIdAction.prototype.conversionProfileId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGh1bWJQYXJhbXNHZXRCeUNvbnZlcnNpb25Qcm9maWxlSWRBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL1RodW1iUGFyYW1zR2V0QnlDb252ZXJzaW9uUHJvZmlsZUlkQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBY3hFOzs7Ozs7OztBQUFBO0lBQStELHFFQUFvQztJQUkvRixtREFBWSxJQUFvRDtlQUU1RCxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxvQkFBb0IsRUFBRSxtQkFBbUIsRUFBRyxrQkFBa0IsRUFBRyxDQUFDO0tBQ3hIOzs7O0lBRVMsZ0VBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsYUFBYSxFQUFFO1lBQzdELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdELG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMzQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO29EQXZDTDtFQWtCK0QsY0FBYyxFQXNCNUUsQ0FBQTs7Ozs7Ozs7O0FBdEJELHFEQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhVGh1bWJQYXJhbXMgfSBmcm9tICcuL0thbHR1cmFUaHVtYlBhcmFtcyc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1iUGFyYW1zR2V0QnlDb252ZXJzaW9uUHJvZmlsZUlkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGNvbnZlcnNpb25Qcm9maWxlSWQgOiBudW1iZXI7XG59XG5cbi8qKlxuICogQnVpbGQgcmVxdWVzdCBwYXlsb2FkIGZvciBzZXJ2aWNlICd0aHVtYlBhcmFtcycgYWN0aW9uICdnZXRCeUNvbnZlcnNpb25Qcm9maWxlSWQnLlxuICpcbiAqIFVzYWdlOiBHZXQgVGh1bWIgUGFyYW1zIGJ5IENvbnZlcnNpb24gUHJvZmlsZSBJRFxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFUaHVtYlBhcmFtc1tdXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBUaHVtYlBhcmFtc0dldEJ5Q29udmVyc2lvblByb2ZpbGVJZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFUaHVtYlBhcmFtc1tdPiB7XG5cbiAgICBjb252ZXJzaW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFRodW1iUGFyYW1zR2V0QnlDb252ZXJzaW9uUHJvZmlsZUlkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnYScsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhVGh1bWJQYXJhbXMnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYVRodW1iUGFyYW1zICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd0aHVtYnBhcmFtcycgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2dldEJ5Q29udmVyc2lvblByb2ZpbGVJZCcgfSxcblx0XHRcdFx0Y29udmVyc2lvblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=