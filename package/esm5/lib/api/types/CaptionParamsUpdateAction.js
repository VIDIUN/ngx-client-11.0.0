/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaCaptionParams } from './KalturaCaptionParams';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function CaptionParamsUpdateActionArgs() { }
/** @type {?} */
CaptionParamsUpdateActionArgs.prototype.id;
/** @type {?} */
CaptionParamsUpdateActionArgs.prototype.captionParams;
/**
 * Build request payload for service 'captionParams' action 'update'.
 *
 * Usage: Update Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionParams' action 'update'.
 *
 * Usage: Update Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
CaptionParamsUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionParamsUpdateAction, _super);
    function CaptionParamsUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCaptionParams', responseConstructor: KalturaCaptionParams }) || this;
    }
    /**
     * @return {?}
     */
    CaptionParamsUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionparams' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            captionParams: { type: 'o', subTypeConstructor: KalturaCaptionParams, subType: 'KalturaCaptionParams' }
        });
        return result;
    };
    return CaptionParamsUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionParams' action 'update'.
 *
 * Usage: Update Caption Params by ID
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
export { CaptionParamsUpdateAction };
if (false) {
    /** @type {?} */
    CaptionParamsUpdateAction.prototype.id;
    /** @type {?} */
    CaptionParamsUpdateAction.prototype.captionParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvblBhcmFtc1VwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2FwdGlvblBhcmFtc1VwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFvQztJQUsvRSxtQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRyxvQkFBb0IsRUFBRyxDQUFDO0tBQzVIOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDdkUsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxvQkFBb0IsRUFBRSxPQUFPLEVBQUcsc0JBQXNCLEVBQUU7U0FDbEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0ExQ0w7RUFtQitDLGNBQWMsRUF3QjVELENBQUE7Ozs7Ozs7OztBQXhCRCxxQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNhcHRpb25QYXJhbXMgfSBmcm9tICcuL0thbHR1cmFDYXB0aW9uUGFyYW1zJztcblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FwdGlvblBhcmFtc1VwZGF0ZUFjdGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3RBcmdzIHtcbiAgICBpZCA6IG51bWJlcjtcblx0Y2FwdGlvblBhcmFtcyA6IEthbHR1cmFDYXB0aW9uUGFyYW1zO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnY2FwdGlvblBhcmFtcycgYWN0aW9uICd1cGRhdGUnLlxuICpcbiAqIFVzYWdlOiBVcGRhdGUgQ2FwdGlvbiBQYXJhbXMgYnkgSURcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQ2FwdGlvblBhcmFtc1xuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ2FwdGlvblBhcmFtc1VwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFDYXB0aW9uUGFyYW1zPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0Y2FwdGlvblBhcmFtcyA6IEthbHR1cmFDYXB0aW9uUGFyYW1zO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IENhcHRpb25QYXJhbXNVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uUGFyYW1zJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uUGFyYW1zICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdjYXB0aW9uX2NhcHRpb25wYXJhbXMnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGNhcHRpb25QYXJhbXMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDYXB0aW9uUGFyYW1zLCBzdWJUeXBlIDogJ0thbHR1cmFDYXB0aW9uUGFyYW1zJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG4iXX0=