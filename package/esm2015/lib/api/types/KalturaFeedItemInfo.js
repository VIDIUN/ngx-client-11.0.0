/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaFeedItemInfo extends KalturaObjectBase {
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
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlZWRJdGVtSW5mby5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZlZWRJdGVtSW5mby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlbEYsTUFBTSwwQkFBMkIsU0FBUSxpQkFBaUI7Ozs7SUFZdEQsWUFBWSxJQUErQjtRQUV2QyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcscUJBQXFCLEVBQUU7WUFDeEUsU0FBUyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUMxQixvQkFBb0IsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckMseUJBQXlCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFDLHdCQUF3QixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN6QyxtQkFBbUIsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDcEMsdUJBQXVCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3hDLGFBQWEsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDOUIsZ0JBQWdCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2pDLDJCQUEyQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQyxDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEdBQUcsbUJBQW1CLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU9iamVjdEJhc2UsIEthbHR1cmFPYmplY3RCYXNlQXJncyB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFGZWVkSXRlbUluZm9BcmdzICBleHRlbmRzIEthbHR1cmFPYmplY3RCYXNlQXJncyB7XG4gICAgaXRlbVhQYXRoPyA6IHN0cmluZztcblx0aXRlbVB1Ymxpc2hEYXRlWFBhdGg/IDogc3RyaW5nO1xuXHRpdGVtVW5pcXVlSWRlbnRpZmllclhQYXRoPyA6IHN0cmluZztcblx0aXRlbUNvbnRlbnRGaWxlU2l6ZVhQYXRoPyA6IHN0cmluZztcblx0aXRlbUNvbnRlbnRVcmxYUGF0aD8gOiBzdHJpbmc7XG5cdGl0ZW1Db250ZW50Qml0cmF0ZVhQYXRoPyA6IHN0cmluZztcblx0aXRlbUhhc2hYUGF0aD8gOiBzdHJpbmc7XG5cdGl0ZW1Db250ZW50WHBhdGg/IDogc3RyaW5nO1xuXHRjb250ZW50Qml0cmF0ZUF0dHJpYnV0ZU5hbWU/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmVlZEl0ZW1JbmZvIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAgaXRlbVhQYXRoIDogc3RyaW5nO1xuXHRpdGVtUHVibGlzaERhdGVYUGF0aCA6IHN0cmluZztcblx0aXRlbVVuaXF1ZUlkZW50aWZpZXJYUGF0aCA6IHN0cmluZztcblx0aXRlbUNvbnRlbnRGaWxlU2l6ZVhQYXRoIDogc3RyaW5nO1xuXHRpdGVtQ29udGVudFVybFhQYXRoIDogc3RyaW5nO1xuXHRpdGVtQ29udGVudEJpdHJhdGVYUGF0aCA6IHN0cmluZztcblx0aXRlbUhhc2hYUGF0aCA6IHN0cmluZztcblx0aXRlbUNvbnRlbnRYcGF0aCA6IHN0cmluZztcblx0Y29udGVudEJpdHJhdGVBdHRyaWJ1dGVOYW1lIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmVlZEl0ZW1JbmZvQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGZWVkSXRlbUluZm8nIH0sXG5cdFx0XHRcdGl0ZW1YUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtUHVibGlzaERhdGVYUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtVW5pcXVlSWRlbnRpZmllclhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1Db250ZW50RmlsZVNpemVYUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRpdGVtQ29udGVudFVybFhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1Db250ZW50Qml0cmF0ZVhQYXRoIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGl0ZW1IYXNoWFBhdGggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0aXRlbUNvbnRlbnRYcGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRjb250ZW50Qml0cmF0ZUF0dHJpYnV0ZU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZlZWRJdGVtSW5mbyddID0gS2FsdHVyYUZlZWRJdGVtSW5mbzsiXX0=