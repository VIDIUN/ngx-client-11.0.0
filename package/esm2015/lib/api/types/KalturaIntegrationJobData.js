/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaIntegrationProviderType } from './KalturaIntegrationProviderType';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
import { KalturaIntegrationTriggerType } from './KalturaIntegrationTriggerType';
import { KalturaIntegrationJobTriggerData } from './KalturaIntegrationJobTriggerData';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaIntegrationJobDataArgs() { }
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.providerType;
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.providerData;
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.triggerType;
/** @type {?|undefined} */
KalturaIntegrationJobDataArgs.prototype.triggerData;
export class KalturaIntegrationJobData extends KalturaJobData {
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
            objectType: { type: 'c', default: 'KalturaIntegrationJobData' },
            callbackNotificationUrl: { type: 's', readOnly: true },
            providerType: { type: 'es', subTypeConstructor: KalturaIntegrationProviderType, subType: 'KalturaIntegrationProviderType' },
            providerData: { type: 'o', subTypeConstructor: KalturaIntegrationJobProviderData, subType: 'KalturaIntegrationJobProviderData' },
            triggerType: { type: 'es', subTypeConstructor: KalturaIntegrationTriggerType, subType: 'KalturaIntegrationTriggerType' },
            triggerData: { type: 'o', subTypeConstructor: KalturaIntegrationJobTriggerData, subType: 'KalturaIntegrationJobTriggerData' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaIntegrationJobData.prototype.callbackNotificationUrl;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.providerType;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.providerData;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.triggerType;
    /** @type {?} */
    KalturaIntegrationJobData.prototype.triggerData;
}
typesMappingStorage['KalturaIntegrationJobData'] = KalturaIntegrationJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxjQUFjLEVBQXNCLE1BQU0sa0JBQWtCLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFVdEUsTUFBTSxnQ0FBaUMsU0FBUSxjQUFjOzs7O0lBUXpELFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3pELFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQy9ILFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQ3BJLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsNkJBQTZCLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQzVILFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsZ0NBQWdDLEVBQUUsT0FBTyxFQUFHLGtDQUFrQyxFQUFFO1NBQ3hILENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJCQUEyQixDQUFDLEdBQUcseUJBQXlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVncmF0aW9uUHJvdmlkZXJUeXBlIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25Qcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVncmF0aW9uVHJpZ2dlclR5cGUgfSBmcm9tICcuL0thbHR1cmFJbnRlZ3JhdGlvblRyaWdnZXJUeXBlJztcbmltcG9ydCB7IEthbHR1cmFJbnRlZ3JhdGlvbkpvYlRyaWdnZXJEYXRhIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YSc7XG5pbXBvcnQgeyBLYWx0dXJhSm9iRGF0YSwgS2FsdHVyYUpvYkRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSm9iRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUpvYkRhdGFBcmdzIHtcbiAgICBwcm92aWRlclR5cGU/IDogS2FsdHVyYUludGVncmF0aW9uUHJvdmlkZXJUeXBlO1xuXHRwcm92aWRlckRhdGE/IDogS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhO1xuXHR0cmlnZ2VyVHlwZT8gOiBLYWx0dXJhSW50ZWdyYXRpb25UcmlnZ2VyVHlwZTtcblx0dHJpZ2dlckRhdGE/IDogS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGE7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICByZWFkb25seSBjYWxsYmFja05vdGlmaWNhdGlvblVybCA6IHN0cmluZztcblx0cHJvdmlkZXJUeXBlIDogS2FsdHVyYUludGVncmF0aW9uUHJvdmlkZXJUeXBlO1xuXHRwcm92aWRlckRhdGEgOiBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGE7XG5cdHRyaWdnZXJUeXBlIDogS2FsdHVyYUludGVncmF0aW9uVHJpZ2dlclR5cGU7XG5cdHRyaWdnZXJEYXRhIDogS2FsdHVyYUludGVncmF0aW9uSm9iVHJpZ2dlckRhdGE7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YScgfSxcblx0XHRcdFx0Y2FsbGJhY2tOb3RpZmljYXRpb25VcmwgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwcm92aWRlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdyYXRpb25Qcm92aWRlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUludGVncmF0aW9uUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRwcm92aWRlckRhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdHRyaWdnZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUludGVncmF0aW9uVHJpZ2dlclR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUludGVncmF0aW9uVHJpZ2dlclR5cGUnIH0sXG5cdFx0XHRcdHRyaWdnZXJEYXRhIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YSwgc3ViVHlwZSA6ICdLYWx0dXJhSW50ZWdyYXRpb25Kb2JUcmlnZ2VyRGF0YScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YSddID0gS2FsdHVyYUludGVncmF0aW9uSm9iRGF0YTsiXX0=