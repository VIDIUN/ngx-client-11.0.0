/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaExternalMediaEntry } from './KalturaExternalMediaEntry';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function ExternalMediaUpdateActionArgs() { }
/** @type {?} */
ExternalMediaUpdateActionArgs.prototype.id;
/** @type {?} */
ExternalMediaUpdateActionArgs.prototype.entry;
/**
 * Build request payload for service 'externalMedia' action 'update'.
 *
 * Usage: Update external media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'externalMedia' action 'update'.
 *
 * Usage: Update external media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
ExternalMediaUpdateAction = /** @class */ (function (_super) {
    tslib_1.__extends(ExternalMediaUpdateAction, _super);
    function ExternalMediaUpdateAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaExternalMediaEntry', responseConstructor: KalturaExternalMediaEntry }) || this;
    }
    /**
     * @return {?}
     */
    ExternalMediaUpdateAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'externalmedia_externalmedia' },
            action: { type: 'c', default: 'update' },
            id: { type: 's' },
            entry: { type: 'o', subTypeConstructor: KalturaExternalMediaEntry, subType: 'KalturaExternalMediaEntry' }
        });
        return result;
    };
    return ExternalMediaUpdateAction;
}(KalturaRequest));
/**
 * Build request payload for service 'externalMedia' action 'update'.
 *
 * Usage: Update external media entry. Only the properties that were set will be updated
 *
 * Server response type:         KalturaExternalMediaEntry
 * Server failure response type: KalturaAPIException
 */
export { ExternalMediaUpdateAction };
if (false) {
    /** @type {?} */
    ExternalMediaUpdateAction.prototype.id;
    /** @type {?} */
    ExternalMediaUpdateAction.prototype.entry;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0ZXJuYWxNZWRpYVVwZGF0ZUFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvRXh0ZXJuYWxNZWRpYVVwZGF0ZUFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUVBLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXhFLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sb0JBQW9CLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZXhFOzs7Ozs7OztBQUFBO0lBQStDLHFEQUF5QztJQUtwRixtQ0FBWSxJQUFvQztlQUU1QyxrQkFBTSxJQUFJLEVBQUUsRUFBQyxZQUFZLEVBQUcsR0FBRyxFQUFFLGVBQWUsRUFBRywyQkFBMkIsRUFBRSxtQkFBbUIsRUFBRyx5QkFBeUIsRUFBRyxDQUFDO0tBQ3RJOzs7O0lBRVMsZ0RBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDN0UsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsUUFBUSxFQUFFO1lBQzNDLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyx5QkFBeUIsRUFBRSxPQUFPLEVBQUcsMkJBQTJCLEVBQUU7U0FDcEcsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtvQ0ExQ0w7RUFtQitDLGNBQWMsRUF3QjVELENBQUE7Ozs7Ozs7OztBQXhCRCxxQ0F3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFSZXF1ZXN0LCBLYWx0dXJhUmVxdWVzdEFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLXJlcXVlc3QnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEV4dGVybmFsTWVkaWFVcGRhdGVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgaWQgOiBzdHJpbmc7XG5cdGVudHJ5IDogS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2V4dGVybmFsTWVkaWEnIGFjdGlvbiAndXBkYXRlJy5cbiAqXG4gKiBVc2FnZTogVXBkYXRlIGV4dGVybmFsIG1lZGlhIGVudHJ5LiBPbmx5IHRoZSBwcm9wZXJ0aWVzIHRoYXQgd2VyZSBzZXQgd2lsbCBiZSB1cGRhdGVkXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeVxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRXh0ZXJuYWxNZWRpYVVwZGF0ZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnk+IHtcblxuICAgIGlkIDogc3RyaW5nO1xuXHRlbnRyeSA6IEthbHR1cmFFeHRlcm5hbE1lZGlhRW50cnk7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRXh0ZXJuYWxNZWRpYVVwZGF0ZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUV4dGVybmFsTWVkaWFFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5ICB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdleHRlcm5hbG1lZGlhX2V4dGVybmFsbWVkaWEnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd1cGRhdGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGVudHJ5IDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRXh0ZXJuYWxNZWRpYUVudHJ5LCBzdWJUeXBlIDogJ0thbHR1cmFFeHRlcm5hbE1lZGlhRW50cnknIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==