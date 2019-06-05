/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaGenericDistributionProviderStatus } from './KalturaGenericDistributionProviderStatus';
import { KalturaDistributionThumbDimensions } from './KalturaDistributionThumbDimensions';
import { KalturaDistributionProvider } from './KalturaDistributionProvider';
/**
 * @record
 */
export function KalturaGenericDistributionProviderArgs() { }
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.optionalFlavorParamsIds;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.requiredFlavorParamsIds;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.optionalThumbDimensions;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.requiredThumbDimensions;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.editableFields;
/** @type {?|undefined} */
KalturaGenericDistributionProviderArgs.prototype.mandatoryFields;
export class KalturaGenericDistributionProvider extends KalturaDistributionProvider {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.optionalThumbDimensions === 'undefined')
            this.optionalThumbDimensions = [];
        if (typeof this.requiredThumbDimensions === 'undefined')
            this.requiredThumbDimensions = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaGenericDistributionProvider' },
            id: { type: 'n', readOnly: true },
            createdAt: { type: 'd', readOnly: true },
            updatedAt: { type: 'd', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            isDefault: { type: 'b' },
            status: { type: 'en', readOnly: true, subTypeConstructor: KalturaGenericDistributionProviderStatus, subType: 'KalturaGenericDistributionProviderStatus' },
            optionalFlavorParamsIds: { type: 's' },
            requiredFlavorParamsIds: { type: 's' },
            optionalThumbDimensions: { type: 'a', subTypeConstructor: KalturaDistributionThumbDimensions, subType: 'KalturaDistributionThumbDimensions' },
            requiredThumbDimensions: { type: 'a', subTypeConstructor: KalturaDistributionThumbDimensions, subType: 'KalturaDistributionThumbDimensions' },
            editableFields: { type: 's' },
            mandatoryFields: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.id;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.createdAt;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.updatedAt;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.partnerId;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.isDefault;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.status;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.optionalFlavorParamsIds;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.requiredFlavorParamsIds;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.optionalThumbDimensions;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.requiredThumbDimensions;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.editableFields;
    /** @type {?} */
    KalturaGenericDistributionProvider.prototype.mandatoryFields;
}
typesMappingStorage['KalturaGenericDistributionProvider'] = KalturaGenericDistributionProvider;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx3Q0FBd0MsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RHLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSwyQkFBMkIsRUFBbUMsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWE3RyxNQUFNLHlDQUEwQyxTQUFRLDJCQUEyQjs7OztJQWUvRSxZQUFZLElBQThDO1FBRXRELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLHVCQUF1QixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxFQUFFLENBQUM7UUFDakcsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsdUJBQXVCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLEVBQUUsQ0FBQztLQUN4Rjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDdkYsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDM0MsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHdDQUF3QyxFQUFFLE9BQU8sRUFBRywwQ0FBMEMsRUFBRTtZQUM5Six1QkFBdUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLHVCQUF1QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxrQ0FBa0MsRUFBRSxPQUFPLEVBQUcsb0NBQW9DLEVBQUU7WUFDakosdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLGtDQUFrQyxFQUFFLE9BQU8sRUFBRyxvQ0FBb0MsRUFBRTtZQUNqSixjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLGtDQUFrQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvdmlkZXIsIEthbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MgfSBmcm9tICcuL0thbHR1cmFEaXN0cmlidXRpb25Qcm92aWRlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlckFyZ3MgIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyQXJncyB7XG4gICAgaXNEZWZhdWx0PyA6IGJvb2xlYW47XG5cdG9wdGlvbmFsRmxhdm9yUGFyYW1zSWRzPyA6IHN0cmluZztcblx0cmVxdWlyZWRGbGF2b3JQYXJhbXNJZHM/IDogc3RyaW5nO1xuXHRvcHRpb25hbFRodW1iRGltZW5zaW9ucz8gOiBLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zW107XG5cdHJlcXVpcmVkVGh1bWJEaW1lbnNpb25zPyA6IEthbHR1cmFEaXN0cmlidXRpb25UaHVtYkRpbWVuc2lvbnNbXTtcblx0ZWRpdGFibGVGaWVsZHM/IDogc3RyaW5nO1xuXHRtYW5kYXRvcnlGaWVsZHM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb3ZpZGVyIHtcblxuICAgIHJlYWRvbmx5IGlkIDogbnVtYmVyO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSB1cGRhdGVkQXQgOiBEYXRlO1xuXHRyZWFkb25seSBwYXJ0bmVySWQgOiBudW1iZXI7XG5cdGlzRGVmYXVsdCA6IGJvb2xlYW47XG5cdHJlYWRvbmx5IHN0YXR1cyA6IEthbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXJTdGF0dXM7XG5cdG9wdGlvbmFsRmxhdm9yUGFyYW1zSWRzIDogc3RyaW5nO1xuXHRyZXF1aXJlZEZsYXZvclBhcmFtc0lkcyA6IHN0cmluZztcblx0b3B0aW9uYWxUaHVtYkRpbWVuc2lvbnMgOiBLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zW107XG5cdHJlcXVpcmVkVGh1bWJEaW1lbnNpb25zIDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9uc1tdO1xuXHRlZGl0YWJsZUZpZWxkcyA6IHN0cmluZztcblx0bWFuZGF0b3J5RmllbGRzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9uYWxUaHVtYkRpbWVuc2lvbnMgPT09ICd1bmRlZmluZWQnKSB0aGlzLm9wdGlvbmFsVGh1bWJEaW1lbnNpb25zID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnJlcXVpcmVkVGh1bWJEaW1lbnNpb25zID09PSAndW5kZWZpbmVkJykgdGhpcy5yZXF1aXJlZFRodW1iRGltZW5zaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFHZW5lcmljRGlzdHJpYnV0aW9uUHJvdmlkZXInIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0dXBkYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0aXNEZWZhdWx0IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdHN0YXR1cyA6IHsgdHlwZSA6ICdlbicsIHJlYWRPbmx5IDogdHJ1ZSwgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlclN0YXR1cywgc3ViVHlwZSA6ICdLYWx0dXJhR2VuZXJpY0Rpc3RyaWJ1dGlvblByb3ZpZGVyU3RhdHVzJyB9LFxuXHRcdFx0XHRvcHRpb25hbEZsYXZvclBhcmFtc0lkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRyZXF1aXJlZEZsYXZvclBhcmFtc0lkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRvcHRpb25hbFRodW1iRGltZW5zaW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zJyB9LFxuXHRcdFx0XHRyZXF1aXJlZFRodW1iRGltZW5zaW9ucyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYURpc3RyaWJ1dGlvblRodW1iRGltZW5zaW9ucywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uVGh1bWJEaW1lbnNpb25zJyB9LFxuXHRcdFx0XHRlZGl0YWJsZUZpZWxkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRtYW5kYXRvcnlGaWVsZHMgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlciddID0gS2FsdHVyYUdlbmVyaWNEaXN0cmlidXRpb25Qcm92aWRlcjsiXX0=