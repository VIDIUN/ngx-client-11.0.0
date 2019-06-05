/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBatchJobStatus } from './KalturaBatchJobStatus';
import { KalturaBulkUploadType } from './KalturaBulkUploadType';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaBulkUploadObjectType } from './KalturaBulkUploadObjectType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaBulkUploadArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.id;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.uploadedBy;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.uploadedByUserId;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.uploadedOn;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.numOfEntries;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.status;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.logFileUrl;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.csvFileUrl;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.bulkFileUrl;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.bulkUploadType;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.results;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.error;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.errorType;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.errorNumber;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.fileName;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.description;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.numOfObjects;
/** @type {?|undefined} */
KalturaBulkUploadArgs.prototype.bulkUploadObjectType;
export class KalturaBulkUpload extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.results === 'undefined')
            this.results = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaBulkUpload' },
            id: { type: 'n' },
            uploadedBy: { type: 's' },
            uploadedByUserId: { type: 's' },
            uploadedOn: { type: 'd' },
            numOfEntries: { type: 'n' },
            status: { type: 'en', subTypeConstructor: KalturaBatchJobStatus, subType: 'KalturaBatchJobStatus' },
            logFileUrl: { type: 's' },
            csvFileUrl: { type: 's' },
            bulkFileUrl: { type: 's' },
            bulkUploadType: { type: 'es', subTypeConstructor: KalturaBulkUploadType, subType: 'KalturaBulkUploadType' },
            results: { type: 'a', subTypeConstructor: KalturaBulkUploadResult, subType: 'KalturaBulkUploadResult' },
            error: { type: 's' },
            errorType: { type: 'en', subTypeConstructor: KalturaBatchJobErrorTypes, subType: 'KalturaBatchJobErrorTypes' },
            errorNumber: { type: 'n' },
            fileName: { type: 's' },
            description: { type: 's' },
            numOfObjects: { type: 'n' },
            bulkUploadObjectType: { type: 'es', subTypeConstructor: KalturaBulkUploadObjectType, subType: 'KalturaBulkUploadObjectType' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUpload.prototype.id;
    /** @type {?} */
    KalturaBulkUpload.prototype.uploadedBy;
    /** @type {?} */
    KalturaBulkUpload.prototype.uploadedByUserId;
    /** @type {?} */
    KalturaBulkUpload.prototype.uploadedOn;
    /** @type {?} */
    KalturaBulkUpload.prototype.numOfEntries;
    /** @type {?} */
    KalturaBulkUpload.prototype.status;
    /** @type {?} */
    KalturaBulkUpload.prototype.logFileUrl;
    /** @type {?} */
    KalturaBulkUpload.prototype.csvFileUrl;
    /** @type {?} */
    KalturaBulkUpload.prototype.bulkFileUrl;
    /** @type {?} */
    KalturaBulkUpload.prototype.bulkUploadType;
    /** @type {?} */
    KalturaBulkUpload.prototype.results;
    /** @type {?} */
    KalturaBulkUpload.prototype.error;
    /** @type {?} */
    KalturaBulkUpload.prototype.errorType;
    /** @type {?} */
    KalturaBulkUpload.prototype.errorNumber;
    /** @type {?} */
    KalturaBulkUpload.prototype.fileName;
    /** @type {?} */
    KalturaBulkUpload.prototype.description;
    /** @type {?} */
    KalturaBulkUpload.prototype.numOfObjects;
    /** @type {?} */
    KalturaBulkUpload.prototype.bulkUploadObjectType;
}
typesMappingStorage['KalturaBulkUpload'] = KalturaBulkUpload;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFCdWxrVXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDcEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDeEUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdCbEYsTUFBTSx3QkFBeUIsU0FBUSxpQkFBaUI7Ozs7SUFxQnBELFlBQVksSUFBNkI7UUFFckMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO0tBQzlEOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxtQkFBbUIsRUFBRTtZQUN0RSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUN2RyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHFCQUFxQixFQUFFLE9BQU8sRUFBRyx1QkFBdUIsRUFBRTtZQUMvRyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHVCQUF1QixFQUFFLE9BQU8sRUFBRyx5QkFBeUIsRUFBRTtZQUMzRyxLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ2xILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDJCQUEyQixFQUFFLE9BQU8sRUFBRyw2QkFBNkIsRUFBRTtTQUN4SCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLG1CQUFtQixDQUFDLEdBQUcsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJhdGNoSm9iU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQgfSBmcm9tICcuL0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0JztcbmltcG9ydCB7IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMgfSBmcm9tICcuL0thbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGlkPyA6IG51bWJlcjtcblx0dXBsb2FkZWRCeT8gOiBzdHJpbmc7XG5cdHVwbG9hZGVkQnlVc2VySWQ/IDogc3RyaW5nO1xuXHR1cGxvYWRlZE9uPyA6IERhdGU7XG5cdG51bU9mRW50cmllcz8gOiBudW1iZXI7XG5cdHN0YXR1cz8gOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXM7XG5cdGxvZ0ZpbGVVcmw/IDogc3RyaW5nO1xuXHRjc3ZGaWxlVXJsPyA6IHN0cmluZztcblx0YnVsa0ZpbGVVcmw/IDogc3RyaW5nO1xuXHRidWxrVXBsb2FkVHlwZT8gOiBLYWx0dXJhQnVsa1VwbG9hZFR5cGU7XG5cdHJlc3VsdHM/IDogS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRbXTtcblx0ZXJyb3I/IDogc3RyaW5nO1xuXHRlcnJvclR5cGU/IDogS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcztcblx0ZXJyb3JOdW1iZXI/IDogbnVtYmVyO1xuXHRmaWxlTmFtZT8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0bnVtT2ZPYmplY3RzPyA6IG51bWJlcjtcblx0YnVsa1VwbG9hZE9iamVjdFR5cGU/IDogS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQnVsa1VwbG9hZCBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlIHtcblxuICAgIGlkIDogbnVtYmVyO1xuXHR1cGxvYWRlZEJ5IDogc3RyaW5nO1xuXHR1cGxvYWRlZEJ5VXNlcklkIDogc3RyaW5nO1xuXHR1cGxvYWRlZE9uIDogRGF0ZTtcblx0bnVtT2ZFbnRyaWVzIDogbnVtYmVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhQmF0Y2hKb2JTdGF0dXM7XG5cdGxvZ0ZpbGVVcmwgOiBzdHJpbmc7XG5cdGNzdkZpbGVVcmwgOiBzdHJpbmc7XG5cdGJ1bGtGaWxlVXJsIDogc3RyaW5nO1xuXHRidWxrVXBsb2FkVHlwZSA6IEthbHR1cmFCdWxrVXBsb2FkVHlwZTtcblx0cmVzdWx0cyA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0W107XG5cdGVycm9yIDogc3RyaW5nO1xuXHRlcnJvclR5cGUgOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzO1xuXHRlcnJvck51bWJlciA6IG51bWJlcjtcblx0ZmlsZU5hbWUgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRudW1PZk9iamVjdHMgOiBudW1iZXI7XG5cdGJ1bGtVcGxvYWRPYmplY3RUeXBlIDogS2FsdHVyYUJ1bGtVcGxvYWRPYmplY3RUeXBlO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnJlc3VsdHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnJlc3VsdHMgPSBbXTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQnVsa1VwbG9hZCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0dXBsb2FkZWRCeSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cGxvYWRlZEJ5VXNlcklkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwbG9hZGVkT24gOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0bnVtT2ZFbnRyaWVzIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYlN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhQmF0Y2hKb2JTdGF0dXMnIH0sXG5cdFx0XHRcdGxvZ0ZpbGVVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3N2RmlsZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRidWxrRmlsZVVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkVHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZFR5cGUnIH0sXG5cdFx0XHRcdHJlc3VsdHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0LCBzdWJUeXBlIDogJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0JyB9LFxuXHRcdFx0XHRlcnJvciA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRlcnJvclR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzLCBzdWJUeXBlIDogJ0thbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMnIH0sXG5cdFx0XHRcdGVycm9yTnVtYmVyIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGZpbGVOYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG51bU9mT2JqZWN0cyA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRidWxrVXBsb2FkT2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCdWxrVXBsb2FkT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQnVsa1VwbG9hZE9iamVjdFR5cGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFCdWxrVXBsb2FkJ10gPSBLYWx0dXJhQnVsa1VwbG9hZDsiXX0=