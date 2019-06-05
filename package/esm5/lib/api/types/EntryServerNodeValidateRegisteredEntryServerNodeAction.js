/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { KalturaRequest } from '../kaltura-request';
/**
 * @record
 */
export function EntryServerNodeValidateRegisteredEntryServerNodeActionArgs() { }
/** @type {?} */
EntryServerNodeValidateRegisteredEntryServerNodeActionArgs.prototype.id;
/**
 * Build request payload for service 'entryServerNode' action 'validateRegisteredEntryServerNode'.
 *
 * Usage: Validates server node still registered on entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
var /**
 * Build request payload for service 'entryServerNode' action 'validateRegisteredEntryServerNode'.
 *
 * Usage: Validates server node still registered on entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
EntryServerNodeValidateRegisteredEntryServerNodeAction = /** @class */ (function (_super) {
    tslib_1.__extends(EntryServerNodeValidateRegisteredEntryServerNodeAction, _super);
    function EntryServerNodeValidateRegisteredEntryServerNodeAction(data) {
        return _super.call(this, data, { responseType: 'v', responseSubType: '', responseConstructor: null }) || this;
    }
    /**
     * @return {?}
     */
    EntryServerNodeValidateRegisteredEntryServerNodeAction.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            service: { type: 'c', default: 'entryservernode' },
            action: { type: 'c', default: 'validateRegisteredEntryServerNode' },
            id: { type: 'n' }
        });
        return result;
    };
    return EntryServerNodeValidateRegisteredEntryServerNodeAction;
}(KalturaRequest));
/**
 * Build request payload for service 'entryServerNode' action 'validateRegisteredEntryServerNode'.
 *
 * Usage: Validates server node still registered on entry
 *
 * Server response type:         void
 * Server failure response type: KalturaAPIException
 */
export { EntryServerNodeValidateRegisteredEntryServerNodeAction };
if (false) {
    /** @type {?} */
    EntryServerNodeValidateRegisteredEntryServerNodeAction.prototype.id;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW50cnlTZXJ2ZXJOb2RlVmFsaWRhdGVSZWdpc3RlcmVkRW50cnlTZXJ2ZXJOb2RlQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9FbnRyeVNlcnZlck5vZGVWYWxpZGF0ZVJlZ2lzdGVyZWRFbnRyeVNlcnZlck5vZGVBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFjeEU7Ozs7Ozs7O0FBQUE7SUFBNEUsa0ZBQW9CO0lBSTVGLGdFQUFZLElBQWlFO2VBRXpFLGtCQUFNLElBQUksRUFBRSxFQUFDLFlBQVksRUFBRyxHQUFHLEVBQUUsZUFBZSxFQUFHLEVBQUUsRUFBRSxtQkFBbUIsRUFBRyxJQUFJLEVBQUUsQ0FBQztLQUN2Rjs7OztJQUVTLDZFQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ2pFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3RFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDVixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO2lFQXZDTDtFQWtCNEUsY0FBYyxFQXNCekYsQ0FBQTs7Ozs7Ozs7O0FBdEJELGtFQXNCQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cblxuaW1wb3J0IHsgS2FsdHVyYVJlcXVlc3QsIEthbHR1cmFSZXF1ZXN0QXJncyB9IGZyb20gJy4uL2thbHR1cmEtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50cnlTZXJ2ZXJOb2RlVmFsaWRhdGVSZWdpc3RlcmVkRW50cnlTZXJ2ZXJOb2RlQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhUmVxdWVzdEFyZ3Mge1xuICAgIGlkIDogbnVtYmVyO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnZW50cnlTZXJ2ZXJOb2RlJyBhY3Rpb24gJ3ZhbGlkYXRlUmVnaXN0ZXJlZEVudHJ5U2VydmVyTm9kZScuXG4gKlxuICogVXNhZ2U6IFZhbGlkYXRlcyBzZXJ2ZXIgbm9kZSBzdGlsbCByZWdpc3RlcmVkIG9uIGVudHJ5XG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgdm9pZFxuICogU2VydmVyIGZhaWx1cmUgcmVzcG9uc2UgdHlwZTogS2FsdHVyYUFQSUV4Y2VwdGlvblxuICovXG5leHBvcnQgY2xhc3MgRW50cnlTZXJ2ZXJOb2RlVmFsaWRhdGVSZWdpc3RlcmVkRW50cnlTZXJ2ZXJOb2RlQWN0aW9uIGV4dGVuZHMgS2FsdHVyYVJlcXVlc3Q8dm9pZD4ge1xuXG4gICAgaWQgOiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhIDogRW50cnlTZXJ2ZXJOb2RlVmFsaWRhdGVSZWdpc3RlcmVkRW50cnlTZXJ2ZXJOb2RlQWN0aW9uQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEsIHtyZXNwb25zZVR5cGUgOiAndicsIHJlc3BvbnNlU3ViVHlwZSA6ICcnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogbnVsbCB9KTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VydmljZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdlbnRyeXNlcnZlcm5vZGUnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICd2YWxpZGF0ZVJlZ2lzdGVyZWRFbnRyeVNlcnZlck5vZGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==