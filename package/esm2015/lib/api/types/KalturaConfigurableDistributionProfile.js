/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDistributionFieldConfig } from './KalturaDistributionFieldConfig';
import { KalturaExtendingItemMrssParameter } from './KalturaExtendingItemMrssParameter';
import { KalturaDistributionProfile } from './KalturaDistributionProfile';
/**
 * @record
 */
export function KalturaConfigurableDistributionProfileArgs() { }
/** @type {?|undefined} */
KalturaConfigurableDistributionProfileArgs.prototype.fieldConfigArray;
/** @type {?|undefined} */
KalturaConfigurableDistributionProfileArgs.prototype.itemXpathsToExtend;
/** @type {?|undefined} */
KalturaConfigurableDistributionProfileArgs.prototype.useCategoryEntries;
export class KalturaConfigurableDistributionProfile extends KalturaDistributionProfile {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.fieldConfigArray === 'undefined')
            this.fieldConfigArray = [];
        if (typeof this.itemXpathsToExtend === 'undefined')
            this.itemXpathsToExtend = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaConfigurableDistributionProfile' },
            fieldConfigArray: { type: 'a', subTypeConstructor: KalturaDistributionFieldConfig, subType: 'KalturaDistributionFieldConfig' },
            itemXpathsToExtend: { type: 'a', subTypeConstructor: KalturaExtendingItemMrssParameter, subType: 'KalturaExtendingItemMrssParameter' },
            useCategoryEntries: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConfigurableDistributionProfile.prototype.fieldConfigArray;
    /** @type {?} */
    KalturaConfigurableDistributionProfile.prototype.itemXpathsToExtend;
    /** @type {?} */
    KalturaConfigurableDistributionProfile.prototype.useCategoryEntries;
}
typesMappingStorage['KalturaConfigurableDistributionProfile'] = KalturaConfigurableDistributionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDeEYsT0FBTyxFQUFFLDBCQUEwQixFQUFrQyxNQUFNLDhCQUE4QixDQUFDOzs7Ozs7Ozs7OztBQVMxRyxNQUFNLDZDQUE4QyxTQUFRLDBCQUEwQjs7OztJQU1sRixZQUFZLElBQWtEO1FBRTFELEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDbkYsRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsa0JBQWtCLEtBQUssV0FBVyxDQUFDO1lBQUMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQztLQUM5RTs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsd0NBQXdDLEVBQUU7WUFDM0YsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUNsSSxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsaUNBQWlDLEVBQUUsT0FBTyxFQUFHLG1DQUFtQyxFQUFFO1lBQzFJLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMxQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHdDQUF3QyxDQUFDLEdBQUcsc0NBQXNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkQ29uZmlnIH0gZnJvbSAnLi9LYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWcnO1xuaW1wb3J0IHsgS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyIH0gZnJvbSAnLi9LYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXInO1xuaW1wb3J0IHsgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUsIEthbHR1cmFEaXN0cmlidXRpb25Qcm9maWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRGlzdHJpYnV0aW9uUHJvZmlsZUFyZ3Mge1xuICAgIGZpZWxkQ29uZmlnQXJyYXk/IDogS2FsdHVyYURpc3RyaWJ1dGlvbkZpZWxkQ29uZmlnW107XG5cdGl0ZW1YcGF0aHNUb0V4dGVuZD8gOiBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXJbXTtcblx0dXNlQ2F0ZWdvcnlFbnRyaWVzPyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYURpc3RyaWJ1dGlvblByb2ZpbGUge1xuXG4gICAgZmllbGRDb25maWdBcnJheSA6IEthbHR1cmFEaXN0cmlidXRpb25GaWVsZENvbmZpZ1tdO1xuXHRpdGVtWHBhdGhzVG9FeHRlbmQgOiBLYWx0dXJhRXh0ZW5kaW5nSXRlbU1yc3NQYXJhbWV0ZXJbXTtcblx0dXNlQ2F0ZWdvcnlFbnRyaWVzIDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGVBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5maWVsZENvbmZpZ0FycmF5ID09PSAndW5kZWZpbmVkJykgdGhpcy5maWVsZENvbmZpZ0FycmF5ID0gW107XG5cdFx0aWYgKHR5cGVvZiB0aGlzLml0ZW1YcGF0aHNUb0V4dGVuZCA9PT0gJ3VuZGVmaW5lZCcpIHRoaXMuaXRlbVhwYXRoc1RvRXh0ZW5kID0gW107XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGZpZWxkQ29uZmlnQXJyYXkgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFEaXN0cmlidXRpb25GaWVsZENvbmZpZywgc3ViVHlwZSA6ICdLYWx0dXJhRGlzdHJpYnV0aW9uRmllbGRDb25maWcnIH0sXG5cdFx0XHRcdGl0ZW1YcGF0aHNUb0V4dGVuZCA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUV4dGVuZGluZ0l0ZW1NcnNzUGFyYW1ldGVyLCBzdWJUeXBlIDogJ0thbHR1cmFFeHRlbmRpbmdJdGVtTXJzc1BhcmFtZXRlcicgfSxcblx0XHRcdFx0dXNlQ2F0ZWdvcnlFbnRyaWVzIDogeyB0eXBlIDogJ2InIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Qcm9maWxlJ10gPSBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uUHJvZmlsZTsiXX0=