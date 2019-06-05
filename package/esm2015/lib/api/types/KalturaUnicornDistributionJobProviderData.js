/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaConfigurableDistributionJobProviderData } from './KalturaConfigurableDistributionJobProviderData';
/**
 * @record
 */
export function KalturaUnicornDistributionJobProviderDataArgs() { }
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.catalogGuid;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.title;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.mediaChanged;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.flavorAssetVersion;
/** @type {?|undefined} */
KalturaUnicornDistributionJobProviderDataArgs.prototype.notificationBaseUrl;
export class KalturaUnicornDistributionJobProviderData extends KalturaConfigurableDistributionJobProviderData {
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
            objectType: { type: 'c', default: 'KalturaUnicornDistributionJobProviderData' },
            catalogGuid: { type: 's' },
            title: { type: 's' },
            mediaChanged: { type: 'b' },
            flavorAssetVersion: { type: 's' },
            notificationBaseUrl: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.catalogGuid;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.title;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.mediaChanged;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.flavorAssetVersion;
    /** @type {?} */
    KalturaUnicornDistributionJobProviderData.prototype.notificationBaseUrl;
}
typesMappingStorage['KalturaUnicornDistributionJobProviderData'] = KalturaUnicornDistributionJobProviderData;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhDQUE4QyxFQUFzRCxNQUFNLGtEQUFrRCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUFXdEssTUFBTSxnREFBaUQsU0FBUSw4Q0FBOEM7Ozs7SUFRekcsWUFBWSxJQUFxRDtRQUU3RCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsMkNBQTJDLEVBQUU7WUFDOUYsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixLQUFLLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3RCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0Isa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLG1CQUFtQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUMzQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQ0FBMkMsQ0FBQyxHQUFHLHlDQUF5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEsIEthbHR1cmFDb25maWd1cmFibGVEaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzIH0gZnJvbSAnLi9LYWx0dXJhQ29uZmlndXJhYmxlRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3MgIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YUFyZ3Mge1xuICAgIGNhdGFsb2dHdWlkPyA6IHN0cmluZztcblx0dGl0bGU/IDogc3RyaW5nO1xuXHRtZWRpYUNoYW5nZWQ/IDogYm9vbGVhbjtcblx0Zmxhdm9yQXNzZXRWZXJzaW9uPyA6IHN0cmluZztcblx0bm90aWZpY2F0aW9uQmFzZVVybD8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFVbmljb3JuRGlzdHJpYnV0aW9uSm9iUHJvdmlkZXJEYXRhIGV4dGVuZHMgS2FsdHVyYUNvbmZpZ3VyYWJsZURpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSB7XG5cbiAgICBjYXRhbG9nR3VpZCA6IHN0cmluZztcblx0dGl0bGUgOiBzdHJpbmc7XG5cdG1lZGlhQ2hhbmdlZCA6IGJvb2xlYW47XG5cdGZsYXZvckFzc2V0VmVyc2lvbiA6IHN0cmluZztcblx0bm90aWZpY2F0aW9uQmFzZVVybCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGFBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGEnIH0sXG5cdFx0XHRcdGNhdGFsb2dHdWlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRpdGxlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdG1lZGlhQ2hhbmdlZCA6IHsgdHlwZSA6ICdiJyB9LFxuXHRcdFx0XHRmbGF2b3JBc3NldFZlcnNpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bm90aWZpY2F0aW9uQmFzZVVybCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhVW5pY29ybkRpc3RyaWJ1dGlvbkpvYlByb3ZpZGVyRGF0YSddID0gS2FsdHVyYVVuaWNvcm5EaXN0cmlidXRpb25Kb2JQcm92aWRlckRhdGE7Il19