/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaBaseEntry } from './KalturaBaseEntry';
import { KalturaEntryType } from './KalturaEntryType';
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function BaseEntryAddActionArgs() { }
/** @type {?} */
BaseEntryAddActionArgs.prototype.entry;
/** @type {?|undefined} */
BaseEntryAddActionArgs.prototype.type;
/**
 * Build request payload for service 'baseEntry' action 'add'.
 *
 * Usage: Generic add entry, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'baseEntry' action 'add'.
 *
 * Usage: Generic add entry, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
BaseEntryAddAction = /** @class */ (function (_super) {
    tslib_1.__extends(BaseEntryAddAction, _super);
    function BaseEntryAddAction(data) {
        return _super.call(this, data, { responseType: 'o', responseSubType: 'KalturaBaseEntry', responseConstructor: KalturaBaseEntry }) || this;
    }
    /**
     * @return {?}
     */
    BaseEntryAddAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'baseentry' },
            action: { type: 'c', default: 'add' },
            entry: { type: 'o', subTypeConstructor: KalturaBaseEntry, subType: 'KalturaBaseEntry' },
            type: { type: 'es', subTypeConstructor: KalturaEntryType, subType: 'KalturaEntryType' }
        });
        return result;
    };
    return BaseEntryAddAction;
}(KalturaRequest));
/**
 * Build request payload for service 'baseEntry' action 'add'.
 *
 * Usage: Generic add entry, should be used when the uploaded entry type is not known
 *
 * Server response type:         KalturaBaseEntry
 * Server failure response type: KalturaAPIException
 */
export { BaseEntryAddAction };
if (false) {
    /** @type {?} */
    BaseEntryAddAction.prototype.entry;
    /** @type {?} */
    BaseEntryAddAction.prototype.type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZUVudHJ5QWRkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9CYXNlRW50cnlBZGRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWV4RTs7Ozs7Ozs7QUFBQTtJQUF3Qyw4Q0FBZ0M7SUFLcEUsNEJBQVksSUFBNkI7ZUFFckMsa0JBQU0sSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsa0JBQWtCLEVBQUUsbUJBQW1CLEVBQUcsZ0JBQWdCLEVBQUcsQ0FBQztLQUNwSDs7OztJQUVTLHlDQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLFdBQVcsRUFBRTtZQUMzRCxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxLQUFLLEVBQUU7WUFDeEMsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7WUFDM0YsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxnQkFBZ0IsRUFBRSxPQUFPLEVBQUcsa0JBQWtCLEVBQUU7U0FDbEYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjs2QkEzQ0w7RUFvQndDLGNBQWMsRUF3QnJELENBQUE7Ozs7Ozs7OztBQXhCRCw4QkF3QkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhc2VFbnRyeSB9IGZyb20gJy4vS2FsdHVyYUJhc2VFbnRyeSc7XG5cbmltcG9ydCB7IEthbHR1cmFFbnRyeVR5cGUgfSBmcm9tICcuL0thbHR1cmFFbnRyeVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQmFzZUVudHJ5QWRkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGVudHJ5IDogS2FsdHVyYUJhc2VFbnRyeTtcblx0dHlwZT8gOiBLYWx0dXJhRW50cnlUeXBlO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnYmFzZUVudHJ5JyBhY3Rpb24gJ2FkZCcuXG4gKlxuICogVXNhZ2U6IEdlbmVyaWMgYWRkIGVudHJ5LCBzaG91bGQgYmUgdXNlZCB3aGVuIHRoZSB1cGxvYWRlZCBlbnRyeSB0eXBlIGlzIG5vdCBrbm93blxuICpcbiAqIFNlcnZlciByZXNwb25zZSB0eXBlOiAgICAgICAgIEthbHR1cmFCYXNlRW50cnlcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEJhc2VFbnRyeUFkZEFjdGlvbiBleHRlbmRzIEthbHR1cmFSZXF1ZXN0PEthbHR1cmFCYXNlRW50cnk+IHtcblxuICAgIGVudHJ5IDogS2FsdHVyYUJhc2VFbnRyeTtcblx0dHlwZSA6IEthbHR1cmFFbnRyeVR5cGU7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogQmFzZUVudHJ5QWRkQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAnbycsIHJlc3BvbnNlU3ViVHlwZSA6ICdLYWx0dXJhQmFzZUVudHJ5JywgcmVzcG9uc2VDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnkgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2Jhc2VlbnRyeScgfSxcblx0XHRcdFx0YWN0aW9uIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ2FkZCcgfSxcblx0XHRcdFx0ZW50cnkgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXNlRW50cnksIHN1YlR5cGUgOiAnS2FsdHVyYUJhc2VFbnRyeScgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5VHlwZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxuIl19