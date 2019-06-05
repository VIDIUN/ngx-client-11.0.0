/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaBulkUploadResult } from './KalturaBulkUploadResult';
/**
 * @record
 */
export function KalturaBulkUploadResultCategoryArgs() { }
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.relativePath;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.name;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.referenceId;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.description;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.tags;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.appearInList;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.privacy;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.inheritanceType;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.userJoinPolicy;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.defaultPermissionLevel;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.owner;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.contributionPolicy;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.partnerSortValue;
/** @type {?|undefined} */
KalturaBulkUploadResultCategoryArgs.prototype.moderation;
export class KalturaBulkUploadResultCategory extends KalturaBulkUploadResult {
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
            objectType: { type: 'c', default: 'KalturaBulkUploadResultCategory' },
            relativePath: { type: 's' },
            name: { type: 's' },
            referenceId: { type: 's' },
            description: { type: 's' },
            tags: { type: 's' },
            appearInList: { type: 'n' },
            privacy: { type: 'n' },
            inheritanceType: { type: 'n' },
            userJoinPolicy: { type: 'n' },
            defaultPermissionLevel: { type: 'n' },
            owner: { type: 's' },
            contributionPolicy: { type: 'n' },
            partnerSortValue: { type: 'n' },
            moderation: { type: 'b' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.relativePath;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.name;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.referenceId;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.description;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.tags;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.appearInList;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.privacy;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.inheritanceType;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.userJoinPolicy;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.defaultPermissionLevel;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.owner;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.contributionPolicy;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.partnerSortValue;
    /** @type {?} */
    KalturaBulkUploadResultCategory.prototype.moderation;
}
typesMappingStorage['KalturaBulkUploadResultCategory'] = KalturaBulkUploadResultCategory;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JqRyxNQUFNLHNDQUF1QyxTQUFRLHVCQUF1Qjs7OztJQWlCeEUsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsWUFBWSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM3QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFdBQVcsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDNUIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUM1QixJQUFJLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3JCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDN0IsT0FBTyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN4QixlQUFlLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ2hDLGNBQWMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDL0Isc0JBQXNCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3ZDLEtBQUssRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDdEIsa0JBQWtCLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ25DLGdCQUFnQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNqQyxVQUFVLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1NBQ2xCLENBQ0osQ0FBQztRQUNGLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDakI7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQsIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB9IGZyb20gJy4vS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnlBcmdzICBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0QXJncyB7XG4gICAgcmVsYXRpdmVQYXRoPyA6IHN0cmluZztcblx0bmFtZT8gOiBzdHJpbmc7XG5cdHJlZmVyZW5jZUlkPyA6IHN0cmluZztcblx0ZGVzY3JpcHRpb24/IDogc3RyaW5nO1xuXHR0YWdzPyA6IHN0cmluZztcblx0YXBwZWFySW5MaXN0PyA6IG51bWJlcjtcblx0cHJpdmFjeT8gOiBudW1iZXI7XG5cdGluaGVyaXRhbmNlVHlwZT8gOiBudW1iZXI7XG5cdHVzZXJKb2luUG9saWN5PyA6IG51bWJlcjtcblx0ZGVmYXVsdFBlcm1pc3Npb25MZXZlbD8gOiBudW1iZXI7XG5cdG93bmVyPyA6IHN0cmluZztcblx0Y29udHJpYnV0aW9uUG9saWN5PyA6IG51bWJlcjtcblx0cGFydG5lclNvcnRWYWx1ZT8gOiBudW1iZXI7XG5cdG1vZGVyYXRpb24/IDogYm9vbGVhbjtcbn1cblxuXG5leHBvcnQgY2xhc3MgS2FsdHVyYUJ1bGtVcGxvYWRSZXN1bHRDYXRlZ29yeSBleHRlbmRzIEthbHR1cmFCdWxrVXBsb2FkUmVzdWx0IHtcblxuICAgIHJlbGF0aXZlUGF0aCA6IHN0cmluZztcblx0bmFtZSA6IHN0cmluZztcblx0cmVmZXJlbmNlSWQgOiBzdHJpbmc7XG5cdGRlc2NyaXB0aW9uIDogc3RyaW5nO1xuXHR0YWdzIDogc3RyaW5nO1xuXHRhcHBlYXJJbkxpc3QgOiBudW1iZXI7XG5cdHByaXZhY3kgOiBudW1iZXI7XG5cdGluaGVyaXRhbmNlVHlwZSA6IG51bWJlcjtcblx0dXNlckpvaW5Qb2xpY3kgOiBudW1iZXI7XG5cdGRlZmF1bHRQZXJtaXNzaW9uTGV2ZWwgOiBudW1iZXI7XG5cdG93bmVyIDogc3RyaW5nO1xuXHRjb250cmlidXRpb25Qb2xpY3kgOiBudW1iZXI7XG5cdHBhcnRuZXJTb3J0VmFsdWUgOiBudW1iZXI7XG5cdG1vZGVyYXRpb24gOiBib29sZWFuO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdENhdGVnb3J5QXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFCdWxrVXBsb2FkUmVzdWx0Q2F0ZWdvcnknIH0sXG5cdFx0XHRcdHJlbGF0aXZlUGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRuYW1lIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHJlZmVyZW5jZUlkIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGRlc2NyaXB0aW9uIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdHRhZ3MgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0YXBwZWFySW5MaXN0IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHByaXZhY3kgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0aW5oZXJpdGFuY2VUeXBlIDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHVzZXJKb2luUG9saWN5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdGRlZmF1bHRQZXJtaXNzaW9uTGV2ZWwgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0b3duZXIgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0Y29udHJpYnV0aW9uUG9saWN5IDogeyB0eXBlIDogJ24nIH0sXG5cdFx0XHRcdHBhcnRuZXJTb3J0VmFsdWUgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bW9kZXJhdGlvbiA6IHsgdHlwZSA6ICdiJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdENhdGVnb3J5J10gPSBLYWx0dXJhQnVsa1VwbG9hZFJlc3VsdENhdGVnb3J5OyJdfQ==