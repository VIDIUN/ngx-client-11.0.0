/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { KalturaBulkUpload } from './KalturaBulkUpload';
import { KalturaBulkUploadCsvJobData } from './KalturaBulkUploadCsvJobData';
import { KalturaUploadRequest } from '../kaltura-upload-request';
/**
 * @record
 */
export function ScheduleResourceAddFromBulkUploadActionArgs() { }
/** @type {?} */
ScheduleResourceAddFromBulkUploadActionArgs.prototype.fileData;
/** @type {?|undefined} */
ScheduleResourceAddFromBulkUploadActionArgs.prototype.bulkUploadData;
/**
 * Build request payload for service 'scheduleResource' action 'addFromBulkUpload'.
 *
 * Usage: Add new bulk upload batch job
 *
 * Server response type:         KalturaBulkUpload
 * Server failure response type: KalturaAPIException
 */
export class ScheduleResourceAddFromBulkUploadAction extends KalturaUploadRequest {
    /**
     * @param {?} data
     */
    constructor(data) {
        super(data, { responseType: 'o', responseSubType: 'KalturaBulkUpload', responseConstructor: KalturaBulkUpload });
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            service: { type: 'c', default: 'schedule_scheduleresource' },
            action: { type: 'c', default: 'addFromBulkUpload' },
            fileData: { type: 'f' },
            bulkUploadData: { type: 'o', subTypeConstructor: KalturaBulkUploadCsvJobData, subType: 'KalturaBulkUploadCsvJobData' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    ScheduleResourceAddFromBulkUploadAction.prototype.fileData;
    /** @type {?} */
    ScheduleResourceAddFromBulkUploadAction.prototype.bulkUploadData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NoZWR1bGVSZXNvdXJjZUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9TY2hlZHVsZVJlc291cmNlQWRkRnJvbUJ1bGtVcGxvYWRBY3Rpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUVBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXhELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFLE9BQU8sRUFBRSxvQkFBb0IsRUFBNEIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlM0YsTUFBTSw4Q0FBK0MsU0FBUSxvQkFBdUM7Ozs7SUFLaEcsWUFBWSxJQUFrRDtRQUUxRCxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUMsWUFBWSxFQUFHLEdBQUcsRUFBRSxlQUFlLEVBQUcsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUcsaUJBQWlCLEVBQUcsQ0FBQyxDQUFDO0tBQ3ZIOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywyQkFBMkIsRUFBRTtZQUMzRSxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsMkJBQTJCLEVBQUUsT0FBTyxFQUFHLDZCQUE2QixFQUFFO1NBQ2pILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZCB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWQnO1xuXG5pbXBvcnQgeyBLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhVXBsb2FkUmVxdWVzdCwgS2FsdHVyYVVwbG9hZFJlcXVlc3RBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS11cGxvYWQtcmVxdWVzdCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NoZWR1bGVSZXNvdXJjZUFkZEZyb21CdWxrVXBsb2FkQWN0aW9uQXJncyAgZXh0ZW5kcyBLYWx0dXJhVXBsb2FkUmVxdWVzdEFyZ3Mge1xuICAgIGZpbGVEYXRhIDogRmlsZTtcblx0YnVsa1VwbG9hZERhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhO1xufVxuXG4vKipcbiAqIEJ1aWxkIHJlcXVlc3QgcGF5bG9hZCBmb3Igc2VydmljZSAnc2NoZWR1bGVSZXNvdXJjZScgYWN0aW9uICdhZGRGcm9tQnVsa1VwbG9hZCcuXG4gKlxuICogVXNhZ2U6IEFkZCBuZXcgYnVsayB1cGxvYWQgYmF0Y2ggam9iXG4gKlxuICogU2VydmVyIHJlc3BvbnNlIHR5cGU6ICAgICAgICAgS2FsdHVyYUJ1bGtVcGxvYWRcbiAqIFNlcnZlciBmYWlsdXJlIHJlc3BvbnNlIHR5cGU6IEthbHR1cmFBUElFeGNlcHRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIFNjaGVkdWxlUmVzb3VyY2VBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbiBleHRlbmRzIEthbHR1cmFVcGxvYWRSZXF1ZXN0PEthbHR1cmFCdWxrVXBsb2FkPiB7XG5cbiAgICBmaWxlRGF0YSA6IEZpbGU7XG5cdGJ1bGtVcGxvYWREYXRhIDogS2FsdHVyYUJ1bGtVcGxvYWRDc3ZKb2JEYXRhO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YSA6IFNjaGVkdWxlUmVzb3VyY2VBZGRGcm9tQnVsa1VwbG9hZEFjdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhLCB7cmVzcG9uc2VUeXBlIDogJ28nLCByZXNwb25zZVN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWQnLCByZXNwb25zZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWQgIH0pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZXJ2aWNlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ3NjaGVkdWxlX3NjaGVkdWxlcmVzb3VyY2UnIH0sXG5cdFx0XHRcdGFjdGlvbiA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdhZGRGcm9tQnVsa1VwbG9hZCcgfSxcblx0XHRcdFx0ZmlsZURhdGEgOiB7IHR5cGUgOiAnZicgfSxcblx0XHRcdFx0YnVsa1VwbG9hZERhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkQ3N2Sm9iRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZENzdkpvYkRhdGEnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbiJdfQ==