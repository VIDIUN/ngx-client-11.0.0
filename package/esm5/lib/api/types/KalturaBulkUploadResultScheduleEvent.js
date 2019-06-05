/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultScheduleEventArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleEventArgs.prototype.referenceId;
var KalturaBulkUploadResultScheduleEvent = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaBulkUploadResultScheduleEvent, _super);
    function KalturaBulkUploadResultScheduleEvent(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaBulkUploadResultScheduleEvent.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResultScheduleEvent' },
            referenceId: { type: 's' }
        });
        return result;
    };
    return KalturaBulkUploadResultScheduleEvent;
}(KalturaBulkUploadResult));
export { KalturaBulkUploadResultScheduleEvent };
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultScheduleEvent.prototype.referenceId;
}
typesMappingStorage['KalturaBulkUploadResultScheduleEvent'] = KalturaBulkUploadResultScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZUV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHVCQUF1QixFQUErQixNQUFNLDJCQUEyQixDQUFDOzs7Ozs7O0FBT2pHLElBQUE7SUFBMEQsZ0VBQXVCO0lBSTdFLDhDQUFZLElBQWdEO2VBRXhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOytDQTdCTDtFQVMwRCx1QkFBdUIsRUFxQmhGLENBQUE7QUFyQkQsZ0RBcUJDOzs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQsIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVFdmVudEFyZ3MgIGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIHtcbiAgICByZWZlcmVuY2VJZD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVFdmVudCBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0IHtcblxuICAgIHJlZmVyZW5jZUlkIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlRXZlbnRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZUV2ZW50JyB9LFxuXHRcdFx0XHRyZWZlcmVuY2VJZCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlRXZlbnQnXSA9IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVFdmVudDsiXX0=