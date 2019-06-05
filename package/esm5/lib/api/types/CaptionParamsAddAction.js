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
export function CaptionParamsAddActionArgs() { }
/** @type {?} */
CaptionParamsAddActionArgs.prototype.captionParams;
/**
 * Build request payload for service 'captionParams' action 'add'.
 *
 * Usage: Add new Caption Params
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'captionParams' action 'add'.
 *
 * Usage: Add new Caption Params
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
CaptionParamsAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(CaptionParamsAddAction, _super);
    function CaptionParamsAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaCaptionParams', responseConstructor: KalturaCaptionParams }) || this;
    }
    /**
     * @return {?}
     */
    CaptionParamsAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'caption_captionparams' },
            action: { type: 'c', default: 'add' },
            captionParams: { type: 'o', subTypeConstructor: KalturaCaptionParams, subType: 'KalturaCaptionParams' }
        });
        return result;
    };
    return CaptionParamsAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'captionParams' action 'add'.
 *
 * Usage: Add new Caption Params
 *
 * Server response type:         KalturaCaptionParams
 * Server failure response type: KalturaAPIException
 */
export { CaptionParamsAddAction };
if (false) {
    /** @type {?} */
    CaptionParamsAddAction.prototype.captionParams;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FwdGlvblBhcmFtc0FkZEFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQ2FwdGlvblBhcmFtc0FkZEFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQWN4RTs7Ozs7Ozs7QUFBQTtJQUE0QyxrREFBb0M7SUFJNUUsZ0NBQVksSUFBaUM7ZUFFekMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsc0JBQXNCLEVBQUUsbUJBQW1CLEVBQUcsb0JBQW9CLEVBQUcsQ0FBQztLQUM1SDs7OztJQUVTLDZDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHVCQUF1QixFQUFFO1lBQ3ZFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLEtBQUssRUFBRTtZQUN4QyxhQUFhLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLG9CQUFvQixFQUFFLE9BQU8sRUFBRyxzQkFBc0IsRUFBRTtTQUNsRyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lDQXZDTDtFQWtCNEMsY0FBYyxFQXNCekQsQ0FBQTs7Ozs7Ozs7O0FBdEJELGtDQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2FwdGlvblBhcmFtcyB9IGZyb20gJy4vS2FsdHVyYUNhcHRpb25QYXJhbXMnO1xuXG5pbXBvcnQgeyBLYWx0dXJhUmVxdWVzdCwgS2FsdHVyYVJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1yZXF1ZXN0JztcblxuZXhwb3J0IGludGVyZmFjZSBDYXB0aW9uUGFyYW1zQWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGNhcHRpb25QYXJhbXMgOiBLYWx0dXJhQ2FwdGlvblBhcmFtcztcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2NhcHRpb25QYXJhbXMnIGFjdGlvbiAnYWRkJy5cbiAqXG4gKiBVc2FnZTogQWRkIG5ldyBDYXB0aW9uIFBhcmFtc1xuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFDYXB0aW9uUGFyYW1zXG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXB0aW9uUGFyYW1zQWRkQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8S2FsdHVyYUNhcHRpb25QYXJhbXM+IHtcblxuICAgIGNhcHRpb25QYXJhbXMgOiBLYWx0dXJhQ2FwdGlvblBhcmFtcztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBDYXB0aW9uUGFyYW1zQWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvblBhcmFtcycsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvblBhcmFtcyAgfSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2FwdGlvbl9jYXB0aW9ucGFyYW1zJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYWRkJyB9LFxuXHRcdFx0XHRjYXB0aW9uUGFyYW1zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2FwdGlvblBhcmFtcywgc3ViVHlwZSA6ICdLYWx0dXJhQ2FwdGlvblBhcmFtcycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19