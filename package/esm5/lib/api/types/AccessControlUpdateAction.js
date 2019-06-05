/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaAccessControl } from './KalturaAccessControl';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function AccessControlUpdateActionArgs() { }
/** @type {?} */
AccessControlUpdateActionArgs.prototype.id;
/** @type {?} */
AccessControlUpdateActionArgs.prototype.accessControl;
/**
 * Build request payload for service 'accessControl' action 'update'.
 *
 * Usage: Update Access Control Profile by id
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'accessControl' action 'update'.
 *
 * Usage: Update Access Control Profile by id
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
AccessControlUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(AccessControlUpdateAction, _super);
    function AccessControlUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaAccessControl', responseConstructor: KalturaAccessControl }) || this;
    }
    /**
     * @return {?}
     */
    AccessControlUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'accesscontrol' },
            action: { type: 'c', default: 'update' },
            id: { type: 'n' },
            accessControl: { type: 'o', subTypeConstructor: KalturaAccessControl, subType: 'KalturaAccessControl' }
        });
        return result;
    };
    return AccessControlUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'accessControl' action 'update'.
 *
 * Usage: Update Access Control Profile by id
 *
 * Server response type:         KalturaAccessControl
 * Server failure response type: KalturaAPIException
 */
export { AccessControlUpdateAction };
if (false) {
    /** @type {?} */
    AccessControlUpdateAction.prototype.id;
    /** @type {?} */
    AccessControlUpdateAction.prototype.accessControl;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNjZXNzQ29udHJvbFVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvQWNjZXNzQ29udHJvbFVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTlELE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUFvQztJQUsvRSxtQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRyxzQkFBc0IsRUFBRSxtQkFBbUIsRUFBRyxvQkFBb0IsRUFBRyxDQUFDO0tBQzVIOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsZUFBZSxFQUFFO1lBQy9ELE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFFBQVEsRUFBRTtZQUMzQyxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsb0JBQW9CLEVBQUUsT0FBTyxFQUFHLHNCQUFzQixFQUFFO1NBQ2xHLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7b0NBMUNMO0VBbUIrQyxjQUFjLEVBd0I1RCxDQUFBOzs7Ozs7Ozs7QUF4QkQscUNBd0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFBY2Nlc3NDb250cm9sIH0gZnJvbSAnLi9LYWx0dXJhQWNjZXNzQ29udHJvbCc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjY2Vzc0NvbnRyb2xVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBudW1iZXI7XG5cdGFjY2Vzc0NvbnRyb2wgOiBLYWx0dXJhQWNjZXNzQ29udHJvbDtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2FjY2Vzc0NvbnRyb2wnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIEFjY2VzcyBDb250cm9sIFByb2ZpbGUgYnkgaWRcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQWNjZXNzQ29udHJvbFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgQWNjZXNzQ29udHJvbFVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFBY2Nlc3NDb250cm9sPiB7XG5cbiAgICBpZCA6IG51bWJlcjtcblx0YWNjZXNzQ29udHJvbCA6IEthbHR1cmFBY2Nlc3NDb250cm9sO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IEFjY2Vzc0NvbnRyb2xVcGRhdGVBY3Rpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSwge3Jlc3BvbnNlVHlwZSA6ICdvJywgcmVzcG9uc2VTdWJUeXBlIDogJ0thbHR1cmFBY2Nlc3NDb250cm9sJywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFBY2Nlc3NDb250cm9sICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhY2Nlc3Njb250cm9sJyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAndXBkYXRlJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRhY2Nlc3NDb250cm9sIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQWNjZXNzQ29udHJvbCwgc3ViVHlwZSA6ICdLYWx0dXJhQWNjZXNzQ29udHJvbCcgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19