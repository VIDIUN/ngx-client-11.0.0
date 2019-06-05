/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaFeedItemInfoArgs() { }
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemXPath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemPublishDateXPath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemUniqueIdentifierXPath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemContentFileSizeXPath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemContentUrlXPath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemContentBitrateXPath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemHashXPath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.itemContentXpath;
/** @type {?|undefined} */
KalturaFeedItemInfoArgs.prototype.contentBitrateAttributeName;
var KalturaFeedItemInfo = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaFeedItemInfo, _super);
    function KalturaFeedItemInfo(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaFeedItemInfo.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaFeedItemInfo' },
            itemXPath: { type: 's' },
            itemPublishDateXPath: { type: 's' },
            itemUniqueIdentifierXPath: { type: 's' },
            itemContentFileSizeXPath: { type: 's' },
            itemContentUrlXPath: { type: 's' },
            itemContentBitrateXPath: { type: 's' },
            itemHashXPath: { type: 's' },
            itemContentXpath: { type: 's' },
            contentBitrateAttributeName: { type: 's' }
        });
        return result;
    };
    return KalturaFeedItemInfo;
}(KalturaObjectBase));
export { KalturaFeedItemInfo };
if (false) {
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemXPath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemPublishDateXPath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemUniqueIdentifierXPath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemContentFileSizeXPath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemContentUrlXPath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemContentBitrateXPath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemHashXPath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.itemContentXpath;
    /** @type {?} */
    KalturaFeedItemInfo.prototype.contentBitrateAttributeName;
}
typesMappingStorage['KalturaFeedItemInfo'] = KalturaFeedItemInfo;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlZWRJdGVtSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZlZWRJdGVtSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZWxGLElBQUE7SUFBeUMsK0NBQWlCO0lBWXRELDZCQUFZLElBQStCO2VBRXZDLGtCQUFNLElBQUksQ0FBQztLQUNkOzs7O0lBRVMsMENBQVk7OztJQUF0Qjs7UUFFSSxJQUFNLE1BQU0sR0FBRyxpQkFBTSxZQUFZLFdBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCOzhCQXJETDtFQWlCeUMsaUJBQWlCLEVBcUN6RCxDQUFBO0FBckNELCtCQXFDQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsR0FBRyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgS2FsdHVyYU9iamVjdE1ldGFkYXRhLCB0eXBlc01hcHBpbmdTdG9yYWdlIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUZlZWRJdGVtSW5mb0FyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBpdGVtWFBhdGg/IDogc3RyaW5nO1xuXHRpdGVtUHVibGlzaERhdGVYUGF0aD8gOiBzdHJpbmc7XG5cdGl0ZW1VbmlxdWVJZGVudGlmaWVyWFBhdGg/IDogc3RyaW5nO1xuXHRpdGVtQ29udGVudEZpbGVTaXplWFBhdGg/IDogc3RyaW5nO1xuXHRpdGVtQ29udGVudFVybFhQYXRoPyA6IHN0cmluZztcblx0aXRlbUNvbnRlbnRCaXRyYXRlWFBhdGg/IDogc3RyaW5nO1xuXHRpdGVtSGFzaFhQYXRoPyA6IHN0cmluZztcblx0aXRlbUNvbnRlbnRYcGF0aD8gOiBzdHJpbmc7XG5cdGNvbnRlbnRCaXRyYXRlQXR0cmlidXRlTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFGZWVkSXRlbUluZm8gZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBpdGVtWFBhdGggOiBzdHJpbmc7XG5cdGl0ZW1QdWJsaXNoRGF0ZVhQYXRoIDogc3RyaW5nO1xuXHRpdGVtVW5pcXVlSWRlbnRpZmllclhQYXRoIDogc3RyaW5nO1xuXHRpdGVtQ29udGVudEZpbGVTaXplWFBhdGggOiBzdHJpbmc7XG5cdGl0ZW1Db250ZW50VXJsWFBhdGggOiBzdHJpbmc7XG5cdGl0ZW1Db250ZW50Qml0cmF0ZVhQYXRoIDogc3RyaW5nO1xuXHRpdGVtSGFzaFhQYXRoIDogc3RyaW5nO1xuXHRpdGVtQ29udGVudFhwYXRoIDogc3RyaW5nO1xuXHRjb250ZW50Qml0cmF0ZUF0dHJpYnV0ZU5hbWUgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFGZWVkSXRlbUluZm9BcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYUZlZWRJdGVtSW5mbycgfSxcblx0XHRcdFx0aXRlbVhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1QdWJsaXNoRGF0ZVhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1VbmlxdWVJZGVudGlmaWVyWFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbUNvbnRlbnRGaWxlU2l6ZVhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1Db250ZW50VXJsWFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbUNvbnRlbnRCaXRyYXRlWFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbUhhc2hYUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtQ29udGVudFhwYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGNvbnRlbnRCaXRyYXRlQXR0cmlidXRlTmFtZSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhRmVlZEl0ZW1JbmZvJ10gPSBLYWx0dXJhRmVlZEl0ZW1JbmZvOyJdfQ==