/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaBulkUploadObjectData } from './KalturaBulkUploadObjectData';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaBulkUploadJobDataArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadJobDataArgs.prototype.fileName;
/** @type {?|undefined} */
KalturaBulkUploadJobDataArgs.prototype.emailRecipients;
/** @type {?|undefined} */
KalturaBulkUploadJobDataArgs.prototype.numOfErrorObjects;
export class KalturaBulkUploadJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaBulkUploadJobData' },
            userId: { type: 's', readOnly: true },
            uploadedBy: { type: 's', readOnly: true },
            conversionProfileId: { type: 'n', readOnly: true },
            resultsFileLocalPath: { type: 's', readOnly: true },
            resultsFileUrl: { type: 's', readOnly: true },
            numOfEntries: { type: 'n', readOnly: true },
            numOfObjects: { type: 'n', readOnly: true },
            filePath: { type: 's', readOnly: true },
            bulkUploadObjectType: { type: 'es', readOnly: true, subTypeConstructor: KalturaBulkUploadObjectType, subType: 'KalturaBulkUploadObjectType' },
            fileName: { type: 's' },
            objectData: { type: 'o', readOnly: true, subTypeConstructor: KalturaBulkUploadObjectData, subType: 'KalturaBulkUploadObjectData' },
            type: { type: 'es', readOnly: true, subTypeConstructor: KalturaBulkUploadType, subType: 'KalturaBulkUploadType' },
            emailRecipients: { type: 's' },
            numOfErrorObjects: { type: 'n' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.userId;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.uploadedBy;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.conversionProfileId;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.resultsFileLocalPath;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.resultsFileUrl;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.numOfEntries;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.numOfObjects;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.filePath;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.bulkUploadObjectType;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.fileName;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.objectData;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.type;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.emailRecipients;
    /** @type {?} */
    KalturaBulkUploadJobData.prototype.numOfErrorObjects;
}
typesMappingStorage['KalturaBulkUploadJobData'] = KalturaBulkUploadJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsY0FBYyxFQUFzQixNQUFNLGtCQUFrQixDQUFDOzs7Ozs7Ozs7OztBQVN0RSxNQUFNLCtCQUFnQyxTQUFRLGNBQWM7Ozs7SUFpQnhELFlBQVksSUFBb0M7UUFFNUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDBCQUEwQixFQUFFO1lBQzdFLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUN4QyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDNUMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDckQsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDdEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ2hELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUM5QyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtZQUNsSixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRywyQkFBMkIsRUFBRSxPQUFPLEVBQUcsNkJBQTZCLEVBQUU7WUFDdkksSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN0SCxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0RGF0YSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3REYXRhJztcbmltcG9ydCB7IEthbHR1cmFCdWxrVXBsb2FkVHlwZSB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRUeXBlJztcbmltcG9ydCB7IEthbHR1cmFKb2JEYXRhLCBLYWx0dXJhSm9iRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFKb2JEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFKb2JEYXRhQXJncyB7XG4gICAgZmlsZU5hbWU/IDogc3RyaW5nO1xuXHRlbWFpbFJlY2lwaWVudHM/IDogc3RyaW5nO1xuXHRudW1PZkVycm9yT2JqZWN0cz8gOiBudW1iZXI7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFCdWxrVXBsb2FkSm9iRGF0YSBleHRlbmRzIEthbHR1cmFKb2JEYXRhIHtcblxuICAgIHJlYWRvbmx5IHVzZXJJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgdXBsb2FkZWRCeSA6IHN0cmluZztcblx0cmVhZG9ubHkgY29udmVyc2lvblByb2ZpbGVJZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcmVzdWx0c0ZpbGVMb2NhbFBhdGggOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHJlc3VsdHNGaWxlVXJsIDogc3RyaW5nO1xuXHRyZWFkb25seSBudW1PZkVudHJpZXMgOiBudW1iZXI7XG5cdHJlYWRvbmx5IG51bU9mT2JqZWN0cyA6IG51bWJlcjtcblx0cmVhZG9ubHkgZmlsZVBhdGggOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGJ1bGtVcGxvYWRPYmplY3RUeXBlIDogS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlO1xuXHRmaWxlTmFtZSA6IHN0cmluZztcblx0cmVhZG9ubHkgb2JqZWN0RGF0YSA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0RGF0YTtcblx0cmVhZG9ubHkgdHlwZSA6IEthbHR1cmFCdWxrVXBsb2FkVHlwZTtcblx0ZW1haWxSZWNpcGllbnRzIDogc3RyaW5nO1xuXHRudW1PZkVycm9yT2JqZWN0cyA6IG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkSm9iRGF0YScgfSxcblx0XHRcdFx0dXNlcklkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBsb2FkZWRCeSA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNvbnZlcnNpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRyZXN1bHRzRmlsZUxvY2FsUGF0aCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlc3VsdHNGaWxlVXJsIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bnVtT2ZFbnRyaWVzIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0bnVtT2ZPYmplY3RzIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZmlsZVBhdGggOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRidWxrVXBsb2FkT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZScgfSxcblx0XHRcdFx0ZmlsZU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0b2JqZWN0RGF0YSA6IHsgdHlwZSA6ICdvJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZE9iamVjdERhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3REYXRhJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQnVsa1VwbG9hZFR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUJ1bGtVcGxvYWRUeXBlJyB9LFxuXHRcdFx0XHRlbWFpbFJlY2lwaWVudHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bnVtT2ZFcnJvck9iamVjdHMgOiB7IHR5cGUgOiAnbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUJ1bGtVcGxvYWRKb2JEYXRhJ10gPSBLYWx0dXJhQnVsa1VwbG9hZEpvYkRhdGE7Il19