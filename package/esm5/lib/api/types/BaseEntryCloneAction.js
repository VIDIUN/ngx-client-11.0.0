/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaBaseEntryCloneOptionItem } from './KalturaBaseEntryCloneOptionItem';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryCloneActionArgs() { }
/** @type {?} */
BaseEntryCloneActionArgs.prototype.entryId;
/** @type {?|undefined} */
BaseEntryCloneActionArgs.prototype.cloneOptions;
/**
 * Build request payload for service 'baseEntry' action 'clone'.
 *
 * Usage: Clone an entry with optional attributes to apply to the clone
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'clone'.
 *
 * Usage: Clone an entry with optional attributes to apply to the clone
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
BaseEntryCloneAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryCloneAction, _super);
    function BaseEntryCloneAction(data) {
        var _this = _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
        if (typeof _this.cloneOptions === 'undefined')
            _this.cloneOptions = [];
        return _this;
    }
    /**
     * @return {?}
     */
    BaseEntryCloneAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'clone' },
            entryId: { type: 's' },
            cloneOptions: { type: 'a', subTypeConstructor: KalturaBaseEntryCloneOptionItem, subType: 'KalturaBaseEntryCloneOptionItem' }
        });
        return result;
    };
    return BaseEntryCloneAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'clone'.
 *
 * Usage: Clone an entry with optional attributes to apply to the clone
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryCloneAction };
if (false) {
    /** @type {?} */
    BaseEntryCloneAction.prototype.entryId;
    /** @type {?} */
    BaseEntryCloneAction.prototype.cloneOptions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5Q2xvbmVBY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0Jhc2VFbnRyeUNsb25lQWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFdEQsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFleEU7Ozs7Ozs7O0FBQUE7SUFBMEMsZ0RBQWdDO0lBS3RFLDhCQUFZLElBQStCO1FBQTNDLFlBRUksa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQyxTQUVwSDtRQURHLEVBQUUsQ0FBQyxDQUFDLE9BQU8sS0FBSSxDQUFDLFlBQVksS0FBSyxXQUFXLENBQUM7WUFBQyxLQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQzs7S0FDeEU7Ozs7SUFFUywyQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxXQUFXLEVBQUU7WUFDM0QsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsT0FBTyxFQUFFO1lBQzFDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRywrQkFBK0IsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7U0FDdkgsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjsrQkE1Q0w7RUFvQjBDLGNBQWMsRUF5QnZELENBQUE7Ozs7Ozs7OztBQXpCRCxnQ0F5QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW0gfSBmcm9tICcuL0thbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW0nO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUVudHJ5Q2xvbmVBY3Rpb25BcmdzICBleHRlbmRzIEthbHR1cmFSZXF1ZXN0QXJncyB7XG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Y2xvbmVPcHRpb25zPyA6IEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW1bXTtcbn1cblxuLyoqXG4gKiBCdWlsZCByZXF1ZXN0IHBheWxvYWQgZm9yIHNlcnZpY2UgJ2Jhc2VFbnRyeScgYWN0aW9uICdjbG9uZScuXG4gKlxuICogVXNhZ2U6IENsb25lIGFuIGVudHJ5IHdpdGggb3B0aW9uYWwgYXR0cmlidXRlcyB0byBhcHBseSB0byB0aGUgY2xvbmVcbiAqXG4gKiBTZXJ2ZXIgcmVzcG9uc2UgdHlwZTogICAgICAgICBLYWx0dXJhQmFzZUVudHJ5XG4gKiBTZXJ2ZXIgZmFpbHVyZSByZXNwb25zZSB0eXBlOiBLYWx0dXJhQVBJRXhjZXB0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBCYXNlRW50cnlDbG9uZUFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlRW50cnk+IHtcblxuICAgIGVudHJ5SWQgOiBzdHJpbmc7XG5cdGNsb25lT3B0aW9ucyA6IEthbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW1bXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGEgOiBCYXNlRW50cnlDbG9uZUFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeScsIHJlc3BvbnNlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5ICB9KTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNsb25lT3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuY2xvbmVPcHRpb25zID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlcnZpY2UgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnYmFzZWVudHJ5JyB9LFxuXHRcdFx0XHRhY3Rpb24gOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnY2xvbmUnIH0sXG5cdFx0XHRcdGVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2xvbmVPcHRpb25zIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmFzZUVudHJ5Q2xvbmVPcHRpb25JdGVtLCBzdWJUeXBlIDogJ0thbHR1cmFCYXNlRW50cnlDbG9uZU9wdGlvbkl0ZW0nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==