/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaAccessControlScope } from './KalturaAccessControlScope';
/**
 * @record
 */
export function KalturaEntryContextDataParamsArgs() { }
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.flavorAssetId;
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.flavorTags;
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.streamerType;
/** @type {?|undefined} */
KalturaEntryContextDataParamsArgs.prototype.mediaProtocol;
export class KalturaEntryContextDataParams extends KalturaAccessControlScope {
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
            objectType: { type: 'c', default: 'KalturaEntryContextDataParams' },
            flavorAssetId: { type: 's' },
            flavorTags: { type: 's' },
            streamerType: { type: 's' },
            mediaProtocol: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.flavorAssetId;
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.flavorTags;
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.streamerType;
    /** @type {?} */
    KalturaEntryContextDataParams.prototype.mediaProtocol;
}
typesMappingStorage['KalturaEntryContextDataParams'] = KalturaEntryContextDataParams;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9rYWx0dXJhLW5neC1jbGllbnQvIiwic291cmNlcyI6WyJsaWIvYXBpL3R5cGVzL0thbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQXlCLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHlCQUF5QixFQUFpQyxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7O0FBVXZHLE1BQU0sb0NBQXFDLFNBQVEseUJBQXlCOzs7O0lBT3hFLFlBQVksSUFBeUM7UUFFakQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLCtCQUErQixFQUFFO1lBQ2xGLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMzQixZQUFZLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzdCLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDckIsQ0FDSixDQUFDO1FBQ0YsTUFBTSxDQUFDLE1BQU0sQ0FBQztLQUNqQjtDQUNKOzs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLCtCQUErQixDQUFDLEdBQUcsNkJBQTZCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZSwgS2FsdHVyYUFjY2Vzc0NvbnRyb2xTY29wZUFyZ3MgfSBmcm9tICcuL0thbHR1cmFBY2Nlc3NDb250cm9sU2NvcGUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFFbnRyeUNvbnRleHREYXRhUGFyYW1zQXJncyAgZXh0ZW5kcyBLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlQXJncyB7XG4gICAgZmxhdm9yQXNzZXRJZD8gOiBzdHJpbmc7XG5cdGZsYXZvclRhZ3M/IDogc3RyaW5nO1xuXHRzdHJlYW1lclR5cGU/IDogc3RyaW5nO1xuXHRtZWRpYVByb3RvY29sPyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMgZXh0ZW5kcyBLYWx0dXJhQWNjZXNzQ29udHJvbFNjb3BlIHtcblxuICAgIGZsYXZvckFzc2V0SWQgOiBzdHJpbmc7XG5cdGZsYXZvclRhZ3MgOiBzdHJpbmc7XG5cdHN0cmVhbWVyVHlwZSA6IHN0cmluZztcblx0bWVkaWFQcm90b2NvbCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXNBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXMnIH0sXG5cdFx0XHRcdGZsYXZvckFzc2V0SWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Zmxhdm9yVGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzdHJlYW1lclR5cGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bWVkaWFQcm90b2NvbCA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRW50cnlDb250ZXh0RGF0YVBhcmFtcyddID0gS2FsdHVyYUVudHJ5Q29udGV4dERhdGFQYXJhbXM7Il19