/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConversionProfileStatus } from './KalturaConversionProfileStatus';
import { KalturaConversionProfileType } from './KalturaConversionProfileType';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaCropDimensions } from './KalturaCropDimensions';
import { KalturaMediaParserType } from './KalturaMediaParserType';
import { KalturaEntryReplacementOptions } from './KalturaEntryReplacementOptions';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaConversionProfileArgs() { }
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.status;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.type;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.name;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.systemName;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.tags;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.description;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.defaultEntryId;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.flavorParamsIds;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.isDefault;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.cropDimensions;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.clipStart;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.clipDuration;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.xslTransformation;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.storageProfileId;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.mediaParserType;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.calculateComplexity;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.collectionTags;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.conditionalProfiles;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.detectGOP;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.mediaInfoXslTransformation;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.defaultReplacementOptions;
/** @type {?|undefined} */
KalturaConversionProfileArgs.prototype.defaultAudioLang;
export class KalturaConversionProfile extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaConversionProfile' },
            id: { type: 'n', readOnly: true },
            partnerId: { type: 'n', readOnly: true },
            status: { type: 'es', subTypeConstructor: KalturaConversionProfileStatus, subType: 'KalturaConversionProfileStatus' },
            type: { type: 'es', subTypeConstructor: KalturaConversionProfileType, subType: 'KalturaConversionProfileType' },
            name: { type: 's' },
            systemName: { type: 's' },
            tags: { type: 's' },
            description: { type: 's' },
            defaultEntryId: { type: 's' },
            createdAt: { type: 'd', readOnly: true },
            flavorParamsIds: { type: 's' },
            isDefault: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            isPartnerDefault: { type: 'b', readOnly: true },
            cropDimensions: { type: 'o', subTypeConstructor: KalturaCropDimensions, subType: 'KalturaCropDimensions' },
            clipStart: { type: 'n' },
            clipDuration: { type: 'n' },
            xslTransformation: { type: 's' },
            storageProfileId: { type: 'n' },
            mediaParserType: { type: 'es', subTypeConstructor: KalturaMediaParserType, subType: 'KalturaMediaParserType' },
            calculateComplexity: { type: 'en', subTypeConstructor: KalturaNullableBoolean, subType: 'KalturaNullableBoolean' },
            collectionTags: { type: 's' },
            conditionalProfiles: { type: 's' },
            detectGOP: { type: 'n' },
            mediaInfoXslTransformation: { type: 's' },
            defaultReplacementOptions: { type: 'o', subTypeConstructor: KalturaEntryReplacementOptions, subType: 'KalturaEntryReplacementOptions' },
            defaultAudioLang: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaConversionProfile.prototype.id;
    /** @type {?} */
    KalturaConversionProfile.prototype.partnerId;
    /** @type {?} */
    KalturaConversionProfile.prototype.status;
    /** @type {?} */
    KalturaConversionProfile.prototype.type;
    /** @type {?} */
    KalturaConversionProfile.prototype.name;
    /** @type {?} */
    KalturaConversionProfile.prototype.systemName;
    /** @type {?} */
    KalturaConversionProfile.prototype.tags;
    /** @type {?} */
    KalturaConversionProfile.prototype.description;
    /** @type {?} */
    KalturaConversionProfile.prototype.defaultEntryId;
    /** @type {?} */
    KalturaConversionProfile.prototype.createdAt;
    /** @type {?} */
    KalturaConversionProfile.prototype.flavorParamsIds;
    /** @type {?} */
    KalturaConversionProfile.prototype.isDefault;
    /** @type {?} */
    KalturaConversionProfile.prototype.isPartnerDefault;
    /** @type {?} */
    KalturaConversionProfile.prototype.cropDimensions;
    /** @type {?} */
    KalturaConversionProfile.prototype.clipStart;
    /** @type {?} */
    KalturaConversionProfile.prototype.clipDuration;
    /** @type {?} */
    KalturaConversionProfile.prototype.xslTransformation;
    /** @type {?} */
    KalturaConversionProfile.prototype.storageProfileId;
    /** @type {?} */
    KalturaConversionProfile.prototype.mediaParserType;
    /** @type {?} */
    KalturaConversionProfile.prototype.calculateComplexity;
    /** @type {?} */
    KalturaConversionProfile.prototype.collectionTags;
    /** @type {?} */
    KalturaConversionProfile.prototype.conditionalProfiles;
    /** @type {?} */
    KalturaConversionProfile.prototype.detectGOP;
    /** @type {?} */
    KalturaConversionProfile.prototype.mediaInfoXslTransformation;
    /** @type {?} */
    KalturaConversionProfile.prototype.defaultReplacementOptions;
    /** @type {?} */
    KalturaConversionProfile.prototype.defaultAudioLang;
}
typesMappingStorage['KalturaConversionProfile'] = KalturaConversionProfile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM5RSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUF5QixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJsRixNQUFNLCtCQUFnQyxTQUFRLGlCQUFpQjs7OztJQTZCM0QsWUFBWSxJQUFvQztRQUU1QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUN6SCxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNuSCxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDNUcsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDbEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDOUcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDbEgsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN0SCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQzNJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQzVGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLEdBQUcsd0JBQXdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXMnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTnVsbGFibGVCb29sZWFuIH0gZnJvbSAnLi9LYWx0dXJhTnVsbGFibGVCb29sZWFuJztcbmltcG9ydCB7IEthbHR1cmFDcm9wRGltZW5zaW9ucyB9IGZyb20gJy4vS2FsdHVyYUNyb3BEaW1lbnNpb25zJztcbmltcG9ydCB7IEthbHR1cmFNZWRpYVBhcnNlclR5cGUgfSBmcm9tICcuL0thbHR1cmFNZWRpYVBhcnNlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zIH0gZnJvbSAnLi9LYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYUxhbmd1YWdlIH0gZnJvbSAnLi9LYWx0dXJhTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBzdGF0dXM/IDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzO1xuXHR0eXBlPyA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGU7XG5cdG5hbWU/IDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lPyA6IHN0cmluZztcblx0dGFncz8gOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uPyA6IHN0cmluZztcblx0ZGVmYXVsdEVudHJ5SWQ/IDogc3RyaW5nO1xuXHRmbGF2b3JQYXJhbXNJZHM/IDogc3RyaW5nO1xuXHRpc0RlZmF1bHQ/IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0Y3JvcERpbWVuc2lvbnM/IDogS2FsdHVyYUNyb3BEaW1lbnNpb25zO1xuXHRjbGlwU3RhcnQ/IDogbnVtYmVyO1xuXHRjbGlwRHVyYXRpb24/IDogbnVtYmVyO1xuXHR4c2xUcmFuc2Zvcm1hdGlvbj8gOiBzdHJpbmc7XG5cdHN0b3JhZ2VQcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRtZWRpYVBhcnNlclR5cGU/IDogS2FsdHVyYU1lZGlhUGFyc2VyVHlwZTtcblx0Y2FsY3VsYXRlQ29tcGxleGl0eT8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRjb2xsZWN0aW9uVGFncz8gOiBzdHJpbmc7XG5cdGNvbmRpdGlvbmFsUHJvZmlsZXM/IDogc3RyaW5nO1xuXHRkZXRlY3RHT1A/IDogbnVtYmVyO1xuXHRtZWRpYUluZm9Yc2xUcmFuc2Zvcm1hdGlvbj8gOiBzdHJpbmc7XG5cdGRlZmF1bHRSZXBsYWNlbWVudE9wdGlvbnM/IDogS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zO1xuXHRkZWZhdWx0QXVkaW9MYW5nPyA6IEthbHR1cmFMYW5ndWFnZTtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgcmVhZG9ubHkgaWQgOiBudW1iZXI7XG5cdHJlYWRvbmx5IHBhcnRuZXJJZCA6IG51bWJlcjtcblx0c3RhdHVzIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzO1xuXHR0eXBlIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZTtcblx0bmFtZSA6IHN0cmluZztcblx0c3lzdGVtTmFtZSA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdGRlZmF1bHRFbnRyeUlkIDogc3RyaW5nO1xuXHRyZWFkb25seSBjcmVhdGVkQXQgOiBEYXRlO1xuXHRmbGF2b3JQYXJhbXNJZHMgOiBzdHJpbmc7XG5cdGlzRGVmYXVsdCA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdHJlYWRvbmx5IGlzUGFydG5lckRlZmF1bHQgOiBib29sZWFuO1xuXHRjcm9wRGltZW5zaW9ucyA6IEthbHR1cmFDcm9wRGltZW5zaW9ucztcblx0Y2xpcFN0YXJ0IDogbnVtYmVyO1xuXHRjbGlwRHVyYXRpb24gOiBudW1iZXI7XG5cdHhzbFRyYW5zZm9ybWF0aW9uIDogc3RyaW5nO1xuXHRzdG9yYWdlUHJvZmlsZUlkIDogbnVtYmVyO1xuXHRtZWRpYVBhcnNlclR5cGUgOiBLYWx0dXJhTWVkaWFQYXJzZXJUeXBlO1xuXHRjYWxjdWxhdGVDb21wbGV4aXR5IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0Y29sbGVjdGlvblRhZ3MgOiBzdHJpbmc7XG5cdGNvbmRpdGlvbmFsUHJvZmlsZXMgOiBzdHJpbmc7XG5cdGRldGVjdEdPUCA6IG51bWJlcjtcblx0bWVkaWFJbmZvWHNsVHJhbnNmb3JtYXRpb24gOiBzdHJpbmc7XG5cdGRlZmF1bHRSZXBsYWNlbWVudE9wdGlvbnMgOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnM7XG5cdGRlZmF1bHRBdWRpb0xhbmcgOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGUnIH0sXG5cdFx0XHRcdGlkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0cGFydG5lcklkIDogeyB0eXBlIDogJ24nLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3RhdHVzIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzLCBzdWJUeXBlIDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZVN0YXR1cycgfSxcblx0XHRcdFx0dHlwZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZScgfSxcblx0XHRcdFx0bmFtZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzeXN0ZW1OYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVmYXVsdEVudHJ5SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3JlYXRlZEF0IDogeyB0eXBlIDogJ2QnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Zmxhdm9yUGFyYW1zSWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGlzRGVmYXVsdCA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4sIHN1YlR5cGUgOiAnS2FsdHVyYU51bGxhYmxlQm9vbGVhbicgfSxcblx0XHRcdFx0aXNQYXJ0bmVyRGVmYXVsdCA6IHsgdHlwZSA6ICdiJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGNyb3BEaW1lbnNpb25zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ3JvcERpbWVuc2lvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYUNyb3BEaW1lbnNpb25zJyB9LFxuXHRcdFx0XHRjbGlwU3RhcnQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0Y2xpcER1cmF0aW9uIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHhzbFRyYW5zZm9ybWF0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN0b3JhZ2VQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWVkaWFQYXJzZXJUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1lZGlhUGFyc2VyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWVkaWFQYXJzZXJUeXBlJyB9LFxuXHRcdFx0XHRjYWxjdWxhdGVDb21wbGV4aXR5IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRjb2xsZWN0aW9uVGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb25kaXRpb25hbFByb2ZpbGVzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRldGVjdEdPUCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZWRpYUluZm9Yc2xUcmFuc2Zvcm1hdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0UmVwbGFjZW1lbnRPcHRpb25zIDogeyB0eXBlIDogJ28nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMsIHN1YlR5cGUgOiAnS2FsdHVyYUVudHJ5UmVwbGFjZW1lbnRPcHRpb25zJyB9LFxuXHRcdFx0XHRkZWZhdWx0QXVkaW9MYW5nIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZScgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlJ10gPSBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGU7Il19