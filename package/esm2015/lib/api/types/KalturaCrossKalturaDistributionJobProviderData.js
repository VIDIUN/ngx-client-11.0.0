/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaCrossKalturaDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedFlavorAssets;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedThumbAssets;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedMetadata;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedCaptionAssets;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedCuePoints;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedThumbCuePoints;
/** @type {?|undefined} */
KalturaCrossKalturaDistributionJobProviderDataArgs.prototype.distributedTimedThumbAssets;
export class KalturaCrossKalturaDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
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
            objectType: { type: 'c', default: 'KalturaCrossKalturaDistributionJobProviderData' },
            distributedFlavorAssets: { type: 's' },
            distributedThumbAssets: { type: 's' },
            distributedMetadata: { type: 's' },
            distributedCaptionAssets: { type: 's' },
            distributedCuePoints: { type: 's' },
            distributedThumbCuePoints: { type: 's' },
            distributedTimedThumbAssets: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedFlavorAssets;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedThumbAssets;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedMetadata;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedCaptionAssets;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedCuePoints;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedThumbCuePoints;
    /** @type {?} */
    KalturaCrossKalturaDistributionJobProviderData.prototype.distributedTimedThumbAssets;
}
typesMappingStorage['KalturaCrossKalturaDistributionJobProviderData'] = KalturaCrossKalturaDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSw4Q0FBOEMsRUFBc0QsTUFBTSxrREFBa0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWF0SyxNQUFNLHFEQUFzRCxTQUFRLDhDQUE4Qzs7OztJQVU5RyxZQUFZLElBQTBEO1FBRWxFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNmOzs7O0lBRVMsWUFBWTs7UUFFbEIsTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxnREFBZ0QsRUFBRTtZQUNuRyx1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyx3QkFBd0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDekMsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLHlCQUF5QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQywyQkFBMkIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDbkMsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGdEQUFnRCxDQUFDLEdBQUcsOENBQThDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICBkaXN0cmlidXRlZEZsYXZvckFzc2V0cz8gOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkVGh1bWJBc3NldHM/IDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZE1ldGFkYXRhPyA6IHN0cmluZztcblx0ZGlzdHJpYnV0ZWRDYXB0aW9uQXNzZXRzPyA6IHN0cmluZztcblx0ZGlzdHJpYnV0ZWRDdWVQb2ludHM/IDogc3RyaW5nO1xuXHRkaXN0cmlidXRlZFRodW1iQ3VlUG9pbnRzPyA6IHN0cmluZztcblx0ZGlzdHJpYnV0ZWRUaW1lZFRodW1iQXNzZXRzPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgZGlzdHJpYnV0ZWRGbGF2b3JBc3NldHMgOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkVGh1bWJBc3NldHMgOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkTWV0YWRhdGEgOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkQ2FwdGlvbkFzc2V0cyA6IHN0cmluZztcblx0ZGlzdHJpYnV0ZWRDdWVQb2ludHMgOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkVGh1bWJDdWVQb2ludHMgOiBzdHJpbmc7XG5cdGRpc3RyaWJ1dGVkVGltZWRUaHVtYkFzc2V0cyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNyb3NzS2FsdHVyYURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ3Jvc3NLYWx0dXJhRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRlZEZsYXZvckFzc2V0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkaXN0cmlidXRlZFRodW1iQXNzZXRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVkTWV0YWRhdGEgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZWRDYXB0aW9uQXNzZXRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVkQ3VlUG9pbnRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRpc3RyaWJ1dGVkVGh1bWJDdWVQb2ludHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGlzdHJpYnV0ZWRUaW1lZFRodW1iQXNzZXRzIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnXSA9IEthbHR1cmFDcm9zc0thbHR1cmFEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19