/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultScheduleEventArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultScheduleEventArgs.prototype.referenceId;
export class KalturaBulkUploadResultScheduleEvent extends KalturaBulkUploadResult {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUploadResultScheduleEvent' },
            referenceId: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultScheduleEvent.prototype.referenceId;
}
typesMappingStorage['KalturaBulkUploadResultScheduleEvent'] = KalturaBulkUploadResultScheduleEvent;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZUV2ZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlRXZlbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsdUJBQXVCLEVBQStCLE1BQU0sMkJBQTJCLENBQUM7Ozs7Ozs7QUFPakcsTUFBTSwyQ0FBNEMsU0FBUSx1QkFBdUI7Ozs7SUFJN0UsWUFBWSxJQUFnRDtRQUV4RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7O0FBRUQsbUJBQW1CLENBQUMsc0NBQXNDLENBQUMsR0FBRyxvQ0FBb0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCwgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFJlc3VsdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZUV2ZW50QXJncyAgZXh0ZW5kcyBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdEFyZ3Mge1xuICAgIHJlZmVyZW5jZUlkPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZUV2ZW50IGV4dGVuZHMgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQge1xuXG4gICAgcmVmZXJlbmNlSWQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVFdmVudEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdFNjaGVkdWxlRXZlbnQnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0U2NoZWR1bGVFdmVudCddID0gS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRTY2hlZHVsZUV2ZW50OyJdfQ==