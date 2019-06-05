/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaString } from './KalturaString';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaQuickPlayDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaQuickPlayDistributionJobProviderDataArgs.prototype.xml;
/** @type {?|undefined} */
KalturaQuickPlayDistributionJobProviderDataArgs.prototype.videoFilePaths;
/** @type {?|undefined} */
KalturaQuickPlayDistributionJobProviderDataArgs.prototype.thumbnailFilePaths;
export class KalturaQuickPlayDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
    /**
     * @param {?=} data
     */
    constructor(data) {
        super(data);
        if (typeof this.videoFilePaths === 'undefined')
            this.videoFilePaths = [];
        if (typeof this.thumbnailFilePaths === 'undefined')
            this.thumbnailFilePaths = [];
    }
    /**
     * @return {?}
     */
    _getMetadata() {
        /** @type {?} */
        const result = super._getMetadata();
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaQuickPlayDistributionJobProviderData' },
            xml: { type: 's' },
            videoFilePaths: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' },
            thumbnailFilePaths: { type: 'a', subTypeConstructor: KalturaString, subType: 'KalturaString' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaQuickPlayDistributionJobProviderData.prototype.xml;
    /** @type {?} */
    KalturaQuickPlayDistributionJobProviderData.prototype.videoFilePaths;
    /** @type {?} */
    KalturaQuickPlayDistributionJobProviderData.prototype.thumbnailFilePaths;
}
typesMappingStorage['KalturaQuickPlayDistributionJobProviderData'] = KalturaQuickPlayDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVF1aWNrUGxheURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVF1aWNrUGxheURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsOENBQThDLEVBQXNELE1BQU0sa0RBQWtELENBQUM7Ozs7Ozs7Ozs7O0FBU3RLLE1BQU0sa0RBQW1ELFNBQVEsOENBQThDOzs7O0lBTTNHLFlBQVksSUFBdUQ7UUFFL0QsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ1osRUFBRSxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQy9FLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLGtCQUFrQixLQUFLLFdBQVcsQ0FBQztZQUFDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7S0FDOUU7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDZDQUE2QyxFQUFFO1lBQ2hHLEdBQUcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEIsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxhQUFhLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUM5RixrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsYUFBYSxFQUFFLE9BQU8sRUFBRyxlQUFlLEVBQUU7U0FDekYsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyw2Q0FBNkMsQ0FBQyxHQUFHLDJDQUEyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTdHJpbmcgfSBmcm9tICcuL0thbHR1cmFTdHJpbmcnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFRdWlja1BsYXlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzICBleHRlbmRzIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICB4bWw/IDogc3RyaW5nO1xuXHR2aWRlb0ZpbGVQYXRocz8gOiBLYWx0dXJhU3RyaW5nW107XG5cdHRodW1ibmFpbEZpbGVQYXRocz8gOiBLYWx0dXJhU3RyaW5nW107XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFRdWlja1BsYXlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIHtcblxuICAgIHhtbCA6IHN0cmluZztcblx0dmlkZW9GaWxlUGF0aHMgOiBLYWx0dXJhU3RyaW5nW107XG5cdHRodW1ibmFpbEZpbGVQYXRocyA6IEthbHR1cmFTdHJpbmdbXTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVF1aWNrUGxheURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnZpZGVvRmlsZVBhdGhzID09PSAndW5kZWZpbmVkJykgdGhpcy52aWRlb0ZpbGVQYXRocyA9IFtdO1xuXHRcdGlmICh0eXBlb2YgdGhpcy50aHVtYm5haWxGaWxlUGF0aHMgPT09ICd1bmRlZmluZWQnKSB0aGlzLnRodW1ibmFpbEZpbGVQYXRocyA9IFtdO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFRdWlja1BsYXlEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdHhtbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR2aWRlb0ZpbGVQYXRocyA6IHsgdHlwZSA6ICdhJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVN0cmluZywgc3ViVHlwZSA6ICdLYWx0dXJhU3RyaW5nJyB9LFxuXHRcdFx0XHR0aHVtYm5haWxGaWxlUGF0aHMgOiB7IHR5cGUgOiAnYScsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFTdHJpbmcsIHN1YlR5cGUgOiAnS2FsdHVyYVN0cmluZycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVF1aWNrUGxheURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYVF1aWNrUGxheURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YTsiXX0=