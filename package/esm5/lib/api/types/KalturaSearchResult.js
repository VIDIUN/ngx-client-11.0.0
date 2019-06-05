/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaLicenseType } from './KalturaLicenseType';
import { KalturaSearch } from './KalturaSearch';
/**
 * @record
 */
export function KalturaSearchResultArgs() { }
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.id;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.title;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.thumbUrl;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.description;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.tags;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.url;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.sourceLink;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.credit;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.licenseType;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.flashPlaybackType;
/** @type {?|undefined} */
KalturaSearchResultArgs.prototype.fileExt;
var KalturaSearchResult = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSearchResult, _super);
    function KalturaSearchResult(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSearchResult.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearchResult' },
            id: { type: 's' },
            title: { type: 's' },
            thumbUrl: { type: 's' },
            description: { type: 's' },
            tags: { type: 's' },
            url: { type: 's' },
            sourceLink: { type: 's' },
            credit: { type: 's' },
            licenseType: { type: 'en', subTypeConstructor: KalturaLicenseType, subType: 'KalturaLicenseType' },
            flashPlaybackType: { type: 's' },
            fileExt: { type: 's' }
        });
        return result;
    };
    return KalturaSearchResult;
}(KalturaSearch));
export { KalturaSearchResult };
if (false) {
    /** @type {?} */
    KalturaSearchResult.prototype.id;
    /** @type {?} */
    KalturaSearchResult.prototype.title;
    /** @type {?} */
    KalturaSearchResult.prototype.thumbUrl;
    /** @type {?} */
    KalturaSearchResult.prototype.description;
    /** @type {?} */
    KalturaSearchResult.prototype.tags;
    /** @type {?} */
    KalturaSearchResult.prototype.url;
    /** @type {?} */
    KalturaSearchResult.prototype.sourceLink;
    /** @type {?} */
    KalturaSearchResult.prototype.credit;
    /** @type {?} */
    KalturaSearchResult.prototype.licenseType;
    /** @type {?} */
    KalturaSearchResult.prototype.flashPlaybackType;
    /** @type {?} */
    KalturaSearchResult.prototype.fileExt;
}
typesMappingStorage['KalturaSearchResult'] = KalturaSearchResult;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaFJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNlYXJjaFJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFxQixNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQm5FLElBQUE7SUFBeUMsK0NBQWE7SUFjbEQsNkJBQVksSUFBK0I7ZUFFdkMsa0JBQU0sSUFBSSxDQUFDO0tBQ2Q7Ozs7SUFFUywwQ0FBWTs7O0lBQXRCOztRQUVJLElBQU0sTUFBTSxHQUFHLGlCQUFNLFlBQVksV0FBRSxDQUFDO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQ1QsTUFBTSxDQUFDLFVBQVUsRUFDakI7WUFDSSxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFLE9BQU8sRUFBRyxxQkFBcUIsRUFBRTtZQUN4RSxFQUFFLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25CLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzVCLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsR0FBRyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNwQixVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzNCLE1BQU0sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdkIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLElBQUksRUFBRSxrQkFBa0IsRUFBRyxrQkFBa0IsRUFBRSxPQUFPLEVBQUcsb0JBQW9CLEVBQUU7WUFDdEcsaUJBQWlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2xDLE9BQU8sRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDZixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhCQTVETDtFQW9CeUMsYUFBYSxFQXlDckQsQ0FBQTtBQXpDRCwrQkF5Q0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxHQUFHLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFMaWNlbnNlVHlwZSB9IGZyb20gJy4vS2FsdHVyYUxpY2Vuc2VUeXBlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2gsIEthbHR1cmFTZWFyY2hBcmdzIH0gZnJvbSAnLi9LYWx0dXJhU2VhcmNoJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2VhcmNoUmVzdWx0QXJncyAgZXh0ZW5kcyBLYWx0dXJhU2VhcmNoQXJncyB7XG4gICAgaWQ/IDogc3RyaW5nO1xuXHR0aXRsZT8gOiBzdHJpbmc7XG5cdHRodW1iVXJsPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0dXJsPyA6IHN0cmluZztcblx0c291cmNlTGluaz8gOiBzdHJpbmc7XG5cdGNyZWRpdD8gOiBzdHJpbmc7XG5cdGxpY2Vuc2VUeXBlPyA6IEthbHR1cmFMaWNlbnNlVHlwZTtcblx0Zmxhc2hQbGF5YmFja1R5cGU/IDogc3RyaW5nO1xuXHRmaWxlRXh0PyA6IHN0cmluZztcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYVNlYXJjaFJlc3VsdCBleHRlbmRzIEthbHR1cmFTZWFyY2gge1xuXG4gICAgaWQgOiBzdHJpbmc7XG5cdHRpdGxlIDogc3RyaW5nO1xuXHR0aHVtYlVybCA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24gOiBzdHJpbmc7XG5cdHRhZ3MgOiBzdHJpbmc7XG5cdHVybCA6IHN0cmluZztcblx0c291cmNlTGluayA6IHN0cmluZztcblx0Y3JlZGl0IDogc3RyaW5nO1xuXHRsaWNlbnNlVHlwZSA6IEthbHR1cmFMaWNlbnNlVHlwZTtcblx0Zmxhc2hQbGF5YmFja1R5cGUgOiBzdHJpbmc7XG5cdGZpbGVFeHQgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTZWFyY2hSZXN1bHRBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlYXJjaFJlc3VsdCcgfSxcblx0XHRcdFx0aWQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGl0bGUgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGh1bWJVcmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZGVzY3JpcHRpb24gOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0dGFncyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR1cmwgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c291cmNlTGluayA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjcmVkaXQgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0bGljZW5zZVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTGljZW5zZVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYUxpY2Vuc2VUeXBlJyB9LFxuXHRcdFx0XHRmbGFzaFBsYXliYWNrVHlwZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRmaWxlRXh0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTZWFyY2hSZXN1bHQnXSA9IEthbHR1cmFTZWFyY2hSZXN1bHQ7Il19