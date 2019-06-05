/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var KalturaVoicebaseJobProviderData = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaVoicebaseJobProviderData, _super);
    function KalturaVoicebaseJobProviderData(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaVoicebaseJobProviderData.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
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
    };
    return KalturaVoicebaseJobProviderData;
}(KalturaIntegrationJobProviderData));
export { KalturaVoicebaseJobProviderData };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlDQUFpQyxFQUF5QyxNQUFNLHFDQUFxQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQVkvSCxJQUFBO0lBQXFELDJEQUFpQztJQWFsRix5Q0FBWSxJQUEyQztlQUVuRCxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLHNEQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGlDQUFpQyxFQUFFO1lBQ3BGLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDeEIsYUFBYSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM5QixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQyxNQUFNLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDeEMsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1lBQzdDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZUFBZSxFQUFFLE9BQU8sRUFBRyxpQkFBaUIsRUFBRTtZQUNuRyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLFFBQVEsRUFBRyxJQUFJLEVBQUU7WUFDOUMsbUJBQW1CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BDLG9CQUFvQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxRQUFRLEVBQUcsSUFBSSxFQUFFO1NBQzdDLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7MENBckRMO0VBZXFELGlDQUFpQyxFQXVDckYsQ0FBQTtBQXZDRCwyQ0F1Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsaUNBQWlDLENBQUMsR0FBRywrQkFBK0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhTGFuZ3VhZ2UgfSBmcm9tICcuL0thbHR1cmFMYW5ndWFnZSc7XG5pbXBvcnQgeyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFJbnRlZ3JhdGlvbkpvYlByb3ZpZGVyRGF0YSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUludGVncmF0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgZW50cnlJZD8gOiBzdHJpbmc7XG5cdGZsYXZvckFzc2V0SWQ/IDogc3RyaW5nO1xuXHR0cmFuc2NyaXB0SWQ/IDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXRGb3JtYXRzPyA6IHN0cmluZztcblx0c3Bva2VuTGFuZ3VhZ2U/IDogS2FsdHVyYUxhbmd1YWdlO1xuXHRyZXBsYWNlTWVkaWFDb250ZW50PyA6IGJvb2xlYW47XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFWb2ljZWJhc2VKb2JQcm92aWRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhSW50ZWdyYXRpb25Kb2JQcm92aWRlckRhdGEge1xuXG4gICAgZW50cnlJZCA6IHN0cmluZztcblx0Zmxhdm9yQXNzZXRJZCA6IHN0cmluZztcblx0dHJhbnNjcmlwdElkIDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXRGb3JtYXRzIDogc3RyaW5nO1xuXHRyZWFkb25seSBhcGlLZXkgOiBzdHJpbmc7XG5cdHJlYWRvbmx5IGFwaVBhc3N3b3JkIDogc3RyaW5nO1xuXHRzcG9rZW5MYW5ndWFnZSA6IEthbHR1cmFMYW5ndWFnZTtcblx0cmVhZG9ubHkgZmlsZUxvY2F0aW9uIDogc3RyaW5nO1xuXHRyZXBsYWNlTWVkaWFDb250ZW50IDogYm9vbGVhbjtcblx0cmVhZG9ubHkgYWRkaXRpb25hbFBhcmFtZXRlcnMgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFWb2ljZWJhc2VKb2JQcm92aWRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YScgfSxcblx0XHRcdFx0ZW50cnlJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldElkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRyYW5zY3JpcHRJZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjYXB0aW9uQXNzZXRGb3JtYXRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGFwaUtleSA6IHsgdHlwZSA6ICdzJywgcmVhZE9ubHkgOiB0cnVlIH0sXG5cdFx0XHRcdGFwaVBhc3N3b3JkIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfSxcblx0XHRcdFx0c3Bva2VuTGFuZ3VhZ2UgOiB7IHR5cGUgOiAnZXMnLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGFuZ3VhZ2UsIHN1YlR5cGUgOiAnS2FsdHVyYUxhbmd1YWdlJyB9LFxuXHRcdFx0XHRmaWxlTG9jYXRpb24gOiB7IHR5cGUgOiAncycsIHJlYWRPbmx5IDogdHJ1ZSB9LFxuXHRcdFx0XHRyZXBsYWNlTWVkaWFDb250ZW50IDogeyB0eXBlIDogJ2InIH0sXG5cdFx0XHRcdGFkZGl0aW9uYWxQYXJhbWV0ZXJzIDogeyB0eXBlIDogJ3MnLCByZWFkT25seSA6IHRydWUgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYVZvaWNlYmFzZUpvYlByb3ZpZGVyRGF0YTsiXX0=