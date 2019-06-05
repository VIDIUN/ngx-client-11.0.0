/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLanguage } from './KalturaLanguage';
import { KalturaIntegrationJobProviderData } from './KalturaIntegrationJobProviderData';
/**
 * @record
 */
export function KalturaVoicebaseJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaVoicebaseJobProviderDataArgs.prototype.entryId;
/** @type {?|undefined} */
KalturaVoicebaseJobProviderDataArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaVoicebaseJobProviderDataArgs.prototype.transcriptId;
/** @type {?|undefined} */
KalturaVoicebaseJobProviderDataArgs.prototype.captionAssetFormats;
/** @type {?|undefined} */
KalturaVoicebaseJobProviderDataArgs.prototype.spokenLanguage;
/** @type {?|undefined} */
KalturaVoicebaseJobProviderDataArgs.prototype.replaceMediaContent;
export class KalturaVoicebaseJobProviderData extends KalturaIntegrationJobProviderData {
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
            objectType: { type: 'c', default: 'KalturaVoicebaseJobProviderData' },
            entryId: { type: 's' },
            flavorAssetId: { type: 's' },
            transcriptId: { type: 's' },
            captionAssetFormats: { type: 's' },
            apiKey: { type: 's', readOnly: true },
            apiPassword: { type: 's', readOnly: true },
            spokenLanguage: { type: 'es', subTypeConstructor: KalturaLanguage, subType: 'KalturaLanguage' },
            fileLocation: { type: 's', readOnly: true },
            replaceMediaContent: { type: 'b' },
            additionalParameters: { type: 's', readOnly: true }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.entryId;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.flavorAssetId;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.transcriptId;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.captionAssetFormats;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.apiKey;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.apiPassword;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.spokenLanguage;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.fileLocation;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.replaceMediaContent;
    /** @type {?} */
    KalturaVoicebaseJobProviderData.prototype.additionalParameters;
}
typesMappingStorage['KalturaVoicebaseJobProviderData'] = KalturaVoicebaseJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUNBQWlDLEVBQXlDLE1BQU0scUNBQXFDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBWS9ILE1BQU0sc0NBQXVDLFNBQVEsaUNBQWlDOzs7O0lBYWxGLFlBQVksSUFBMkM7UUFFbkQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzdDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNuRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1NBQzdDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLCtCQUErQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMYW5ndWFnZSB9IGZyb20gJy4vS2FsdHVyYUxhbmd1YWdlJztcbmltcG9ydCB7IEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB9IGZyb20gJy4vS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVm9pY2ViYXNlSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIHtcbiAgICBlbnRyeUlkPyA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdHRyYW5zY3JpcHRJZD8gOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldEZvcm1hdHM/IDogc3RyaW5nO1xuXHRzcG9rZW5MYW5ndWFnZT8gOiBLYWx0dXJhTGFuZ3VhZ2U7XG5cdHJlcGxhY2VNZWRpYUNvbnRlbnQ/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YSBleHRlbmRzIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICBlbnRyeUlkIDogc3RyaW5nO1xuXHRmbGF2b3JBc3NldElkIDogc3RyaW5nO1xuXHR0cmFuc2NyaXB0SWQgOiBzdHJpbmc7XG5cdGNhcHRpb25Bc3NldEZvcm1hdHMgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGFwaUtleSA6IHN0cmluZztcblx0cmVhZG9ubHkgYXBpUGFzc3dvcmQgOiBzdHJpbmc7XG5cdHNwb2tlbkxhbmd1YWdlIDogS2FsdHVyYUxhbmd1YWdlO1xuXHRyZWFkb25seSBmaWxlTG9jYXRpb24gOiBzdHJpbmc7XG5cdHJlcGxhY2VNZWRpYUNvbnRlbnQgOiBib29sZWFuO1xuXHRyZWFkb25seSBhZGRpdGlvbmFsUGFyYW1ldGVycyA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YUFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhVm9pY2ViYXNlSm9iUHJvdmlkZXJEYXRhJyB9LFxuXHRcdFx0XHRlbnRyeUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dHJhbnNjcmlwdElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNhcHRpb25Bc3NldEZvcm1hdHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXBpS2V5IDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0YXBpUGFzc3dvcmQgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRzcG9rZW5MYW5ndWFnZSA6IHsgdHlwZSA6ICdlcycsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMYW5ndWFnZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGFuZ3VhZ2UnIH0sXG5cdFx0XHRcdGZpbGVMb2NhdGlvbiA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdHJlcGxhY2VNZWRpYUNvbnRlbnQgOiB7IHR5cGUgOiAnYicgfSxcblx0XHRcdFx0YWRkaXRpb25hbFBhcmFtZXRlcnMgOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVm9pY2ViYXNlSm9iUHJvdmlkZXJEYXRhJ10gPSBLYWx0dXJhVm9pY2ViYXNlSm9iUHJvdmlkZXJEYXRhOyJdfQ==