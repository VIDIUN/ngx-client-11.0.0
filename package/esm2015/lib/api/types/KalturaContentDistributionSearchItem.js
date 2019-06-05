/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaEntryDistributionSunStatus } from './KalturaEntryDistributionSunStatus';
import { KalturaEntryDistributionFlag } from './KalturaEntryDistributionFlag';
import { KalturaEntryDistributionStatus } from './KalturaEntryDistributionStatus';
import { KalturaSearchItem } from './KalturaSearchItem';
/**
 * @record
 */
export function KalturaContentDistributionSearchItemArgs() { }
/** @type {?|undefined} */
KalturaContentDistributionSearchItemArgs.prototype.noDistributionProfiles;
/** @type {?|undefined} */
KalturaContentDistributionSearchItemArgs.prototype.distributionProfileId;
/** @type {?|undefined} */
KalturaContentDistributionSearchItemArgs.prototype.distributionSunStatus;
/** @type {?|undefined} */
KalturaContentDistributionSearchItemArgs.prototype.entryDistributionFlag;
/** @type {?|undefined} */
KalturaContentDistributionSearchItemArgs.prototype.entryDistributionStatus;
/** @type {?|undefined} */
KalturaContentDistributionSearchItemArgs.prototype.hasEntryDistributionValidationErrors;
/** @type {?|undefined} */
KalturaContentDistributionSearchItemArgs.prototype.entryDistributionValidationErrors;
export class KalturaContentDistributionSearchItem extends KalturaSearchItem {
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
            objectType: { type: 'c', default: 'KalturaContentDistributionSearchItem' },
            noDistributionProfiles: { type: 'b' },
            distributionProfileId: { type: 'n' },
            distributionSunStatus: { type: 'en', subTypeConstructor: KalturaEntryDistributionSunStatus, subType: 'KalturaEntryDistributionSunStatus' },
            entryDistributionFlag: { type: 'en', subTypeConstructor: KalturaEntryDistributionFlag, subType: 'KalturaEntryDistributionFlag' },
            entryDistributionStatus: { type: 'en', subTypeConstructor: KalturaEntryDistributionStatus, subType: 'KalturaEntryDistributionStatus' },
            hasEntryDistributionValidationErrors: { type: 'b' },
            entryDistributionValidationErrors: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaContentDistributionSearchItem.prototype.noDistributionProfiles;
    /** @type {?} */
    KalturaContentDistributionSearchItem.prototype.distributionProfileId;
    /** @type {?} */
    KalturaContentDistributionSearchItem.prototype.distributionSunStatus;
    /** @type {?} */
    KalturaContentDistributionSearchItem.prototype.entryDistributionFlag;
    /** @type {?} */
    KalturaContentDistributionSearchItem.prototype.entryDistributionStatus;
    /** @type {?} */
    KalturaContentDistributionSearchItem.prototype.hasEntryDistributionValidationErrors;
    /** @type {?} */
    KalturaContentDistributionSearchItem.prototype.entryDistributionValidationErrors;
}
typesMappingStorage['KalturaContentDistributionSearchItem'] = KalturaContentDistributionSearchItem;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnRlbnREaXN0cmlidXRpb25TZWFyY2hJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udGVudERpc3RyaWJ1dGlvblNlYXJjaEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN4RixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhL0UsTUFBTSwyQ0FBNEMsU0FBUSxpQkFBaUI7Ozs7SUFVdkUsWUFBWSxJQUFnRDtRQUV4RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQzlJLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDcEksdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUMxSSxvQ0FBb0MsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckQsaUNBQWlDLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxzQ0FBc0MsQ0FBQyxHQUFHLG9DQUFvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3VuU3RhdHVzJztcbmltcG9ydCB7IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcgfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaEl0ZW0sIEthbHR1cmFTZWFyY2hJdGVtQXJncyB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaEl0ZW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb250ZW50RGlzdHJpYnV0aW9uU2VhcmNoSXRlbUFyZ3MgIGV4dGVuZHMgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIHtcbiAgICBub0Rpc3RyaWJ1dGlvblByb2ZpbGVzPyA6IGJvb2xlYW47XG5cdGRpc3RyaWJ1dGlvblByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdGRpc3RyaWJ1dGlvblN1blN0YXR1cz8gOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdW5TdGF0dXM7XG5cdGVudHJ5RGlzdHJpYnV0aW9uRmxhZz8gOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnO1xuXHRlbnRyeURpc3RyaWJ1dGlvblN0YXR1cz8gOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXM7XG5cdGhhc0VudHJ5RGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ycz8gOiBib29sZWFuO1xuXHRlbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcnM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29udGVudERpc3RyaWJ1dGlvblNlYXJjaEl0ZW0gZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbSB7XG5cbiAgICBub0Rpc3RyaWJ1dGlvblByb2ZpbGVzIDogYm9vbGVhbjtcblx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRkaXN0cmlidXRpb25TdW5TdGF0dXMgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdW5TdGF0dXM7XG5cdGVudHJ5RGlzdHJpYnV0aW9uRmxhZyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWc7XG5cdGVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzO1xuXHRoYXNFbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcnMgOiBib29sZWFuO1xuXHRlbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcnMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb250ZW50RGlzdHJpYnV0aW9uU2VhcmNoSXRlbUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29udGVudERpc3RyaWJ1dGlvblNlYXJjaEl0ZW0nIH0sXG5cdFx0XHRcdG5vRGlzdHJpYnV0aW9uUHJvZmlsZXMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGlvblN1blN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdW5TdGF0dXMnIH0sXG5cdFx0XHRcdGVudHJ5RGlzdHJpYnV0aW9uRmxhZyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWcsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZycgfSxcblx0XHRcdFx0ZW50cnlEaXN0cmlidXRpb25TdGF0dXMgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzJyB9LFxuXHRcdFx0XHRoYXNFbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcnMgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0ZW50cnlEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb250ZW50RGlzdHJpYnV0aW9uU2VhcmNoSXRlbSddID0gS2FsdHVyYUNvbnRlbnREaXN0cmlidXRpb25TZWFyY2hJdGVtOyJdfQ==