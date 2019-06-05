/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaSearchResult extends KalturaSearch {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaFJlc3VsdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNlYXJjaFJlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzFELE9BQU8sRUFBRSxhQUFhLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCbkUsTUFBTSwwQkFBMkIsU0FBUSxhQUFhOzs7O0lBY2xELFlBQVksSUFBK0I7UUFFdkMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHFCQUFxQixFQUFFO1lBQ3hFLEVBQUUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbkIsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsSUFBSSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNyQixHQUFHLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3BCLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN2QixXQUFXLEVBQUcsRUFBRSxJQUFJLEVBQUcsSUFBSSxFQUFFLGtCQUFrQixFQUFHLGtCQUFrQixFQUFFLE9BQU8sRUFBRyxvQkFBb0IsRUFBRTtZQUN0RyxpQkFBaUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDbEMsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNmLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUxpY2Vuc2VUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTGljZW5zZVR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaCwgS2FsdHVyYVNlYXJjaEFyZ3MgfSBmcm9tICcuL0thbHR1cmFTZWFyY2gnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFTZWFyY2hSZXN1bHRBcmdzICBleHRlbmRzIEthbHR1cmFTZWFyY2hBcmdzIHtcbiAgICBpZD8gOiBzdHJpbmc7XG5cdHRpdGxlPyA6IHN0cmluZztcblx0dGh1bWJVcmw/IDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbj8gOiBzdHJpbmc7XG5cdHRhZ3M/IDogc3RyaW5nO1xuXHR1cmw/IDogc3RyaW5nO1xuXHRzb3VyY2VMaW5rPyA6IHN0cmluZztcblx0Y3JlZGl0PyA6IHN0cmluZztcblx0bGljZW5zZVR5cGU/IDogS2FsdHVyYUxpY2Vuc2VUeXBlO1xuXHRmbGFzaFBsYXliYWNrVHlwZT8gOiBzdHJpbmc7XG5cdGZpbGVFeHQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2VhcmNoUmVzdWx0IGV4dGVuZHMgS2FsdHVyYVNlYXJjaCB7XG5cbiAgICBpZCA6IHN0cmluZztcblx0dGl0bGUgOiBzdHJpbmc7XG5cdHRodW1iVXJsIDogc3RyaW5nO1xuXHRkZXNjcmlwdGlvbiA6IHN0cmluZztcblx0dGFncyA6IHN0cmluZztcblx0dXJsIDogc3RyaW5nO1xuXHRzb3VyY2VMaW5rIDogc3RyaW5nO1xuXHRjcmVkaXQgOiBzdHJpbmc7XG5cdGxpY2Vuc2VUeXBlIDogS2FsdHVyYUxpY2Vuc2VUeXBlO1xuXHRmbGFzaFBsYXliYWNrVHlwZSA6IHN0cmluZztcblx0ZmlsZUV4dCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNlYXJjaFJlc3VsdEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2VhcmNoUmVzdWx0JyB9LFxuXHRcdFx0XHRpZCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aXRsZSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0aHVtYlVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRkZXNjcmlwdGlvbiA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHR0YWdzIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHVybCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzb3VyY2VMaW5rIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNyZWRpdCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRsaWNlbnNlVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFMaWNlbnNlVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTGljZW5zZVR5cGUnIH0sXG5cdFx0XHRcdGZsYXNoUGxheWJhY2tUeXBlIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGZpbGVFeHQgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYVNlYXJjaFJlc3VsdCddID0gS2FsdHVyYVNlYXJjaFJlc3VsdDsiXX0=