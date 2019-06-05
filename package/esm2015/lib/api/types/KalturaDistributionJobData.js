/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
import { KalturaEntryDistribution } from './KalturaEntryDistribution';
import { KalturaDistributionProviderType } from './KalturaDistributionProviderType';
import { KalturaDistributionJobProviderData } from './KalturaDistributionJobProviderData';
import { KalturaDistributionRemoteMediaFile } from './KalturaDistributionRemoteMediaFile';
import { KalturaJobData } from './KalturaJobData';
/**
 * @record
 */
export function KalturaDistributionJobDataArgs() { }
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.distributionProfileId;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.distributionProfile;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.entryDistributionId;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.entryDistribution;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.remoteId;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.providerType;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.providerData;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.results;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.sentData;
/** @type {?|undefined} */
KalturaDistributionJobDataArgs.prototype.mediaFiles;
export class KalturaDistributionJobData extends KalturaJobData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.mediaFiles === 'undefined')
            this.mediaFiles = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaDistributionJobData' },
            distributionProfileId: { type: 'n' },
            distributionProfile: { type: 'o', subTypeConstructor: KalturaDistributionProfile, subType: 'KalturaDistributionProfile' },
            entryDistributionId: { type: 'n' },
            entryDistribution: { type: 'o', subTypeConstructor: KalturaEntryDistribution, subType: 'KalturaEntryDistribution' },
            remoteId: { type: 's' },
            providerType: { type: 'es', subTypeConstructor: KalturaDistributionProviderType, subType: 'KalturaDistributionProviderType' },
            providerData: { type: 'o', subTypeConstructor: KalturaDistributionJobProviderData, subType: 'KalturaDistributionJobProviderData' },
            results: { type: 's' },
            sentData: { type: 's' },
            mediaFiles: { type: 'a', subTypeConstructor: KalturaDistributionRemoteMediaFile, subType: 'KalturaDistributionRemoteMediaFile' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaDistributionJobData.prototype.distributionProfileId;
    /** @type {?} */
    KalturaDistributionJobData.prototype.distributionProfile;
    /** @type {?} */
    KalturaDistributionJobData.prototype.entryDistributionId;
    /** @type {?} */
    KalturaDistributionJobData.prototype.entryDistribution;
    /** @type {?} */
    KalturaDistributionJobData.prototype.remoteId;
    /** @type {?} */
    KalturaDistributionJobData.prototype.providerType;
    /** @type {?} */
    KalturaDistributionJobData.prototype.providerData;
    /** @type {?} */
    KalturaDistributionJobData.prototype.results;
    /** @type {?} */
    KalturaDistributionJobData.prototype.sentData;
    /** @type {?} */
    KalturaDistributionJobData.prototype.mediaFiles;
}
typesMappingStorage['KalturaDistributionJobData'] = KalturaDistributionJobData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYURpc3RyaWJ1dGlvbkpvYkRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFEaXN0cmlidXRpb25Kb2JEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLCtCQUErQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDcEYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGtDQUFrQyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGNBQWMsRUFBc0IsTUFBTSxrQkFBa0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCdEUsTUFBTSxpQ0FBa0MsU0FBUSxjQUFjOzs7O0lBYTFELFlBQVksSUFBc0M7UUFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0tBQ3BFOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUMvRSxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDBCQUEwQixFQUFFLE9BQU8sRUFBRyw0QkFBNEIsRUFBRTtZQUM3SCxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLHdCQUF3QixFQUFFLE9BQU8sRUFBRywwQkFBMEIsRUFBRTtZQUN2SCxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsK0JBQStCLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ2pJLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsa0NBQWtDLEVBQUUsT0FBTyxFQUFHLG9DQUFvQyxFQUFFO1lBQ3RJLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtTQUMzSCxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsNEJBQTRCLENBQUMsR0FBRywwQkFBMEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlEaXN0cmlidXRpb24nO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcbmltcG9ydCB7IEthbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGUgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGUnO1xuaW1wb3J0IHsgS2FsdHVyYUpvYkRhdGEsIEthbHR1cmFKb2JEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUpvYkRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFEaXN0cmlidXRpb25Kb2JEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YUFyZ3Mge1xuICAgIGRpc3RyaWJ1dGlvblByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdGRpc3RyaWJ1dGlvblByb2ZpbGU/IDogS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGU7XG5cdGVudHJ5RGlzdHJpYnV0aW9uSWQ/IDogbnVtYmVyO1xuXHRlbnRyeURpc3RyaWJ1dGlvbj8gOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb247XG5cdHJlbW90ZUlkPyA6IHN0cmluZztcblx0cHJvdmlkZXJUeXBlPyA6IEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlclR5cGU7XG5cdHByb3ZpZGVyRGF0YT8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhO1xuXHRyZXN1bHRzPyA6IHN0cmluZztcblx0c2VudERhdGE/IDogc3RyaW5nO1xuXHRtZWRpYUZpbGVzPyA6IEthbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGVbXTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYURpc3RyaWJ1dGlvbkpvYkRhdGEgZXh0ZW5kcyBLYWx0dXJhSm9iRGF0YSB7XG5cbiAgICBkaXN0cmlidXRpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGRpc3RyaWJ1dGlvblByb2ZpbGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZTtcblx0ZW50cnlEaXN0cmlidXRpb25JZCA6IG51bWJlcjtcblx0ZW50cnlEaXN0cmlidXRpb24gOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb247XG5cdHJlbW90ZUlkIDogc3RyaW5nO1xuXHRwcm92aWRlclR5cGUgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlO1xuXHRwcm92aWRlckRhdGEgOiBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhO1xuXHRyZXN1bHRzIDogc3RyaW5nO1xuXHRzZW50RGF0YSA6IHN0cmluZztcblx0bWVkaWFGaWxlcyA6IEthbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGVbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYURpc3RyaWJ1dGlvbkpvYkRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5tZWRpYUZpbGVzID09PSAndW5kZWZpbmVkJykgdGhpcy5tZWRpYUZpbGVzID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYURpc3RyaWJ1dGlvbkpvYkRhdGEnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGlvblByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRpb25Qcm9maWxlIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZScgfSxcblx0XHRcdFx0ZW50cnlEaXN0cmlidXRpb25JZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRlbnRyeURpc3RyaWJ1dGlvbiA6IHsgdHlwZSA6ICdvJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbicgfSxcblx0XHRcdFx0cmVtb3RlSWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJvdmlkZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRwcm92aWRlckRhdGEgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIHN1YlR5cGUgOiAnS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0cmVzdWx0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZW50RGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtZWRpYUZpbGVzIDogeyB0eXBlIDogJ2EnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRGlzdHJpYnV0aW9uUmVtb3RlTWVkaWFGaWxlLCBzdWJUeXBlIDogJ0thbHR1cmFEaXN0cmlidXRpb25SZW1vdGVNZWRpYUZpbGUnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFEaXN0cmlidXRpb25Kb2JEYXRhJ10gPSBLYWx0dXJhRGlzdHJpYnV0aW9uSm9iRGF0YTsiXX0=