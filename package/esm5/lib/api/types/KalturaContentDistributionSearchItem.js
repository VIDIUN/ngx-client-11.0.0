/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaContentDistributionSearchItem = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaContentDistributionSearchItem, _super);
    function KalturaContentDistributionSearchItem(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaContentDistributionSearchItem.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaContentDistributionSearchItem;
}(KalturaSearchItem));
export { KalturaContentDistributionSearchItem };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnRlbnREaXN0cmlidXRpb25TZWFyY2hJdGVtLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udGVudERpc3RyaWJ1dGlvblNlYXJjaEl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHFCQUFxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYS9FLElBQUE7SUFBMEQsZ0VBQWlCO0lBVXZFLDhDQUFZLElBQWdEO2VBRXhELGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMkRBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsc0NBQXNDLEVBQUU7WUFDekYsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QyxxQkFBcUIsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQzlJLHFCQUFxQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyw0QkFBNEIsRUFBRSxPQUFPLEVBQUcsOEJBQThCLEVBQUU7WUFDcEksdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUMxSSxvQ0FBb0MsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckQsaUNBQWlDLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ3pDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7K0NBbERMO0VBa0IwRCxpQkFBaUIsRUFpQzFFLENBQUE7QUFqQ0QsZ0RBaUNDOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3VuU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdW5TdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZyB9IGZyb20gJy4vS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZyc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMgfSBmcm9tICcuL0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhU2VhcmNoSXRlbSwgS2FsdHVyYVNlYXJjaEl0ZW1BcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoSXRlbSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnRlbnREaXN0cmlidXRpb25TZWFyY2hJdGVtQXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoSXRlbUFyZ3Mge1xuICAgIG5vRGlzdHJpYnV0aW9uUHJvZmlsZXM/IDogYm9vbGVhbjtcblx0ZGlzdHJpYnV0aW9uUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0ZGlzdHJpYnV0aW9uU3VuU3RhdHVzPyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cztcblx0ZW50cnlEaXN0cmlidXRpb25GbGFnPyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvbkZsYWc7XG5cdGVudHJ5RGlzdHJpYnV0aW9uU3RhdHVzPyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cztcblx0aGFzRW50cnlEaXN0cmlidXRpb25WYWxpZGF0aW9uRXJyb3JzPyA6IGJvb2xlYW47XG5cdGVudHJ5RGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ycz8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb250ZW50RGlzdHJpYnV0aW9uU2VhcmNoSXRlbSBleHRlbmRzIEthbHR1cmFTZWFyY2hJdGVtIHtcblxuICAgIG5vRGlzdHJpYnV0aW9uUHJvZmlsZXMgOiBib29sZWFuO1xuXHRkaXN0cmlidXRpb25Qcm9maWxlSWQgOiBudW1iZXI7XG5cdGRpc3RyaWJ1dGlvblN1blN0YXR1cyA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cztcblx0ZW50cnlEaXN0cmlidXRpb25GbGFnIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZztcblx0ZW50cnlEaXN0cmlidXRpb25TdGF0dXMgOiBLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXM7XG5cdGhhc0VudHJ5RGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ycyA6IGJvb2xlYW47XG5cdGVudHJ5RGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ycyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnRlbnREaXN0cmlidXRpb25TZWFyY2hJdGVtQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb250ZW50RGlzdHJpYnV0aW9uU2VhcmNoSXRlbScgfSxcblx0XHRcdFx0bm9EaXN0cmlidXRpb25Qcm9maWxlcyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRpb25Qcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0ZGlzdHJpYnV0aW9uU3VuU3RhdHVzIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uU3VuU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN1blN0YXR1cycgfSxcblx0XHRcdFx0ZW50cnlEaXN0cmlidXRpb25GbGFnIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUVudHJ5RGlzdHJpYnV0aW9uRmxhZywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25GbGFnJyB9LFxuXHRcdFx0XHRlbnRyeURpc3RyaWJ1dGlvblN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeURpc3RyaWJ1dGlvblN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlEaXN0cmlidXRpb25TdGF0dXMnIH0sXG5cdFx0XHRcdGhhc0VudHJ5RGlzdHJpYnV0aW9uVmFsaWRhdGlvbkVycm9ycyA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRlbnRyeURpc3RyaWJ1dGlvblZhbGlkYXRpb25FcnJvcnMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnRlbnREaXN0cmlidXRpb25TZWFyY2hJdGVtJ10gPSBLYWx0dXJhQ29udGVudERpc3RyaWJ1dGlvblNlYXJjaEl0ZW07Il19