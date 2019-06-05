/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaYouTubeDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.videoAssetFilePath;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.thumbAssetFilePath;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.captionAssetIds;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.sftpDirectory;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.sftpMetadataFilename;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.currentPlaylists;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.newPlaylists;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.submitXml;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.updateXml;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.deleteXml;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.googleClientId;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.googleClientSecret;
/** @type {?|undefined} */
KalturaYouTubeDistributionJobProviderDataArgs.prototype.googleTokenData;
export class KalturaYouTubeDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
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
            objectType: { type: 'c', default: 'KalturaYouTubeDistributionJobProviderData' },
            videoAssetFilePath: { type: 's' },
            thumbAssetFilePath: { type: 's' },
            captionAssetIds: { type: 's' },
            sftpDirectory: { type: 's' },
            sftpMetadataFilename: { type: 's' },
            currentPlaylists: { type: 's' },
            newPlaylists: { type: 's' },
            submitXml: { type: 's' },
            updateXml: { type: 's' },
            deleteXml: { type: 's' },
            googleClientId: { type: 's' },
            googleClientSecret: { type: 's' },
            googleTokenData: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.videoAssetFilePath;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.thumbAssetFilePath;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.captionAssetIds;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.sftpDirectory;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.sftpMetadataFilename;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.currentPlaylists;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.newPlaylists;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.submitXml;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.updateXml;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.deleteXml;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.googleClientId;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.googleClientSecret;
    /** @type {?} */
    KalturaYouTubeDistributionJobProviderData.prototype.googleTokenData;
}
typesMappingStorage['KalturaYouTubeDistributionJobProviderData'] = KalturaYouTubeDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJ0SyxNQUFNLGdEQUFpRCxTQUFRLDhDQUE4Qzs7OztJQWdCekcsWUFBWSxJQUFxRDtRQUU3RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGtCQUFrQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNuQyxlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsb0JBQW9CLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JDLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGVBQWUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDdkIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLDJDQUEyQyxDQUFDLEdBQUcseUNBQXlDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSwgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgfSBmcm9tICcuL0thbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFZb3VUdWJlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyAgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhQXJncyB7XG4gICAgdmlkZW9Bc3NldEZpbGVQYXRoPyA6IHN0cmluZztcblx0dGh1bWJBc3NldEZpbGVQYXRoPyA6IHN0cmluZztcblx0Y2FwdGlvbkFzc2V0SWRzPyA6IHN0cmluZztcblx0c2Z0cERpcmVjdG9yeT8gOiBzdHJpbmc7XG5cdHNmdHBNZXRhZGF0YUZpbGVuYW1lPyA6IHN0cmluZztcblx0Y3VycmVudFBsYXlsaXN0cz8gOiBzdHJpbmc7XG5cdG5ld1BsYXlsaXN0cz8gOiBzdHJpbmc7XG5cdHN1Ym1pdFhtbD8gOiBzdHJpbmc7XG5cdHVwZGF0ZVhtbD8gOiBzdHJpbmc7XG5cdGRlbGV0ZVhtbD8gOiBzdHJpbmc7XG5cdGdvb2dsZUNsaWVudElkPyA6IHN0cmluZztcblx0Z29vZ2xlQ2xpZW50U2VjcmV0PyA6IHN0cmluZztcblx0Z29vZ2xlVG9rZW5EYXRhPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEgZXh0ZW5kcyBLYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIHtcblxuICAgIHZpZGVvQXNzZXRGaWxlUGF0aCA6IHN0cmluZztcblx0dGh1bWJBc3NldEZpbGVQYXRoIDogc3RyaW5nO1xuXHRjYXB0aW9uQXNzZXRJZHMgOiBzdHJpbmc7XG5cdHNmdHBEaXJlY3RvcnkgOiBzdHJpbmc7XG5cdHNmdHBNZXRhZGF0YUZpbGVuYW1lIDogc3RyaW5nO1xuXHRjdXJyZW50UGxheWxpc3RzIDogc3RyaW5nO1xuXHRuZXdQbGF5bGlzdHMgOiBzdHJpbmc7XG5cdHN1Ym1pdFhtbCA6IHN0cmluZztcblx0dXBkYXRlWG1sIDogc3RyaW5nO1xuXHRkZWxldGVYbWwgOiBzdHJpbmc7XG5cdGdvb2dsZUNsaWVudElkIDogc3RyaW5nO1xuXHRnb29nbGVDbGllbnRTZWNyZXQgOiBzdHJpbmc7XG5cdGdvb2dsZVRva2VuRGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdHZpZGVvQXNzZXRGaWxlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYkFzc2V0RmlsZVBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y2FwdGlvbkFzc2V0SWRzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHNmdHBEaXJlY3RvcnkgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2Z0cE1ldGFkYXRhRmlsZW5hbWUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y3VycmVudFBsYXlsaXN0cyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuZXdQbGF5bGlzdHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c3VibWl0WG1sIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVwZGF0ZVhtbCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZWxldGVYbWwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Z29vZ2xlQ2xpZW50SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Z29vZ2xlQ2xpZW50U2VjcmV0IDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGdvb2dsZVRva2VuRGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhWW91VHViZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYVlvdVR1YmVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19