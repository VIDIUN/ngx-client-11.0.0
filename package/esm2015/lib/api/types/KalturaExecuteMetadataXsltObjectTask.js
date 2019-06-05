/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { typesMappingStorage } from '../kaltura-object-base';
import { KalturaMetadataObjectType } from './KalturaMetadataObjectType';
import { KalturaObjectTask } from './KalturaObjectTask';
/**
 * @record
 */
export function KalturaExecuteMetadataXsltObjectTaskArgs() { }
/** @type {?|undefined} */
KalturaExecuteMetadataXsltObjectTaskArgs.prototype.metadataProfileId;
/** @type {?|undefined} */
KalturaExecuteMetadataXsltObjectTaskArgs.prototype.metadataObjectType;
/** @type {?|undefined} */
KalturaExecuteMetadataXsltObjectTaskArgs.prototype.xslt;
export class KalturaExecuteMetadataXsltObjectTask extends KalturaObjectTask {
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
            objectType: { type: 'c', default: 'KalturaExecuteMetadataXsltObjectTask' },
            metadataProfileId: { type: 'n' },
            metadataObjectType: { type: 'es', subTypeConstructor: KalturaMetadataObjectType, subType: 'KalturaMetadataObjectType' },
            xslt: { type: 's' }
        });
        return result;
    }
}
if (false) {
    /** @type {?} */
    KalturaExecuteMetadataXsltObjectTask.prototype.metadataProfileId;
    /** @type {?} */
    KalturaExecuteMetadataXsltObjectTask.prototype.metadataObjectType;
    /** @type {?} */
    KalturaExecuteMetadataXsltObjectTask.prototype.xslt;
}
typesMappingStorage['KalturaExecuteMetadataXsltObjectTask'] = KalturaExecuteMetadataXsltObjectTask;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2FsdHVyYUV4ZWN1dGVNZXRhZGF0YVhzbHRPYmplY3RUYXNrLmpzIiwic291cmNlUm9vdCI6Im5nOi8va2FsdHVyYS1uZ3gtY2xpZW50LyIsInNvdXJjZXMiOlsibGliL2FwaS90eXBlcy9LYWx0dXJhRXhlY3V0ZU1ldGFkYXRhWHNsdE9iamVjdFRhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBeUIsbUJBQW1CLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRixPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN4RSxPQUFPLEVBQUUsaUJBQWlCLEVBQXlCLE1BQU0scUJBQXFCLENBQUM7Ozs7Ozs7Ozs7O0FBUy9FLE1BQU0sMkNBQTRDLFNBQVEsaUJBQWlCOzs7O0lBTXZFLFlBQVksSUFBZ0Q7UUFFeEQsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2Y7Ozs7SUFFUyxZQUFZOztRQUVsQixNQUFNLE1BQU0sR0FBRyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsTUFBTSxDQUFDLE1BQU0sQ0FDVCxNQUFNLENBQUMsVUFBVSxFQUNqQjtZQUNJLFVBQVUsRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUUsT0FBTyxFQUFHLHNDQUFzQyxFQUFFO1lBQ3pGLGlCQUFpQixFQUFHLEVBQUUsSUFBSSxFQUFHLEdBQUcsRUFBRTtZQUNsQyxrQkFBa0IsRUFBRyxFQUFFLElBQUksRUFBRyxJQUFJLEVBQUUsa0JBQWtCLEVBQUcseUJBQXlCLEVBQUUsT0FBTyxFQUFHLDJCQUEyQixFQUFFO1lBQzNILElBQUksRUFBRyxFQUFFLElBQUksRUFBRyxHQUFHLEVBQUU7U0FDWixDQUNKLENBQUM7UUFDRixNQUFNLENBQUMsTUFBTSxDQUFDO0tBQ2pCO0NBQ0o7Ozs7Ozs7OztBQUVELG1CQUFtQixDQUFDLHNDQUFzQyxDQUFDLEdBQUcsb0NBQW9DLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEthbHR1cmFPYmplY3RNZXRhZGF0YSwgdHlwZXNNYXBwaW5nU3RvcmFnZSB9IGZyb20gJy4uL2thbHR1cmEtb2JqZWN0LWJhc2UnO1xuaW1wb3J0IHsgS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSB9IGZyb20gJy4vS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSc7XG5pbXBvcnQgeyBLYWx0dXJhT2JqZWN0VGFzaywgS2FsdHVyYU9iamVjdFRhc2tBcmdzIH0gZnJvbSAnLi9LYWx0dXJhT2JqZWN0VGFzayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgS2FsdHVyYUV4ZWN1dGVNZXRhZGF0YVhzbHRPYmplY3RUYXNrQXJncyAgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFza0FyZ3Mge1xuICAgIG1ldGFkYXRhUHJvZmlsZUlkPyA6IG51bWJlcjtcblx0bWV0YWRhdGFPYmplY3RUeXBlPyA6IEthbHR1cmFNZXRhZGF0YU9iamVjdFR5cGU7XG5cdHhzbHQ/IDogc3RyaW5nO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBLYWx0dXJhRXhlY3V0ZU1ldGFkYXRhWHNsdE9iamVjdFRhc2sgZXh0ZW5kcyBLYWx0dXJhT2JqZWN0VGFzayB7XG5cbiAgICBtZXRhZGF0YVByb2ZpbGVJZCA6IG51bWJlcjtcblx0bWV0YWRhdGFPYmplY3RUeXBlIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZTtcblx0eHNsdCA6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKGRhdGE/IDogS2FsdHVyYUV4ZWN1dGVNZXRhZGF0YVhzbHRPYmplY3RUYXNrQXJncylcbiAgICB7XG4gICAgICAgIHN1cGVyKGRhdGEpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfZ2V0TWV0YWRhdGEoKSA6IEthbHR1cmFPYmplY3RNZXRhZGF0YVxuICAgIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gc3VwZXIuX2dldE1ldGFkYXRhKCk7XG4gICAgICAgIE9iamVjdC5hc3NpZ24oXG4gICAgICAgICAgICByZXN1bHQucHJvcGVydGllcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvYmplY3RUeXBlIDogeyB0eXBlIDogJ2MnLCBkZWZhdWx0IDogJ0thbHR1cmFFeGVjdXRlTWV0YWRhdGFYc2x0T2JqZWN0VGFzaycgfSxcblx0XHRcdFx0bWV0YWRhdGFQcm9maWxlSWQgOiB7IHR5cGUgOiAnbicgfSxcblx0XHRcdFx0bWV0YWRhdGFPYmplY3RUeXBlIDogeyB0eXBlIDogJ2VzJywgc3ViVHlwZUNvbnN0cnVjdG9yIDogS2FsdHVyYU1ldGFkYXRhT2JqZWN0VHlwZSwgc3ViVHlwZSA6ICdLYWx0dXJhTWV0YWRhdGFPYmplY3RUeXBlJyB9LFxuXHRcdFx0XHR4c2x0IDogeyB0eXBlIDogJ3MnIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59XG5cbnR5cGVzTWFwcGluZ1N0b3JhZ2VbJ0thbHR1cmFFeGVjdXRlTWV0YWRhdGFYc2x0T2JqZWN0VGFzayddID0gS2FsdHVyYUV4ZWN1dGVNZXRhZGF0YVhzbHRPYmplY3RUYXNrOyJdfQ==