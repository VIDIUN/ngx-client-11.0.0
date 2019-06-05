/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCielo24Priority } from './KalturaCielo24Priority';
import { KalturaCielo24Fidelity } from './KalturaCielo24Fidelity';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
/**
 * @record
 */
export function KalturaCielo24JobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.captionAssetFormats;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.priority;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.fidelity;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.spokenLanguage;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.replaceMediaContent;
/** @type {?|undefined} */
KalturaCielo24JobProviderDataArgs.prototype.additionalParameters;
export class KalturaCielo24JobProviderData extends KalturaIntegrationJobProviderData {
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
            objectType: { type: 'c', default: 'KalturaCielo24JobProviderData' },
            entryId: { type: 's' },
            flavorAssetId: { type: 's' },
            captionAssetFormats: { type: 's' },
            priority: { type: 'es', subTypeConstructor: KalturaCielo24Priority, subType: 'KalturaCielo24Priority' },
            fidelity: { type: 'es', subTypeConstructor: KalturaCielo24Fidelity, subType: 'KalturaCielo24Fidelity' },
            username: { type: 's', readOnly: true },
            password: { type: 's', readOnly: true },
            baseUrl: { type: 's', readOnly: true },
            spokenLanguage: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            replaceMediaContent: { type: 'b' },
            additionalParameters: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.entryId;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.captionAssetFormats;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.priority;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.fidelity;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.username;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.password;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.baseUrl;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.spokenLanguage;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.replaceMediaContent;
    /** @type {?} */
    KalturaCielo24JobProviderData.prototype.additionalParameters;
}
typesMappingStorage['KalturaCielo24JobProviderData'] = KalturaCielo24JobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNpZWxvMjRKb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFDaWVsbzI0Sm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQ0FBaUMsRUFBeUMsTUFBTSxxQ0FBcUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYy9ILE1BQU0sb0NBQXFDLFNBQVEsaUNBQWlDOzs7O0lBY2hGLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0csUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxzQkFBc0IsRUFBRSxPQUFPLEVBQUcsd0JBQXdCLEVBQUU7WUFDM0csUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzFDLFFBQVEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsUUFBUSxFQUFHLElBQUksRUFBRTtZQUMxQyxPQUFPLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDekMsY0FBYyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxlQUFlLEVBQUUsT0FBTyxFQUFHLGlCQUFpQixFQUFFO1lBQ25HLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDNUIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsK0JBQStCLENBQUMsR0FBRyw2QkFBNkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhQ2llbG8yNFByaW9yaXR5IH0gZnJvbSAnLi9LYWx0dXJhQ2llbG8yNFByaW9yaXR5JztcbmltcG9ydCB7IEthbHR1cmFDaWVsbzI0RmlkZWxpdHkgfSBmcm9tICcuL0thbHR1cmFDaWVsbzI0RmlkZWxpdHknO1xuaW1wb3J0IHsgS2FsdHVyYUxhbmd1YWdlIH0gZnJvbSAnLi9LYWx0dXJhTGFuZ3VhZ2UnO1xuaW1wb3J0IHsgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhLCBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDaWVsbzI0Sm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICBlbnRyeUlkPyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldEZvcm1hdHM/IDogc3RyaW5nO1xuXHRwcmlvcml0eT8gOiBLYWx0dXJhQ2llbG8yNFByaW9yaXR5O1xuXHRmaWRlbGl0eT8gOiBLYWx0dXJhQ2llbG8yNEZpZGVsaXR5O1xuXHRzcG9rZW5MYW5ndWFnZT8gOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdHJlcGxhY2VNZWRpYUNvbnRlbnQ/IDogYm9vbGVhbjtcblx0YWRkaXRpb25hbFBhcmFtZXRlcnM/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhQ2llbG8yNEpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXRGb3JtYXRzIDogc3RyaW5nO1xuXHRwcmlvcml0eSA6IEthbHR1cmFDaWVsbzI0UHJpb3JpdHk7XG5cdGZpZGVsaXR5IDogS2FsdHVyYUNpZWxvMjRGaWRlbGl0eTtcblx0cmVhZG9ubHkgdXNlcm5hbWUgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IHBhc3N3b3JkIDogc3RyaW5nO1xuXHRyZWFkb25seSBiYXNlVXJsIDogc3RyaW5nO1xuXHRzcG9rZW5MYW5ndWFnZSA6IEthbHR1cmFMYW5ndWFnZTtcblx0cmVwbGFjZU1lZGlhQ29udGVudCA6IGJvb2xlYW47XG5cdGFkZGl0aW9uYWxQYXJhbWV0ZXJzIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQ2llbG8yNEpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ2llbG8yNEpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldEZvcm1hdHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0cHJpb3JpdHkgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhQ2llbG8yNFByaW9yaXR5LCBzdWJUeXBlIDogJ0thbHR1cmFDaWVsbzI0UHJpb3JpdHknIH0sXG5cdFx0XHRcdGZpZGVsaXR5IDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUNpZWxvMjRGaWRlbGl0eSwgc3ViVHlwZSA6ICdLYWx0dXJhQ2llbG8yNEZpZGVsaXR5JyB9LFxuXHRcdFx0XHR1c2VybmFtZSA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHBhc3N3b3JkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0YmFzZVVybCA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHNwb2tlbkxhbmd1YWdlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYUxhbmd1YWdlLCBzdWJUeXBlIDogJ0thbHR1cmFMYW5ndWFnZScgfSxcblx0XHRcdFx0cmVwbGFjZU1lZGlhQ29udGVudCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRhZGRpdGlvbmFsUGFyYW1ldGVycyA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQ2llbG8yNEpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYUNpZWxvMjRKb2JQcm92aWRlckRhdGE7Il19