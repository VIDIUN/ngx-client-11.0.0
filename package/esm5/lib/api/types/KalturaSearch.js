/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaSearchProviderType } from './KalturaSearchProviderType';
import { KalturaMediaType } from './KalturaMediaType';
import { KalturaObjectBase } from '../kaltura-object-base';
/**
 * @record
 */
export function KalturaSearchArgs() { }
/** @type {?|undefined} */
KalturaSearchArgs.prototype.keyWords;
/** @type {?|undefined} */
KalturaSearchArgs.prototype.searchSource;
/** @type {?|undefined} */
KalturaSearchArgs.prototype.mediaType;
/** @type {?|undefined} */
KalturaSearchArgs.prototype.extraData;
/** @type {?|undefined} */
KalturaSearchArgs.prototype.authData;
var KalturaSearch = /** @class */ (function (_super) {
    tslib_1.__extends(KalturaSearch, _super);
    function KalturaSearch(data) {
        return _super.call(this, data) || this;
    }
    /**
     * @return {?}
     */
    KalturaSearch.prototype._getMetadata = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var result = _super.prototype._getMetadata.call(this);
        Object.assign(result.properties, {
            objectType: { type: 'c', default: 'KalturaSearch' },
            keyWords: { type: 's' },
            searchSource: { type: 'en', subTypeConstructor: KalturaSearchProviderType, subType: 'KalturaSearchProviderType' },
            mediaType: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            extraData: { type: 's' },
            authData: { type: 's' }
        });
        return result;
    };
    return KalturaSearch;
}(KalturaObjectBase));
export { KalturaSearch };
if (false) {
    /** @type {?} */
    KalturaSearch.prototype.keyWords;
    /** @type {?} */
    KalturaSearch.prototype.searchSource;
    /** @type {?} */
    KalturaSearch.prototype.mediaType;
    /** @type {?} */
    KalturaSearch.prototype.extraData;
    /** @type {?} */
    KalturaSearch.prototype.authData;
}
typesMappingStorage['KalturaSearch'] = KalturaSearch;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQVdsRixJQUFBO0lBQW1DLHlDQUFpQjtJQVFoRCx1QkFBWSxJQUF5QjtlQUVqQyxrQkFBTSxJQUFJLENBQUM7S0FDZDs7OztJQUVTLG9DQUFZOzs7SUFBdEI7O1FBRUksSUFBTSxNQUFNLEdBQUcsaUJBQU0sWUFBWSxXQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ3JILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2hHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO3dCQTNDTDtFQWVtQyxpQkFBaUIsRUE2Qm5ELENBQUE7QUE3QkQseUJBNkJDOzs7Ozs7Ozs7Ozs7O0FBRUQsbUJBQW1CLENBQUMsZUFBZSxDQUFDLEdBQUcsYUFBYSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0TWV0YWRhdGEsIHR5cGVzTWFwcGluZ1N0b3JhZ2UgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcbmltcG9ydCB7IEthbHR1cmFTZWFyY2hQcm92aWRlclR5cGUgfSBmcm9tICcuL0thbHR1cmFTZWFyY2hQcm92aWRlclR5cGUnO1xuaW1wb3J0IHsgS2FsdHVyYU1lZGlhVHlwZSB9IGZyb20gJy4vS2FsdHVyYU1lZGlhVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0QmFzZSwgS2FsdHVyYU9iamVjdEJhc2VBcmdzIH0gZnJvbSAnLi4va2FsdHVyYS1vYmplY3QtYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYVNlYXJjaEFyZ3MgIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2VBcmdzIHtcbiAgICBrZXlXb3Jkcz8gOiBzdHJpbmc7XG5cdHNlYXJjaFNvdXJjZT8gOiBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlO1xuXHRtZWRpYVR5cGU/IDogS2FsdHVyYU1lZGlhVHlwZTtcblx0ZXh0cmFEYXRhPyA6IHN0cmluZztcblx0YXV0aERhdGE/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhU2VhcmNoIGV4dGVuZHMgS2FsdHVyYU9iamVjdEJhc2Uge1xuXG4gICAga2V5V29yZHMgOiBzdHJpbmc7XG5cdHNlYXJjaFNvdXJjZSA6IEthbHR1cmFTZWFyY2hQcm92aWRlclR5cGU7XG5cdG1lZGlhVHlwZSA6IEthbHR1cmFNZWRpYVR5cGU7XG5cdGV4dHJhRGF0YSA6IHN0cmluZztcblx0YXV0aERhdGEgOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPyA6IEthbHR1cmFTZWFyY2hBcmdzKVxuICAgIHtcbiAgICAgICAgc3VwZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9nZXRNZXRhZGF0YSgpIDogS2FsdHVyYU9iamVjdE1ldGFkYXRhXG4gICAge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBzdXBlci5fZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIHJlc3VsdC5wcm9wZXJ0aWVzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9iamVjdFR5cGUgOiB7IHR5cGUgOiAnYycsIGRlZmF1bHQgOiAnS2FsdHVyYVNlYXJjaCcgfSxcblx0XHRcdFx0a2V5V29yZHMgOiB7IHR5cGUgOiAncycgfSxcblx0XHRcdFx0c2VhcmNoU291cmNlIDogeyB0eXBlIDogJ2VuJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlJyB9LFxuXHRcdFx0XHRtZWRpYVR5cGUgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhTWVkaWFUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFNZWRpYVR5cGUnIH0sXG5cdFx0XHRcdGV4dHJhRGF0YSA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRhdXRoRGF0YSA6IHsgdHlwZSA6ICdzJyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG50eXBlc01hcHBpbmdTdG9yYWdlWydLYWx0dXJhU2VhcmNoJ10gPSBLYWx0dXJhU2VhcmNoOyJdfQ==