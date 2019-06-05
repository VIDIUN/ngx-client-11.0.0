/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaCompareCondition } from './KalturaCompareCondition';
/**
 * @record
 */
export function KalturaCompareMetadataConditionArgs() { }
/** @type {?|undefined} */
KalturaCompareMetadataConditionArgs.prototype.xPath;
/** @type {?|undefined} */
KalturaCompareMetadataConditionArgs.prototype.profileId;
/** @type {?|undefined} */
KalturaCompareMetadataConditionArgs.prototype.profileSystemName;
export class KalturaCompareMetadataCondition extends KalturaCompareCondition {
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
            objectType: { type: 'c', default: 'KalturaCompareMetadataCondition' },
            xPath: { type: 's' },
            profileId: { type: 'n' },
            profileSystemName: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaCompareMetadataCondition.prototype.xPath;
    /** @type {?} */
    KalturaCompareMetadataCondition.prototype.profileId;
    /** @type {?} */
    KalturaCompareMetadataCondition.prototype.profileSystemName;
}
typesMappingStorage['KalturaCompareMetadataCondition'] = KalturaCompareMetadataCondition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2thbHR1cmEtbmd4LWNsaWVudC8iLCJzb3VyY2VzIjpbImxpYi9hcGkvdHlwZXMvS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUF5QixtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3BGLE9BQU8sRUFBRSx1QkFBdUIsRUFBK0IsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7Ozs7Ozs7QUFTakcsTUFBTSxzQ0FBdUMsU0FBUSx1QkFBdUI7Ozs7SUFNeEUsWUFBWSxJQUEyQztRQUVuRCxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjs7OztJQUVTLFlBQVk7O1FBRWxCLE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQyxNQUFNLENBQUMsTUFBTSxDQUNULE1BQU0sQ0FBQyxVQUFVLEVBQ2pCO1lBQ0ksVUFBVSxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRSxPQUFPLEVBQUcsaUNBQWlDLEVBQUU7WUFDcEYsS0FBSyxFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUN0QixTQUFTLEVBQUcsRUFBRSxJQUFJLEVBQUcsR0FBRyxFQUFFO1lBQzFCLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtTQUN6QixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLEdBQUcsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYUNvbXBhcmVDb25kaXRpb24sIEthbHR1cmFDb21wYXJlQ29uZGl0aW9uQXJncyB9IGZyb20gJy4vS2FsdHVyYUNvbXBhcmVDb25kaXRpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIEthbHR1cmFDb21wYXJlTWV0YWRhdGFDb25kaXRpb25BcmdzICBleHRlbmRzIEthbHR1cmFDb21wYXJlQ29uZGl0aW9uQXJncyB7XG4gICAgeFBhdGg/IDogc3RyaW5nO1xuXHRwcm9maWxlSWQ/IDogbnVtYmVyO1xuXHRwcm9maWxlU3lzdGVtTmFtZT8gOiBzdHJpbmc7XG59XG5cblxuZXhwb3J0IGNsYXNzIEthbHR1cmFDb21wYXJlTWV0YWRhdGFDb25kaXRpb24gZXh0ZW5kcyBLYWx0dXJhQ29tcGFyZUNvbmRpdGlvbiB7XG5cbiAgICB4UGF0aCA6IHN0cmluZztcblx0cHJvZmlsZUlkIDogbnVtYmVyO1xuXHRwcm9maWxlU3lzdGVtTmFtZSA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbkFyZ3MpXG4gICAge1xuICAgICAgICBzdXBlcihkYXRhKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgX2dldE1ldGFkYXRhKCkgOiBLYWx0dXJhT2JqZWN0TWV0YWRhdGFcbiAgICB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN1cGVyLl9nZXRNZXRhZGF0YSgpO1xuICAgICAgICBPYmplY3QuYXNzaWduKFxuICAgICAgICAgICAgcmVzdWx0LnByb3BlcnRpZXMsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb2JqZWN0VHlwZSA6IHsgdHlwZSA6ICdjJywgZGVmYXVsdCA6ICdLYWx0dXJhQ29tcGFyZU1ldGFkYXRhQ29uZGl0aW9uJyB9LFxuXHRcdFx0XHR4UGF0aCA6IHsgdHlwZSA6ICdzJyB9LFxuXHRcdFx0XHRwcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0cHJvZmlsZVN5c3RlbU5hbWUgOiB7IHR5cGUgOiAncycgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cblxudHlwZXNNYXBwaW5nU3RvcmFnZVsnS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbiddID0gS2FsdHVyYUNvbXBhcmVNZXRhZGF0YUNvbmRpdGlvbjsiXX0=