/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaConversionProfile = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaConversionProfile, _super);
    function KalturaConversionProfile(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaConversionProfile.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaConversionProfile;
}(KalturaObjectBase));
export { KalturaConversionProfile };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCbEYsSUFBQTtJQUE4QyxvREFBaUI7SUE2QjNELGtDQUFZLElBQW9DO2VBRTVDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsK0NBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMEJBQTBCLEVBQUU7WUFDN0UsRUFBRSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQ3BDLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMzQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDhCQUE4QixFQUFFLE9BQU8sRUFBRyxnQ0FBZ0MsRUFBRTtZQUN6SCxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLDRCQUE0QixFQUFFLE9BQU8sRUFBRyw4QkFBOEIsRUFBRTtZQUNuSCxJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0IsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzNDLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDaEMsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDNUcsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDbEQsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxrQkFBa0IsRUFBRyxxQkFBcUIsRUFBRSxPQUFPLEVBQUcsdUJBQXVCLEVBQUU7WUFDOUcsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxnQkFBZ0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDakMsZUFBZSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDbEgsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLHNCQUFzQixFQUFFLE9BQU8sRUFBRyx3QkFBd0IsRUFBRTtZQUN0SCxjQUFjLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQy9CLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLDBCQUEwQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQyx5QkFBeUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsa0JBQWtCLEVBQUcsOEJBQThCLEVBQUUsT0FBTyxFQUFHLGdDQUFnQyxFQUFFO1lBQzNJLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1NBQzVGLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7bUNBM0dMO0VBcUM4QyxpQkFBaUIsRUF1RTlELENBQUE7QUF2RUQsb0NBdUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsMEJBQTBCLENBQUMsR0FBRyx3QkFBd0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXMgfSBmcm9tICcuL0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZVN0YXR1cyc7XG5pbXBvcnQgeyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlIH0gZnJvbSAnLi9LYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlJztcbmltcG9ydCB7IEthbHR1cmFOdWxsYWJsZUJvb2xlYW4gfSBmcm9tICcuL0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nO1xuaW1wb3J0IHsgS2FsdHVyYUNyb3BEaW1lbnNpb25zIH0gZnJvbSAnLi9LYWx0dXJhQ3JvcERpbWVuc2lvbnMnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhUGFyc2VyVHlwZSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhUGFyc2VyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMgfSBmcm9tICcuL0thbHR1cmFFbnRyeVJlcGxhY2VtZW50T3B0aW9ucyc7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2UgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIHN0YXR1cz8gOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXM7XG5cdHR5cGU/IDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZTtcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHN5c3RlbU5hbWU/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHRkZWZhdWx0RW50cnlJZD8gOiBzdHJpbmc7XG5cdGZsYXZvclBhcmFtc0lkcz8gOiBzdHJpbmc7XG5cdGlzRGVmYXVsdD8gOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRjcm9wRGltZW5zaW9ucz8gOiBLYWx0dXJhQ3JvcERpbWVuc2lvbnM7XG5cdGNsaXBTdGFydD8gOiBudW1iZXI7XG5cdGNsaXBEdXJhdGlvbj8gOiBudW1iZXI7XG5cdHhzbFRyYW5zZm9ybWF0aW9uPyA6IHN0cmluZztcblx0c3RvcmFnZVByb2ZpbGVJZD8gOiBudW1iZXI7XG5cdG1lZGlhUGFyc2VyVHlwZT8gOiBLYWx0dXJhTWVkaWFQYXJzZXJUeXBlO1xuXHRjYWxjdWxhdGVDb21wbGV4aXR5PyA6IEthbHR1cmFOdWxsYWJsZUJvb2xlYW47XG5cdGNvbGxlY3Rpb25UYWdzPyA6IHN0cmluZztcblx0Y29uZGl0aW9uYWxQcm9maWxlcz8gOiBzdHJpbmc7XG5cdGRldGVjdEdPUD8gOiBudW1iZXI7XG5cdG1lZGlhSW5mb1hzbFRyYW5zZm9ybWF0aW9uPyA6IHN0cmluZztcblx0ZGVmYXVsdFJlcGxhY2VtZW50T3B0aW9ucz8gOiBLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnM7XG5cdGRlZmF1bHRBdWRpb0xhbmc/IDogS2FsdHVyYUxhbmd1YWdlO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGUgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICByZWFkb25seSBpZCA6IG51bWJlcjtcblx0cmVhZG9ubHkgcGFydG5lcklkIDogbnVtYmVyO1xuXHRzdGF0dXMgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXM7XG5cdHR5cGUgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlO1xuXHRuYW1lIDogc3RyaW5nO1xuXHRzeXN0ZW1OYW1lIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0ZGVmYXVsdEVudHJ5SWQgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNyZWF0ZWRBdCA6IERhdGU7XG5cdGZsYXZvclBhcmFtc0lkcyA6IHN0cmluZztcblx0aXNEZWZhdWx0IDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbjtcblx0cmVhZG9ubHkgaXNQYXJ0bmVyRGVmYXVsdCA6IGJvb2xlYW47XG5cdGNyb3BEaW1lbnNpb25zIDogS2FsdHVyYUNyb3BEaW1lbnNpb25zO1xuXHRjbGlwU3RhcnQgOiBudW1iZXI7XG5cdGNsaXBEdXJhdGlvbiA6IG51bWJlcjtcblx0eHNsVHJhbnNmb3JtYXRpb24gOiBzdHJpbmc7XG5cdHN0b3JhZ2VQcm9maWxlSWQgOiBudW1iZXI7XG5cdG1lZGlhUGFyc2VyVHlwZSA6IEthbHR1cmFNZWRpYVBhcnNlclR5cGU7XG5cdGNhbGN1bGF0ZUNvbXBsZXhpdHkgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuO1xuXHRjb2xsZWN0aW9uVGFncyA6IHN0cmluZztcblx0Y29uZGl0aW9uYWxQcm9maWxlcyA6IHN0cmluZztcblx0ZGV0ZWN0R09QIDogbnVtYmVyO1xuXHRtZWRpYUluZm9Yc2xUcmFuc2Zvcm1hdGlvbiA6IHN0cmluZztcblx0ZGVmYXVsdFJlcGxhY2VtZW50T3B0aW9ucyA6IEthbHR1cmFFbnRyeVJlcGxhY2VtZW50T3B0aW9ucztcblx0ZGVmYXVsdEF1ZGlvTGFuZyA6IEthbHR1cmFMYW5ndWFnZTtcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFDb252ZXJzaW9uUHJvZmlsZScgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRwYXJ0bmVySWQgOiB7IHR5cGUgOiAnbicsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzdGF0dXMgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVTdGF0dXMsIHN1YlR5cGUgOiAnS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlU3RhdHVzJyB9LFxuXHRcdFx0XHR0eXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNvbnZlcnNpb25Qcm9maWxlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhQ29udmVyc2lvblByb2ZpbGVUeXBlJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWZhdWx0RW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVhdGVkQXQgOiB7IHR5cGUgOiAnZCcsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRmbGF2b3JQYXJhbXNJZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXNEZWZhdWx0IDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU51bGxhYmxlQm9vbGVhbiwgc3ViVHlwZSA6ICdLYWx0dXJhTnVsbGFibGVCb29sZWFuJyB9LFxuXHRcdFx0XHRpc1BhcnRuZXJEZWZhdWx0IDogeyB0eXBlIDogJ2InLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0Y3JvcERpbWVuc2lvbnMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFDcm9wRGltZW5zaW9ucywgc3ViVHlwZSA6ICdLYWx0dXJhQ3JvcERpbWVuc2lvbnMnIH0sXG5cdFx0XHRcdGNsaXBTdGFydCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRjbGlwRHVyYXRpb24gOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0eHNsVHJhbnNmb3JtYXRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3RvcmFnZVByb2ZpbGVJZCA6IHsgdHlwZSA6ICduJyB9LFxuXHRcdFx0XHRtZWRpYVBhcnNlclR5cGUgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFQYXJzZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYVBhcnNlclR5cGUnIH0sXG5cdFx0XHRcdGNhbGN1bGF0ZUNvbXBsZXhpdHkgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTnVsbGFibGVCb29sZWFuLCBzdWJUeXBlIDogJ0thbHR1cmFOdWxsYWJsZUJvb2xlYW4nIH0sXG5cdFx0XHRcdGNvbGxlY3Rpb25UYWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbmRpdGlvbmFsUHJvZmlsZXMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGV0ZWN0R09QIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdG1lZGlhSW5mb1hzbFRyYW5zZm9ybWF0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlZmF1bHRSZXBsYWNlbWVudE9wdGlvbnMgOiB7IHR5cGUgOiAnbycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFFbnRyeVJlcGxhY2VtZW50T3B0aW9ucywgc3ViVHlwZSA6ICdLYWx0dXJhRW50cnlSZXBsYWNlbWVudE9wdGlvbnMnIH0sXG5cdFx0XHRcdGRlZmF1bHRBdWRpb0xhbmcgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ29udmVyc2lvblByb2ZpbGUnXSA9IEthbHR1cmFDb252ZXJzaW9uUHJvZmlsZTsiXX0=