/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaDropFolderFile } from './KalturaDropFolderFile';
/**
 * @record
 */
export function KalturaFeedDropFolderFileArgs() { }
/** @type {?|undefined} */
KalturaFeedDropFolderFileArgs.prototype.hash;
/** @type {?|undefined} */
KalturaFeedDropFolderFileArgs.prototype.feedXmlPath;
export class KalturaFeedDropFolderFile extends KalturaDropFolderFile {
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
            objectType: { type: 'c', default: 'KalturaFeedDropFolderFile' },
            hash: { type: 's' },
            feedXmlPath: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaFeedDropFolderFile.prototype.hash;
    /** @type {?} */
    KalturaFeedDropFolderFile.prototype.feedXmlPath;
}
typesMappingStorage['KalturaFeedDropFolderFile'] = KalturaFeedDropFolderFile;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBNkIsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7O0FBUTNGLE1BQU0sZ0NBQWlDLFNBQVEscUJBQXFCOzs7O0lBS2hFLFlBQVksSUFBcUM7UUFFN0MsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzlFLElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDckIsV0FBVyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNuQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLHlCQUF5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFEcm9wRm9sZGVyRmlsZSwgS2FsdHVyYURyb3BGb2xkZXJGaWxlQXJncyB9IGZyb20gJy4vS2FsdHVyYURyb3BGb2xkZXJGaWxlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhRmVlZERyb3BGb2xkZXJGaWxlQXJncyAgZXh0ZW5kcyBLYWx0dXJhRHJvcEZvbGRlckZpbGVBcmdzIHtcbiAgICBoYXNoPyA6IHN0cmluZztcblx0ZmVlZFhtbFBhdGg/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRmVlZERyb3BGb2xkZXJGaWxlIGV4dGVuZHMgS2FsdHVyYURyb3BGb2xkZXJGaWxlIHtcblxuICAgIGhhc2ggOiBzdHJpbmc7XG5cdGZlZWRYbWxQYXRoIDogc3RyaW5nO1xuXG4gICAgY29uc3RydWN0b3IoZGF0YT8gOiBLYWx0dXJhRmVlZERyb3BGb2xkZXJGaWxlQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFGZWVkRHJvcEZvbGRlckZpbGUnIH0sXG5cdFx0XHRcdGhhc2ggOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0ZmVlZFhtbFBhdGggOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZSddID0gS2FsdHVyYUZlZWREcm9wRm9sZGVyRmlsZTsiXX0=