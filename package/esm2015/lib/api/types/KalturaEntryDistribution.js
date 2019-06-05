/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaEntryDistributionSunStatus } from './KalturaEntryDistributionSunStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaDistributionValidationError } from './KalturaDistributionValidationError';
import { KalturaBatchJobErrorTypes } from './KalturaBatchJobErrorTypes';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaEntryDistributionArgs() { }
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.distributionProfileId;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.thumbAssetIds;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.flavorAssetIds;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.assetIds;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.sunrise;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.sunset;
/** @type {?|undefined} */
KalturaEntryDistributionArgs.prototype.validationErrors;
export class KalturaEntryDistribution extends KalturaObjectBase {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.validationErrors === 'undefined')
            this.validationErrors = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaEntryDistribution' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            submittedAt: { type: 'd', readOnly: true },
            entryId: { type: 's' },
            partnerId: { type: 'n', readOnly: true },
            distributionProfileId: { type: 'n' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryDistributionStatus, subType: 'KalturaEntryDistributionStatus' },
            sunStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryDistributionSunStatus, subType: 'KalturaEntryDistributionSunStatus' },
            dirtyStatus: { type: 'en', readOnly: true, subTypeConstructor: KalturaEntryDistributionFlag, subType: 'KalturaEntryDistributionFlag' },
            thumbAssetIds: { type: 's' },
            flavorAssetIds: { type: 's' },
            assetIds: { type: 's' },
            sunrise: { type: 'd' },
            sunset: { type: 'd' },
            remoteId: { type: 's', readOnly: true },
            plays: { type: 'n', readOnly: true },
            views: { type: 'n', readOnly: true },
            validationErrors: { type: 'a', subTypeConstructor: KalturaDistributionValidationError, subType: 'KalturaDistributionValidationError' },
            errorType: { type: 'en', readOnly: true, subTypeConstructor: KalturaBatchJobErrorTypes, subType: 'KalturaBatchJobErrorTypes' },
            errorNumber: { type: 'n', readOnly: true },
            errorDescription: { type: 's', readOnly: true },
            hasSubmitResultsLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasSubmitSentDataLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasUpdateResultsLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasUpdateSentDataLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasDeleteResultsLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            hasDeleteSentDataLog: { type: 'en', readOnly: true, subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryDistribution.prototype.id;
    /** @type {?} */
    KalturaEntryDistribution.prototype.createdAt;
    /** @type {?} */
    KalturaEntryDistribution.prototype.updatedAt;
    /** @type {?} */
    KalturaEntryDistribution.prototype.submittedAt;
    /** @type {?} */
    KalturaEntryDistribution.prototype.entryId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.partnerId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.distributionProfileId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.status;
    /** @type {?} */
    KalturaEntryDistribution.prototype.sunStatus;
    /** @type {?} */
    KalturaEntryDistribution.prototype.dirtyStatus;
    /** @type {?} */
    KalturaEntryDistribution.prototype.thumbAssetIds;
    /** @type {?} */
    KalturaEntryDistribution.prototype.flavorAssetIds;
    /** @type {?} */
    KalturaEntryDistribution.prototype.assetIds;
    /** @type {?} */
    KalturaEntryDistribution.prototype.sunrise;
    /** @type {?} */
    KalturaEntryDistribution.prototype.sunset;
    /** @type {?} */
    KalturaEntryDistribution.prototype.remoteId;
    /** @type {?} */
    KalturaEntryDistribution.prototype.plays;
    /** @type {?} */
    KalturaEntryDistribution.prototype.views;
    /** @type {?} */
    KalturaEntryDistribution.prototype.validationErrors;
    /** @type {?} */
    KalturaEntryDistribution.prototype.errorType;
    /** @type {?} */
    KalturaEntryDistribution.prototype.errorNumber;
    /** @type {?} */
    KalturaEntryDistribution.prototype.errorDescription;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasSubmitResultsLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasSubmitSentDataLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasUpdateResultsLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasUpdateSentDataLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasDeleteResultsLog;
    /** @type {?} */
    KalturaEntryDistribution.prototype.hasDeleteSentDataLog;
}
typesMappingStorage['KalturaEntryDistribution'] = KalturaEntryDistribution;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRW50cnlEaXN0cmlidXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMxRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWNsRixNQUFNLCtCQUFnQyxTQUFRLGlCQUFpQjs7OztJQStCM0QsWUFBWSxJQUFvQztRQUU1QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixFQUFFLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxXQUFXLENBQUM7WUFBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0tBQ2hGOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRywwQkFBMEIs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QUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN4SSxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDdkksb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsc0JBQXNCLEVBQUUsT0FBTyxFQUFHLHdCQUF3QixFQUFFO1NBQy9ILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLHdCQUF3QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3VuU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcgfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvciB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcic7XG5pbXBvcnQgeyBLYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzIH0gZnJvbSAnLi9LYWx0dXJhQmF0Y2hKb2JFcnJvclR5cGVzJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBlbnRyeUlkPyA6IHN0cmluZztcblx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0dGh1bWJBc3NldElkcz8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWRzPyA6IHN0cmluZztcblx0YXNzZXRJZHM/IDogc3RyaW5nO1xuXHRzdW5yaXNlPyA6IERhdGU7XG5cdHN1bnNldD8gOiBEYXRlO1xuXHR2YWxpZGF0aW9uRXJyb3JzPyA6IEthbHR1cmFEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHVwZGF0ZWRBdCA6IERhdGU7XG5cdHJlYWRvbmx5IHN1Ym1pdHRlZEF0IDogRGF0ZTtcblx0ZW50cnlJZCA6IHN0cmluZztcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cztcblx0cmVhZG9ubHkgc3VuU3RhdHVzIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3VuU3RhdHVzO1xuXHRyZWFkb25seSBkaXJ0eVN0YXR1cyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWc7XG5cdHRodW1iQXNzZXRJZHMgOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWRzIDogc3RyaW5nO1xuXHRhc3NldElkcyA6IHN0cmluZztcblx0c3VucmlzZSA6IERhdGU7XG5cdHN1bnNldCA6IERhdGU7XG5cdHJlYWRvbmx5IHJlbW90ZUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBwbGF5cyA6IG51bWJlcjtcblx0cmVhZG9ubHkgdmlld3MgOiBudW1iZXI7XG5cdHZhbGlkYXRpb25FcnJvcnMgOiBLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yW107XG5cdHJlYWRvbmx5IGVycm9yVHlwZSA6IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXM7XG5cdHJlYWRvbmx5IGVycm9yTnVtYmVyIDogbnVtYmVyO1xuXHRyZWFkb25seSBlcnJvckRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHRyZWFkb25seSBoYXNTdWJtaXRSZXN1bHRzTG9nIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgaGFzU3VibWl0U2VudERhdGFMb2cgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRyZWFkb25seSBoYXNVcGRhdGVSZXN1bHRzTG9nIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgaGFzVXBkYXRlU2VudERhdGFMb2cgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRyZWFkb25seSBoYXNEZWxldGVSZXN1bHRzTG9nIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgaGFzRGVsZXRlU2VudERhdGFMb2cgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy52YWxpZGF0aW9uRXJyb3JzID09PSAndW5kZWZpbmVkJykgdGhpcy52YWxpZGF0aW9uRXJyb3JzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uJyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyZWF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHVwZGF0ZWRBdCA6IHsgdHlwZSA6ICdkJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHN1Ym1pdHRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRkaXN0cmlidXRpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzJyB9LFxuXHRcdFx0XHRzdW5TdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdW5TdGF0dXMnIH0sXG5cdFx0XHRcdGRpcnR5U3RhdHVzIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcnIH0sXG5cdFx0XHRcdHRodW1iQXNzZXRJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yQXNzZXRJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXNzZXRJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3VucmlzZSA6IHsgdHlwZSA6ICdkJyB9LFxuXHRcdFx0XHRzdW5zZXQgOiB7IHR5cGUgOiAnZCcgfSxcblx0XHRcdFx0cmVtb3RlSWQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwbGF5cyA6IHsgdHlwZSA6ICduJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHZpZXdzIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dmFsaWRhdGlvbkVycm9ycyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvciwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9yJyB9LFxuXHRcdFx0XHRlcnJvclR5cGUgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFCYXRjaEpvYkVycm9yVHlwZXMsIHN1YlR5cGUgOiAnS2FsdHVyYUJhdGNoSm9iRXJyb3JUeXBlcycgfSxcblx0XHRcdFx0ZXJyb3JOdW1iZXIgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRlcnJvckRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aGFzU3VibWl0UmVzdWx0c0xvZyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRoYXNTdWJtaXRTZW50RGF0YUxvZyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRoYXNVcGRhdGVSZXN1bHRzTG9nIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGhhc1VwZGF0ZVNlbnREYXRhTG9nIDogeyB0eXBlIDogJ2VuJywgcmVhZE9ubHkgOiB0cnVlLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGhhc0RlbGV0ZVJlc3VsdHNMb2cgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0aGFzRGVsZXRlU2VudERhdGFMb2cgOiB7IHR5cGUgOiAnZW4nLCByZWFkT25seSA6IHRydWUsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uJ10gPSBLYWx0dXJhRW50cnlEaXN0cmlidXRpb247Il19