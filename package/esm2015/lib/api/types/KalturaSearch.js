/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class KalturaSearch extends KalturaObjectBase {
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
            objectType: { type: 'c', default: 'KalturaSearch' },
            keyWords: { type: 's' },
            searchSource: { type: 'en', subTypeConstructor: KalturaSearchProviderType, subType: 'KalturaSearchProviderType' },
            mediaType: { type: 'en', subTypeConstructor: KalturaMediaType, subType: 'KalturaMediaType' },
            extraData: { type: 's' },
            authData: { type: 's' }
        });
        return result;
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYVNlYXJjaC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYVNlYXJjaC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxpQkFBaUIsRUFBeUIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FBV2xGLE1BQU0sb0JBQXFCLFNBQVEsaUJBQWlCOzs7O0lBUWhELFlBQVksSUFBeUI7UUFFakMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLGVBQWUsRUFBRTtZQUNsRSxRQUFRLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQ3pCLFlBQVksRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQ3JILFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcsZ0JBQWdCLEVBQUUsT0FBTyxFQUFHLGtCQUFrQixFQUFFO1lBQ2hHLFNBQVMsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7WUFDMUIsUUFBUSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUNoQixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7Ozs7Ozs7QUFFRCxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsR0FBRyxhQUFhLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZSB9IGZyb20gJy4vS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhTWVkaWFUeXBlIH0gZnJvbSAnLi9LYWx0dXJhTWVkaWFUeXBlJztcbmltcG9ydCB7IEthbHR1cmFPYmplY3RCYXNlLCBLYWx0dXJhT2JqZWN0QmFzZUFyZ3MgfSBmcm9tICcuLi9rYWx0dXJhLW9iamVjdC1iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBLYWx0dXJhU2VhcmNoQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZUFyZ3Mge1xuICAgIGtleVdvcmRzPyA6IHN0cmluZztcblx0c2VhcmNoU291cmNlPyA6IEthbHR1cmFTZWFyY2hQcm92aWRlclR5cGU7XG5cdG1lZGlhVHlwZT8gOiBLYWx0dXJhTWVkaWFUeXBlO1xuXHRleHRyYURhdGE/IDogc3RyaW5nO1xuXHRhdXRoRGF0YT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFTZWFyY2ggZXh0ZW5kcyBLYWx0dXJhT2JqZWN0QmFzZSB7XG5cbiAgICBrZXlXb3JkcyA6IHN0cmluZztcblx0c2VhcmNoU291cmNlIDogS2FsdHVyYVNlYXJjaFByb3ZpZGVyVHlwZTtcblx0bWVkaWFUeXBlIDogS2FsdHVyYU1lZGlhVHlwZTtcblx0ZXh0cmFEYXRhIDogc3RyaW5nO1xuXHRhdXRoRGF0YSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYVNlYXJjaEFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhU2VhcmNoJyB9LFxuXHRcdFx0XHRrZXlXb3JkcyA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRzZWFyY2hTb3VyY2UgOiB7IHR5cGUgOiAnZW4nLCBzdWJUeXBlQ29uc3RydWN0b3IgOiBLYWx0dXJhU2VhcmNoUHJvdmlkZXJUeXBlLCBzdWJUeXBlIDogJ0thbHR1cmFTZWFyY2hQcm92aWRlclR5cGUnIH0sXG5cdFx0XHRcdG1lZGlhVHlwZSA6IHsgdHlwZSA6ICdlbicsIHN1YlR5cGVDb25zdHJ1Y3RvciA6IEthbHR1cmFNZWRpYVR5cGUsIHN1YlR5cGUgOiAnS2FsdHVyYU1lZGlhVHlwZScgfSxcblx0XHRcdFx0ZXh0cmFEYXRhIDogeyB0eXBlIDogJ3MnIH0sXG5cdFx0XHRcdGF1dGhEYXRhIDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFTZWFyY2gnXSA9IEthbHR1cmFTZWFyY2g7Il19